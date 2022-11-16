import card1 from '../assets/AM.jpg';
import card2 from '../assets/comptoir-aime.JPG';
import card3 from '../assets/raja.jpg';
import card4 from '../assets/les-bains.jpg';

const restaurants = [
    {
        "id": 1,
        "name": "AM par Alexandre Mazzia",
        "address": "9 Rue François Rocca, 13008 Marseille",
        "phone": "0491248363",
        "stars": 4.7,
        "website": "https://www.alexandre-mazzia.com/",
        "coordinates": {
            "lat": 43.27013627635408,
            "lng": 5.386239505190779,
        },
        "img": card1
    },
    {
        "id": 2,
        "name": "Le Comptoir Aime",
        "address": "5 Prom. Georges Pompidou, 13008 Marseille",
        "phone": "0496141160",
        "stars": 4.2,
        "website": "https://fr.restaurantguru.com/Le-Comptoir-Marseillais-Marseille",
        "coordinates": {
            "lat": 43.26774536740638,
            "lng": 5.372227951983177,
        },
        "img": card2
    },
    {
        "id": 3,
        "name": "Raja",
        "address": "43 Prom. Georges Pompidou, 13008 Marseille",
        "phone": "0950471242",
        "stars": 4.1,
        "website": "http://www.raja-restaurant-marseille.com/menu-raja-restaurant-indien-pakistanais-marseille-fr.html",
        "coordinates": {
            "lat": 43.265714136696076,
            "lng": 5.373461768132395,
        },
        "img": card3
    },
    {
        "id": 4,
        "name": "Restaurant Les Bains",
        "address": "200 Cor Président John Fitzgerald Kennedy, 13007 Marseille",
        "phone": "0491161921",
        "stars": 4.1,
        "website": "https://www.thefork.com/restaurant/les-bains/436007",
        "coordinates": {
            "lat": 43.26880783032082,
            "lng": 5.368998572291209,
        },
        "img": card4
    },
];

export default restaurants;
