export interface FormatPriceCodeProps {
  price: number
  currency: string
  locale: string
  className?: string
}

function FormatPriceCode({ price, currency, locale }: FormatPriceCodeProps) {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
  }).format(price)

  return <span>{formattedPrice}</span>
}

FormatPriceCode.description = 'Show currency code'

FormatPriceCode.code = `function FormatPriceCode({ price, currency, locale }: FormatPriceCodeProps) {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
  }).format(price)

  return <span>{formattedPrice}</span>
}
`

export default FormatPriceCode
