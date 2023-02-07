import React from "react";
import styles from "./styles.module.css";

export default function Input({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  maxLength,
  size,
  onBlur,
  error,
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        size={size}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
