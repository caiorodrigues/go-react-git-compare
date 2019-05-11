import React, { Fragment } from 'react';

// import './styles/global';
import GlobalStyle from './styles/global';

import Main from './pages/Main/index';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default App;
