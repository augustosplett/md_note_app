import MainPage from './components/MainPage';
import Sidebar from './components/Sidebar';
import TextPage from './components/TextPage';
function App() {
  return (
    <MainPage>
      <Sidebar 
        items = {['Home', 'About', 'Services', 'Contact']} 
      />
      <TextPage />
    </MainPage>
  );
}

export default App;
