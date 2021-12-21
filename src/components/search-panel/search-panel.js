import './search-panel.css'

const SearchPanel = () => {
    return (
        <>
            <div className="search-panel">
                <div className="input-group input-group-sm search-input">
                    <input type="text" className="form-control" placeholder='search'/>
                </div>
                <div className="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Active</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio3">Done</label>
                </div>
            </div>
        </>
    )
}

export default SearchPanel