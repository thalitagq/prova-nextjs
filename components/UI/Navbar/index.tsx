import React from "react"
import Image from 'next/image'
import mapPin from "../../../public/icons/map_pin.svg";
import calendar from "../../../public/icons/calendar.svg";
import search from "../../../public/icons/search.svg";
import {
  AuthButton,
  AuthButton2,
  AuthButtonsContainer,
  Container,
  MiddleContainer,
  MiddleContainerText,
  MiddleContainerTextIconWrapper,
  SearchButton,
  Subtitle,
  Title,
  TitleWrapper,
} from "./styles";

export const Navbar = (): JSX.Element => {
  return (
    <Container>
      <TitleWrapper>
        <Title>EXOTIC</Title>
        <Subtitle>CARS</Subtitle>
      </TitleWrapper>
      <MiddleContainer>
        <MiddleContainerTextIconWrapper>
          <Image src={mapPin} height="" width="20" />
          <MiddleContainerText>North Carolina, NC 90025</MiddleContainerText>
        </MiddleContainerTextIconWrapper>
        <MiddleContainerTextIconWrapper style={{ marginRight: 10 }}>
          <Image src={calendar} height="" width="20" />
          <MiddleContainerText>11/03/2021</MiddleContainerText>
        </MiddleContainerTextIconWrapper>
        <MiddleContainerTextIconWrapper>
          <Image src={calendar} height="" width="20" />
          <MiddleContainerText>12/12/2021</MiddleContainerText>
        </MiddleContainerTextIconWrapper>
        <SearchButton>
          <Image src={search} height="" width="20" />
        </SearchButton>
      </MiddleContainer>
      <AuthButtonsContainer>
        <AuthButton>Sign up</AuthButton>
        <AuthButton2>Sign in</AuthButton2>
      </AuthButtonsContainer>
    </Container>
  );
};
