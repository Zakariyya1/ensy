import axios from 'axios';

const request = axios.create({
  baseURL: 'http://be-nc-news-api.herokuapp.com/api'
});

export const fetchTopics = () => {
  return request.get('/topics').then((data) => {
    return data;
  });
};

export const fetchArticles = () => {
  return request.get('/articles').then((data) => {
    return data;
  });
};
