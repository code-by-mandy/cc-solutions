import SearchIcon from './assets/searchIcon.svg'

const Form = ({search}) => {

    return (
        <section className="search">
            <div className="wrapper">
                <form name="search">
                    <div>
                        <label htmlFor="search" className="srOnly">Search</label>
                        <div className="inputWrapper">
                            <div className="searchIcon">
                                <img src={SearchIcon} alt=""/>
                            </div>
                            <input id="search" type="search" onKeyUp={(e) => search(e.target.value.toLowerCase())} placeholder="Search solutions"></input>
                        </div>
                    </div>
                </form>
            </div>            
        </section>       
    )
}

export default Form