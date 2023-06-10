import React from "react";
import Slider from "react-slick";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import ProductDetailsCard from "./ProductDetailsCard";

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
  };
  return (
    <div
      className="card__container"
      style={{
        margin: "0 auto",
        padding: "40px",
        width: "80%",
        color: "#333",
      }}
    >
      {/* <h1>{title}</h1> */}
      <Slider {...settings} className="card__container--inner">
        {products.map((product, index) => {
          return <ProductDetailsCard product={product} />;
        })}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
