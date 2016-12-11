import ReactDOM from 'react-dom';

//import the routes exported after being dynamically created from the app config returned for that user
import routesToBootstrap from './routes';

ReactDOM.render(
  routesToBootstrap,
  document.getElementById('root')
);
