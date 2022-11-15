import React, {Fragment} from 'react'
import AthleteModal from './AthleteModal'

const AthleteItem = ({athlete}) => {


  //const {about, company, sports, email, phone, address, isActive, created_date} = sponsor?.[0]
  const isEmpty = (obj) => Object.values(obj).every(x => x.length < 1)

  const dateFormated = date => {

    if(date === undefined) return

    const formated = date.split('T')[0].split('-').reverse().join('/ ')

    return  formated
  }


  const displayData = (

    <Fragment>

        <div className='d-flex justify-content-between'>
            
                <div className='text-success mx-3'>Athlete en recherche de sponsor</div>

            {/* <div className='mx-3'>
              {
                dateFormated(created_date)
              }
            </div> */}
        </div>


        <h2>{athlete[0]?.fields.nom}</h2>

        <div className='mx-3' >
            <h4>{athlete[0]?.fields.sport}</h4>
            <div className="mt-3">
              {
                true &&  <AthleteModal company={"variable"} />
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
