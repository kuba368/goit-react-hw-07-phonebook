import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { Notification } from './components/Notification/Notification';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={styles.header}>Phonebook</h1>
      <ContactForm />
      <h1 className={styles.header}>Contacts</h1>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification message="Your phonebook is empty!" />
      )}
    </>
  );
};

export default App;
