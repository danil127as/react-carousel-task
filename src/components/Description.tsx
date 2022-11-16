import React from 'react'

const Description = (props: any) => {

  const { textColor, textAlign, content } = props;

  return (
    <p style={{ color: textColor, textAlign: textAlign }}>
      {content}
    </p>
  )
};

export default Description