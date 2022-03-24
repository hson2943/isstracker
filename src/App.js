import React from 'react';
import Home from "./pages/Home/Home";
import Header from './components/header/Header';
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Home />
      </>
    )
  }

}

export default App;
