import React, { useState, useEffect } from "react";

import "./App.css";
import Meaning from "./Components/Meaning";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [query, setQuery] = useState("wat");
  const [history, setHistory] = useState(["wat"]);
  const [apiSource, setAPISource] = useState("UD");

  const handelRBChange = (e) => {
    setAPISource(e.target.value);
    console.log(apiSource);
  };

  const updateHistory = (word) => {
    const tempHistory = history;
    tempHistory.push(word);
    setHistory(tempHistory);
  };
  const updateSearchWord = (e) => {
    setSearchWord(e.target.value);
    console.log(searchWord);
  };

  useEffect(() => {
    callUrbanDictionary();
  }, []);

  useEffect(() => {
    callUrbanDictionary();
  }, [query]);

  const makeQueryUD = (e) => {
    e.preventDefault();
    setQuery(searchWord);
    updateHistory(query);
  };

  const callUrbanDictionary = async () => {
    const response = await fetch(
      `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "mashape-community-urban-dictionary.p.rapidapi.com",
          "x-rapidapi-key":
            "2446f6e999msh87b27456c75e4f5p196058jsnf74efa6a255c",
        },
      }
    );

    const data = await response.json();
    setMeanings(data.list);
  };
  return (
    <div className="container">
      <div className="header">
        <h2 className="title">Word Play</h2>
        <div className="sub-titles">
          <p className="subtitle-text">Slangs / Tags / Definitions</p>
        </div>
      </div>
      <div className="contents">
        <form onSubmit={makeQueryUD} className="search">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            className="search-bar"
            placeholder="Enter a Word"
            value={searchWord}
            onChange={updateSearchWord}
          />
          {/* <div className="api-source">
            <input
              type="radio"
              name="sourceRB"
              id="urbanDictionaryRB"
              value="UD"
              className="api-source-rb"
              defaultChecked
              onChange={handelRBChange}
            />
            <label htmlFor="urbanDictionaryRB" className="sourceLabel">
              Urban Dictionary
            </label>
          </div>
          <div className="api-source">
            <input
              type="radio"
              name="sourceRB"
              id="spellCheckRB"
              value="SC"
              className="api-source-rb"
            />
            <label htmlFor="spellCheckRB" className="sourceLabel">
              Spell Check
            </label>
          </div> */}
          {/* <div className="api-source">
            <input
              type="radio"
              name="sourceRB"
              id="oxfordDictionaryRB"
              value="Oxford Dictionary"
              className="api-source-rb"
            />
            <label htmlFor="oxfordDictionaryRB" className="sourceLabel">
              Oxford Dictionary
            </label>
          </div> */}
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        {/* </div> */}
        <div className="result">
          <div className="res">
            <h3>Results</h3>
            {meanings.map((meaning) => (
              <div key={meaning.defid}>
                <Meaning
                  word={meaning.word}
                  author={meaning.author}
                  definition={meaning.definition}
                  example={meaning.example}
                />
              </div>
            ))}
          </div>
          <div className="recent">
            <p className="recently-searched">Last Searched</p>
            <div className="inner-rect">
              <div className="history">
                <span className="history-word" key={query}>
                  {query}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="made-by">
          <span className="made-by-text">Made With</span>
          &#128153;
          <span className="made-by-text">by Anwesh Dahal.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
