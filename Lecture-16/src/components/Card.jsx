import { useState } from "react";

const Card = (props) => {
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [city, setCity] = useState(props.city);
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{city}</h1>
    </>
  );
};

export default Card;
