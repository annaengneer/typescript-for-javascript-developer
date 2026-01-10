const axios = require('axios');

let url: string = 'https://jsonplaceholder.typicode.com/albums';

axios.get(url).then(function (response: any) {
  interface Article {
    userId: number;
    id: number;
    title: string;
  }
  let data: Article[];
  data = response.data;
  //   data = [
  //     {
  //       userId: 1,
  //       id: 2,
  //       title: 'title',
  //     },
  //   ];
  console.log(data);
});
