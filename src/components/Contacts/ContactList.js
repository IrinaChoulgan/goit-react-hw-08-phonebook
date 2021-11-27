import { React, useEffect } from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { fetchContacts } from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p className={styles.text}>
            {name} : {number}
          </p>
          <button className={styles.btn} onClick={() => onDeleteContact(id)}>
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
      id: PropTypes.any,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onClick: PropTypes.func,
};

export default ContactList;
