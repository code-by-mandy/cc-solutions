import {useState, useEffect} from 'react'
import Row from './Row'

const Results = ({solutions}) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        let categoryArray = [];
        let categoryValue = "";
        let filteredCategories = [];

        solutions.forEach((solution => {
            categoryArray.push(solution.category);            
        }))  

        categoryArray.sort();

        categoryArray.forEach(category => {
            if (category !== categoryValue) {
                filteredCategories.push(category);
                categoryValue = category;
            }
        })
        setCategories(filteredCategories);
        
    }, [solutions])

    return (    
        <ul>
            {
                categories.map(
                    category => {
                        return (
                            <li key={category}>
                                <h3>{category}</h3>
                                <Row category={category} solutions={solutions}/>
                            </li>                            
                        )
                    }
                )
            }
        </ul>
    )
}

export default Results

