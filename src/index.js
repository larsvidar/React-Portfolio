import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scales.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Array of objects containing information about each project.
const projectsArray = [
  {name: "BildEdit", 
          link: "https://larsvidar.no/projects/bildedit/",
          description: "A CSS filter image editor. This app is styled to look like a traditional image editing software. It let's the user load an image and apply CSS-filters to it.<br>The app is made with HTML5, CSS3, JavaScript and jQuery.", 
          image: "bildedit-small.jpg", 
          technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
          github: "https://github.com/larsvidar/Bildedit"},
  {name: "Memory Game", 
          link: "https://larsvidar.no/projects/memory/",
          description: "A simple card memory game. Try to flip over to of a kind. Made in the style of old playing cards, using HTML, CSS, JavaScript and jQuery.", 
          image: "memorygame-small.jpg", 
          technologies: ["HTML5", "CSS3", "JavaScript"],
          github: "https://github.com/larsvidar/Card-Memory-Game"},
  {name: "Quote Machine", 
          link: "https://larsvidar.no/projects/quote_machine/",
          description: "Get random quotes and tweet them. Push the button, get a random quote, and tweet it if you like it. Made with HTML, CSS and Javascript.", 
          image: "quotemachine-small.jpg", 
          technologies: ["HTML5", "CSS3", "JavaScript"],
          github: "https://github.com/larsvidar/Twitter-Quote-Machine"},
  {name: "Todays Weather", 
          link: "https://larsvidar.no/projects/todaysweather/",
          description: "Reports todays weather. A simple weather reporting page. The site fetches weather data from the OpenWeatherMap API, and tries to find appropriate images from Flicker. Made using HTML, CSS and JavaScript.", 
          image: "todaysweather-small.jpg", 
          technologies: ["HTML5", "CSS3", "JavaScript"],
          github: "https://github.com/larsvidar/TodaysWeather"},
  {name: "Twitch Status", 
          link: "http://larsvidar.no/projects/twitchstatus/",
          description: "See if a few select Twitch-users are streaming or not. A simple test of the Twitch API. Fetches streaming status from a few selected Twitch users.", 
          image: "twitchstatus-small.jpg", 
          technologies: ["HTML5", "CSS3", "JavaScript"],
          github: "https://github.com/larsvidar/Twitch-status"},
  {name: "Wiki-search", 
          link: "https://larsvidar.no/projects/wikisearch/",
          description: "Get random Wikipedia articles, or use your own search terms. Search Wikipedia, or find random Wikipedia-articles. Fetches and processes JSON-data from the Wikipedia API. Made with HTML, CSS and JavaScript.", 
          image: "wikisearch-small.jpg", 
          technologies: ["HTML5", "CSS3", "JavaScript"],
          github: "https://github.com/larsvidar/Wikisearch"},
]

ReactDOM.render(<App projects={projectsArray}/>, document.getElementById('root'));
registerServiceWorker();