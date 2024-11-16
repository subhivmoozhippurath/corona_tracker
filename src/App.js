import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
           <Header />
     <Main />
    </Provider>
  );
}

export default App;
