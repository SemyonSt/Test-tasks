
import Main from "./pages/Main";
// import { Provider } from "react";
import { Provider } from 'react-redux';
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter } from 'react-router-dom';

import store from './slices/index';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
