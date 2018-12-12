import React from 'react';
import classNames from 'classnames';
import getStarValues from '../../util/getStarValues';
import Star from './Star';
import style from './index.css';

class Score extends React.Component {
  render() {
    const { value, mulity } = this.props;
    const v = getStarValues(value);

    const scoleCls = classNames({
      [style.score]: true,
      [style.score_small]: mulity,
    });

    const cls = classNames({
      [style.arrow]: true,
      [style.arrow_1]: value > 0 && value <= 2,
      [style.arrow_2]: value > 2 && value <= 4,
      [style.arrow_3]: value > 4 && value <= 6,
      [style.arrow_4]: value > 6 && value <= 8,
      [style.arrow_5]: value > 8,
    });

    return (
      <div className={scoleCls}>
        {
          v.map((va, i) => <Star value={va} key={i} />)
        }
        <span className={cls} />
        <span className={style.value}>
          {this.props.value}
        </span>
      </div>
    )
  }
}

export default Score;
