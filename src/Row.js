import {useEffect, useState} from 'react'

const Row = ({category, solutions}) => {   
    

    const [rowSolutions, setRowSolutions] = useState([]);

    useEffect(() => {

        const categorySolutions = solutions.filter( solution => 
            solution.category === category
        )
        setRowSolutions(categorySolutions);
    }, [solutions, category]);
    
    return (
        <div className="rowWrapper">
            <ul className="row">
                {
                    rowSolutions.map( rowSol => {
                        return ( 
                            <div className="solutionWrapper">
                                <a href={rowSol.url} key={`${rowSol.category} ${rowSol.solution}`} target="_blank" rel="noopener noreferrer" className="rowItem">
                                    <li>{rowSol.solution}</li>
                                </a>
                            </div>                      
                        )
                    })
                }
            </ul>
            <div>
                <button className="prev button">Prev</button>
                <button className="next button">Next</button>
            </div>            
        </div>
    )
}

export default Row