import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

import type { NextPage } from 'next'
import type { TCard } from 'types/Card'

import Card from 'components/Card'
import { productsAPI } from 'services/ProductsService'

import styles from 'styles/Index.module.css'

const Home: NextPage = () => {
  const [cardsList, setCardsList] = useState<TCard[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [getProducts] = productsAPI.useGetMutation()

  useEffect(() => {
    fetchData(page)
  }, [page])

  function fetchData(fetchPage: number) {
    getProducts(fetchPage)
      .unwrap()
      .then((res) => {
        setCardsList([...cardsList, ...res.data])
        setTotalPages(res.meta.totalPages)
      })
  }

  function next() {
    setPage(page + 1)
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Star Wars Figures</h1>
        <h2 className={styles.h2}>Find the latest products for the biggest fans of the iconic saga.</h2>
      </header>
      <InfiniteScroll
        dataLength={cardsList.length}
        next={next}
        hasMore={Boolean(totalPages - page)}
        loader={<h2 className={styles.h2}>Loading...</h2>}
        endMessage={<h2 className={styles.h2}>Yay! You have seen it all</h2>}
      >
        <Grid container spacing={2}>
          {cardsList.map((card) => (
            <Grid item xs={12} sm={6} lg={4} key={card.id}>
              <Card card={card} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </>
  )
}

export default Home
