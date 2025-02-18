import { useEffect, useState } from 'react';
import { Card } from './interfaces/Cards';
import styled from 'styled-components';
import PokemonCards from './components/PokemonCards';

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
`;

function App() {
  const [info, setInfo] = useState<Card[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://api.pokemontcg.io/v2/cards");
      const data = await rawData.json();
      // console.log(results);
      setInfo(data.data);
    }

    fetchData()
      .then(() => console.log("data fetched successfully"))
      .catch((e: Error) => console.log("error: " + e));
  });

  return (
    <ParentDiv>
      <PokemonCards data={info}/>
    </ParentDiv>
  )
}

export default App