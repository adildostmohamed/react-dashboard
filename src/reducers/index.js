import { combineReducers } from 'redux';

//import the appConfigReducer that scaffolds the application
import appConfigReducer from 'reducers/reducer_appConfig';

//create a root reducer that will be exported
const rootReducer = combineReducers({
  appConfig: appConfigReducer
});

export default rootReducer;
