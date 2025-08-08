import logo from './logo.svg';
import './App.css';
import './components/header.jsx';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="tracks-section">
        <h1 className="tracklist-title">Track List</h1>
        <TrackList />
      </div>
    </div>
  );
}

export default App;
