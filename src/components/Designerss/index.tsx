import React from 'react'
import Title from '../Title';
import Products from './Products'
import './styles.css'

const Designers = (props: any) => {

  const items = [
    '../images/designers/balenciaga-4.svg',
    '../images/designers/boss-hugo-boss-1.svg',
    '../images/designers/burberry.svg',
    '../images/designers/chopard-1.svg',
    '../images/designers/dior.svg',
    '../images/designers/escada.svg',
    '../images/designers/fendi.svg',
    '../images/designers/gucci-logo-1.svg',
    '../images/designers/hermes-logo.svg',
    '../images/designers/louis-vuitton-1.svg',
    '../images/designers/michael-kors.svg',
    '../images/designers/moschino-occhiali-1.svg',
    '../images/designers/prada-logo-1.svg',
    '../images/designers/ralphlauren.svg',
    '../images/designers/bottega-veneta.svg',
  ];

  const { titleVisible } = props;

  return (
    <section className='designers-section'>
      <div className='designers-container'>
        {
          titleVisible === true ? (
            <Title
              textAlign="center"
              textColor="black"
              fontSize="28px"
              fontWeight="600"
              content="Our Designer"
            />
          ) : (
            null
          )
        }

        <div className='designers-grid'>
          {
            items.map((item: any, itemIndex: number) => {
              return (
                <Products iconLink={item} key={itemIndex} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
};

export default Designers