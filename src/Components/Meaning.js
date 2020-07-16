import React, { useState } from "react";
import "./style/Meaning.css";

// Word
// Definition
// Author
// Link
// Written On
// Example

// function Meaning({ word, author, date, definition, example }) {
function Meaning({ word, author, definition, example }) {
  return (
    <div className="meaning-block">
      <h1 className="word">{word}</h1>
      <p className="info">
        Written by: <span className="author">{author} </span>
      </p>
      <p className="definition">{definition}</p>
      <div className="example">
        <h3 className="example-title">Examples</h3>
        <p className="example-text">{example}</p>
      </div>
    </div>
  );
}

export default Meaning;
