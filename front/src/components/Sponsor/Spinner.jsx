import React from 'react'

const Spinner = () => {
  return (
          <div className="
            column-sponsor
            d-flex justify-content-center
            align-items-center
            text-center"

             >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
  )
}

export default Spinner
