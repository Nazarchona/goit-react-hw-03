import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => (
  <li className={styles.item}>
    <p>{name}: {number}</p>
    <button onClick={() => deleteContact(id)}>Delete</button>
  </li>
);

export default Contact;
