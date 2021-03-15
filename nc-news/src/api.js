import axios from 'axios';

const request = axios.create({
  baseURL: 'http://ensy-api.herokuapp.com/api'
});

export const getTopics = () => {
  return request.get('/topics').then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticles = (topic, author) => {
  return request
    .get('/articles', {
      params: {
        topic,
        author
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

export const getCommentsByArticleId = (article_id) => {
  return request
    .get(`articles/${article_id}/comments`)
    .then(({ data: { comments } }) => comments);
};

export const changeArticlesVotes = (article_id, vote_count) => {
  return request
    .patch(`/articles/${article_id}`, { inc_votes: vote_count })
    .then(({ data: { article } }) => article);
};

export const addComment = (article_id, comment) => {
  return request
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => data);
};

export const deleteComment = (comment_id) => {
  return request.delete(`/comments/${comment_id}`);
};
