import React from 'react';

//import the component registry object
import displayComponentRegistry from 'constructors/displayComponentRegistry';

const constructDisplayComponent = (component, index) => {
  return React.createElement(displayComponentRegistry[component.type], {key: index, ...component}, null);
}

export default constructDisplayComponent;
