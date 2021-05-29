import firebase from './firebase'
import {useEffect, useState} from 'react'

function App() {

  const [solutions, setSolutions] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect( () => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let solution in data) {
        newState.push(data[solution]);
      }

      setSolutions(newState);
    });
  }, []);
  
  const handleSearch = (e) =>{

    let regex = new RegExp(e.target.value.toLowerCase());

    const filteredArray = solutions.filter(solution => solution.solution.toLowerCase().match(regex) || solution.sectors.toLowerCase().match(regex));
    setFiltered(filteredArray);
  }


  return (
    <div>
      <div>
        <h1>Filter solutions identified by the Drawdown Project!</h1>
        <p>All data from the Drawdown Project.</p>
        <form>
            <label htmlFor="search">Search:</label>
            <input id="search" type="search" onKeyUp={handleSearch}></input>
        </form>
        <form>
          <div>
            <label htmlFor="sector">Area of Action</label>
            <select id="action" onChange={handleSearch}>
              <option defaultValue>All</option>
              <option>Buildings</option>
              <option>Electricity</option>
              <option>Food, Agriculture, and Land Use</option>
              <option>Health and Education</option>
              <option>Industry</option>
              <option>Sinks</option>
              <option>Transportation</option>
            </select>
          </div>          
        </form>
        <ul>
          { filtered.map( solution => {
            return(
              <li key={solutions.indexOf(solution)}>{solution.solution}</li>
            )
          })}
        </ul>

      </div>      
    </div>
  );
}

export default App;
