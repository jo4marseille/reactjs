import React from 'react'

const SponsorItem = ({sponsor}) => {

  console.log(sponsor)

  const falseData =
    {
      about: "empty",
      company: "empty",
      sports: [],
      phone: "empty",
      isActive: false
    }


  const {about, company, sports, phone, isActive} = sponsor ?? falseData

  return (

    <div className="border-primary rounded m-5">

      <h3 >{company}</h3>

      <p>{about}</p>

    </div>
  )
}

export default SponsorItem
