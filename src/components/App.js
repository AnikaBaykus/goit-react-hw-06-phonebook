import './App.css';
import Container from './Container';
import Section from './Section';
import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Notification from './Notification';

export default function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
        <Notification message="No contacts"></Notification>
      </Section>
    </Container>
  );
}
