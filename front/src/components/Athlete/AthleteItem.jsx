import React, {Fragment} from 'react'
import AthleteModal from './AthleteModal'

const AthleteItem = ({athlete}) => {

  console.log(athlete)

  const displayData = (

    <Fragment>

        <div className='d-flex justify-content-between' style={{zIndex: "1"}}>

            <div className='text-success mx-3'>Athlete en recherche de sponsor</div>
        </div>


        <h2>{athlete[0]?.attributes.Name}</h2>

        <div className='mx-3' >
             <h4>{athlete[0]?.attributes.sports}</h4>

              <div className='text-end m-3'>
                  <p>{athlete[0]?.attributes.email}</p>
              </div>

              <div className="mt-3">
                {
                  true &&  <AthleteModal name={athlete[0]?.attributes.Name} />
                }
              </div>

             <div>
          </div>
        </div>
    </Fragment>

  )

  return (

      <div >
      {
        displayData
      }

    </div>

  )
}

export default AthleteItem
