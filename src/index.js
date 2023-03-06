import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './Container/App.js'
import 'tachyons';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Step 1: App is passed to root.render() => React calls constructor of App component */}
    {/* Step 2: React calls the App component's render() method. This is how React knows what to show on the screen. Screen will show our h1, SearchBox + DigimonCardList + DigimonCard components*/}
    {/* Step 3: React calls componentDidMount() lifecycle method to pull API data */}
    {/* Step 4: After data is retrieved, React changes state of initial empty digimons array with data of array of digimon objects */}
    {/* Step 5: Since state in React feeds props to children, our individual DigimonCardList and DigimonCard components have access to digimons array data. DigimonCardList can now accept digimons as props */}
    <div className='tc'>
      <App />
    </div>
    
    {/* <DigimonCardList digimons={digimons}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
