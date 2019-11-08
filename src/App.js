import React from 'react';
import './App.css';
import AppStore from './store';
// import AlertComponent from './components/common/alertComponent';
// import CardComponent from './components/common/cardComponent';
// import Loader from './components/common/loader';

function App() {
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      {/* <AlertComponent type='success' message='testing for success' /> */}
      {/* <Loader /> */}
      {/* <CardComponent header='Users' content='30' /> */}
      <AppStore />
    </div>
  );
}

export default App;
