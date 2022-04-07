const state = {
  layout: { label: "Grid View", value: "grid" },
  zoom: { label: "100%", value: "100" },
  sort: { label: "Latest", value: "latest" },
  isMinimal: false,
  currentScreen: "home",
  theme: "light",
};

const getters = {
  layout: (state: any) => state.layout,
};

const actions = {
  changeLayout({ dispatch, commit }: any, data: any) {
    commit("CHANGE_LAYOUT", { layout: data });
  },
  changeZoom({ dispatch, commit }: any, data: any) {
    commit("CHANGE_ZOOM", { zoom: data });
  },
  changeSort({ dispatch, commit }: any, data: any) {
    commit("CHANGE_SORT", { sort: data });
  },
  setMinimalView({ dispatch, commit }: any, data: any) {
    commit("SET_MINIMAL_VIEW");
  },
  toggleTheme({ dispatch, commit }: any) {
    commit("TOGGLE_THEME");
  },
  setCurrentScreen({ dispatch, commit }: any, screen: any) {
    commit("SET_CURRENT_SCREEN", { screen });
  },
};

const mutations = {
  CHANGE_LAYOUT(state: any, layout: any) {
    state.layout = layout.layout;
  },
  CHANGE_ZOOM(state: any, zoom: any) {
    state.zoom = zoom.zoom;
  },
  CHANGE_SORT(state: any, sort: any) {
    state.sort = sort.sort;
  },
  SET_MINIMAL_VIEW(state: any) {
    state.isMinimal = true;
  },
  SET_CURRENT_SCREEN(state: any, screen: any) {
    state.currentScreen = screen.screen;
  },
  TOGGLE_THEME(state: any) {
    if (state.theme === "dark") {
      state.theme = "light";
    } else {
      state.theme = "dark";
    }
  },
};
export const layout = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
