const Form = ({search}) => {

    return (
        <section className="search">
            <div className="wrapper">
                <div className="line"></div>
                <form name="search">
                    <div>
                        <label htmlFor="search">Search:</label>
                        <div>
                        <input id="search" type="search" onKeyUp={(e) => search(e.target.value.toLowerCase())}></input>
                        </div>
                    </div>
                </form>
            </div>            
        </section>       
    )
}

export default Form