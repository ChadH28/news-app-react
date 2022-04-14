import React from 'react';
import { ArticleList } from '../../components/article-list/article-list.component';
const url = process.env.REACT_APP_URL_LINK
const key = process.env.REACT_APP_API_KEY

class Tech extends React.Component {
  // Class based
  constructor() {
    super();

    this.state = {
      news: []
    }
  }


  componentDidMount = async () => {
    await fetch(
    `${url}/v2/top-headlines?category=technology&country=za&pageSize=10`,
    {
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${key}`,
      }
    })
      .then(response => response.json())
      // .then(gatheredNews =>  console.log('gatheredNews response:' , gatheredNews.articles))
      .then(gatheredNews => this.setState({ news: gatheredNews.articles}))
  }


  render() {
    // destructuring this.state
    const { news } = this.state

    return (
      // Calling cardList parent and the card children props so Card/item(child) => cardlist/gallery(parent) => App(main)
      <div className="section">
        <div className='news-container'>
          <h1>Technology</h1>
          {/* Component called in  */}
          <ArticleList news={news}/>
        </div>
      </div>
    );
  }
}

export default Tech;