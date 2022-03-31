const state = {
  isLoggedIn: false,
  user: null,
  token: null,
  userId: "",
};

const getters = {
  isLoggedIn: (state: any) => state.isLoggedIn,
};

const actions = {
  login({ dispatch, commit }: any, data: any) {
    commit("LOGIN", { token: data.token, userId: data.userId });
  },
  setUserDetails({ dispatch, commit }: any, data: any) {
    commit("SET_USER", { data });
  },
  logout({ commit }: any) {
    commit("LOGOUT");
  },
};

const mutations = {
  LOGIN(state: any, data: any) {
    state.isLoggedIn = true;
    state.token = data.token;
    state.userId = data.userId;
  },
  SET_USER(state: any, data: any) {
    state.user = data.data;
  },
  LOGOUT(state: any) {
    localStorage.clear();
    state.isLoggedIn = false;
  },
};
export const user = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
