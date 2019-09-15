import React from 'react'
import PropTypes from 'prop-types'
import { Radio, Form, Typography } from 'antd'

import styles from './type-sigle.styles.js'

// Função para caso o usuário clique sobre o opção já selecionada, neste caso deve remover a seleção
const removeSellection = ({ form, id, value }) => {
  const fieldValue = form.getFieldValue(id)
  // Caso o campo clicado seja o já selecionado remove a seleção do Radio Button
  if (value === fieldValue) {
    form.setFieldsValue({ [id]: undefined })
  }
}

const renderRadioButton = ({ form, id }) => v => {
  const price = v.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
  return (
    <div key={`option${v.id}`}>
      <Radio style={styles.radio} value={v.id} onClick={e => removeSellection({ form, id, value: v.id })}>
        {v.name}
      </Radio>
      <Typography.Paragraph style={styles.paragraph}> + R$ {price} </Typography.Paragraph>
    </div>
  )
}

const TypeSingle = ({ id, title, values, form, required }) => {
  const { getFieldDecorator } = form
  const radiosButton = values.map(renderRadioButton({ form, id }))

  return (
    <Form.Item label={title}>
      {getFieldDecorator(id, {
        rules: [{ required, message: 'Necessário escolher uma opção' }]
      })(
        <Radio.Group>
          {radiosButton}
        </Radio.Group>
      )}
    </Form.Item>
  )
}

TypeSingle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  form: PropTypes.object,
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }))
}

export default TypeSingle
