import './App.css';

import HomeProfile from './components/HomeProfile';
import NavigationBar from './components/NavBar';
import Divider from './components/Divider';
import Resume from './components/Resume';
import History from './components/History';
import Minutia from './components/Minutia';

function App() {
  return (
    <div className="App">
      <HomeProfile />
      <NavigationBar />
      <Divider />
      <Resume />
      <Divider />
      <History />
      <Divider />
      <Minutia />
    </div>
  );
}

export default App;
