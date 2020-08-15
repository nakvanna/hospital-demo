export function STORE_EXAMINE (state, payload) {
  state.examines.push(payload.data)
}

export function SET_EXAMINE(state, payload) {
  state.examines = payload.data
}

export function SET_EXAMINE_BY_ID(state, payload) {
  state.examine_by_id = payload.data
}
