import {Fragment} from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    margin-top: 5rem;
    box-shadow: 2px 4px 10px rgba(0,0,0,.5);
    @media (max-width: 450px) {
        width: 90%;
        margin-top: 11rem;
        padding: 1rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        margin-bottom: 2rem;
        color: #0f574e;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: bold;
        @media (max-width: 450px) {
        font-size: 1.5rem;
        }

        &::before{
            content: open-quote;
            font-size: 5rem;
            color: #0f574e;
            position: absolute;
            left: -2rem;
            top: -2.5rem;
            @media (max-width: 450px) {
                font-size: 3rem;
                left: -0.6rem;
                top: -1.0rem;
            }
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
        color: #666;
        margin-top: 2rem;
        @media (max-width: 450px) {
        font-size: 1.2rem;
        }
    }
`;



const Frase = ({frase}) => {
    return (
        <Fragment>
        <ContenedorFrase>
            <h1>Tu frase del día</h1>
            <p>{frase}</p>
        </ContenedorFrase>
        </Fragment>
     );
}
 
export default Frase;