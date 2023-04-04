import './Github.css';
import Userinfo from './Userinfo';
import React, {useState} from 'react'
import axios from 'axios';

//https://api.github.com/users/fuzzysid
//https://api.github.com/search/users?q=sohaib

export default function Github() {
  
  const [text,setText] = useState('Enter Person Name/ID Here');
  const [people,setPeople] = useState([]);
  const [error,setError] = useState(null);
  
  const myOnChangeHandler = (event) =>{
    setText(event.target.value);
};

const searchPersonHandler = () => {
    const query = "https://api.github.com/search/users?q="+text;
    console.log(query);
    axios
    .get(query)
    .then((response) => {
        console.log(response.data);
        setPeople(response.data);
        setError(null);
    })
    .catch((error) => {
        console.log(error);
        setError("Error Occurred While Fetching");
    });
    
    //setText('');
};

  
  return (
    <>
      <div className="container my-4">
          <h2>Assignment Part-2 Github</h2>
        </div>

        <div className="container">
          <h3>Search a Username</h3>
        </div>

        <div className="container">
            <div className="mb-3 my-4">
                <textarea className="form-control" id="textArea" value={text} onChange={myOnChangeHandler} rows="1"></textarea>
            </div>
        </div>
        <div className="container my-4">
            <button type="button" className="btn btn-success" onClick={searchPersonHandler}>Search</button>
        </div>
        <div className="container my-4">
            {error && <div>{error}</div>}
        </div>
        <div className="container my-4">
          <div className="row">
              {people.length === 0 ? (
              <h4>No results</h4>
              ) : (
              people.items.map((element) => (
                  <div className="col-md-4" key={element.avatar_url}>
                    <Userinfo  name={element.login} link={element.html_url} imglink={element.avatar_url}/>
                  </div>
              ))
            )}
          </div>
        </div>
    </>
  )
}



