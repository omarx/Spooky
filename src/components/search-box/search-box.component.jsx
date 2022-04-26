import './search-box.styles.css';

const SearchBox=({placeHolder, Change, className})=> {
    return (
        <div>
            <input className={`search-box ${className}`} type={'search'} placeholder={placeHolder} onChange={Change}/>
        </div>
    )
}
export default SearchBox;