import './App.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Files from './components/files/files';
import Login from './components/login/login';
function App() {
  //<Files fName='Media' Ftype='photo' date='2023-12-29'/>
  return (
    <div className="App">
      <NavBar />
      
      <Footer />

    </div>
  );
}

export default App;
