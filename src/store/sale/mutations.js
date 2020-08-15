export function STORE_SALE (state, payload) {
  state.sales.push(payload.data)
}
export function SET_SALE(state, payload) {
  state.sales = payload.data
}
export function SET_SALE_BY_DATE(state, payload) {
  state.sale_by_date = payload.data
}
export function SET_SALE_BY_EXAMINE(state, payload) {
  state.sale_by_examine = payload.data
}
