import { useState } from "react";
import Header from "./components/Header";
import SampleComponent from "./components/SampleComponent";

const App = () => {
  const [count, setCount] = useState(0);
  const [showSampleHeading, setShowSampleHeading] = useState(false);
  // const [] = useState();
  return (
    <>
      <Header />
      <h1>This is App Component</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore,
        magni qui pariatur eveniet exercitationem ipsum. Possimus quas molestias
        beatae amet consectetur explicabo.
      </p>
      <h1>The Count is {count}</h1>
      <br />
      {showSampleHeading && <SampleComponent />}
      <button onClick={()=>{setShowSampleHeading(!showSampleHeading)}}>Toggle Sample Heading</button>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increment
      </button>
    </>
  );
};
export default App;
