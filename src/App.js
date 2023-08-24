import React from 'react';
import './App.css';
import CityCard from './components/CityCard';

const cities = [
  {
    title: 'Paris',
    imageSrc: '/image1.webp',
    description: "Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas.",
    subtitle: 'France'
  },
  {
    title: 'LONDON',
    imageSrc: '/image2.webp',
    description: 'When exploring London, you will come across lots of excitement by chance, so try to take everything in rather than just rushing around to all of the major tourist haunts.',
    subtitle: 'United Kingdom'
  },
  {
    title: 'BARCELONA',
    imageSrc: '/image3.webp',
    description: "Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities.",
    subtitle: 'Spain'
  },
  {
    title: 'PRAGUE',
    imageSrc: '/image4.webp',
    description: "Old-world charm meets modern vibrancy in Europe's capital of stunning architecture, with the iconic Charles Bridge and a captivating cultural scene.",
    subtitle: 'Czech Republic'
  },
];

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title"> <br />&nbsp;&nbsp;&nbsp;&nbsp;CITIES TO VISIT IN EUROPE</h1>
      </div>
      <div className="city-card-container">
        {cities.map((city, index) => (
          <CityCard
            key={index}
            title={city.title}
            imageSrc={city.imageSrc}
            description={city.description}
            subtitle={city.subtitle}  
          />
        ))}
      </div>
    </div>
  );
}

export default App;
