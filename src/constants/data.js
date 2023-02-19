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
    imgUrl: images.award01,
    title: 'New York Times',
    subtitle: 'Like a flower poking through the gritty concrete near the mouth of the queens-midtown tunnel, Tournesol, is a spray of brightness on a field of gray.',
  },
  {
    imgUrl: images.award02,
    title: 'CitySearch',
    subtitle: 'Tournesol brings a left-bank flair just this side of the East River.',
  },
  {
    imgUrl: images.award03,
    title: 'The Village Voice',
    subtitle: 'A fascinating French wine list is just one of the lures that might draw you, fish-like, to this neighborhood bistro.',
  },
  {
    imgUrl: images.award04,
    title: 'Time Out New York',
    subtitle: 'Locals can get tables again at this terrific and affordable bistro.',
  },
];

export default { weekday, weekend, awards };
