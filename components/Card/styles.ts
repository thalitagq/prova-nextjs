import styled, { keyframes } from "styled-components";

const hoverAnimation = keyframes`
  0% { opacity: 0 }
  50% { opacity: 0.5} 
  100% { opacity: 1}
`;

const hoverAnimationCar = keyframes`
  0% { margin-left: -100% }
  /* 50% { margin-left: -50% } */
  100% { margin-left: 0%}
`;

export const HoverMessage = styled.span`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  opacity: 0;
  align-self: flex-end;
`;

export const CarImage = styled.img`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  background-color: #f8f8fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px 15px;
  width: 290px;
  height: 225px;
  flex: "initial" 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin: 10px;
  &::after {
    content: "";
    background-image: linear-gradient(52deg, #a1a7f4, #e6d3f1);
    border-radius: 20px;
    width: 290px;
    height: 225px;
    flex: 1 0;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
  &:hover {
    animation: ${hoverAnimation} 0.3s ease forwards;
    &::after {
      z-index: -1;
      opacity: 1;
    }
    ${HoverMessage} {
      animation: ${hoverAnimation} 0.3s ease forwards;
    }
    ${CarImage} {
      animation: ${hoverAnimationCar} 0.25s linear forwards;
    }
  }
`;

export const Title = styled.h1`
  color: #313136;
  font-size: 17px;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 3px;
`;

export const Subtitle = styled(Title)`
  font-weight: lighter;
  text-transform: uppercase;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
export const PriceSymbol = styled.span`
  color: #313136;
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
`;

export const PricePrimaryText = styled.span`
  color: #313136;
  font-size: 24px;
  font-weight: bold;
`;

export const PriceSecondaryText = styled.span`
  color: #313136;
  font-size: 14px;
  font-weight: lighter;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
