import React from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'styles/root.scss';
import 'styles/antd.less';
import store from 'store';
import App from './App';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme={localStorage.getItem('theme') || 'light'}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeSwitcherProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
