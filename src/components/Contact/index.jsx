import React, {useState} from 'react';
import {useLocation} from '@reach/router';
import axios from 'axios';
import {validateEmail, encode} from './helpers';
import useSearch from '../../hooks/useSearch';
import useHashScroll from '../../hooks/useHashScroll';
import locales from './locales';
import Button from '../Button';
import Check from './Check';

import styles from './styles.module.css';

/**
 * form for netlify send
 */
const Contact = ({lang}) => {
  const search = useSearch();
  const location = useLocation();
  useHashScroll();
  /** value init */
  const initError = {
    name: false,
    emailEmpty: false,
    emailError: false,
    message: false,
  };
  const initValue = {name: '', email: '', message: ''};
  /** state */
  const [pending, togglePending] = useState(false);
  const [showPopup, togglePopup] = useState(search.get('thanks') !== null);
  const [state, setValue] = useState(initValue);
  const [_error, showError] = useState(initError);

  /**
   * control form value and show error
   */
  const controleValue = () => {
    let send = true;
    const {name, email, message} = state;
    const err = initError;
    if (name === '') {
      err.name = true;
      send = false;
    }
    if (email === '') {
      err.emailEmpty = true;
      send = false;
    } else if (validateEmail(email) === false) {
      err.emailError = true;
      send = false;
    }
    if (message === '') {
      err.message = true;
      send = false;
    }
    showError({...err});
    return send;
  };

  /**
   * send email
   * @param {*} e
   */
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (controleValue() === false) {
      return;
    }
    showError({...initError});
    togglePending(true);
    axios
      .post('/', encode({'form-name': form.getAttribute('name'), ...state}), {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      })
      .then(() => {
        togglePopup(true);
        togglePending(false);
        setValue(initValue);
      })
      .catch(error => console.log(error));
  };

  /**
   * save value input
   * @param {} e
   */
  const handleChange = e =>
    setValue({...state, [e.target.name]: e.target.value});

  return (
    <div className={styles.contact_form} id="gm-contact-form">
      {showPopup && (
        <div className={styles.thanks}>
          <div>
            <Check />
            <p>{locales[lang].thanks}</p>
            <div>
              <Button
                mode="success"
                onClick={e => {
                  e.preventDefault();
                  togglePopup(false);
                }}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      )}
      <form
        action={`${location.pathname}?thanks#gm-contact-form`}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        required
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">{locales[lang].label.name}</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            className={_error.name === true ? styles.errorInput : ''}
            aria-invalid={_error.name}
            aria-describedby={_error.name ? 'nameerror' : null}
          />
          {_error.name && (
            <div id="nameerror" className={styles.error}>
              {locales[lang].errors.nameEmpty}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="email">{locales[lang].label.email}</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
            className={
              _error.emailEmpty === true || _error.emailError === true
                ? styles.errorInput
                : ''
            }
            aria-invalid={
              _error.emailEmpty === true || _error.emailError === true
            }
            aria-describedby={
              _error.emailEmpty === true
                ? 'emailempty'
                : _error.emailError === true
                ? 'emailerror'
                : null
            }
          />
          {_error.emailEmpty && (
            <div id="emailempty" className={styles.error}>
              {locales[lang].errors.emailEmpty}
            </div>
          )}
          {_error.emailError && (
            <div id="emailerror" className={styles.error}>
              {locales[lang].errors.emailError}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="message">{locales[lang].label.message}</label>
          <textarea
            row="8"
            name="message"
            value={state.message}
            onChange={handleChange}
            className={_error.message === true ? styles.errorInput : ''}
            aria-invalid={_error.message}
            aria-describedby={_error.message ? 'messageerror' : null}
            required
          />
          {_error.message && (
            <div id="messageerror" className={styles.error}>
              {locales[lang].errors.messageEmpty}
            </div>
          )}
        </div>
        <div className={styles.action}>
          <Button mode="primary" disabled={pending} type="submit">
            {locales[lang].actions.button}
          </Button>
        </div>
      </form>
    </div>
  );
};

Contact.defaultProps = {
  lang: 'fr',
};

export default Contact;
