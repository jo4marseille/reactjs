import React from "react";
import Cards from "../Card";
import data from "../../data.json";

function AllCardLodgings() {
    return(<div className="componentBg">
    {data.hotels.map((e) => {

<<<<<<< HEAD
        return(
            
            <Cards name={e.name} description={e.description} lien= {e.lien} image={e.image}/>
        )
    }
    )}
        </div>);
=======


        <div class="box">
        <img src="\img\logos\logoHotel.png" alt='logo hotel' id="logo"/>
            <div class="container">
                 <div class="row">

                         
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                       
                            <div className="box-part text-center">
                                
                                <i className="fa fa-pinterest-p fa-3x" aria-hidden="true"></i>
                                
                                <div className="title">
                                    <h4>Hébergement </h4>
                                </div>
                                
                                <div className="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                                
                                <a href="#">Learn More</a>
                                
                             </div>
                        </div>	 
                        
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                       
                            <div className="box-part text-center">
                                
                                <i className="fa fa-google-plus fa-3x" aria-hidden="true"></i>
                            
                                <div className="title">
                                    <h4>Hébergement2</h4>
                                </div>
                                
                                <div className="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                                
                                <a href="#">Learn More</a>
                                
                             </div>
                        </div>	 
                        
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                       
                            <div className="box-part text-center">
                                
                                <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                                
                                <div className="title">
                                    <h4>Hébergement3</h4>
                                </div>
                                
                                <div className="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                                
                                <a href="#">Learn More</a>
                                
                             </div>
                        </div>
                
                </div>		
            </div>
        </div>
        
        
            </div>);
>>>>>>> c1111ab51f05a49eb76cb769e26f6799b75a5a24
    
}
export default AllCardLodgings