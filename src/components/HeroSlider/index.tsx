import React, { useState, useEffect } from 'react'

import './styles.css'

const HeroSlider = (props: any) => {

  const [people, setPeople] = useState(props.data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      {
        people.map((person:any, personIndex:number) => {
          const { image, name } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={personIndex}>
              <img src={image} alt={name} className="person-img" />
            </article>
          );
        })
      }
    </>
  )
};

export default HeroSlider
