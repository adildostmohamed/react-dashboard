import React from 'react';

//import the component registry object
import componentRegistry from 'constructors/componentRegistry';

const constructComponent = (component, index) => {
  return React.createElement(componentRegistry[component.type], {key: index, ...component}, null);
}

export default constructComponent;
