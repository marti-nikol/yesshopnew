import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
//import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    /*const logUser = { email, password };
    console.log(logUser);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(logUser);

      const res = await axios.post('/api/auth', body, config);
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data, 'ok');
    }*/
    login(email, password);
  };

  // redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <Fragment>
      <div class='left-row'>
        <h4>Потребител Вход</h4>
        <div className='form'>
          <form onSubmit={(e) => onSubmit(e)} id='order-form'>
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

            <input
              className='submit'
              id='submit'
              type='submit'
              name='submit'
              value='Вход'
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
