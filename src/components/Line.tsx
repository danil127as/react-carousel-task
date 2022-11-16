import React from 'react'

const Line = (props: any) => {

  const { bgColor, justifyContent } = props;
  const lineBoxStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: justifyContent,
  }
  const lineStyle = {
    backgroundColor: bgColor,
    width: '60px',
    height: '4px',
  }

  return (
    <div style={lineBoxStyle}>
      <div style={lineStyle}></div>
    </div>
  )
};

export default Line