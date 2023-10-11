import React from 'react';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => console.log(response.data));

    
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    .then(response => console.log(response.data));

    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    .then(response => console.log(response.data));

    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => console.log(response.data));
  }

  render() {
    return <div>Check the console for request results</div>;
  }
}

export default App;
