import { useState } from 'react'
import './index.css';
import ModalSimple from './components/ModalSimple'
import Reusablemodal from './components/ReusableModal';

function App() {
  const [openModal, setOpenModal] = useState(null); 
  const [currentModalData,setCurrentModalData] = useState(null)

  const openModalById = (id) => {
    setOpenModal(id);
    if (id === 'simpleModal') return;
    const data = modalData.filter(x => x.id === id)[0];
    setCurrentModalData(data);
  }
  const closeModalById = (id) => {
    setOpenModal(null);
  }

  const modalData = [
    {
      id: 'reusable-modal-1',
      content: <>
        <div className='title'>
          <h3>Modal #2</h3>
          <p onClick={() => closeModalById('reusable-modal-1')}>X</p>
        </div>
        <div className="content">
            <p>Make sure you leave a like if you are enjoying the video.</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModalById('reusable-modal-1')}>Close</button>
          <button onClick={() => closeModalById('reusable-modal-1')}>Some other btn...</button>
        </div>
      </>
    },
    {
      id: 'reusable-modal-2',
      content: <>
        <div className='title'>
          <h3>Modal #3</h3>
          <p onClick={() => closeModalById('reusable-modal-2')}>X</p>
        </div>
        <div className="content">
            <p>Subscribing to the channel increases your chances of winning the lottery.</p>
            <p>(This is a joke...)</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModalById('reusable-modal-2')}>Close</button>
        </div>
      </>
    },
  ]

  return (
    <div className='app-container'>
      <h1>React Modals</h1>
      <h3>Simple modal</h3>
      <p>
        With a simple modal the jsx will be in the modal component. The down side of this is that if you need multiple modals then you need
        multiple components. 
      </p>
      <button onClick={() => {openModalById("simpleModal")}}>Open simple modal</button>
      {openModal== "simpleModal" && <ModalSimple id="simpleModal" closeModal={closeModalById}/> }



      <h3>Reusable Modal</h3>
      <p>
        With a reusable modal, you can create an array of objects in the parent which contain the elements of the modal. 
        This is good for keeping the modal component tidy, but if there are a lot of modals the array can get a bit messy in the parent. 
      </p>
      <button onClick={() => {openModalById("reusable-modal-1")}}>Open reusable modal #1</button>
      <button onClick={() => {openModalById("reusable-modal-2")}}>Open reusable modal #2</button>
      {openModal!== "simpleModal" && openModal !== null && <Reusablemodal id={currentModalData.id} content={currentModalData.content}  closeModal={closeModalById}/> }
    </div>
  )
}

export default App
