import React, { Component } from 'react';
import {} from 'styles/main.scss';

import Navigation from 'components/structure/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <header className="m-header">
          <div role="banner" className="m-banner">
            Hello world
          </div>
          <Navigation />
        </header>
        <main id="main">
          <h1>
            hello world
          </h1>
          { this.props.children }
        </main>
      </div>
    );
  }
}

export default App;
