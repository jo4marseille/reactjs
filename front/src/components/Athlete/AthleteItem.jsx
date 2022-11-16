import React, {Fragment} from 'react'
import AthleteModal from './AthleteModal'

const AthleteItem = ({athlete}) => {

  const isEmpty = (obj) => Object.values(obj).every(x => x.length < 1)

  const displayData = (

    <Fragment>

        <div className='d-flex justify-content-between' style={{zIndex: "1"}}>

            <div className='text-white m-3'>Athlete en recherche de sponsor</div>

            <div className='m-3 text-white'>
                  <p>{athlete[0]?.attributes.email}</p>
              </div>
        </div>


        <h2 className='text-white'>{athlete[0]?.attributes.Name}</h2>

        <div className='mx-3 text-white' >
             <h4>{athlete[0]?.attributes.sports}</h4>


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
      { isEmpty(athlete)
        ? null
        :displayData
      }

    </div>

  )
}

export default AthleteItem
