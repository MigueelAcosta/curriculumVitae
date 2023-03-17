import Carousel from './components/slider/carousel';
import Navbar from './components/navbar/navbar';
import Presentation from './components/presentation/presentation';
import AboutMe from './components/aboutme/aboutMe';


function App() {
  //const classes = useStyles();
  return (
    <div className='App'>
      <Navbar prop={'prueba'}/>
      <div className="container">
        <Presentation></Presentation>
      </div>
      <div className="container">
        <Carousel></Carousel>
      </div>
      <div className="container">
        <AboutMe></AboutMe>
      </div>
      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>
      
      
      
    </div>
  );
}




export default App;
