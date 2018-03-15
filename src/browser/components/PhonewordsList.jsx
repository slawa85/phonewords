import React from 'react';
import RPT from 'prop-types';

const PhonewordsList = ({phonewords}) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {
          phonewords.map(word => (
            <li className="todo" key={word}>
              <div className="view"><label>{word}</label></div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

PhonewordsList.propTypes = {
  phonewords: RPT.array.isRequired,
}

export default PhonewordsList;