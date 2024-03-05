import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LinkButton from '../layout/LinkButton';
import styles from './Home.module.css';
import fralda1 from '../imagens/20220914_155426.jpg';
import fralda2 from '../imagens/20220914_155626.jpg';
import fralda3 from '../imagens/20220914_155309.jpg';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} ${styles.nextArrow}`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} ${styles.prevArrow}`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        <div>
          <img src={fralda1} className={styles.img} alt="fralda ecológica" />
        </div>
        <div>
          <img src={fralda2} className={styles.img} alt="fralda ecológica" />
        </div>
        <div>
          <img src={fralda3} className={styles.img} alt="fralda ecológica" />
        </div>
        <div>
          <img src={fralda1} className={styles.img} alt="fralda ecológica" />
        </div>
        <div>
          <img src={fralda2} className={styles.img} alt="fralda ecológica" />
        </div>
        <div>
          <img src={fralda3} className={styles.img} alt="fralda ecológica" />
        </div>
      </Slider>
      <div className={styles.buttonContainer}>
        <LinkButton to="/comprar" text="Comprar" />
        <LinkButton to="/comprar" text="Comprar" />
        <LinkButton to="/comprar" text="Comprar" />
      </div>
    </div>
  );
}

export default Home;
