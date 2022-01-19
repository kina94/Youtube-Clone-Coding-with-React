import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';
import VideoInfo from './components/video_info/video_info';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = query => {
    youtube
      .search(query)
      .then(videos =>
        setVideos(videos));
        setSelectedVideo(null);
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search}></VideoSearch>
      <section className={styles.content}>
        {selectedVideo && (<div className={styles.detail}>
          <VideoInfo video={selectedVideo} />
        </div>
        )}
        <div className={styles.list}>
        <VideoList videos={videos}onVideoClick={selectVideo}
        display={selectedVideo ? 'list':'grid'}></VideoList>
        </div>
      </section>
    </div>
  );
}

export default App;
