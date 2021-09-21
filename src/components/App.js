import './App.css';
import Container from './Container';
import Section from './Section';
import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Notification from './Notification';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="No contacts"></Notification>
        )}
      </Section>
    </Container>
  );
}
