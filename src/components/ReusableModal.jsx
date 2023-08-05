

export default function Reusablemodal({id, content, closeModal}){


    return (
        <div className="modal-container">
            <div className="overlay" onClick={() => closeModal(id)}></div>
            <div className="modal-content">
                {content}
            </div>
        </div>
    )
}