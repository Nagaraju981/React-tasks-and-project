import React from 'react'

const ArticleInfo = (props) => {
    const {Price, img, info, id} = props;

    
  return (
    <article>
        <div>{Price}</div>
        <img src={img}></img>
        <div>{info.title}</div>
        <div>{info.info}<button onClick={() => handleReadmode(id)}>Read More</button></div>
        <div><button onClick={() => handleInterested(id)}>{info.is_interested ? "Not Interested" : "Interested"}</button></div>
        
    </article>
  )
}

export default ArticleInfo