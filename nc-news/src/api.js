import axios from 'axios';

const request = axios.create({
  baseURL: 'http://be-nc-news-api.herokuapp.com/api'
});

export const getTopics = () => {
  return request.get('/topics').then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticles = (topic) => {
  return request
    .get('/articles', {
      params: {
        topic
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getArticleById = (article_id) => {
  return request
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => article);
};
