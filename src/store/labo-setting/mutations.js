export function SET_LABO_SETTING (state, payload) {
  state.labo_settings = payload.data
}
export function STORE_LABO_SETTING (state, payload) {
  state.labo_settings.push(payload.data)
}
