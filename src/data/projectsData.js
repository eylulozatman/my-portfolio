// src/data/projectsData.js
const projectsData = [
    {
      id: 1,
      title: 'FEMBERRY',
      description: 'Femberry is a social media type website developed using Django technology. Users have the opportunity to access various functions after registering.It has features such as sharing posts as text or images, liking posts.Users can also search each others usernames with the search bar and add friends. It is your choice to accept or reject a request. You can also create a survey and see the results of the survey together with the answers given by other users. For details of the project, see the github link and the youtube demo recording',
      thumbnail: '/photos/femberrythumb.png',
      links:['https://github.com/eylulozatman/femberry','https://youtu.be/uAohHlBT5yA'],
      detailedImages: ['/photos/fem1.png', '/photos/fem3.png', '/photos/fem2.png']
    },
    {
      id: 2,
      title: 'ReciPie',
      description: 'This project aims to develop a user-friendly recipe website that prioritizes personal preferences and offers a rich recipe pool. Users can create and save their own recipes, add favorites, and interact with other users. It has advanced search and filtering. Similar suggestions are provided for each recipe with an intelligent system. The backend will be created with Java Spring and Python (suggestion system), and the frontend will be created with HTML, CSS, and JavaScript. The project uses Azure SQL - Azure storage for data storage.',
      links:['https://github.com/Noxtrah/SE-4910','https://youtu.be/xxoclkhts14'],
      thumbnail: '/photos/recipiethumb.png',
      detailedImages: ['/photos/recipe1.png', '/photos/recipe2.png', '/photos/recipe3.png']
    },
    {
      id: 3,
      title: 'TDK word Search',
      description: 'This project was developed to filter Turkish words briefly. After any keyword is written, for example, words starting with "n", containing "n" and ending with "n" are listed. First of all, you will need this command, then you can use this api and make improvements with npm install tdk-all-api --save.e.',
      links:['https://github.com/eylulozatman/TDKwordSearch'],
      thumbnail: '/photos/tdk3.png',
      detailedImages: ['/photos/tdk1.png', '/photos/tdk2.png','/photos/tdk3.png']
    },
    {
      id: 4,
      title: 'Blood Donation Project',
      description: 'This project aims to enable users to donate blood and to deliver blood needs to hospitals correctly. There are 2 separate services, Blood Request Service (can be thought of as a hospital) writes the location, blood type, how many tubes are needed and other necessary information. The second service is Donor Service, in this service both new donor records are created and registered users can donate blood. The donations made are stored in the database and the Blood Request Service receives each new request with a scheduler function that listens every 3 minutes. If there is blood in the blood bank that meets the appropriate criteria, a message is returned indicating that the request sent to the hospital has been fulfilled. Flask was used as technology in this project.',
      links:['https://github.com/eylulozatman/DonorService','https://github.com/eylulozatman/BloodRequestService'],
      thumbnail: '/photos/blood4.png',
      detailedImages: ['/photos/blood1.png','/photos/blood2.png','/photos/blood3.png','/photos/blood4.png']
    },
    {
      id: 5,
      title: 'Avis clone',
      description: 'This project is a clone project of Avis.com. Avis is a car rental service. You can register to the system. First, the locations where customers will pick up and return the vehicles are determined, then you set a date and time. Then the available cars in your pickup office are displayed. You can also filter the vehicles automatically/manually and sort them by price.',
      links:['https://github.com/eylulozatman/AvisProject','http://aviseylul2.azurewebsites.net'],
      thumbnail: '/photos/avisthumb.png',
      detailedImages: ['/photos/avis1.png', '/photos/avis3.png','/photos/avis4.png']
    },
    {
      id: 6,
      title: 'Auto Tic-Tac-Toe',
      description: 'This is a detailed description of Project Two.',
      links:['github','http://aviseylul2.azurewebsites.net'],

      thumbnail: 'url-to-thumbnail-image-two',
      detailedImages: ['url-to-image-three', 'url-to-image-four']
    },
    {
      id: 7,
      title: 'Mining Game with JAVA GUI',
      description: 'This is a detailed description of Project Two.',
      links:['github','youtube'],

      thumbnail: 'url-to-thumbnail-image-two',
      detailedImages: ['url-to-image-three', 'url-to-image-four']
    }
    // Diğer projeler...
  ];
  
  export default projectsData;
  