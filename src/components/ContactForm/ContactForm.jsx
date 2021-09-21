import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions.js';

function ContactForm(options) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const formNameId = uuidv4();
  const formNumberId = uuidv4();

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    options.onSubmit(name, number);
    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={formNameId}>
        Name{' '}
        <input
          className={s.input}
          id={formNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChangeName}
          placeholder={'Add name...'}
        />
      </label>

      <label className={s.label} htmlFor={formNumberId}>
        Number{' '}
        <input
          className={s.input}
          id={formNumberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChangeNumber}
          placeholder={'Add phone number...'}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(phonebookActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
