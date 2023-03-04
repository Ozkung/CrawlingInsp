export const state = () => ({
  id_user: '',
})
export const mutations = {
  saveID(state, val) {
    state.id_user = val
  },
}
