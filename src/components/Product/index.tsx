import Head from 'next/head'
import { Grid } from '@mui/material'

import { TCard } from 'types/Card'
import styles from './Product.module.css'

type Props = {
  product: TCard
}

export default function Product({ product }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    alert(formData.get('email'))
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.shortDescription} />
      </Head>
      <div className={styles.product}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item sm={12} md={6}>
            <img className={styles.image} src={'/images' + product.image} alt={product.name} />
          </Grid>
          <Grid item sm={12} md={6} component="form" onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.description}>{product.description}</p>
            <label className={styles.label}>
              <input name="email" type="email" placeholder="Email" required />
              <button>Pre-order Now</button>
            </label>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
