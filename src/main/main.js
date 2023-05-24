import {useState, useEffect} from "react"
import styled from "styled-components"
import axios from 'axios'

const ButtonAssistir = styled.button`
width: 20vw;
height: 5vh;
margin: 1rem;
color: #f2f2f2;
font-size: 1.2rem;
font-weight: bold;
border-radius: 25px;
border: none;
background-color: #d53a00;
`

const ButtonTrailer = styled.button`
width: 20vw;
height: 5vh;
margin: 1rem;
color: #f2f2f2;
font-size: 1.2rem;
font-weight: bold;
border-radius: 25px;
border: none;
background-color: #717171;
`

const DivButton = styled.div`
width: 35%;
display: flex;
justify-content: space-around;
`

const MainStyle = styled.main`
height: 95vh;
background-image: url(${props => props.back});
background-size: cover;
background-position: center;


h3{
    width: 60%;
    font-size:1.1rem;
}
`;

const DivGradient = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
height: 95vh;
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(253,187,45,0) 78%);
`

const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 80%;
height: 40vh;
color: #f2f2f2;
font-family: Arial, Helvetica, sans-serif;

`


export default function Main (){
    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    useEffect(() => {
        getFilmes()
    })



    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                }
            })
            setFilmes(allApi)
            setFundo(arrayAntiga => arrayAntiga = filmes.slice(0,1))
            console.log(fundo)
            

        }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
    }

    return(
        <>
            <MainStyle back={fundo.map(item => item.poster)} id="main">
                {fundo.map(item => (
                    <DivGradient>
                    <Div>
                        <h1>{item.title}</h1>
                        <h3>{item.vote_average}</h3>
                        <h3>{item.release_date}</h3>
                        <h3>{item.overview}</h3>
                        <DivButton>
                        <ButtonAssistir>Assista agora</ButtonAssistir>
                        <ButtonTrailer>Trailer</ButtonTrailer>
                        </DivButton>
                    </Div>
                    </DivGradient>
                ))}
            </MainStyle>
        </>
    )
}