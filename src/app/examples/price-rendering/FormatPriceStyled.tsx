export interface FormatPriceStyledProps {
  price: number
  currency: string
  locale: string
  className?: string
}

function FormatPriceStyled({
  price,
  currency,
  locale,
  className,
}: FormatPriceStyledProps) {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...(Number.isInteger(price) ? { minimumFractionDigits: 0 } : {}), // if price is an integer, don't show decimals
    // trailingZeroDisplay: 'stripIfInteger' // not supported in es2022-
  }).formatToParts(price)

  return (
    <span className="flex items-start">
      {formattedPrice
        .filter(({ type }) => type !== 'decimal')
        .map(({ type, value }, index) => (
          <div
            key={index}
            className={
              type === 'currency' || type === 'fraction' ? className : ''
            }
          >
            {value}
          </div>
        ))}
    </span>
  )
}

FormatPriceStyled.description = 'Pretty format'

FormatPriceStyled.code = `function FormatPriceStyled({ price, currency, locale, className }) {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...(Number.isInteger(price) ? { minimumFractionDigits: 0 } : {}), // if price is an integer, don't show decimals
    // trailingZeroDisplay: 'stripIfInteger' // not supported in es2022-
  }).formatToParts(price)

  return (
    <span className="flex items-start">
      {formattedPrice
        .filter(({ type }) => type !== 'decimal')
        .map(({ type, value }, index) => (
          <div
            key={index}
            className={type === 'currency' || type === 'fraction' ? className : ''}
          >
            {value}
          </div>
        ))}
    </span>
  )
}`

export default FormatPriceStyled
