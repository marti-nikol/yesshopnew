import React from 'react';
import ProductInfo from './ProductInfo';
import ContactInfo from './ContactInfo';

const DeliveryInfo = () => {
  return (
    <div className='row'>
      <div className='col s12 center'>
        <div
          className='img-delivery-landing col s4 blue-grey-text text-darken-2'
          style={{ padding: '20px 10px 20px 10px' }}
        >
          <div>
            <img
              className='speedy'
              src={require(`../../../images/speedy.png`)}
            />
          </div>
          <div className='delivery-info-details col s9 offset-s3'>
            <i className='material-icons'>local_shipping</i>
            <h6 style={{ marginLeft: '8px' }}>SPEEDY ДОСТАВКА 24 ч.</h6>
          </div>

          <div className='delivery-info-details col s9 offset-s3'>
            <i className='material-icons'>location_on</i>
            <h6 style={{ marginLeft: '8px' }}>Доставка до офис от 3.70 лв.</h6>
          </div>
          <div className='delivery-info-details col s9 offset-s3'>
            <i className='material-icons'>home</i>
            <h6 style={{ marginLeft: '8px' }}>
              Доставка до личен адрес от 4.98 лв.
            </h6>
          </div>
        </div>
        <ProductInfo />
        <ContactInfo />
      </div>
    </div>
  );
};

export default DeliveryInfo;
