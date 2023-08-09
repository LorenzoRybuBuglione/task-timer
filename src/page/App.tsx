import React from 'react';
import Formulary from '../components/Formulary';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulary></Formulary>
      <List/>
      <Stopwatch/>
    </div>
  );
}

export default App;
