import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyles from './styles/global';
import history from './services/history';
import { store } from './store';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <HashRouter history={history}>
        <Navbar />

        <div className="App">
            <Routes />

            <GlobalStyles />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
