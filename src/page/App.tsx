import React from 'react';
import Formulary from '../components/Formulary';
import List from '../components/List';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulary></Formulary>
      <List/>
    </div>
  );
}

export default App;
