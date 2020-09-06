import React from 'react';

const ContactInfo = () => {
  return (
    <div
      className='img-delivery-landing col s4 blue-grey-text text-darken-2 center'
      style={{ padding: '20px 10px 20px 10px' }}
    >
      <div className='center'>
        <i
          className='material-icons'
          style={{ fontSize: '3.15rem', marginLeft: '15px' }}
        >
          contact_phone
        </i>
        <img
          className='viber'
          src={require(`../../../images/viber.png`)}
          height='46px'
          style={{ marginLeft: '8px' }}
        />
      </div>

      <div className='center'>
        <h6
          style={{ marginLeft: '8px', fontWeight: 'bold', marginTop: '18px' }}
        >
          <a
            className='blue-grey-text text-darken-2 '
            href='tel:0988379552'
            rel='noopener nofollow'
            style={{ fontSize: '1.5rem' }}
          >
            0988 379 552
          </a>
        </h6>
      </div>
    </div>
  );
};

export default ContactInfo;
