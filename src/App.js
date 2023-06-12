
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google';
import Facebook from './facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GoogleOAuthProvider clientId="212072088132-a1n9qufmfihjj5b0m1cgdegsk2k7ef3p.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>

        <Facebook />
      </header>
    </div>
  );
}

export default App;