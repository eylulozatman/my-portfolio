const projectsData = [
  {
    id: 1,
    title: 'FEMBERRY',
    description: 'Femberry is a social media type website developed using Django technology. Users have the opportunity to access various functions after registering.It has features such as sharing posts as text or images, liking posts.Users can also search each others usernames with the search bar and add friends. It is your choice to accept or reject a request. You can also create a survey and see the results of the survey together with the answers given by other users. For details of the project, see the github link and the youtube demo recording',
    thumbnail: process.env.PUBLIC_URL + '/photos/femberrythumb.png',
    links:['https://github.com/eylulozatman/femberry','https://youtu.be/uAohHlBT5yA'],
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/fem1.png', 
      process.env.PUBLIC_URL + '/photos/fem3.png', 
      process.env.PUBLIC_URL + '/photos/fem2.png'
    ]
  },
  {
    id: 2,
    title: 'ReciPie',
    description: 'This project is my university graduation project. Poject aims to develop a user-friendly recipe website that prioritizes personal preferences and offers a rich recipe pool. Users can create and save their own recipes, add favorites, and interact with other users. It has advanced search and filtering. Similar suggestions are provided for each recipe with an intelligent system. The backend will be created with Java Spring and Python (suggestion system), and the frontend will be created with HTML, CSS, and JavaScript. The project uses Azure SQL - Azure storage for data storage.',
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
    title: 'Rick and Morty API',
    description: 'This project is an improved example of https://rickandmortyapi.com/. It allows to build armaa according to locations and episodes and also filters according to gender.',
    links:['https://github.com/eylulozatman/RickAndMortyAPI','https://eylulozatman.github.io/RickAndMortyAPI/'],
    thumbnail: process.env.PUBLIC_URL + '/photos/rick1.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/rick1.png', 
      process.env.PUBLIC_URL + '/photos/rick2.png',
      process.env.PUBLIC_URL + '/photos/rick3.png'
    ]
   
  },
  {
    id: 4,
    title: 'Blood Donation Project',
    description: 'This project aims to enable users to donate blood and to deliver blood needs to hospitals correctly. There are 2 separate services, Blood Request Service (can be thought of as a hospital) writes the location, blood type, how many tubes are needed and other necessary information. The second service is Donor Service, in this service both new donor records are created and registered users can donate blood. The donations made are stored in the database and the Blood Request Service receives each new request with a scheduler function that listens every 3 minutes. If there is blood in the blood bank that meets the appropriate criteria, a message is returned indicating that the request sent to the hospital has been fulfilled. Flask was used as technology in this project.',
    links:['https://github.com/eylulozatman/DonorService','https://github.com/eylulozatman/BloodRequestService'],
    thumbnail: process.env.PUBLIC_URL + '/photos/blood4.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/blood1.png',
      process.env.PUBLIC_URL + '/photos/blood2.png',
      process.env.PUBLIC_URL + '/photos/blood3.png',
      process.env.PUBLIC_URL + '/photos/blood4.png'
    ]
  },
  {
    id: 5,
    title: 'Avis clone',
    description: 'This project is a clone project of Avis.com. Avis is a car rental service. You can register to the system. First, the locations where customers will pick up and return the vehicles are determined, then you set a date and time. Then the available cars in your pickup office are displayed. You can also filter the vehicles automatically/manually and sort them by price.',
    links:['https://github.com/eylulozatman/AvisProject','http://aviseylul2.azurewebsites.net'],
    thumbnail: process.env.PUBLIC_URL + '/photos/avisthumb.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/avis1.png', 
      process.env.PUBLIC_URL + '/photos/avis3.png',
      process.env.PUBLIC_URL + '/photos/avis4.png'
    ]
  },
  {
    id: 6,
    title: 'White Nights Book Club',
    description: 'This project aims to allow users to write reviews about the books they read.In my project, which generally consists of 5 sections, there is a welcome page, a registration and login page, a home page where we can see the book reviews of all users, a detail page where we can access the book details and read the entire review, a user profile page where we can visit the user profile and only show the book reviews of that user. I hope you find this work, which aims to increase the interaction of people who read books and are interested in writing, useful. Don`t forget to like the user reviews you like :) Flask and firebase technologies were used in the project.',
    links:['https://github.com/eylulozatman/whitenightsbookclub'],
    thumbnail: process.env.PUBLIC_URL + '/photos/wnbc1.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/wnbc.png',
      process.env.PUBLIC_URL + '/photos/wnbc1.1.png',
      process.env.PUBLIC_URL + '/photos/wnbc1.png', 
      process.env.PUBLIC_URL + '/photos/wnbc3.png',
      process.env.PUBLIC_URL + '/photos/wnbc4.png'
    ]
  },
  {
    id: 7,
    title: 'Sahibinden clone',
    description: 'This project is a small-scale clone project of Sahibinden.com developed using flask. Products are displayed in various categories, more detailed information can be obtained from the detail page that appears when you click on the products. The category bar on the left is active and brings products in the category you want. You can also search for keywords from the search bar.',
    links:['https://github.com/eylulozatman/sahibindenFlask','https://flasksahibinden.azurewebsites.net'],
    thumbnail: process.env.PUBLIC_URL + '/photos/sahib.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/sahib.png', 
      process.env.PUBLIC_URL + '/photos/sahib1.png',
      process.env.PUBLIC_URL + '/photos/sahib2.png', 
      process.env.PUBLIC_URL + '/photos/sahib3.png'
    ]
  },
  {
    id: 8,
    title: 'TDK word Search',
    description: 'This project was developed to filter Turkish words briefly. After any keyword is written, for example, words starting with "n", containing "n" and ending with "n" are listed. First of all, you will need this command, then you can use this api and make improvements with npm install tdk-all-api --save.e.',
    links:['https://github.com/eylulozatman/TDKwordSearch'],
    thumbnail: process.env.PUBLIC_URL + '/photos/tdk3.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/tdk1.png', 
      process.env.PUBLIC_URL + '/photos/tdk2.png',
      process.env.PUBLIC_URL + '/photos/tdk3.png'
    ]
      
  },
  {
    id: 9,
    title: 'Currency Converter',
    description: 'This project is a currency program written with react. It contains 3 types of currency (usd, try and euro). I used this call https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json to get the currency rates, but it would be useful to check if these rates are up to date. A simple but useful project that converts 3 currencies to each other.',
    links:['https://github.com/eylulozatman/currency-converter.git', 'https://eylulozatman.github.io/currency-converter/'],
    thumbnail: process.env.PUBLIC_URL + '/photos/exch1.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/exch4.png', 
      process.env.PUBLIC_URL + '/photos/exch2.png',
      process.env.PUBLIC_URL + '/photos/exch3.png'
    ]
      
  },
  {
    id: 10,
    title: 'Weather Forcast for all provinces of Turkey',
    description: 'Detailed weather forecast project for provinces in Turkey. "https://turkiyeapi.dev/" api was used to get province names in Turkey, and "Weather API" was used to get weather information. The application was written with flask. The project generally consists of 2 parts, after selecting a province on the first page, the 7-day weather forecast for that province is displayed, and when the desired day is clicked, a more detailed hourly weather forecast for that day is given.',
    links:['https://github.com/eylulozatman/weather-app-flask' , "weather-app-eylul-affuf6f9cxaqgehm.canadacentral-01.azurewebsites.net"],
    thumbnail: process.env.PUBLIC_URL + '/photos/weather1.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/weather2.png', 
      process.env.PUBLIC_URL + '/photos/weather3.png',
      process.env.PUBLIC_URL + '/photos/weather4.png'
    ]
  },
  {
    id: 11,
    title: 'Auto Tic-Tac-Toe',
    description: 'It is a tic-tac-toe game written in C++, where both sides are "computers". You can review the codes in the github repo at the link below:',
    links:['https://github.com/eylulozatman/tictactoe_auto'],
    thumbnail: process.env.PUBLIC_URL + '/photos/tictac.png',
    detailedImages: [
      process.env.PUBLIC_URL + '/photos/tictactoe.png'
    ]
  }
];



export default projectsData;
