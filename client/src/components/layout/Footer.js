import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Fragment>
      <footer className='page-footer blue darken-2' style={{ padding: '0' }}>
        <div className='container'>
          <div className='row' style={{ marginBottom: '0' }}>
            <div className='col l6 s12'>
              <h5 className='white-text' style={{ fontWeight: 'bold' }}>
                JesShop
              </h5>
              <p className='grey-text text-lighten-2'>
                Магазин за очила за компютър и очила без диоптър
              </p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='grey-text text-lighten-2'>Връзка с нас</h5>
              <ul>
                <li>
                  <Link className='grey-text text-lighten-2' to='/za-nas'>
                    За нас
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-2' to='/pravila'>
                    Условия
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-2' to='/dostavka'>
                    Доставка
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-2' to='/cookies'>
                    Бисквитки
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-2' to='/gdpr'>
                    GDPR - павила и условия
                  </Link>
                </li>
                <li>
                  <Link
                    className='grey-text text-lighten-3'
                    to='/vrashtane-na-stoka'
                  >
                    Връщане на стока
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-2' to='/contact'>
                    Контакт
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className='footer-copyright'
          style={{ padding: '0', minHeight: '25px' }}
        >
          <div className='row' style={{ marginBottom: '0' }}>
            © 2020 Всички права запазени JESSHOP
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
