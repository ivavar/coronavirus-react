import { getSearchedData } from "../../../actions/data";
import { useState, useEffect } from "react";

const Search = () => {
    const [userInput, setUserInput] = useState("");
    
    useEffect(async () => {
        getSearchedData({ userInput });
      }, [userInput]);

    const onChange = e => {
        setUserInput(e.target.value);
    }
    return (
        <div>
            <form autoComplete="off" >
                <input 
                    type="text" 
                    placeholder="Search . . ." 
                    name="searchContent"
                    className="input"
                    value={userInput}
                    onChange={onChange}/>
            </form>
        </div>
    )
}

export default Search;