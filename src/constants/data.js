import images from './images';

const weekday = [
  {
    dish: 'Traditional homemade Couscous',
    price: '$33',
    day: 'Monday',
  },
  {
    dish: 'Coq au vin de Gaillac',
    price: '$29',
    day: 'Tuesday',
  },
  {
    dish: 'Cassoulet de Renee',
    price: '$34',
    day: 'Wednesday',
  },
  {
    dish: 'Braised pork shank a la moutarde',
    price: '$31',
    day: 'Thursday',
  },
  {
    dish: 'Loup de mer a la Provencale',
    price: '$33',
    day: 'Friday',
  },
];

const weekend = [
  {
    dish: 'Lamb shank ratatouille',
    price: '$32',
    day: 'Saturday',
  },
  {
    dish: "Bouillabaisse de Baud",
    price: '$33',
    day: 'Sunday',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { weekday, weekend, awards };
