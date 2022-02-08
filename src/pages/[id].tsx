import { Grid } from '@mui/material'

import Card from 'components/Card'
import Product from 'components/Product'
import { productsAPI } from 'services/ProductsService'

import { useRouter } from 'next/router'
import React from 'react'

type ProductProps = {
  id: number
}
const ProductPage = ({ id }: ProductProps) => {
  const { data, isSuccess, isLoading } = productsAPI.useGetByIdQuery(id)

  if (isLoading) return <h2>Loading...</h2>

  if (isSuccess) {
    return (
      <>
        {data?.product && <Product product={data.product} />}
        <Grid container spacing={2} mb={5}>
          <Grid item xs={12} mt={10} mb={3}>
            <h1>Related Figures</h1>
          </Grid>
          {data?.relatedProducts.map((card) => (
            <Grid item xs={12} sm={6} lg={4} key={card.id}>
              <Card card={card} />
            </Grid>
          ))}
        </Grid>
      </>
    )
  }

  return <h2>Loading...</h2>
}

export default () => {
  const {
    query: { id },
  } = useRouter()
  if (id) return <ProductPage id={Number(id)} />
  return null
}
