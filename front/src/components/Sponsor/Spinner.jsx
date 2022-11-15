import React from 'react'

const Spinner = () => {
  return (
          <div className="column-sponsor">


            <div className='d-flex justify-content-center
            align-items-center
            text-center' style={{marginTop: '240px'}} >

              <div className="spinner-border text-primary" style={{width: '64px', height:'64px'}} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <div className="spinner-border text-danger " style={{width: '64px', height:'64px'}}  role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <div className="spinner-border text-dark " style={{width: '64px', height:'64px'}}  role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>

            <div className='d-flex justify-content-center
            align-items-center
            text-center'>
              <div className="spinner-border text-warning " style={{width: '64px', height:'64px'}}  role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <div className="spinner-border text-success " style={{width: '64px', height:'64px'}}  role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>

          </div>
  )
}

export default Spinner
