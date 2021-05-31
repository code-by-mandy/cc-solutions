const Filter = ({closeFilter}) => {

    const handleSelect = (e) => {
        console.log(e.target.value)
        closeFilter();
    }

    return(
        <div>
            <label htmlFor="categories">Filter by category</label>
            <select id="categories" onChange={handleSelect}>
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
    )
} 
export default Filter