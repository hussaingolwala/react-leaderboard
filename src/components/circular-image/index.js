import styled from "styled-components";

export const Content = styled.img`
width: 3rem;
height: 3rem;
border-radius: 100%;
margin-left: 2%;
display: flex;
overflow: hidden;
justify-content: center;
align-items: center;
src: url(${props => props.src});
`;


