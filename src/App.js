import firebase from './firebase'
import {useEffect, useState, useRef} from 'react'

function App() {

  const [solutions, setSolutions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchString, setSearchString] = useState("");
  const searchInput = useRef(null);
  const selectInput = useRef(null);

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

  const handleSearch = (e) => {
    e.preventDefault();

    let searchRegex = new RegExp(searchString);
    let filterRegex = new RegExp(filterCategory);

    if (searchString === "" && filterCategory === "all") {
      const filteredArray = solutions;
      setFiltered(filteredArray);
    } else if (searchString === "" && filterCategory) {
      const filteredArray = solutions.filter(solution => solution.category.match(filterRegex));
      setFiltered(filteredArray);
    } else if (searchString && filterCategory === "all") {
      const filteredArray = solutions.filter( solution => solution.solution.toLowerCase().match(searchRegex));
      setFiltered(filteredArray);
    } else {
      const filteredArray = solutions.filter( solution => solution.solution.toLowerCase().match(searchRegex) && solution.category.match(filterRegex));
      setFiltered(filteredArray);
    }

  }

  return (
    <div>
      <div>
        <h1>Filter solutions identified by the Drawdown Project!</h1>
        <p>All data from the Drawdown Project.</p>
        <form onSubmit={handleSearch}>
          <div>
            <label htmlFor="search">Search:</label>
            <input id="search" type="search" onKeyUp={(e) => setSearchString(e.target.value.toLowerCase())} ref={searchInput}></input>
          </div>
          <div>
            <label htmlFor="categories">Filter by category</label>
            <select id="categories" onChange={(e) => setFilterCategory(e.target.value)} ref={selectInput}>
              <option value = "all" defaultValue>Choose one:</option>
              <option value="buildings">Buildings</option>
              <option value="cities">Cities</option>
              <option value="energy">Energy</option>
              <option value="food">Food</option>
              <option value="land">Land</option>
              <option value="materials">Materials</option>
              <option value="transport">Transport</option>
            <option value="women">Women</option>
          </select>
          </div>
          <button type="submit">Go</button>
        </form>
        <div>
                { 
                  searchString === "" && filterCategory === "all" ? <h2>All Solutions:</h2>  
                  : searchString === "" ? <h2>Solutions in the category "{filterCategory}"</h2>
                  : filterCategory === "all" ? <h2>Search results for "{searchString}"</h2>
                  : <h2>Search results for "{searchString}" in category "{filterCategory}"</h2>
                }
                
          <ul>
          { filtered.map( solution => {
            return(
              <li key={filtered.indexOf(solution)}><a href={solution.url}>{solution.solution}</a></li>
            )
          })}
          </ul>        
        </div>
        
        

      </div>      
    </div>
  );
}

export default App;
