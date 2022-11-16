import React from 'react'

const Title = (props: any) => {

  const { textAlign, textColor, fontSize, fontWeight, content } = props;

  const titleStyle = {
    textAlign: textAlign,
    color: textColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: '0',
    fontFamily: 'Arial',
  }

  return (
    <p style={titleStyle}>
      {content}
    </p>
  )
};

export default Title