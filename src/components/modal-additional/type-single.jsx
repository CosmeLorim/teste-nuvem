import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Radio } from 'antd'

const style = {
  radio: {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  }
}

const TypeSingle = ({ title, values }) => {
  const radiosButton = values.map(v => <Radio key={`option${v.id}`} style={style.radio} value={v.id}>{v.name}</Radio>)

  return (
    <Card title={title}>
      <Radio.Group>
        {radiosButton}
      </Radio.Group>
    </Card>
  )
}

TypeSingle.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.shape({

  }))
}

export default TypeSingle
