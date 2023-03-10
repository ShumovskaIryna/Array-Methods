import './App.css';
import Home from './components/Home'
import Map from './components/Map'
import Filter from './components/Filter'
import Reduce from './components/Reduce'
import FindIndex from './components/FindIndex'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const animals = [
    {name: "🐶", family: "domestic"},
    {name: "🐱", family: "domestic"},
    {name: "🐹", family: "wild"},
    {name: "🐰", family: "domestic"},
    {name: "🦊", family: "wild"},
    {name: "🐻", family: "wild"},
    {name: "🐼", family: "wild"},
    {name: "🐻‍❄️", family: "wild"},
    {name: "🐨", family: "wild"},
    {name: "🐯", family: "wild"},
    {name: "🦁", family: "wild"},
    {name: "🐮", family: "domestic"},
    {name: "🐷", family: "domestic"},
    {name: "🐵", family: "wild"},
];
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={
            <Home array={animals}/>}/>
            <Route path="/map" element={
            <Map array={animals}/>} />
            <Route path="/filter" element={
            <Filter array={animals}/>} />
            <Route path="/reduce" element={
            <Reduce array={animals}/>} />
            <Route path="/find-index" element={
            <FindIndex array={animals}/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
