import React from 'react'
import PropTypes from 'prop-types'

import TypeSingle from './type-single'
import { Modal } from 'antd'

const ModalAdditional = ({ visible, handleVisible, product }) => {
  console.log(product)
  return (
    <Modal
      visible={visible}
      onCancel={handleVisible}
      title={product.name}
    >
      <TypeSingle {...product.options[0]} />
    </Modal>
  )
}

ModalAdditional.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisible: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    options: PropTypes.object
  })
}

export default ModalAdditional
