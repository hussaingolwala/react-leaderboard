import styled from "styled-components";
import { Content} from "../circular-image";
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
  font-size: 22px;
  margin-left: 1.5%;
  font-weight: 450;
  color: ${(props) => (props.color === "black" ? "black" : "white")};
`;

const Points = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-right: 0.5%;
  color: ${(props) => (props.color === "black" ? "black" : "white")};
`;


const Point = styled.div`
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: 200;
  padding-right: 1.5%;
  color: ${(props) => (props.color === "black" ? "black" : "white")};
`;

function Board() {
  const [num, setNum] = useState([]);
  const [dataOne, setDataOne] = useState(data);

  function randomNumberInRange(max) {
    return Math.floor(Math.random() * max) + 100;
  }

  const getRandomUser = () => {
    return Math.floor(Math.random() * (data.length));
  };

  console.log(num,'num');

  useEffect(() => {
    const updatedData = [...data];
    updatedData.sort((a, b) => b.score - a.score);
    setDataOne(updatedData);

    const id = setInterval(() => {
      setNum(randomNumberInRange(1000, 100000));
      const selectedUser = getRandomUser();
      let updatedData = [...data];
      updatedData[selectedUser].score = Number(data[selectedUser].score) + num;
      updatedData.sort((a, b) => b.score - a.score);
      setDataOne(updatedData);  
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, [num]);

  return (
    <>
      {dataOne.map((userID) => (
        <Container key={userID}>
          <Div mt="0.5%" bg="white"> 
            <Content src={userID.picture}>
            </Content>
            <Name color="black">{userID.displayName}</Name>
            <Points color="black">{userID.score}</Points>
            <Point color="black">points</Point>
          </Div>
        </Container>
      ))}
    </>
  );
}

export default Board;
