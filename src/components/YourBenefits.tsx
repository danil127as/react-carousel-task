import React from 'react'
import Description from './Description';
import Title from './Title';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';

const YourBenefits = () => {

  return (
    <section className='benefits-section'>
      <div className='benefits-container'>
        <Title
          textAlign="center"
          textColor="black"
          fontSize="28px"
          fontWeight="600"
          content="Your benefits"
        />
        <div className='benefits-box'>
          <div className='benefits-item'>
            <PeopleAltOutlinedIcon />
            <div className='benefits-content'>
              <Title
                textAlign="left"
                textColor="black"
                fontSize="16px"
                fontWeight="600"
                content="For members only"
              />
              <Description
                textColor="black"
                textAlign="left"
                content="To protect our suppliers, we only show our offers to registered members."
              />
            </div>
          </div>
          <div className='benefits-item'>
            <PhoneAndroidOutlinedIcon />
            <div className='benefits-content'>
              <Title
                textAlign="left"
                textColor="black"
                fontSize="16px"
                fontWeight="600"
                content="Luxury brands"
              />
              <Description
                textColor="black"
                textAlign="left"
                content="Discounts of up to 80% for over 3,000 exclusive designers."
              />
            </div>
          </div>
          <div className='benefits-item'>
            <CheckBoxOutlineBlankOutlinedIcon />
            <div className='benefits-content'>
              <Title
                textAlign="left"
                textColor="black"
                fontSize="16px"
                fontWeight="600"
                content="Quick shipping & free returns"
              />
              <Description
                textColor="black"
                textAlign="left"
                content="Shipping within a few business days & free returns of your products."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default YourBenefits