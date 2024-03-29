import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #66e350;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export default CardContainer;
