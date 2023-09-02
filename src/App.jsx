import { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './component/ContactCard';

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <>
      {results.map((results, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={results.picture.large}
            name={` ${results.name.title} ${results.name.first} ${results.name.last}`}
            email={results.email}
            age={results.dob.age}
          />
        );
      })}
    </>
  );
}

export default App;
