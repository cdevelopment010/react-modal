
import '../styles/modal.css'
export default function ModalSimple({id, closeModal}) {

    return (
        <div className="modal-container">
            <div className="overlay" onClick={() => closeModal(id)}></div>
            <div className="modal-content">
                <div className="title">
                    <h1>Hello people!</h1>
                    <p onClick={() => closeModal(id)}>X</p>
                </div>
                <div className="content">
                    <p>This is some amazing content.</p>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(id)}>Close</button>
                </div>
            </div>
        </div>
    )
}