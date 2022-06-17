import styled from "styled-components";
import { Content } from "../circular-image";
import Img from "../assets/3.png";
import { useState, useEffect } from "react";
import { data } from "../../data";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  width: 99%;
  cursor: pointer;
  margin-top: ${(props) => props.mt};
  display: flex;
  align-items: center;
  height: 65px;
  background-color: ${(props) => (props.bg === "white" ? "white" : "#4663b9")};
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-left: 1.5%;
  font-weight: 450;
  color: ${(props) => (props.color === "black" ? "black" : "white")};
`;

const Points = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-right: 1%;
  color: ${(props) => (props.color === "black" ? "black" : "white")};
`;

const Point = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 200;
  padding-right: 4%;
  color: ${(props) => (props.color === "black" ? "black" : "white")};
`;

function Board() {
//   const [ /* count, */  setCount] = useState(46200);

//   useEffect(() => {
//     const id = setInterval(() => setCount((oldCount) => oldCount + 100), 1000);

//     return () => {
//       clearInterval(id);
//     };
//   });

const [num, setNum] = useState([]);

  function randomNumberInRange(max) {
    return Math.floor(Math.random() * (max + 100));
  }

  useEffect(() => {
    const id = setInterval(() => setNum(randomNumberInRange(157000, 1000000)), 1000);

        return () => {
          clearInterval(id);
        };
    // setNum(randomNumberInRange(1, 5));
  });

  return (
    <>
        <Container>
          <Div mt="0.5%">
            <Content src={Img} />
            <Name color="white">Jone</Name>
            <Points color="white">{num}</Points>
            <Point color="white">points</Point>
          </Div>
        </Container>
      {data.map((userID) => (
        <Container>
          <Div mt="0.5%" bg="white" key={userID}>
            <Content src={Img} />
            <Name color="black">{userID.displayName}</Name>
            <Points color="black">{num}</Points>
            <Point color="black">points</Point>
          </Div>
        </Container>
      ))}
    </>
  );
}

export default Board;
