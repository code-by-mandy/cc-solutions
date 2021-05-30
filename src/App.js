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

    const filteredArray = solutions.filter(solution => solution.solution.toLowerCase().match(regex) || solution.category.match(regex));
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
          <label htmlFor="categories">Filter by category</label>
          <select id="categories">
            <option defaultValue>Choose one:</option>
            <option>Buildings</option>
            <option>Cities</option>
            <option>Energy</option>
            <option>Food</option>
            <option>Land</option>
            <option>Materials</option>
            <option>Transport</option>
            <option>Women</option>
          </select>
        </form>
        <ul>
          { filtered.map( solution => {
            return(
              <li key={solutions.indexOf(solution)}><a href={solution.url}>{solution.solution}</a></li>
            )
          })}
        </ul>

      </div>      
    </div>
  );
}

export default App;
