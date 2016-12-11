import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//import app components required for rendering
import App from 'components/App';
import PageContainer from 'components/structure/PageContainer';

//import mock data to make this work
import AppData from 'mocks/AppData';

//a function that returns an array of routes that are created from the pages array of the users json app config
const createRoutes = () => {
  //create an empty array to hold the routes that are created
  const routes = [];
  //loop over the pages array and push them into the routes array
  AppData.pages.forEach((page)=>{
    routes.push(<Route path={page.pathName} component={PageContainer} key={page.id} id={page.id}/>)
  });
  //return the routes array
  return routes;
}

//create a routes variable that holds the routing configuration passing in the createRoutes which returns the array of routes that were created
const routesToBootstrap = (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      {createRoutes()}
    </Route>
  </Router>
);

export default routesToBootstrap;
