import { useState, useRef } from 'react';
import { validateLoginCheck } from '../../util/validate';

export function Login2() {
  const refs = {
    idRef: useRef(null),
    passRef: useRef(null),
  };
  const [form, setForm] = useState({ id: '', pass: '' });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleResetForm = () => {
    setForm({ id: '', pass: '' });
    refs.idRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLoginCheck(refs, form)) {
      console.log('로그인 시도:', form); 
      handleResetForm();
    }
  };

  return (
    <>
      <h1>Login2</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>아이디</label>
            <input
              type="text"
              name="id"
              value={form.id}
              ref={refs.idRef}
              onChange={handleChangeForm}
            />
          </li>
          <li>
            <label>패스워드</label>
            <input
              type="password"
              name="pass"
              value={form.pass}
              ref={refs.passRef}
              onChange={handleChangeForm}
            />
          </li>
          <li>
            <button type="submit">Login</button>
            <button type="button" onClick={handleResetForm}>
              Reset
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}
