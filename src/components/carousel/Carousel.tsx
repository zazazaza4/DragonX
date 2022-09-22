import { FC } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { ICarouselProps } from "./Carousel.props";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel: FC<ICarouselProps> = ({ images }) => {
  return (
    <ResponsiveCarousel>
      {images.map((image) => {
        return (
          <div>
            <img src={image} alt={image} />
          </div>
        );
      })}
    </ResponsiveCarousel>
  );
};

export default Carousel;
