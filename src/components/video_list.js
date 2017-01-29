import React, {Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
constructor(props){
  super(props);
}
  render() {
    const { videos } = this.props;
    const videoItems = videos.map((video) => {
      return <VideoListItem video={video} key={video.etag} />
    });

    return (
      <div>
        <ul className="col-md-4 list-group">
          {videoItems}
        </ul>
      </div>
      );
    }
}

export default VideoList;
