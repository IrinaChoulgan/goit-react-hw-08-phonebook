import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../Contacts/ContactList';
import styles from '../ContactForm/ContactForm.module.css';

const ContactsView = () => {
  return (
    <div className={styles.container}>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;
