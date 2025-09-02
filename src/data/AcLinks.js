// src/data/AcLinks.js

const projectsLinks = [
  {
    id: 1,
    title: 'BOOK book recommender system - advanced',
    description: 'In addition to the book recommendation system project developed using the Surprise library, there is a login module in the advanced version. You can log in by entering existing user IDs or creating your own ID. You can add books to your own library and display recommendations for these books. Although the collaborative filtering approach is predominantly used, recommendations for the user are presented with a hybrid approach by also taking advantage of author similarity.',
    links:['https://github.com/eylulozatman/bookRecSystemSurprise'],
    thumbnail: process.env.PUBLIC_URL + '/photos/bookrec5.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/bookrec7.png',
      process.env.PUBLIC_URL + '/photos/bookrec1.png', 
      process.env.PUBLIC_URL + '/photos/bookrec2.png',
      process.env.PUBLIC_URL + '/photos/bookrec3.png',
      process.env.PUBLIC_URL + '/photos/bookrec4.png',
      process.env.PUBLIC_URL + '/photos/bookrec5.png',
      process.env.PUBLIC_URL + '/photos/bookrec6.png'
    ]
  },
  {
    id: 2,
    title: 'ReciPie',
    description: 'This project is my university graduation project. Poject aims to develop a user-friendly recipe website that prioritizes personal preferences and offers a rich recipe pool. 1- Our application allows users to log in and out of the system. 2- The system allows users to edit their profile information (name, password, user icon). 3- Users can add products they are allergic to to their profile pages. If a recipe contains a product the user is allergic to, it is displayed in a different color to indicate this. 4- Users can create and save their own recipes in a separate "My Recipe Book" tab. 5- Users can add their favorite recipes to the "My Favorites" tab. 6- Users can rate recipes from 1 to 5. 7- The system categorizes recipes by cuisine (Italian, Turkish, Mexican, etc.). 8- The system categorizes recipes by meal type (breakfast, lunch, dinner, dessert). 9- The system ranks recipes by preparation time. 10- The system ranks recipes by average rating score. 11- Users can report a recipe if they detect any inappropriate ingredients. 12- The system suggests recipes based on the ingredients entered by the user. 13- Users can create and save their own weekly nutrition plan. 14- The system calculates the similarity rate under a recipe according to its content and suggests similar recipes from the dataset we found through -kaggle- ',
    links:['https://github.com/Noxtrah/SE-4910','https://youtu.be/xxoclkhts14'],
    thumbnail: process.env.PUBLIC_URL + '/photos/recipiethumb.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/recipe1.png', 
      process.env.PUBLIC_URL + '/photos/recipe2.png', 
      process.env.PUBLIC_URL + '/photos/recipe3.png'
    ]
  },
  {
    id: 3,
    title: 'İZMİR KIZ LİSESİ MEZUN AĞI (iklmezun.org)',
    description: 'This is a social network project developed to provide a common platform for graduates of Izmir Kız High School. Since Im also an alumni of this high school, developing the site was a pleasure. .Net was used for the backend and React for the frontend. Database and distribution processes were handled using Azure. Active development continues.',
    links:['https://iklmezun.org/'],
    thumbnail: process.env.PUBLIC_URL + '/photos/iklmezun.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/iklmezun.png'
    ]
  },
{
  id: 4,
  title: "Rick and Morty API",
  description: "A project that consumes the Rick and Morty API and displays characters dynamically.",
  links: ["https://eylulozatman.github.io/RickAndMortyAPI/"],
  thumbnail: process.env.PUBLIC_URL + '/photos/rick2.png',
  detailedImages: [
    process.env.PUBLIC_URL + '/photos/rick1.png',
    process.env.PUBLIC_URL + '/photos/rick2.png',
    process.env.PUBLIC_URL + '/photos/rick3.png'
  ]
},
{
  id: 5,
  title: "Personality Test",
  description: "A free test fully compatible with the Enneagram.",
  links: ["https://eylulozatman.github.io/personality-test-static/"],
  thumbnail: process.env.PUBLIC_URL + '/photos/persotest1.png',
  detailedImages: [
    process.env.PUBLIC_URL + '/photos/persotest1.png',
    process.env.PUBLIC_URL + '/photos/persotest2.png'
  ]
}


];

export default projectsLinks;

