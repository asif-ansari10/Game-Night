import './App.css';
import NavBar from './NavBar';


function App() {
  return (
      <div className='frontp'
      style={{
        backgroundImage: `url("https://www.orfonline.org/wp-content/uploads/2022/03/Indian-gaming-landscape.jpg")`,
        backgroundSize: 'cover',
        width:"100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",}}
      >
        <NavBar />

      </div>

  );
}

export default App;
