import React from 'react';
import './App.css';
import Article from './Article';

const articles = [
  {
    title: "You are more pretty than you thought",
    content: "our article is here ,come and visit",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5-uluQo4Fwrd1vgCeM95bdIfZ2aXd0ddgdfFxGjB&s"
  },
  {
    title: "Be happy even the world go against you",
    content: "our article is here ,come and visit",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5-uluQo4Fwrd1vgCeM95bdIfZ2aXd0ddgdfFxGjB&s"
  },
  {
    title: "You are who you are, don't change for anyone",
    content: "our article is here ,come and visit",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5-uluQo4Fwrd1vgCeM95bdIfZ2aXd0ddgdfFxGjB&s"
  }
]
function App() {
  return (
    <div className="App">
        {articles.map(article =>(
          <Article
            title={article.title}
            content={article.content}
            image={article.image}
          />
        ))}
    </div>
  );
}

export default App;
