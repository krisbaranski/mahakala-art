import React from 'react';
import SingleStatue from './SingleStatue';
import statueData from '../data/statueData';

// Momentarily not working code,
// First upload data to server
// Then fetch data to component

// const getStatueData = async url => {
//   const data = await fetch(url);
//   const response = await response.json();
//   console.log(data);
//   return data;
// };

// // First, get an object with all the statue data.
// getStatueData('http://localhost:5000/statues/all');

// // Then, iterate over all statues and create a component for each statue.
// console.log(statueData);

// for (let statue in statueData) {
//   <SingleStatue
//     image={statue.image}
//     title={statue.title}
//     statueDescription={statue.statueDescription}
//     paintedBy={statue.paintedBy}
//     heightAndYear={statue.heightAndYear}
//     location={statue.location}
//     key={[]}
//   />;
// }

const Statues = () => {
  return (
    <div className="container">
      <h3>
        Statues
        <p>
          Here are presented statue projects that i realised for buddhist
          Centres and collectors worldwide:
        </p>
      </h3>

      {statueData.map(statue => {
        return (
          <SingleStatue
            key={statue.id}
            image={statue.image}
            title={statue.title}
            statueDescription={statue.statueDescription}
            paintedBy={statue.paintedBy}
            heightAndYear={statue.heightAndYear}
            location={statue.location}
          />
        );
      })}
    </div>
  );
};

export default Statues;
