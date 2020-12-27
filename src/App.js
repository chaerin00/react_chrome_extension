import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Directory from './components/Directory';
import CardPanel from './components/CardPanel';


/**
 * @return {null}
 */
function App() {
  return (
    <>
      <Header></Header>
      <Search></Search>
      <Directory></Directory>
      <CardPanel></CardPanel>
      </>
  );
}

export default App;
