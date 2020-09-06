import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import axios from 'axios';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password did not match!', 'danger');
    } else {
      /*const newUser = { name, email, password };
      console.log(newUser);
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify(newUser);

        const res = await axios.post('/api/users', body, config);
        console.log(res.data);
      } catch (error) {
        console.error(error.response.data, 'ok');
      }*/
      register({ name, email, password });
    }
  };

  // if register success
  if (isAuthenticated) {
    return <Redirect to='/login' />;
  }
  return (
    <Fragment>
      <div class='left-row'>
        <h4>Потребител регистрация:</h4>
        <div className='form'>
          <form onSubmit={(e) => onSubmit(e)} id='order-form'>
            <label for='name'>&Icy;&mcy;&iecy;&ncy;&acy;:</label>
            <input
              className='form-el'
              id='name'
              type='text'
              name='name'
              placeholder='Имена'
              value={name}
              onChange={(e) => onChange(e)}
            />
            <label for='email'>E-mail:</label>
            <input
              className='form-el'
              id='email'
              type='text'
              name='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => onChange(e)}
            />

            <label for='password'>&Pcy;&acy;&rcy;&ocy;&lcy;&acy;:</label>
            <input
              className='form-el'
              id='password'
              type='password'
              name='password'
              placeholder='Парола'
              value={password}
              onChange={(e) => onChange(e)}
            />
            <label for='password2'>
              &Pcy;&ocy;&vcy;&tcy;&ocy;&rcy;&iecy;&tcy;&iecy;
              &pcy;&acy;&rcy;&ocy;&lcy;&acy;:
            </label>
            <input
              className='form-el'
              id='password2'
              type='password'
              name='password2'
              placeholder='Повторете парола'
              value={password2}
              onChange={(e) => onChange(e)}
            />

            <input
              className='submit'
              id='submit'
              type='submit'
              name='submit'
              value='Регистрация'
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
