import { Article } from '../article/article.component';
import React from 'react';
import './article-list.component';

export const ArticleList = props => {
  console.log(props)
  return (
    <div className='container'>
      <div className='row'>
        {
          props.news.map((article, i) => <Article key={i} article={article} />)
        }
      </div>
    </div>
  );
}