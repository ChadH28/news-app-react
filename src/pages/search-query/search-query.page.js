import React from 'react';
import { ArticleList } from '../../components/article-list/article-list.component';
import './search-query.styles.css'
const url = process.env.REACT_APP_URL_LINK
const key = process.env.REACT_APP_API_KEY

class SearchQuery extends React.Component {
  // Class based
  constructor() {
    super();

    this.state = {
      news: [],
      searchField: null
    }
  }


  componentDidMount = async () => {
    // fetch documentiation proivided by newsAPI
    await fetch(
      `${url}/v2/everything?q=${this.props.searchField}&sortBy=popularity&pageSize=10`,
      {
        headers: {
          Authorization: `Bearer ${key}`,
        }
      })
      .then(response => response.json())
      // .then(gatheredNews =>  console.log('gatheredNews response:' , gatheredNews.articles))
      .then(gatheredNews => this.setState({ news: gatheredNews.articles }))
  }

  componentDidUpdate = async () => {
    // fetch documentiation proivided by newsAPI
    await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.searchField}&sortBy=popularity&pageSize=10`,
      {
        headers: {
          Authorization: `Bearer 88d5e530d4e44f3f9b420ae48150781d`,
        }
      })
      .then(response => response.json())
      // .then(gatheredNews =>  console.log('gatheredNews response:' , gatheredNews.articles))
      .then(gatheredNews => this.setState({ news: gatheredNews.articles }))
  }

  render() {
    // destructuring this.state
    const { news } = this.state;
    const searchField = this.props.searchField;

    return (
      // Calling cardList parent and the card children props so Card/item(child) => cardlist/gallery(parent) => App(main)
      <div className="section">
        <div className='news-container'>
          <h1>Search results for: {searchField} </h1>
          {/* Component called in  */}
          <ArticleList news={news} />
        </div>
      </div>
    );
  }
}

export default SearchQuery;