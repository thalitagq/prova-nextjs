import React, { useEffect, useState } from "react";
import { Car } from "../../components/Card/Card";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  BackButton,
  BookButton,
  BottomContaier,
  ColorText,
  CurrentCarItem,
  ImageLogo,
  LogoTextWrapper,
  MainImageCar,
  MainWrapper,
  NextButton,
  NextCarItem,
  NextCarWrapper,
  PreviousCarItem,
  PrimaryText,
  SecondaryText,
} from "./styles";
import { GetStaticProps } from "next";

type DetailsCar = {
  image: string;
  color: string;
  number: number;
};

type DetailsProps = {
  previous: DetailsCar;
  current: DetailsCar;
  next: DetailsCar;
};

export const Details = (): JSX.Element => {
  const router = useRouter();
  const [car, setCar] = useState({} as Car);

  const [imagesList, setImagesList] = useState<DetailsProps>({
    previous: {
      image: "",
      color: "",
      number: 3,
    },
    current: {
      image: "",
      color: "",
      number: 1,
    },
    next: { 
      image: "", 
      color: "", 
      number: 2 
    },
  });

  useEffect(() => {
    if (router.query.car) {
      const carObj = JSON.parse(String(router.query.car));
      setCar(carObj);
      setImagesList({
        previous: {
          image: carObj.previous_image,
          color: carObj.previous_color,
          number: 3,
        },
        current: {
          image: carObj["image@2x"],
          color: carObj.color,
          number: 1,
        },
        next: { image: carObj.next_image, color: carObj.next_color, number: 2 },
      });
    }
  }, [router.query.car]);

  const nextCarHandler = () => {
    setImagesList((previousState) => {
      const rearrangedList = {
        previous: {} as DetailsCar,
        current: {} as DetailsCar,
        next: {} as DetailsCar,
      };
      Object.assign(rearrangedList.previous, previousState.current);
      Object.assign(rearrangedList.current, previousState.next);
      Object.assign(rearrangedList.next, previousState.previous);
      return rearrangedList;
    });
  };

  const previousCarHandler = () => {
    setImagesList((previousState) => {
      const rearrangedList = {
        previous: {} as DetailsCar,
        current: {} as DetailsCar,
        next: {} as DetailsCar,
      };
      Object.assign(rearrangedList.previous, previousState.next);
      Object.assign(rearrangedList.current, previousState.previous);
      Object.assign(rearrangedList.next, previousState.current);
      return rearrangedList;
    });
  };

  if (car) {
    const logoPath = `/../../${car.logo}`;
    const mainImage = `/../../${imagesList.current.image}`;
    const nextImage = `/../../${imagesList.next.image}`;
    const previousImage = `/../../${imagesList.previous.image}`;
    const currentImage = `/../../${imagesList.current.image}`;
    console.log(mainImage);
    
    return (
      <>
        <LogoTextWrapper>
          <ImageLogo>
            <Image src={logoPath} width={500} height={500} />
          </ImageLogo>
          <div>
            <PrimaryText>
              {car.make} {car.model}
            </PrimaryText>
            <SecondaryText>${car.price_per_day}/day</SecondaryText>
          </div>
        </LogoTextWrapper>
        <MainWrapper>
          <BackButton
            style={{ alignSelf: "center" }}
            onClick={() => router.push("/")}
          >
            <VscArrowLeft size={20} style={{ marginRight: 10 }} />
            Back to catalog
          </BackButton>
          <div>
            <MainImageCar layout>
              <Image src={mainImage} width={500} height={500} />
            </MainImageCar>
            <BookButton style={{ margin: "auto", marginBottom: 10 }}>
              Book now
              <VscArrowRight size={20} style={{ marginLeft: 10 }} />
            </BookButton>
          </div>
          <div style={{ width: 180, textAlign: "center" }}>
            <PrimaryText>{imagesList.current.number}</PrimaryText>
            <ColorText>{imagesList.current.color}</ColorText>
          </div>
        </MainWrapper>

        <BottomContaier>
          <NextButton onClick={previousCarHandler}>
            <VscArrowLeft size={18} />
          </NextButton>
          <NextCarWrapper>
            <PreviousCarItem>
              <motion.div layout style={{ width: "100%" }}>
                <Image src={previousImage} width={500} height={500} />
              </motion.div>
            </PreviousCarItem>
            <CurrentCarItem>
              <motion.div style={{ width: "100%" }} layout>
                <Image
                  src={currentImage}
                  width={500}
                  height={500}
                />
              </motion.div>
            </CurrentCarItem>
            <NextCarItem>
              <motion.div style={{ width: "100%" }} layout>
                <Image
                  src={nextImage}
                  width={500}
                  height={500}
                />
              </motion.div>
            </NextCarItem>
          </NextCarWrapper>
          <NextButton onClick={nextCarHandler}>
            <VscArrowRight size={18} />
          </NextButton>
        </BottomContaier>
      </>
    );
  }

  return <p>Loading...</p>
};
