import MyMatches from './Component/MyMatch/MyMatches';
import MatchInfoBar from './Component/MatchInfoBar/MatchInfoBar'
import NavBar from './Component/NavBar/NavBar';
import TodayMatch from './Component/TodayMatch/TodayMatch'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MatchInfoBar />
      {/* <MyMatches /> */}
      <TodayMatch />
    </div>
  );
}

export default App;
