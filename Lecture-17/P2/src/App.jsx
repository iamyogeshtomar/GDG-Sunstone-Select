import { useEffect, useState } from "react";
// import CardContainer from "./components/CardContainer";

const App = () => {
  const [resourceType, setResourceType] = useState();
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState();

  useEffect(() => {
    console.log("triggered!!!");
    console.log(count);

    async function getUsers() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
      console.log(users);
    }
    getUsers();
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      {/* <CardContainer /> */}
      <button
        onClick={(e) => {
          setResourceType(e.target.textContent);
          // console.log(e);
        }}
      >
        Posts
      </button>
      <button
        onClick={(e) => {
          setResourceType(e.target.textContent);
          // console.log(resourceType);
        }}
      >
        Comments
      </button>
      <button
        onClick={(e) => {
          setResourceType(e.target.textContent);
          // console.log(resourceType);
        }}
      >
        Entries
      </button>
      <h1>The resource is {resourceType}</h1>

      <br />
      <br />
      <br />
      {users.map((user) => {
        return <h1>{user.login}</h1>;
      })}
    </div>
  );
};
export default App;
