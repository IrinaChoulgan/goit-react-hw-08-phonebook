import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/actions';
import { getFilter } from '../../redux/contacts/selectors';

const Filter = () => {
  const contacts = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={contacts}
          onChange={e => dispatch(actions.changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  contacts: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
