import vid from '../resources/movie-montage.mp4';


const TitleComponent = () => {

  return (
    <div className="testing">
   
 <video autoPlay muted loop id="myVideo">
<source src={vid} type="video/mp4"/>

</video>
</div>
    
  );
};

export default TitleComponent;
