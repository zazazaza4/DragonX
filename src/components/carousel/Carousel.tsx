import { FC } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { ICarouselProps } from "./Carousel.props";

import styles from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel: FC<ICarouselProps> = ({ images, className, ...props }) => {
  return (
    <ResponsiveCarousel className={className} {...props}>
      {images.map((item) => {
        return (
          <div className={styles.container}>
            <img src={item} alt={item} className={styles.image} />
          </div>
        );
      })}
    </ResponsiveCarousel>
  );
};

export default Carousel;
