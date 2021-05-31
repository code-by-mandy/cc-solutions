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
        <ul className="row">
            {
                rowSolutions.map( rowSol => {
                    return (
                        <li key={rowSol.solution} className="rowItem">
                            <a href={rowSol.url} target="_blank" rel="noopener noreferrer">{rowSol.solution}</a>
                        </li>
                    )
                })
            }      
        </ul>
    )
}

export default Row