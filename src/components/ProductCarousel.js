import React from "react";
import Slider from "react-slick";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import ProductDetailsCard from "./ProductDetailsCard";
import { Grid, Box, Typography } from "@mui/material";

const ProductCarousel = (props) => {
  const { products } = props;
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  //   const settings = {
  //     centerMode: true,
  //     centerPadding: "10px",
  //     slidesToShow: 5,
  //     speed: 500,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     dots: false,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           arrows: false,
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           arrows: false,
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   };
  return (
    <div
      className="card__container"
      style={{
        margin: "0 auto",
        padding: "0px 30px",
        width: "80%",
        color: "#333",
      }}
    >
      <Slider {...settings} className="card__container--inner">
        {products.map((product, index) => {
          return (
            <Box m={2}>
              <ProductDetailsCard product={product} />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
