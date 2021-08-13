import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex: 1;
`;

export const ScrollTopBUtton = styled.div`
  background-color: #e6d3f1;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 10%;
  right: 10%;
  cursor: pointer;
`;
