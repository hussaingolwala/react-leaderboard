import styled from "styled-components";

export const Content = styled.img`
width: 50px;
height: 50px;
border-radius: 100%;
margin-left: 2.5%;
display: flex;
overflow: hidden;
justify-content: center;
align-items: center;
src: url(${props => props.src});
`;
