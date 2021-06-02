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
    <div className="bodyWrapper">
      <header> 
        <div className="wrapper">
          <h1>Climate Change Solutions</h1>
          <p>Learn more about climate change solutions identified by <a href="https://drawdown.org/" target="_blank" rel="noopener noreferrer">Project Drawdown</a>!</p>
        </div>
      </header>
      <main>
        <Form search={(input) => setSearchString(input)}/>  
        <div className="wrapper">
          <section className="results">
            { 
              searchString === "" ? <h2>All solutions:</h2>  
              : <h2>Search results for "{searchString}":</h2>
            }
            <Results solutions={filtered} />        
          </section>
        </div>        
      </main>   
      <footer>
        <div className="wrapper">
          <p>Created by Mandy Poon to practice ReactJS.</p>
          <p>No affiliation with the Project other than thinking they are awesome and wanting to spread word of their work!</p>
        </div>        
      </footer>   
    </div>
  );
}

export default App;
