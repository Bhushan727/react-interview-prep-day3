
import './App.css';
import StateExample from './components/StateExample'
import EffectExample from './components/EffectExample';
import MemoEg from './components/MemoEg';


function App() {
  return (
    <div className="App">
      <h1>Interview Preparation Day 3</h1>

      <h2>Q1. Difference between axios and fetch .</h2>
      <p>Ans. <strong>Axios : </strong> Axios is a javascript library used to make HTTP requests from node.js or XMLHttpRequsts from the browser and it supports the Promise API that is native to JS ES6. It can be used to intercept HTTP requests and responses and enables-client-side protection against XSRF. It also has the ability to cancel requests. EX: axios.get('url').then((response) => {  })
      <br /><strong>Fetch : </strong> The Fetch API provides a fetch() method defined on the window object. It also privides a javascript interface for accessing and manipulating parts of the HTTP pipeline (request and responses). The fetch method has noe mandatory argument- the URL of the resource to be fetched. This method returns a Promise that can be used to retrieve the response of the request. EX. fetch('path-to-the0resource-to-be-fetched').then((response) => {  })
      </p>
      <br /><br />


      <h2>Q2. What is useState? implementation</h2>
      <StateExample />

      <h2>Q3. What is useEffect Hook ?</h2>
      <EffectExample />

      <h2>Q5. What is useMemo Hook ?</h2>
      <MemoEg />
    </div>
  );
}

export default App;
