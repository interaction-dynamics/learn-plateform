export interface FormatPriceBasicProps {
  price: number
  currency: string
  locale: string
  className?: string
}

function FormatPriceBasic({ price, currency, locale }: FormatPriceBasicProps) {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price)

  return <span>{formattedPrice}</span>
}

FormatPriceBasic.description = 'Default format'

FormatPriceBasic.code = `function FormatPriceBasic({ price, currency, locale }: FormatPriceBasicProps) {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price)

  return <span>{formattedPrice}</span>
}

`

export default FormatPriceBasic
