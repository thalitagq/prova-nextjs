import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Car } from "../../components/Card/Card";
import Image from 'next/image'
import arrowUp from '../../public/icons/arrow_up.svg'
import { Container, ScrollTopBUtton } from "./styles";

type HomeProps = {
  data: {cars: Array<Car>};
}


export const Home = (props: HomeProps): JSX.Element => {
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
  console.log(props);
  
  const scrollTopHandler = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (!isScrollButtonVisible && window.pageYOffset > 200) {
      setIsScrollButtonVisible(true);
    } else if (isScrollButtonVisible && window.pageYOffset <= 200) {
      setIsScrollButtonVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <Container>
      {props.data.cars.map((car, index, carsArray) => {
        const previousAndNext = { previous: {} as Car, next: {} as Car };

        Object.assign(
          previousAndNext.previous,
          carsArray[(index + carsArray.length - 1) % carsArray.length]
        );
        Object.assign(
          previousAndNext.next,
          carsArray[(index + 1) % carsArray.length]
        );
        return <Card car={car} key={car.model} />;
      })}
      <Card car={props.data.cars[0]} />
      {isScrollButtonVisible && (
        <ScrollTopBUtton onClick={scrollTopHandler}>
          <Image src={arrowUp} width="" height="" />
        </ScrollTopBUtton>
      )}
    </Container>
  );
};

