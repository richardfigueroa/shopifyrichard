import vid from '../resources/movie-montage.mp4';


const VideoComponent = () => {

  return (
    <div className="videoContainer">

      <video autoPlay muted loop id="myVideo">
        <source src={vid} type="video/mp4" />

      </video>
    </div>

  );
};

export default VideoComponent;
