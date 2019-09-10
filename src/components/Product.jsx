import React from 'react'

import PropTypes from 'prop-types'

import { Row, Col } from 'antd'
import styles from './Product.styles'

const Item = ({ name, price, urlImage, altImage }) => {
  price = price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
  return (
    <Row gutter={16} style={styles.row}>
      <Col xs={16}>
        <h3>{name}</h3>
        <p style={styles.price}>R$ {price}</p>
      </Col>
      <Col xs={8}>
        <img src={urlImage} style={styles.img} alt={altImage} />
      </Col>
    </Row>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
  altImage: PropTypes.string
}

export default Item
