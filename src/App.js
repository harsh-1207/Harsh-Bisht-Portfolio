import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => (
  <div className='bg-site bg-no-repeat bg-cover overflow-hidden min-h-screen'>
    <Header /><Banner /><Nav /><About /><Services /><Work /><Contact />
  </div>
);
export default App;
