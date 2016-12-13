import React from 'react';

//import the registry of manage components
import manageComponentRegistry from 'constructors/manageComponentRegistry';

const constructManageComponent = (component) => {
  return React.createElement(manageComponentRegistry[component.type], {...component}, null);
}

export default constructManageComponent;
