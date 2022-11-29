import React from 'react'

export const GridCard = ({id,url,author,author_url,alt}) => {
    
    // const {id,url,alt,author}=photo;

  return (
   <article className='card col-md-4'>
        <div className='card-body'>
            <h3><a href={author_url} target='_black'>{author}</a></h3>
        </div>
        <img src={url} alt={alt}/>
   </article>
  )
}
