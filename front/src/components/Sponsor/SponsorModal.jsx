import React, { useState } from 'react';
import olympic from '../../img/icon/olympic.png'

const SponsorModal = ({name}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>

        <button type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => handleShow()}>
          Envoyer votre demande
        </button>


        { show &&

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                <img src={olympic} alt="icon" style={{width: '80px'}} />
                Confirmation</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                Votre demande a bien etait envoyée à {name}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>}
      </>
  )
}

export default SponsorModal
