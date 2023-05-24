import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const FilmesCaixa = styled.div`
width:19%;
height: 60vh;
position: relative;
top: 2vh;

h2{
    color:white;}
font-size: 15px;
`

const FilmesDiv = styled.div`
background-color: black;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-wrap:wrap;
`



const Img = styled.img`
width:90%;
cursor: pointer;
`

export default function Filmes() {

    const [filmes, setFilmes] = useState([]);

    const getApi = () => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1")
        .then((response) => {
            setFilmes(response.data.results);
        });
    }
    useEffect(() => {
        getApi();
    }, []);

return(
    <FilmesDiv >
        {filmes.map((item) => (
          <FilmesCaixa>
            <Img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
              title={item.title}
            />
            <h2>{item.title} </h2>
          </FilmesCaixa>
        ))}
    </FilmesDiv>

)
        
        }