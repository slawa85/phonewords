import React from 'react';
import RPT from 'prop-types';

const PhonewordsList = ({phonewords}) => {
  console.log('asdas');

  return (
    <section className="main">
      <ul className="todo-list">
        {phonewords.map(word => {
          <li className="todo">
            <div className="view">
              <label>ABC</label>
            </div>
          </li>
        })}
      </ul>
    </section>
  );
}

PhonewordsList.propTypes = {
  phonewords: RPT.array.isRequired,
}

export default PhonewordsList;
