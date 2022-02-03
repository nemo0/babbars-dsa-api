// Get Random Topic
const getRandomTopic = (topics) => {
  const randomIndex = Math.floor(Math.random() * topics.length);
  return topics[randomIndex];
};

module.exports = {
  getRandomTopic,
};
