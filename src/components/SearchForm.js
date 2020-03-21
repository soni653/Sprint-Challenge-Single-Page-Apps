import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";



export default function SearchForm() {
 
  // return (
  //   <section className="search-form">
  //    // Add a search form here
  //   </section>
  // );

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(()=>{
  axios.get("https://rickandmortyapi.com/api/character/")
  .then (response =>{
    const characters = response.data.results.filter(character =>
    character.name.toLowerCase().includes(query.toLowerCase())
    );

    setData (characters);
  });
},[query]);

const handleInputChange = event => {
  setQuery(event.target.value);
};

const Search = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

const Results = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 20px ;
text-align: center;
`

const Header = styled.h1`
  color:#800000;
  text-align:center;
`
const Header3 = styled.h3`
  color:#6B8E23
`

const Info = styled.div`
  width: auto;
  padding: 5px;
`

return (
  <div>


      <input
      id="name" 
      type="text" 
      name="textfield" 
      placeholder="Search"
      value={query} 
      onChange={handleInputChange}
      />



    {data.map((character => {

  return(

  <Results>
  <img alt="character" src={character.image} /><br/>
  <Info>
  <Header>{character.name}</Header> <br/>
  <Header3>{character.species}</Header3> <br/>
  <Header3>{character.gender}</Header3>
  </Info>
  </Results>

  )
}	
))}
</div>

)}

