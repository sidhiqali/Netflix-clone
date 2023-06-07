import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import { comedy,originals,horror,documentaries,romance } from './url';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Card url={originals} title='Netflix originals'/>
     <Card  url={romance} title='Romance'/>
     <Card url={horror} title ='Horror'/>
     <Card url={documentaries} title='Documentaries'/>
     <Card url={comedy} title='Comedy'/>

    </div>
  );
}

export default App;
