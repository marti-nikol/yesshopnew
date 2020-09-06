import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const logoStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '25px',
    textShadow: '4px 4px 4px #d3d3d3',
  };

  return (
    <Fragment>
      <div className='row ' style={{ marginBottom: '0' }}>
        <div
          className='blue  head-rulles col s12 white-text'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i className='white-text material-icons'>volume_up</i>
          <span style={{ marginLeft: '8px' }}>
            {' '}
            ПОРЪЧАЙ БЪРЗО И ЛЕСНО БЕЗ РЕГИСТРАЦИЯ!{' '}
          </span>
        </div>
      </div>
      <div
        className=' col s4 offset-s8 social-media'
        style={{ paddingRight: '15px', marginTop: '5px' }}
      >
        <h4
          style={{
            marginTop: '13.600px',
            fontSize: '1.1rem',
            marginLeft: '5px',
          }}
        >
          <a
            className='blue-grey-text text-darken-2'
            href='tel:0988379552'
            rel='noopener nofollow'
          >
            <i className='material-icons' style={{ marginRight: '8px' }}>
              call
            </i>{' '}
            0988 379 552
          </a>
        </h4>
      </div>
      <div className='header row' id='header'>
        <div className=' col s12'>
          <Link to='/'>
            <h1 style={logoStyle}>
              <span>Jes</span>
              <span className='blue-grey-text text-darken-2'>Shop</span>
            </h1>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
