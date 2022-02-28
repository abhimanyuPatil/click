const state = {
  layout: {label:"List View",value:"list"},
};

const getters = {
  layout: (state: any) => state.layout,
};

const actions = {
  changeLayout({ dispatch, commit }: any, { layoutType }: any) {
    console.log("layoutType",layoutType)
    commit("CHANGE_LAYOUT", { layout: layoutType });
  },
};

const mutations = {
  CHANGE_LAYOUT(state: any, layout: string) {
    console.log("layoutType",layout)

    state.layout = {label:"List View",value:"list"};
  },
};
export const layout = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
