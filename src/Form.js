const Form = ({search}) => {

    return (
        <form>
            <label htmlFor="search">Search:</label>
            <input id="search" type="search" onKeyUp={(e) => search(e.target.value.toLowerCase())}></input>
          </form>
    )
}

export default Form