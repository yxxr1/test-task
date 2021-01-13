import React, {useState} from 'react';
import styled from 'styled-components'
import Input from "./components/Input";
import Posts from "./components/Posts";

const Container = styled.div`
  align-self: center;
  width: 600px;
  display: flex;
  flex-direction: column;
`

function App() {
  const [filter, setFilter] = useState<string>('');

  return (
    <Container>
      <Input value={filter} onChange={setFilter} />
      <Posts filter={filter}></Posts>
    </Container>
  );
}

export default App;
