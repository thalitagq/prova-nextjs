import React from "react";
// import { useHistory } from "react-router-dom";
import { useRouter } from 'next/router'
import { CarImage, Container, Footer, HoverMessage, PricePrimaryText, PriceSecondaryText, PriceSymbol, PriceWrapper, Subtitle, Title } from "./styles";
import Image from 'next/image'

export type Car = {
  make: string;
  model: string;
  image: string;
  "image@2x": string;
  price_per_day: number;
  logo: string;
  color: string;
  previous_image: string;
  previous_color: string;
  next_image: string;
  next_color: string;
};

type CardProps = {
  car: Car;
};

type routerProps = {
  car: Car
}

export const Card = (props: CardProps): JSX.Element => {
  const router = useRouter()
  const onClickCardHandler = () => {
    router.push({
      pathname: 'details/[make]/[model]',
      query: {car: JSON.stringify(props.car), make: props.car.make, model: props.car.model}
    });
  };
  const imagePath = `/../${props.car.image}`

  return (
    <Container onClick={onClickCardHandler}> 
      <div>
        <Title>
          <strong>{props.car.make}</strong>
        </Title>
        <Subtitle>{props.car.model}</Subtitle>
      </div>
      <Image src={imagePath} width={500} height={500} />
      <Footer>
        <HoverMessage>Book Now</HoverMessage>
        <PriceWrapper>
          <PriceSymbol>$</PriceSymbol>
          <PricePrimaryText>{props.car.price_per_day}</PricePrimaryText>
          <PriceSecondaryText>/day</PriceSecondaryText>
        </PriceWrapper>
      </Footer>
    </Container>
  );
};
