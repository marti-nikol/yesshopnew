import React from 'react';

const ProductInfo = () => {
  return (
    <div
      className='img-delivery-landing col s4 blue-grey-text text-darken-2 center'
      style={{ padding: '20px 10px 20px 10px', height: '202.8px' }}
    >
      <div>
        <img
          className='helper'
          src={require(`../../../images/helper.png`)}
          height='46px'
        />
      </div>
      <div className='delivery-info-details col s9 offset-s3'>
        <i className='material-icons'>widgets</i>
        <h6 style={{ marginLeft: '8px' }}>Отвори пратката преди плащане</h6>
      </div>

      <div className='delivery-info-details col s9 offset-s3'>
        <i className='material-icons'>attach_money</i>
        <h6 style={{ marginLeft: '8px' }}>Плащане с наложен платеж</h6>
      </div>
      <div className='delivery-info-details col s9 offset-s3'>
        <i className='material-icons'>update</i>
        <h6 style={{ marginLeft: '8px' }}>14 дни право на връщане</h6>
      </div>
    </div>
  );
};

export default ProductInfo;
