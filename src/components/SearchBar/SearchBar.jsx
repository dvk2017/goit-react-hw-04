// src/components/SearchBar/SearchBar.jsx
import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.error("Please enter a search query.");

export default function SearchBar({ onSubmit }) {
  return (
    <header className={css.SearchBar}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          values.query ? onSubmit(values.query) : notify();
          actions.resetForm();
        }}
      >
        <Form className={css.SearchForm}>
          <Field
            className={css.SearchFormInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.SearchFormButton} type="submit">
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}
