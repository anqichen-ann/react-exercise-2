import React, { Component } from 'react';
import './App.scss';
import Head from './components/Head/head';
import Form from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Head />
        {/* <Form /> */}
      </main>
    );
  }
}

export default App;
