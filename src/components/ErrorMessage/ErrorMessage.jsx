// src/components/ErrorMessage/ErrorMessage.jsx

import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return (
    <div className={css.errorMessage}>
      <p>Whoops, something went wrong! {message}.</p>
      <p>Please try reloading this page!</p>
    </div>
  );
}
