import React, {Fragment} from 'react'
import SponsorModal from './SponsorModal'

const SponsorItem = ({sponsor}) => {


  const {about, company, sports, email, phone, address, isActive, created_date} = sponsor?.[0]

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
              isActive
                ? <div className='text-success mx-3'>Offre valable</div>
                : <div className='text-danger mx-3'>L'Offre est cloturée</div>
            }

            <div className='mx-3'>
              {
                dateFormated(created_date)
              }
            </div>
        </div>


        <h2>{company}</h2>

        <div className='mx-3' >
            <h4>About us</h4>
            <p className='text-start'>{about}</p>

            <h4>Sports that we support</h4>
            <ul className='list-group'>
              {
                sports.map((sport, index) => {
                  return (
                    <li key={index} className='list-group-item'>{sport}</li>
                  )
                })
              }
            </ul>

            <div className="mt-3">
              {
                isActive &&  <SponsorModal company={company} />
              }
            </div>


            <div className='d-flex justify-content-between mt-3'>
              <p>{email}</p>
              <p>{phone}</p>
            </div>
            <div>
              <p>{address}</p>
            </div>
        </div>
    </Fragment>

  )

  return (

      <div>
      {
        isEmpty(sponsor[0])
        ?
        null
        :
        displayData
      }

    </div>

  )
}

export default SponsorItem
