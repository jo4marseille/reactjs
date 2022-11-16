import React from "react";
import "../Css/Home.css";
import Navig from "../Components/Navig";
import $ from 'jquery';


$(document).ready(function() {

  $('.counter').each(function () {
$(this).prop('Counter',0).animate({
  Counter: $(this).text()
}, {
  duration: 4000,
  easing: 'swing',
  step: function (now) {
      $(this).text(Math.ceil(now));
  }
});
});

});  


function Home() {
  return ( 
  <>
  <div class="container background-slider">
    <div class="row h-100">
      <div class="col-12 my-auto title-background">
        <p>Devenez éco-citoyen</p>
        <p> & remportez votre maillot</p>
      </div>
    </div>
  </div>

 

  <div class="container stat-container">
    
    <div class="row">

	<div class="four col-md-3">
		<div class="counter-box colored-1">
			<i class="fa fa-thumbs-o-up"></i>
			<span class="counter">9147</span>
			<p>Number of trips</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box colored-2">
			<i class="fa fa-group"></i>
			<span class="counter">3275</span>
			<p>Participants</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box colored-3">
			<i class="fa  fa-shopping-cart"></i>
			<span class="counter">14289</span>
			<p>Olympions collected</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box colored-4">
			<i class="fa  fa-user"></i>
			<span class="counter">1563</span>
			<p>Saved Trees</p>
		</div>
	</div>
  </div>	
</div>








 

  <div class="container icon-bloc">
    <div class="row h-100 icon-row">
      <div class="col-6 my-auto icon-bloc-1">
        <h1 class="h1-blue">Comment gagner mes Olympions ?</h1>
        <div class="d-flex flex-row ">
          <div class="bi bi-bicycle icon p-2"></div>
          <div class="p-2 my-auto icon-text">Je choisi mon éco transport.</div>
        </div>
        <div class="d-flex flex-row ">
          <div class="bi bi-phone-vibrate icon p-2"></div>
          <div class="p-2 my-auto icon-text">Je flash mon code.</div>
        </div>
        <div class="d-flex flex-row ">
          <div class="bi bi-person-check-fill icon p-2"></div>
          <div class="p-2 my-auto icon-text">Je me connecte pour collecter mes Olympions.</div>
        </div>
        <div class="d-flex flex-row ">
          <div class="bi bi-coin icon p-2"></div>
          <div class="p-2 my-auto icon-text">Je convertis mes Olympions en cadeaux.</div>
        </div>
      </div>
      <div class="col-6 icon-bloc-2">
        <div class="d-flex flex-row ">
      </div>
    </div>
    </div>
  </div>


  <div class="container icon-bloc">
    <div class="row h-100 icon-row-2">

      <div class="col-6 icon-bloc-3">
        
      </div>

      <div class="col-6 my-auto icon-bloc-4">
        <h1 class="h1-orange">Quels transports puis-je utiliser ?</h1>
        <div class="d-flex flex-row ">
          <p class="bloc-transport">Notre quotidien est fait de déplacements : pour aller et revenir du travail, rejoindre des amis, se rendre à la salle de sport, etc. Ce qui n’est pas sans conséquence sur notre santé et le changement climatique… Saviez-vous par exemple que les transports sont aujourd’hui responsables de 30%1 des émissions de gaz à effet de serre en France ? Heureusement, il existe des moyens de transport écologiques qui peuvent améliorer notre empreinte carbone. Passage en revue de ces modes de transport écoresponsables. </p>
        </div>
        <div class="d-flex flex-row icon-transport">
          <div class="bi bi-bicycle icon-2 icon-velo p-2"></div>
          <div class="bi bi bi-scooter icon-2 p-2"></div>
          <div class="bi bi-bus-front-fill icon-2 p-2"></div>
        </div>
      </div>
      

    </div>
  </div>


  </>
  );
}

export default Home;









