import React from 'react'

function Button(props) {
  const { buttonText, backGroundColor, click } = props;
  return (
    <div>
      <button style={{
        backgroundColor:backGroundColor,
        }} onClick={click}>{buttonText}</button>
    </div>
  )
}

export default Button