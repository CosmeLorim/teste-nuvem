import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'

const ModalAdditional = ({ visible, handleVisible }) => {
  return (
    <Modal
      visible={visible}
      onCancel={handleVisible}
      title='Pizza'
    >
      <p>Inputs...</p>
    </Modal>
  )
}

ModalAdditional.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisible: PropTypes.func.isRequired
}

export default ModalAdditional
