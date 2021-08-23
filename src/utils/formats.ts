export function formatPriceBRL(price: number | string) {
  let _price = Number(price)
  return _price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
}
