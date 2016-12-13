// import ReactDOM from 'react-dom';
//
// //import the routes exported after being dynamically created from the app config returned for that user
// import routesToBootstrap from './routes';
//
// function bootstrapApp() {
//   return ReactDOM.render(
//     routesToBootstrap,
//     document.getElementById('root')
//   );
// }

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

//import Provider and store to make use of redux and create an application store
import { Provider } from 'react-redux';
import store from './store';

//import firebase call to return app config
import { getAppConfigFromFirebase } from 'mocks/AppConfig';

//import app components required for rendering
import App from 'components/App';
import RouteDisplayContainer from 'components/structure/RouteDisplayContainer';
import ManageComponentsListContainer from 'components/structure/ManageComponentsListContainer';
import ManageComponentContainer from 'components/structure/ManageComponentContainer';

//a IIFE that bootstraps the application and returns an array of routes that are created from the pages array of the users json app config

(function bootstrapApp() {
  //call the getAppConfigFromFirebase and then once it is resolved, bootstrap the application using the data
  getAppConfigFromFirebase().then((data) => {
    //set appConfig to the data from the promise
    const pages = data.pagesConfig;

    //create an empty array to hold the routes from the appconfig
    const routes = [];

    //loop over each pageId and for each of them, find the page object it refers to and add the config of that route to the routes array
    pages.forEach((page) => {
      routes.push(
        <Route path={page.pathName} component={RouteDisplayContainer} key={page.id} id={page.id}/>
      )
    });

    //create a const which holds the router config including all the routes that were created when the app config was looped over
    const routesToBootstrap = (
      <Provider store={store}>
        <Router history={browserHistory} >
          <Route path="/" component={App}>
            {routes}
            <Route path="manage" component={ManageComponentsListContainer} />
            <Route path="manage/:id" component={ManageComponentContainer} />
          </Route>
        </Router>
      </Provider>
    );

    //call ReactDom.render to render the routes to the root element to bootstrap the app
    ReactDOM.render(
      routesToBootstrap,
      document.getElementById('root')
    );
  });
}());
