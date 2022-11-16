import React from 'react'

const Footer = () => {

  function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }

   const images = importAll(require.context('../img/footer', false, /\.(png|jpe?g|svg)$/));


return (
    <footer className="footer">
  <a href="https://www.departement13.fr/" rel="noreferrer" target="_blank">
    <img src={images["d13.png"]} alt="d13" />
  </a>
  <a href="https://www.voyage-prive.com" rel="noreferrer" target="_blank">
    <img src={images["voyageprive.png"]} alt="voyage privé" />
  </a>
  <a href="https://inco-group.co/" rel="noreferrer" target="_blank">
    <img className="smaller" src={images["inco.png"]} alt="inco" />
  </a>
  <a href="https://www.myprovence.fr/" rel="noreferrer" target="_blank">
    <img src={images["provencetourisme.png"]}alt="my provence" />
  </a>
  <a href="https://code4marseille.fr/" rel="noreferrer" target="_blank">
    <img src={images["code4marseille.png"]} alt="code4marseille" />
  </a>

  <a href="https://aws.amazon.com/fr/" rel="noreferrer" target="_blank">
    <img src={images["AWS.png"]} alt="aws" />
  </a>
</footer>

  )
}

export default Footer
