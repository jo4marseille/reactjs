import './cards.css';

import { useSelector } from 'react-redux';

const Cards = () => {
    const restaurantsList = useSelector((state) => state.restaurants.restaurants);

    if (restaurantsList === null) {
        return (
            <div className="empty-list">
                <p>
                    Veuillez renseigner votre point de départ et d'arrivée pour obtenir les meilleures
                    suggestions de restaurants locaux !
                </p>
            </div>
        )
    }
    return (
        <div className="cards">

            {restaurantsList.map((item) => (
                <div className="card" key={item.id}>
                    <div className="carte">
                        <img src={item.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <div className="card-text">
                                <p>{item.address}</p>
                                <a href={`tel:${item.phone}`}>tel: {item.phone}</a>
                                <p>ouvert</p>
                                <p>Avis {item.stars}/5</p>
                            </div>
                            <a href={item.website} target="_blank" rel="noreferrer"  className="primary">site officiel</a>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Cards;
