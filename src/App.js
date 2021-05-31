import firebase from './firebase'
import {useEffect, useState} from 'react'
import Form from './Form'
import Results from './Results'

function App() {

  const [solutions, setSolutions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect( () => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let solution in data) {
        newState.push(data[solution]);
      }
      setSolutions(newState);
      setSearchString("");
    });
  }, []);

  useEffect( () => {
    let searchRegex = new RegExp(searchString);
    let filteredArray = [];

    if (searchString === "") {
      filteredArray = solutions;
    } else {
      filteredArray = solutions.filter( solution => 
        (solution.solution.toLowerCase().match(searchRegex)) ||
        (solution.category.match(searchRegex))
        );
    }
    setFiltered(filteredArray);    
  }, [searchString, solutions])
  
  return (
    <div>
      <header> 
        <div className="wrapper">
          <h1>Climate Change Solutions</h1>
          <p>Learn more about climate change solutions identified by the <a href="https://drawdown.org/" target="_blank" rel="noopener noreferrer">Drawdown Project</a>.</p>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <Form search={(input) => setSearchString(input)}/>        
          <section>
            { 
              searchString === "" ? <h2>All solutions:</h2>  
              : <h2>Search results for "{searchString}":</h2>
            }
            <Results solutions={filtered} />        
          </section>
        </div>        
      </main>      
    </div>
  );
}

export default App;
