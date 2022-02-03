![Babbar's DSA](https://i.ibb.co/RPQmqHk/BABBAR-s-DSA-API.gif)

## Babbar's DSA API

This code is an API version of the [DSA sheet](https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view) provided by [Love Babbar](https://www.youtube.com/channel/UCQHLxxBFrbfdrk1jF0moTpw) on his [YouTube video](https://www.youtube.com/watch?v=4iFALQ1ACdA). Currently, the API and the sheet consists of 448 questions from the following topics:

- Array
- Matrix
- String
- Searching and Sorting
- LinkedList
- Binary Trees
- Binary Search Trees
- Greedy
- Backtracking
- Stack and Queues
- Heap
- Graph
- Trie
- Dynamic Programming
- Bit Manipulation

## API Use

The current API provides the following endpoints,

| Method |    Endpoint     |                                             Description                                              |
| :----: | :-------------: | :--------------------------------------------------------------------------------------------------: |
| `GET`  |       `/`       |                                   Get all the topics from the API                                    |
| `GET`  |    `/random`    |                                 Get a random problem from any topic                                  |
| `GET`  |    `/topic`     | The topic is the `topic` name you want to get data from. Returns all the problems from a given topic |
| `GET`  | `/topic/random` |  The topic is the `topic` name you want to get data from. Returns random problem from a given topic  |

## Data Source

The data source for this API is the `data.json` file. To add new topics to the API, update the data.json file manually.

## File Structure

The `route.js` file in the `routes` directory consists of all the routes in the API
The `functions.js` file in the `utils` folder consists of the utility functions used in the API
The `app.js` file consists of the working logic if the API
