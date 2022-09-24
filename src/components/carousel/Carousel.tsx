import { FC } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { CarouselProps } from "./Carousel.props";

import styles from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel: FC<CarouselProps> = ({ images, className = "", ...props }) => {
  return (
    <ResponsiveCarousel
      swipeable={true}
      dynamicHeight={true}
      infiniteLoop={true}
      className={`${styles.carousel} ${className}`}
      {...props}
    >
      {images.map((item, index) => {
        return (
          <div key={index} className={styles.container}>
            <img src={item} alt={item} />
          </div>
        );
      })}
    </ResponsiveCarousel>
  );
};

export default Carousel;
