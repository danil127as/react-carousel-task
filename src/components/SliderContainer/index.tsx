import React from 'react';
import Carousel from 'nuka-carousel';
import Slider from './Slider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './styles.css'

const SliderContainer = () => {

  const items = [
    {
      img: '../images/slider/slider1.jpg',
      title: 'About',
      subTitle: 'Community Rules',
      desc: <div><p>Your membership is always for free. Some of our brands however are very sensitive, when it comes to noiselessly selling their products at reduce prices. We therefore wish to only have active members within the community.</p><p>Please understand, that if you fail to use your membership within 12 months, we will have to deactivate your account.</p></div>
    },
    {
      img: '../images/slider/slider1.jpg',
      title: 'About',
      subTitle: 'Community Rules',
      desc: <div><p>Your membership is always for free. Some of our brands however are very sensitive, when it comes to noiselessly selling their products at reduce prices. We therefore wish to only have active members within the community.</p><p>Please understand, that if you fail to use your membership within 12 months, we will have to deactivate your account.</p></div>
    },
    {
      img: '../images/slider/slider1.jpg',
      title: 'About',
      subTitle: 'Community Rules',
      desc: <div><p>Your membership is always for free. Some of our brands however are very sensitive, when it comes to noiselessly selling their products at reduce prices. We therefore wish to only have active members within the community.</p><p>Please understand, that if you fail to use your membership within 12 months, we will have to deactivate your account.</p></div>
    },
    {
      img: '../images/slider/slider1.jpg',
      title: 'About',
      subTitle: 'Community Rules',
      desc: <div><p>Your membership is always for free. Some of our brands however are very sensitive, when it comes to noiselessly selling their products at reduce prices. We therefore wish to only have active members within the community.</p><p>Please understand, that if you fail to use your membership within 12 months, we will have to deactivate your account.</p></div>
    },
    {
      img: '../images/slider/slider1.jpg',
      title: 'About',
      subTitle: 'Community Rules',
      desc: <div><p>Your membership is always for free. Some of our brands however are very sensitive, when it comes to noiselessly selling their products at reduce prices. We therefore wish to only have active members within the community.</p><p>Please understand, that if you fail to use your membership within 12 months, we will have to deactivate your account.</p></div>
    },
    {
      img: '../images/slider/slider1.jpg',
      title: 'About',
      subTitle: 'Community Rules',
      desc: <div><p>Your membership is always for free. Some of our brands however are very sensitive, when it comes to noiselessly selling their products at reduce prices. We therefore wish to only have active members within the community.</p><p>Please understand, that if you fail to use your membership within 12 months, we will have to deactivate your account.</p></div>
    }
  ]

  let deviceDetect = 1;
  if (window.innerWidth <= 800) {
    deviceDetect = 1;
  } else if (window.innerWidth <= 1400) {
    deviceDetect = 2;
  } else if (window.innerWidth <= 5000) {
    deviceDetect = 3;
  } else {
    deviceDetect = 3
  }

  return (
    <section className='slider-section'>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>
            <ArrowBackIosIcon />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>
            <ArrowForwardIosIcon />
          </button>
        )}
        slidesToShow={deviceDetect}
        wrapAround={true}
        cellSpacing={40}
      >
        {
          items.map((item: any, itemIndex: number) => {
            return (
              <Slider imgLink={item.img} title={item.title} subTitle={item.subTitle} desc={item.desc} key={itemIndex} />
            )
          })
        }
      </Carousel>
    </section>
  );
}

export default SliderContainer