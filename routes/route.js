const express = require('express');
const fs = require('fs');
const router = express.Router();
const { getRandomTopic } = require('../utils/functions');

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

router.get('/', (req, res) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

router.get('/random', (req, res) => {
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

router.get('/:path', (req, res) => {
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

router.get('/:path/random', (req, res) => {
  const path = req.params.path;
  if (topics.indexOf(path) !== -1) {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        const json = JSON.parse(data);
        const result = json.data[path];
        const position = Math.floor(Math.random() * result.length);
        res.status(200).json(result[position]);
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

module.exports = router;
