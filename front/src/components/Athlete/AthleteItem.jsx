import React, {Fragment} from 'react'
import AthleteModal from './AthleteModal'

const AthleteItem = ({athlete}) => {


  const displayData = (

    <Fragment>

        <div className='d-flex justify-content-between'>

                <div className='text-success mx-3'>Athlete en recherche de sponsor</div>
        </div>


        <h2>{athlete[0]?.fields.nom}</h2>

        <div className='mx-3' >
            <h4>{athlete[0]?.fields.sport}</h4>
            <div className="mt-3">
              {
                true &&  <AthleteModal name={athlete[0]?.fields.nom} />
              }
            </div>


            <div className='d-flex justify-content-between mt-3'>

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
