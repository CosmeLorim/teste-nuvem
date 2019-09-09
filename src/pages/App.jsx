import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Skeleton, Alert, Row, Col } from 'antd'
import Item from '../components/Item'

// todo => mover para um arquivo de configuração, talvez usando dotenv?
export const baseAPI = 'https://api-teste-frontend.luan-nuvem.now.sh/api'

const fetchData = async ({ setData, setErrors, setLoading }) => {
  try {
    let products = await axios.get(`${baseAPI}/products`)
    const detailsOfProducts = await Promise.all(products.data.map(p => axios.get(`${baseAPI}/products/${p.id}`)))

    products = products.data.map((p, i) => ({ ...p, ...detailsOfProducts[i].data }))
    setData({ products: products })
  } catch (err) {
    setErrors(err)
  }
  setLoading(false)
}

const styles = {
  products: {
    marginTop: '10px',
    height: '120px',
    boxShadow: '0px 0px 2px 2px #0000001c'
  }
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({ products: [] })
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetchData({ setData, setErrors, data, setLoading })
  }, [])

  if (loading) return <Skeleton active />

  if (errors) return <Alert message='Erro ao buscar dados, por favor tente novamente mais tarde.' />

  const Itens = data.products.map(p => (
    <Col style={styles.products} key={`item${p.id}`} xs={{ push: 1, span: 20, offset: 1 }} lg={{ push: 1, pull: 1, span: 10 }}>
      <Item {...p} urlImage={p.image_url} />
    </Col>
  ))

  return (
    <div>
      <Row gutter={16}>
        {Itens}
      </Row>
    </div>
  )
}

export default App
