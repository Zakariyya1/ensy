export const formatDate = (uselessDate) => {
  const date = new Date(uselessDate);

  const dateGB = date.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });

  return dateGB;
};
