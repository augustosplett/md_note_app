import MainPage from './components/MainPage';
import MenuBar from './components/MenuBar';
import Sidebar from './components/Sidebar';
import TextPage from './components/TextPage';

function App() {
  return (
    <MainPage>
      <MenuBar />
      <div style={{ display: 'flex' }}>
        <Sidebar 
          items = {['Home', 'About', 'Services', 'Contact']} 
        />
        <TextPage />
      </div>
    </MainPage>
  );
}

export default App;
