import React from 'react';
import Description from '../Description';
import Line from '../Line';
import Title from '../Title';

const Slider = (props: any) => {

  const { imgLink, title, subTitle, desc } = props

  return (
    <div className='slider-box'>
      <div className='slider-right-box'>
        <img src={imgLink} />
        <div className='slider-title'>
          <Title
            textAlign="center"
            textColor="#fff"
            fontSize="100px"
            fontWeight="700"
            content={title}
          />
        </div>
        <Line
          bgColor="#fff"
          justifyContent="center"
        />
        <div className='slider-subtitle'>
          <Title
            textAlign="center"
            textColor="#fff"
            fontSize="24px"
            fontWeight="600"
            content={subTitle}
          />
        </div>
        <div className="slider-desc">
          <Description
            textColor="#fff"
            textAlign="center"
            content={desc}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider