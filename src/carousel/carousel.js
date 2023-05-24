import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import styled from "styled-components";

const Img = styled.img`
width: 19rem;
cursor:pointer;
`

const SliderBox = styled.section`
  height: 70vh;
  padding: 3rem;
  border: 2px white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: #f2f2f2;

  h2{
    padding-top: 2rem;
    font-size: 23px;
  }

`;

export default function Carousel() {
  const [filmes, setFilmes] = useState([]);

  const getApi = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1"
      )
      .then((response) => {
        setFilmes(response.data.results);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4
  };


  
  return (
    <SliderBox>
      <Slider {...settings} style={{ width: "95%" }}>
        {filmes.map((item) => (
          <div>
            <Img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
            />
            <h2>{item.title} </h2>
          </div>
        ))}
      </Slider>
    </SliderBox>
  );
}
