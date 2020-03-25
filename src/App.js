import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

const Header = styled.h1`
  color: red;
  ${props =>
    props.background &&
    css`
      background-color: ${props.background};
    `}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Hello = props => <Header>Hello {props.name}</Header>;

export const Counter = ({ onSubmit = () => {} }) => {
  const [count, setCount] = useState(0);
  // state[0]: value
  // state[1]: setValue
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const handleSubmit = () => {
    onSubmit(count);
    setCount(0);
  };
  return (
    <Row>
      <button className="" onClick={decrement}>
        -
      </button>
      <p data-testid="count">{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={handleSubmit}>Enviar</button>
    </Row>
  );
};
const Countdown = props => {
  const [count, setCount] = useState(props.from);
  const interval = useRef();
  useEffect(() => {
    let i = props.from;
    interval.current = setInterval(() => {
      i = i - 1;
      setCount(i);
    }, 1000);
  }, [props.from]);
  return <p>{count}</p>;
};
function App() {
  const [numbers, setNumbers] = useState([]);
  const addNumbers = number => setNumbers([...numbers, number]);
  return (
    <div>
      <Hello name="Gabriel" />
      <Counter onSubmit={addNumbers} />
      <ul>
        {numbers.map((number, i) => {
          return (
            <li key={i}>
              <Countdown from={number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
