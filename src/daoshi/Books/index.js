import React from 'react';
import style from './index.css';

export default class Books extends React.Component {

  render() {
    return (
      <div className={style.books}>
        <div className={style.books_search}>
          <input type="text" className={style.books_search_input} placeholder="输入书名、作者名、支持拼音首字母搜索" />
          <span className={style.books_search_btn} />
        </div>
      </div>
    )
  }
}
