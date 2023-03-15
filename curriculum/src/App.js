import logo from './logo.svg';
import { makeStyles} from '@mui/material'
import Navbar from './components/navbar/navbar';
import Button from 'react-bootstrap/Button';
import Presentation from './components/presentation/presentation';


function App() {
  //const classes = useStyles();
  return (
    <div className='App'>
      <Navbar prop={'prueba'}/>
      <Presentation></Presentation>
    </div>
  );
}




export default App;
