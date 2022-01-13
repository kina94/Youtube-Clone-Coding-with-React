import styles from './App.module.css';
import React, {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';

function App() {
  const [videos, setVideos]=useState([]);
  const search = query =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAJ5SVwT7RxfiEzkIR0E7TmFYJ-a5LDzD8`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id:item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

 useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAJ5SVwT7RxfiEzkIR0E7TmFYJ-a5LDzD8", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
    <VideoSearch onSearch={search}></VideoSearch>
    <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
