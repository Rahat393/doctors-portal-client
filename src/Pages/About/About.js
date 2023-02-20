import React from 'react';

const About = () => {
  const name = "John Doe";
  const age = 25;
  const message = `<div style="color: blue;">My name is ${name}, and I am ${age} years old.</div>`;
  return (
    <div>
   

   {`${ name} ${age ? <span style={{ color: 'red' }}>{name}</span> : null}`}

    </div>
  );
};

export default About;