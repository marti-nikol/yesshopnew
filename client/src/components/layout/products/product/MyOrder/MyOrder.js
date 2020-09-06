import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMyOrder } from '../../../../../actions/product';
import PropTypes from 'prop-types';

function MyOrder({ getMyOrder, order, match }) {
  useEffect(() => {
    getMyOrder(match.params.id);
  }, [getMyOrder, match.params.id]);
  return (
    <Fragment>
      {order && order.product && (
        <div className='row'>
          <div className='col s12 center'>
            <h1>Вашата поръчка</h1>
            <h2>Клиент</h2>
            <h5>{'Имена: ' + order.names}</h5>
            <h5>{'Мобилен номер: ' + order.mobile}</h5>
            <h5>{'Адрес за доставка: ' + order.address}</h5>
            <span className='red-text'>
              Продуктът ще бъде доставен с куриерска фирма SPEEDY в срок до 2
              работни дни!
            </span>
            <br />
            <span className='red-text'>
              Доставка до офис на SPEEDY 4.10 лв.
            </span>
            <span className='red-text'> Доставка до личен адрес 5.50 лв.</span>
            <h2>Продукт</h2>
            <h5>{order.product.title}</h5>
            <img
              src={require('../../../../../images/' + order.product.imagePath)}
              style={{ width: '50%' }}
            />
            <h5>{'Количество: ' + order.qty + ' бр.'}</h5>
            <h5>{'Цена: ' + order.product.price + '.00 лв.'}</h5>
            <h4>
              {'Стойност на поръчката: ' +
                parseInt(order.qty) * parseInt(order.product.price) +
                '.00 лв.'}
            </h4>
            <h6 className='blue-text text-darken-3'>
              {'Линк на поръчката: ' + window.location.href}
            </h6>
          </div>
        </div>
      )}
    </Fragment>
  );
}

MyOrder.propTypes = {
  getMyOrder: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  order: state.product.order,
});
export default connect(mapStateToProps, { getMyOrder })(MyOrder);
