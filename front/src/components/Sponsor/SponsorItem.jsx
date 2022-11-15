import React, {Fragment} from 'react'
import SponsorModal from './SponsorModal'

const SponsorItem = ({sponsor}) => {

  const {attributes} = sponsor?.[0]

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
              attributes.isActive
                ? <div className='text-success mx-3'>Offre valable</div>
                : <div className='text-danger mx-3'>L'Offre est cloturée</div>
            }

            <div className='mx-3'>
              {
                dateFormated(attributes.createdAt)
              }
            </div>
        </div>


        <h2>{attributes.name}</h2>

        <div className='mx-3' >


            <h4>Sports that we support</h4>

            <h6>{attributes?.sports}</h6>

            <div className="mt-3">
              {
                attributes?.isActive &&  <SponsorModal name={attributes?.name} />
              }
            </div>


            <div className='d-flex justify-content-between mt-3'>
              <p>{attributes?.email}</p>
              <p>{attributes?.phone}</p>
            </div>
            <div>
              <p>{attributes?.adress}</p>
            </div>
        </div>
    </Fragment>

  )

  return (

      <div >
      {
        isEmpty(sponsor[0]?.attributes)
        ?
        null
        :
        displayData
      }

    </div>

  )
}

export default SponsorItem
