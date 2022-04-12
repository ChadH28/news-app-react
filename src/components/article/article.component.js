import React from 'react';

export const Article = (
  {
    article: {
      urlToImage,
      title,
      author,
      publishedAt,
      content,
      url,
      source
    }
  }
) => {

  return (
    <div className="card">
      {/* used conditions because some values in article array was displaying as null */}
      {
        urlToImage === null ? <div>No image for News Article</div>
        : 
        <img alt='newsImg' src={`${urlToImage}`}/>
      }
      <h2>
        {title} 
      </h2>
      {
        author === null ? <h6>Unknown Author | Published {publishedAt}</h6> 
        : 
      <h6>
        By {author} | Published {publishedAt}
      </h6>
      }
      {
        content === null ? <p>No Content Provided for Article</p> 
        : 
      <p>
        {content}
      </p>
      }
      <p>
        <a href={`${url}`}>Read full article here</a>
      </p>
      <p>
        Source: {source.name}
      </p>
    </div>
  );
}


// author: "Mechelle Voepel"
// content: "The 2022 WNBA draft will be judged a lot on how much the Indiana Fever did to improve after dominating the first round with four picks. The Fever had seven selections overall, and the players who get… [+8262 chars]"
// description: "The Dream, Fever and Mystics had the first three picks of the draft but made the most out of all their selections to earn A grades."
// publishedAt: "2022-04-12T06:24:28Z"
// source: {id: null, name: 'ESPN'}
// title: "WNBA draft 2022 grades - Indiana Fever, Atlanta Dream, Washington Mystics score highest marks - ESPN"
// url: "https://www.espn.com/wnba/story/_/id/33720222/wnba-draft-2022-grades-indiana-fever-atlanta-dream-washington-mystics-score-highest-marks"
// urlToImage: "https://a4.espncdn.com/combiner/i?img=%2Fpho