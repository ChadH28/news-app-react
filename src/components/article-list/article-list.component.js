import { Article } from '../article/article.component';
import React from 'react';


export const ArticleList = props => {
  console.log(props)
  return (
    <div className='car-list-container'>
      <div className="card-list">
        {
          props.news.map((article, i)  => <Article key={i} article={article} />)
        }
      </div>
    </div>
  );
}