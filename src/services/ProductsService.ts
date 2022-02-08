import { baseQuery } from 'helpers/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react'
import { TCard } from 'types/Card';

type GetProductsDTO = {
  data: TCard[]
  meta: {
    totalPages: number
  }
}

type GetProductByIdDTO = {
  product: TCard
  relatedProducts: TCard[]
}

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery,
  endpoints: build => ({
    get: build.mutation<GetProductsDTO, number | null>({
      query: (page = 0) => ({
        url: 'products',
        method: 'GET',
        params: { page }
      })
    }),
    getById: build.query<GetProductByIdDTO, number | null>({
      query: (productId = 0) => ({
        url: `products/${productId}`,
        method: 'GET',
      }),
      transformResponse: (res: { data: GetProductByIdDTO }) => res.data
    }),
  })
})