import React,{Fragment} from 'react';
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    
    @media (min-width: 576px){
        margin-top: 12rem;
    }
    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align:center;
        position:relative;
        padding-left:4rem;
        font-size: 1.5rem;
        &::before{
            content: open-quote;
            font-size: 7rem;
            color: black;
            position: absolute;
            left: -1rem;
            top -2rem
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top:1rem;
    }
`;

const Frase = ({frase}) => {
    const {quote, author} = frase
    return ( 
        <Fragment>
            <ContenedorFrase>
                <h1>{quote}</h1> 
                <p>- {author}</p>
            </ContenedorFrase>
            
        </Fragment>
        
    );
}
 
export default Frase;