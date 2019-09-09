import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styles from './App.styles'
import { Skeleton, Alert, Row, Col } from 'antd'
import Product from '../components/Product'

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

const App = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({ products: [] })
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetchData({ setData, setErrors, data, setLoading })
  }, [])

  if (loading) return <Skeleton active />

  if (errors) return <Alert message='Erro ao buscar dados, por favor tente novamente mais tarde.' />

  const Products = data.products.map(p => (
    <Col style={styles.products} key={`Product${p.id}`} xs={{ push: 1, span: 20, offset: 1 }} lg={{ push: 1, pull: 1, span: 10 }}>
      <Product {...p} urlImage={p.image_url} />
    </Col>
  ))

  return (
    <div>
      <Row gutter={16}>
        {Products}
      </Row>
    </div>
  )
}

export default App
