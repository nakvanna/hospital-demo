export function STORE_ROOM (state, payload) {
  state.rooms.push(payload.data)
}
export function SET_ROOM(state, payload) {
  state.rooms = payload.data
}
