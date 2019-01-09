import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//images
import bildEditThumb from './images/bildedit-small.jpg';
import memoryGameThumb from './images/memorygame-small.jpg';
import quoteMachineThumb from './images/quotemachine-small.jpg';
import todaysWeatherThumb from './images/todaysweather-small.jpg';
import twitchStatusThumb from './images/twitchstatus-small.jpg';
import wikiSearchThumb from './images/wikisearch-small.jpg';

const projectsArray = [
  ["BildEdit", "A CSS filter image editor. This app is styled to look like a traditional image editing software. It let's the user load an image and apply CSS-filters to it.<br>The app is made with HTML5, CSS3, JavaScript and jQuery.", bildEditThumb],
  ["Memory Game", "A simple card memory game. Try to flip over to of a kind. Made in the style of old playing cards, using HTML, CSS, JavaScript and jQuery.", memoryGameThumb],
  ["Quote Machine", "Get random quotes and tweet them. Push the button, get a random quote, and tweet it if you like it. Made with HTML, CSS and Javascript.", quoteMachineThumb],
  ["Todays Weather", "Reports todays weather. A simple weather reporting page. THe site fetches weather data from the OpenWeatherMap API, and tries to find appropriate images from Flicker. Made using HTML, CSS and JavaScript.", todaysWeatherThumb],
  ["Twitch Status", "See if a few select Twitch-users are streaming or not. A simple test of the Twitch API. Fetches streaming status from a few selected Twitch users.", twitchStatusThumb],
  ["Wiki-search", "Get random Wikipedia articles, or use your own search terms. Search Wikipedia, or find random Wikipedia-articles. Fetches and processes JSON-data from the Wikipedia API. Made with HTML, CSS and JavaScript.", wikiSearchThumb],
]

ReactDOM.render(<App projects={projectsArray}/>, document.getElementById('root'));
registerServiceWorker();
