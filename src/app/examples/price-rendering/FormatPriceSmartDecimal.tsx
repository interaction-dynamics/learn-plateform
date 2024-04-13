export interface FormatPriceSmartDecimalProps {
  price: number
  currency: string
  locale: string
  className?: string
}

function FormatPriceSmartDecimal({
  price,
  currency,
  locale,
}: FormatPriceSmartDecimalProps) {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...(Number.isInteger(price) ? { minimumFractionDigits: 0 } : {}), // if price is an integer, don't show decimals
    // trailingZeroDisplay: 'stripIfInteger' // not supported in es2022
  }).format(price)

  return <span>{formattedPrice}</span>
}

FormatPriceSmartDecimal.description = 'No decimals for integer prices'

FormatPriceSmartDecimal.code = `function FormatPriceSmartDecimal({ price, currency, locale}) {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...(Number.isInteger(price) ? { minimumFractionDigits: 0 } : {}), // if price is an integer, don't show decimals
    // trailingZeroDisplay: 'stripIfInteger' // not supported in es2022
  }).format(price)

  return <span>{formattedPrice}</span>
}`

export default FormatPriceSmartDecimal
