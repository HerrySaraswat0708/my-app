import logo from './logo.svg';
import './App.css';
import car from './download.png'
let name = 'Herry'

function App() {
  return (
    <>
      <nav className='navbar'>
        <ul className='list-items'><a href='#'>Home</a></ul>
        <ul className='list-items'><a href='#'>About</a></ul>
        <ul className='list-items'><a href='#'>Contact</a></ul>
      </nav>
      <div className='container'>
        <div className="App">
          <h1>Movie Recommendation System</h1>
          <p>
            <q>Quotation tag</q>
          </p>
          <sub>Subscript</sub> 
          <sup>Superscript</sup> <br></br>
          <select>
            <option selected value='Select'>---Select---</option>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='mango'>Mango</option>
          </select>
          <img src={car} className='car'></img>
        </div>
        <div className='sidebar'>
         <h1>Sidebar</h1> 
         <img src={logo} className='App-logo'></img> 
        </div>
        <footer className='footer'>
          <h4><marquee>This is footer</marquee></h4>
        </footer>
      </div>
    </>
  );
}

export default App;
