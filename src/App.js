import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Main from './components/Main';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
           <Header />
     <Main />
     <Footer />

    </Provider>
  );
}

export default App;
