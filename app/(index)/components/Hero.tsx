import React from "react";

type Props = { value: string };

async function getHeroData() {
    const res = await fetch('https://paisa-challenge.herokuapp.com/api/v1/paisaflix');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }

const Hero: React.FC<Props> = ({ value }) => {
  return <div>Hero</div>;
};

export default Hero;
