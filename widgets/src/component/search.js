import React, {useState,useEffect} from 'react';

const Search = ()=>{
    const [query,setQuery] = useState('')

    useEffect(()=>{
        console.log("lavda ka sarkar");
    }, [])

    return (
        <div className="container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Term</label>
                    <input className="input"
                        onChange={(e)=>{
                            e.preventDefault()
                            setQuery(e.target.values)
                        }} value={query}/>
                </div>
            </div>
        </div>
    );
}

export default Search;
