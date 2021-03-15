import './App.css';
import ArticlesList from './components/ArticlesList';
import NavBar from './components/NavBar';
import Title from './components/Title';
import { Router } from '@reach/router';
import PublishArticle from './components/PublishArticle';
import ArticleDisplay from './components/ArticleDisplay';

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/articles/topic/:topic" />
        <ArticleDisplay path="/articles/:article_id" />
        <PublishArticle path="/publish" />
      </Router>
    </div>
  );
}

export default App;
