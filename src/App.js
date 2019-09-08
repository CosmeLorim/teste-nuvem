import React from 'react'
import { version, Button } from 'antd'

function App () {
  return (
    <div className='App'>
      <h1>Please fork this codesandbox to reproduce your issue.</h1>
      <div>Current antd version: {version}</div>
      <div style={{ marginTop: '16px' }}>
        <Button type='primary'>Example button</Button>
      </div>
    </div>
  )
}

export default App
