const Form = ({search}) => {

    return (
        <section>
            <form>
                <label htmlFor="search">Search:</label>
                <input id="search" type="search" onKeyUp={(e) => search(e.target.value.toLowerCase())}></input>
          </form>
        </section>       
    )
}

export default Form