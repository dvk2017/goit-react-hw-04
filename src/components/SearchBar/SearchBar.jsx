import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.error("Please enter a search query.");

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          values.query ? onSubmit(values.query) : notify();
          actions.resetForm();
        }}
      >
        <Form className={css.SearchForm}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}
