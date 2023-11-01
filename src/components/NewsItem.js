import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='container my-3'>
      <div className="card" >
        <span className='position-absolute top-0 translate-middle badge rounded-pill bg-primary' style={{
          left: '90%',
          zIndex: '1',
        }}> {source}</span>
        <img className="card-img-top" src={imageUrl} alt='' />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>

          <p className="card-text"><small className='text-muted'>By {author} on {new Date(date).toDateString()}</small></p>
          <a rel='nonreferrer' href={newsUrl}  className="btn btn-dark btn-sm">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem
