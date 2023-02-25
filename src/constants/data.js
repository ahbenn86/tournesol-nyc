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

const brunch = [
  {
    header: 'BRUNCH DISHES',
  },
  {
    dish: 'TWO EGGS ANY STYLE with fries and salad',
    price: '$12',
    add: '',
  },
  {
    dish: 'EGGS BENEDICTS with French fries and hollandaise sauce',
    price: '$13.50',
    add: '',
  },
  {
    dish: 'EGGS BENEDICTS ROYAL with salmon, French fries, and hollandaise sauce',
    price: '$14.50',
    add: '',
  },
  {
    dish: 'EGGS FLORENTINE with spinach, French fries, and hollandaise sauce',
    price: '$13',
    add: '',
  },
  {
    dish: 'TARTIFLETTE TOURNESOL with salad',
    price: '$13',
    add: '',
  },
  {
    dish: 'SMOKED SALMON Creme fraiche',
    price: '$14',
    add: '',
  },
  {
    dish: 'SCRAMBLED EGGS OR OMELETTE with French fries and green salad',
    price: '$12',
    add: 'Add $1 for cheese or tomato, Add $2 for mushrooms, Add $4 for shrimps or salmon',
  },
  {
    dish: 'PANCAKES with Fruits & Maple syrup',
    price: '$12.50',
    add: '',
  },
  {
    dish: 'FRENCH TOAST with fruits',
    price: '$13',
    add: '',
  },
  {
    dish: 'GRANOLA with yoghurt and fruits',
    price: '$9.50',
    add: '',
  },
  {
    dish: 'HANGER STEAK with French fries and salad',
    price: '$27',
    add: '',
  },
  {
    dish: 'FISH OF THE DAY with vegetables',
    price: '$17',
    add: '',
  },
  {
    header: 'OUR CLASSICS',
  },
  {
    dish: 'CROQUE MONSIEUR with salad',
    price: '$11.50',
    add: 'Add $1 for an egg',
  },
  {
    dish: 'HAMBURGER TOURNESOL with french fries and salad',
    price: '$14.50',
    add: 'Add $1 for cheese, Add $7 for foie gras',
  },
  {
    dish: 'PANINIS with green salad',
    price: '$13',
    add: '',
  },
  {
    dish: 'HAM AND CHEESE CROISSANT with green salad',
    price: '$11',
    add: '',
  },
  {
    dish: 'TOURNESOL BLT with green salad',
    price: '$12',
    add: '',
  },
  {
    dish: 'FRENCH ONION SOUP',
    price: '$9.50',
    add: '',
  },
  {
    dish: 'SOUP OF THE DAY',
    price: '$8',
    add: '',
  },
  {
    dish: 'HOMEMADE TERRINE OF FOIE GRAS',
    price: '$16',
    add: '',
  },
  {
    dish: 'QUICHE LORRAINE with bacon',
    price: '$12',
    add: '',
  },
];

const lunch = [
  {
    header: 'OUR CLASSICS',
  },
  {
    dish: 'SOUP OF THE DAY',
    price: '$8',
    add: '',
  },
  {
    dish: 'TWO EGGS ANY STYLE with fries and salad',
    price: '$12',
    add: '',
  },
  {
    dish: 'SAUTEED SNAILS with tarragon',
    price: '$13',
    add: '',
  },
  {
    dish: 'OMELETTE Three Eggs with fries and salad',
    price: '$13',
    add: 'Add $1 for cheese or tomato, Add $2 for mushrooms, Add $4 for shrimps or salmon',
  },
  {
    dish: 'TARTIFLETTE TOURNESOL with salad',
    price: '$13',
    add: '',
  },
  {
    dish: 'MUSSELS MARINIERES with french fries',
    price: '$17.50',
    add: '',
  },
  {
    dish: 'FRENCH ONION SOUP',
    price: '$9.50',
    add: '',
  },
  {
    dish: 'HOMEMADE TERRINE DE FOIE GRAS',
    price: '$16',
    add: '',
  },
  {
    dish: 'QUICHE LORRAINE with bacon',
    price: '$12',
    add: '',
  },
  {
    dish: 'GNOCCHIS with Kielbasa sausage',
    price: '$14.50',
    add: '',
  },
  {
    dish: 'BLANQUETTE DE VOLAILLE with rice',
    price: '$17',
    add: '',
  },
  {
    dish: 'FISH of the day',
    price: '$18',
    add: '',
  },
  {
    dish: 'ROASTED CHICKEN with puree',
    price: '$16.50',
    add: '',
  },
  {
    dish: 'HANGER STEAK with French fries and salad',
    price: '$27',
    add: '',
  },
  {
    dish: 'PASTA of the day',
    price: '$15',
    add: '',
  },
  {
    header: 'SANDWICHES',
  },
  {
    dish: 'CROQUE MONSIEUR with salad',
    price: '$11.50',
    add: 'Add $1 for an egg',
  },
  {
    dish: 'HAMBURGER TOURNESOL with french fries and salad',
    price: '$14.50',
    add: 'Add $1 for cheese, Add $7 for foie gras',
  },
  {
    dish: 'PANINI with green salad',
    price: '$13',
    add: '',
  },
  {
    dish: 'HAM AND CHEESE CROISSANT',
    price: '$11',
    add: '',
  },
  {
    dish: 'TOURNESOL BLT With green salad',
    price: '$12',
    add: '',
  },
]
const dinner = [
  {
    header: 'Dinner Appetizers',
  },
  {
    dish: 'SALAD OF MIXED FIELD GREENS',
    price: '$8',
    add: 'Salade verte',
  },
  {
    dish: 'FRENCH ONION SOUP',
    price: '$9.50',
    add: 'Soupe a l’oignon gratinée',
  },
  {
    dish: 'ENDIVE SALAD WITH BLUE CHEESE, PEARS AND WALNUTS',
    price: '$12.50',
    add: 'Salade d’endives au bleu d’auvergne poires et noix',
  },
  {
    dish: 'GOAT CHEESE CROQUETTE WITH BEET AND FRISEE SALAD',
    price: '$13.50',
    add: 'Croquettes de fromage de chevre, betteraves et salade frisee',
  },
  {
    dish: 'SAUTEED SNAILS WITH TARAGON SAUCE',
    price: '$14.50',
    add: 'Escargots sautés a l’estragon',
  },
  {
    dish: 'GRILLED SHRIMP WITH CHORIZO, WHITE BEANS ,FENNEL AND ARUGULA',
    price: '$15',
    add: 'Crevettes grillees, chorizo, fenouil, haricots blancs et arugula',
  },
  {
    dish: 'SALMON TARTARE WITH AVOCADO AND GRAPEFRUIT',
    price: '$15.50',
    add: 'Escargots sautés a l’estragon',
  },
  {
    dish: 'HOMEMADE TERRINE OF DUCK LIVER',
    price: '$16.50',
    add: 'Terrine de foie gras "maison"',
  },
  {
    header: 'Dinner Main Courses',
  },
  {
    dish: 'MUSSELS MARINIERES WITH FRENCH FRIES',
    price: '$19.50',
    add: 'Moules marinieres avec frites',
  },
  {
    dish: 'GRILLED CHICKEN WITH GARLIC',
    price: '$21',
    add: 'Poulet grille a l’ail de Lautrec',
  },
  {
    dish: 'PAN SEARED SKATE L’ARRABIATA AND POMME ANNA',
    price: '$22',
    add: 'Filet de raie poêlée a l’arrabiata, pomme Anna',
  },
  {
    dish: 'SEARED TROUT A LA MEUNIERE',
    price: '$24',
    add: 'Truite poêlée a la meuniere',
  },
  {
    dish: 'ROASTED HAKE WITH ASPARAGUS AND GASPACHO',
    price: '$25',
    add: 'Merlu aux asperges et gaspacho',
  },
  {
    dish: 'BEEF BOURGUIGNON WITH FETTUCCINI PASTA',
    price: '$28',
    add: 'Bœuf Bourguignon et fettuccinies',
  },
  {
    dish: 'HANGER STEAK WITH FRENCH FRIES',
    price: '$31',
    add: 'Steak frites au poivre ou a la bearnaise',
  },
  {
    dish: 'DUCK BREAST WITH CELERY PUREE AND HONEY SAUCE',
    price: '$32',
    add: 'Magret de canard, puree de celeri et sauce au miel',
  },
];

const extras = [
  {
    header: 'SALADS',
  },
  {
    dish: 'MESCLUN SALAD, French vinaigrette',
    price: '$8',
    add: '',
  },
  {
    dish: 'NICOISE SALAD, with tuna and anchovies',
    price: '$14',
    add: '',
  },
  {
    dish: 'GRILLED SHRIMPS with arugula and mango',
    price: '$14.50',
    add: '',
  },
  {
    dish: 'ENDIVES, with blue cheese, pears and walnuts',
    price: '$12.50',
    add: '',
  },
  {
    dish: 'CEASAR SALAD',
    price: '$11.50',
    add: 'Add $4 for chicken or shrimps',
  },
  {
    dish: 'FRISEE AUX LARDONS with poached egg',
    price: '$12.50',
    add: '',
  },
  {
    dish: 'CHICKEN LIVER MOUSSE with salad',
    price: '$13',
    add: '',
  },
  {
    header: 'SIDES',
  },
  {
    dish: 'French fries',
    price: '$7',
    add: '',
  },
  {
    dish: 'Mushrooms',
    price: '$7',
    add: '',
  },
  {
    dish: 'Garlic spinach',
    price: '$7',
    add: '',
  },
  {
    dish: 'Ratatouille',
    price: '$7',
    add: '',
  },
  {
    dish: 'Bacon',
    price: '$7',
    add: '',
  },
  {
    dish: 'Breakfast sausage',
    price: '$7',
    add: '',
  },
  {
    header: 'DESERTS',
  },
  {
    dish: 'Bread Pudding',
    price: '$8',
    add: '',
  },
  {
    dish: 'Nougat glacé',
    price: '$8',
    add: '',
  },
  {
    dish: 'Mousse au chocolat',
    price: '$8',
    add: '',
  },
  {
    dish: 'Fresh fruit Plate',
    price: '$8',
    add: '',
  },
  {
    dish: 'Creme brulee',
    price: '$8',
    add: '',
  },
]
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


export default { weekday, weekend, awards, brunch, lunch, dinner, extras };
