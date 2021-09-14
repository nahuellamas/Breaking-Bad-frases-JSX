import styled from '@emotion/styled';
import {useState, useEffect} from 'react';
import Frase from './components/Frase'

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`;

const ButtonFrases = styled.button`
  background: -webkit-linear-gradient( top left, #007d35 0%, #007d35 5%, #0f574e 100%);
  border: 2px solid black;
  color: white;
  text-align: center;
  font-size: 2.0rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3rem;
  padding:1rem 3rem;
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 450px) {
    font-size: 1.5rem;
    padding: 0.7rem 1.2rem;
    margin-top: 1rem;
    }
  &:hover {
    background: #45a049;
  }
`;

function App() {
  const [frase, setFrase] = useState('');
  const [estado, setEstado] = useState(false);

  //utilizando fetch para consultar una API
  const consultarAPI = async () => {
    const APIurl = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await APIurl.json();
    const {quote, author} = frase[0];
    setFrase(quote + ' - ' + author);
    setEstado(true);
  };
  //cuando cargue el componenete, consultar la API
  useEffect(() => {
    consultarAPI();
  } , []);

  return (
    <Contenedor>
      {estado ? <Frase frase={frase} /> : null}
      <ButtonFrases onClick={consultarAPI} >Obtener mi Frase</ButtonFrases>
    </Contenedor>
  );
}

export default App;
