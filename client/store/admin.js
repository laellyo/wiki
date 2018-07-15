import { make } from 'vuex-pathify'

const state = {
  theme: {
    dark: false
  }
}

export default {
  namespaced: true,
  state,
  mutations: make.mutations(state)
}
