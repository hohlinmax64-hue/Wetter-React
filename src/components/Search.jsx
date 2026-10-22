export default function Search({input, setInput}){
    function handleOnChange(e) {
        setInput(e.target.value)
    }
    return (
        <div className="search-container"> 
            <input 
            type="text" 
            placeholder="Entry please a name city"
            value={input}
            onChange={handleOnChange}/>
        </div>
    )
}