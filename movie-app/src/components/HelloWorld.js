import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return (
    <div className="App">
        <h1>Hello world</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
    );
  }
}

export default HelloWorld;
