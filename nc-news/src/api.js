import axios from 'axios';

const request = axios.create({
  baseURL: 'http://be-nc-news-api.herokuapp.com/api'
});

export const getTopics = () => {
  return request.get('/topics').then((data) => {
    return data;
  });
};

export const getArticles = (topic) => {
  return request
    .get('/articles', {
      params: {
        topic
      }
    })
    .then((data) => {
      return data;
    });
};
