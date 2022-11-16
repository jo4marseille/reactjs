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

        <div className='d-flex justify-content-between ' style={{fontFamily: 'Poppins, sans-serif'}} >
            {
              attributes.isActive
                ? <div className='text-white m-3'><strong>Offre valable</strong></div>
                : <div className='text-dark m-3'>L'Offre est cloturée</div>
            }

            <div className='m-3 text-white'>
              {
                dateFormated(attributes.createdAt)
              }
            </div>
        </div>


        <h2 className='text-white'>{attributes.name}</h2>

        <div className='m-3 text-white' >


            <h4>Sports that we support</h4>

            <h2 className=''>{attributes?.sports}</h2>

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

      <div style={{zIndex: "1"}} >
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
