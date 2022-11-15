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
            {
              true
                ? <div className='text-success mx-3'>Offre valable</div>
                : <div className='text-danger mx-3'>L'Offre est cloturée</div>
            }

            {/* <div className='mx-3'>
              {
                dateFormated(created_date)
              }
            </div> */}
        </div>


        <h2>{"titre"}</h2>

        <div className='mx-3' >
            <h4>About us</h4>
            <p className='text-start'>description variable</p>

         

            <div className="mt-3">
              {
                true &&  <AthleteModal company={"variable"} />
              }
            </div>


            <div className='d-flex justify-content-between mt-3'>
              <p>{"name"}</p>
              <p>{"name"}</p>
            </div>
            <div>
              <p>{"other information"}</p>
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
