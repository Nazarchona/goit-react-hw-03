import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Мінімальна кількість символів - 3')
    .max(50, 'Максимальна кількість символів - 50')
    .required('Обов\'язкове поле'),
  number: Yup.string()
    .min(3, 'Мінімальна кількість символів - 3')
    .max(50, 'Максимальна кількість символів - 50')
    .required('Обов\'язкове поле')
});

const ContactForm = ({ addContact }) => (
  <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      addContact(values);
      resetForm();
    }}
  >
    {({ isSubmitting }) => (
      <Form className={styles.form}>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Add Contact
        </button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
