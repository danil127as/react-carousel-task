import React from 'react'

const Products = (props: any) => {

  const { iconLink } = props;

  return (
    <div className='designer-icon-box'>
      <img src={iconLink} />
    </div>
  )
};

export default Products