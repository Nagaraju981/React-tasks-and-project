import React, { useState } from 'react'

const ArticleList = (props) => {
  const {title, description, Price, img, onRemove} = props;
  const [readmore, setReadMore] = useState(false);
  return (
    <>
    <img src={img} alt={title}></img>
    <div>
        <div>
          <h2>{title}</h2>
          <span>{Price}</span>
        </div>
        <p>{readmore ? description : `${description.slice(0,100)}...`}</p>
        <button onClick={()=>setReadMore(!readmore)}>{readmore ? "Show Less" : "Read More"}</button>
        <div>
          <button onClick={onRemove}>Not Interested</button>
        </div>
    </div>
    </>
    
  )
}

export default ArticleList