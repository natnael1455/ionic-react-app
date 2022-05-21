import React from 'react';
import './ExploreContainer.css';
import Section_register from './section_register';
import Home from './home'
import Sections from './Sections';
import Questions from './Questions';
import QR from './QR';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<{name:string;id:string;}> = ({ name, id }) => {
  if(name === 'Home'){
    return (
      <Home />
    );
  }
  if(name === 'AddSection'){
    return(
        <Section_register />
    );

  }
  if(name === 'Sections'){
    return(
        <Sections />
    );

  }
  if(name === 'question'){
    return (
      <div className="container">
        <strong>{id}</strong>
      </div>
    );
  }
  if(name === 'Questions'){
    return (
      <Questions name={id}/>
    );
  }
  if(name === 'QR'){
    return (
      <QR/>
    );
  }
  return (
    <div className="container">
      <strong>{name}</strong>
    </div>
  );
};

export default ExploreContainer;
