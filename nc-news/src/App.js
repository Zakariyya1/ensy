import './styles/App.css';
import ArticlesList from './components/ArticlesList';
import NavBar from './components/NavBar';
import Title from './components/Title';
import { Router } from '@reach/router';
import PublishArticle from './components/PublishArticle';
import ArticleDisplay from './components/ArticleDisplay';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Title />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/articles/topic/:topic" />
        <ArticlesList path="/users/:username/articles" />
        <ArticleDisplay path="/articles/:article_id" />
        <PublishArticle path="/publish" />
        <ErrorPage default />
      </Router>
    </div>
  );
}

export default App;
