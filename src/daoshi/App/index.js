import React from 'react';
import { HMR } from '@pwa/preset-react';
import Map from '../Map';
import Books from '../Books';
import style from './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className={style.app}>
        <div className={style.warpper}> 
          <div className={style.title}></div>
          <Map />
          <Books />
        </div>
      </div>
    )
  }
}

export default App;
