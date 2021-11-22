import ContactList from './components/Contacts/ContactList';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import styles from './components/ContactForm/ContactForm.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
