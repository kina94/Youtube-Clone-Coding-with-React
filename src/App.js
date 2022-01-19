import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
      .search(query)
      .then(videos=>setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos=>setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search}></VideoSearch>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
