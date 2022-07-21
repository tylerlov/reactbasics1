import Header from "./Components/Header";
import Button from '@mui/material/Button';

function App() {
  return (
    <>
      <Header text="myFirstProp"/>
      <h3>Hello World</h3>
      <Button onClick={()=>alert('Hello there!')} variant='contained' color='secondary' style={{ fontSize: 20 }}>
        Material UI Button</Button>
    </>
  );
}

export default App;
