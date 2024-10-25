"use client"
import { forwardRef, ChangeEventHandler } from 'react';
import { FieldError, Control } from 'react-hook-form';
import s from './text-field.module.scss';

export interface ITextFieldProps {
  type?: string;
  name?: string;
  value?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string | string[];
  required?: boolean;
  title?: string;
  className?: string;
  error?: FieldError;
  control?: Control<any>;
  autoComplete?: string;
}

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>((props, ref) => {
    const labelClass = props.className ? `${s.label} ${s[props.className]}` : `${s.label}`;
    const inputClass = props.className ? `${s.input} ${s[props.className]}` : `${s.input}`;
    const emptyInputClass = 'hasValue';

    return (
      <label className={labelClass}>
        <input
          ref={ref}
          className={`${
            props.value !== null && props.value !== ''
              ? `${s.input} ${s[emptyInputClass]}`
              : inputClass
          }`}
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
          required={props.required}
          title={props.title}
          autoComplete={props.autoComplete}
        />
        {props.value !== '' && (
          <span className={s.placeholderTop}>{props.placeholder}</span>
        )}
        {props.value === '' && (
          <span className={s.placeholderBottom}>{props.placeholder}</span>
        )}
        {props.error && <p className={s.error}>{props.title}</p>}
      </label>
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;
