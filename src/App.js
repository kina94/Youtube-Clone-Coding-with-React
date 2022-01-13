import './App.css';
import React, {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setViddeos]=useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAJ5SVwT7RxfiEzkIR0E7TmFYJ-a5LDzD8", requestOptions)
      .then(response => response.json())
      .then(result => setViddeos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <VideoList videos={videos}></VideoList>
  );
}

export default App;