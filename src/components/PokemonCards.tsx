import styled from "styled-components";
import { Card } from '../interfaces/Cards';

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #1D4E89;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    background-color: #7DCFB6;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border-radius: 5px;
    font: small-caps bold calc(3px + 1vw) Lucida-Console, Monospace;
    text-align: center;
    color: #1D4E89;
`;

export default function PokemonCards(props : { data:Card[] } ){
    return (
        <AllCharsDiv >
            {props.data.map((card: Card) =>
                <SingleCharDiv key={card.id}>
                    <img src={card.images.small} alt={`${card.name}`} />
                    <h1>{card.name}</h1>
                    <h2>{card.types}</h2>
                    <p>HP: {card.hp}</p>
                    <p>Evolves From: {card.evolvesFrom}</p>
                </SingleCharDiv>
            )}
        </AllCharsDiv>
    );
}