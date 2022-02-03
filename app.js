const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const dataPath = './data.json';

const topics = [
  'array',
  'matrix',
  'string',
  'searching-sorting',
  'linked-list',
  'binary-trees',
  'bst',
  'greedy',
  'backtracking',
  'stack-queue',
  'heap',
  'graph',
  'trie',
  'dp',
  'bit-manipulation',
];

const getRandomTopic = (topics) => {
  const randomIndex = Math.floor(Math.random() * topics.length);
  return topics[randomIndex];
};

// Get all problems
app.get('/', (req, res) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

// Get Random Problem
app.get('/random', (req, res) => {
  const topic = getRandomTopic(topics);
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      const json = JSON.parse(data);
      const result = json;
      const position = Math.floor(Math.random() * result.data[topic].length);
      res.status(200).json(result.data[topic][position]);
    }
  });
});

// Get problems based on topic
app.get('/:path', (req, res) => {
  const path = req.params.path;
  if (topics.indexOf(path) !== -1) {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        const json = JSON.parse(data);
        const result = json.data[path];
        res.status(200).json(result);
      }
    });
  } else {
    res.status(404).json({
      data: {
        message: 'Invalid path',
      },
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
