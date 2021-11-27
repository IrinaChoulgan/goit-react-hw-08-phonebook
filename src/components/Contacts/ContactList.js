import { React, useEffect } from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  const deleteContact = id => dispatch(operations.deleteContact(id));
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p className={styles.text}>
            {name} : {number}
          </p>
          <button className={styles.btn} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
