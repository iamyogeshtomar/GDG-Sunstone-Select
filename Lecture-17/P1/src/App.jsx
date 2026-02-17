import { useState } from "react";
import Min from "./components/Min";

const App = () => {
  // const [resourceType, setResourceType] = useState();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="btn-container">
        {/* <button>Posts</button>
        <button>Comments</button>
        <button>Reviews</button> */}
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Toggle
        </button>
        <br />
        <br />
        <br />
        {toggle && <Min />}
      </div>
    </>
  );
};
export default App;
