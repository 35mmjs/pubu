import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import data from './data.js';

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMound() {
    this.setState({
      data,
    });
  }

  onChange = (e, coordinate) => {
    e.preventDefault();
    const floor = ReactDOM.findDOMNode(this.refs[`floor_${coordinate[2]}`]);
    const react = floor.getBoundingClientRect();
    const cx = react.width / 2 +  react.left;
    const cy = react.height / 2 + react.top + window.scrollY;
    this.setState({
      x: cx + coordinate[0],
      y: cy + coordinate[1],
      showPoint: true,
    });
  }

  render() {
    const { x, y, showPoint } = this.state;
    const pointStyle = {
      left: `${x}px`,
      top: `${y}px`,
      visibility: showPoint ? 'visible' : 'hidden',
      opacity: showPoint ? 1 : 0,
    };
    return (
      <div className={style.map}>
        {data.floor.map((floor, index) => {
          return (
            <div className={style.floor} key={index} ref={`floor_${data.floor.length - index}`}>
              <img src={floor.image} />
            </div>
          )
        })}
        <div className={style.point} style={pointStyle} />
        <div className={style.areas}>
          {
            data.areas.map((area, index) => {
              return (
                <div className={style.area} key={index} onClick={e => this.onChange(e, area.coordinate)}>
                  <span className={style.color} style={{ background: `${area.color}`}} />
                  <span className={style.text}>{area.name}</span>
                </div>
              )
            })
          }
          <div className={style.area}>
            <span className={style.here} />
            <span className={style.text}>你所在到位置</span>
          </div>
          <div className={style.area}>
            <span className={style.wc} />
            <span className={style.text}> 洗手间</span>
          </div>
        </div>
      </div>
    )
  }
}