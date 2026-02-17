import { useEffect, useState } from "react";

const CardContainer = () => {
  const [people, setPeople] = useState();

  useEffect(() => {
    async function getUsers() {
      const url = "https://api.github.com/users";
      const response = await fetch(url);
      const data = await response.json();
      setPeople(data);
      console.log(people);
    }
    getUsers();
  }, []);

  return (
    <div>
      {people.map((person) => {
        <div>
          <h1>{person.login}</h1>
          <h1>{person.node_id}</h1>
        </div>;
      })}
    </div>
  );
};
export default CardContainer;
