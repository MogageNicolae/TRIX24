
import './App.css';
import NavigationBar from "./navigationBar/NavigationBar";
import homePageImg from "./assets/images/home-page.png"

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <img src={homePageImg} alt="home-page yellow background" className="background-image"/>
    </div>
  );
}

export default App;
