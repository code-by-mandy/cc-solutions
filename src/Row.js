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
        <ul>
            {
                rowSolutions.map( rowSol => {
                    return (
                        <li key={rowSol.solution}>{rowSol.solution}</li>
                    )
                })
            }      
        </ul>
    )
}

export default Row