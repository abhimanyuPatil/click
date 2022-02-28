const state = {
  layout: {label:"List View",value:"list"},
  zoom:{ label: '100%', value: '100' },
  sort:{ label: 'Latest', value: 'latest' }
};

const getters = {
  layout: (state: any) => state.layout,
};

const actions = {
  changeLayout({ dispatch, commit }: any, data: any) {
    commit("CHANGE_LAYOUT", { layout: data });
  },
  changeZoom({dispatch,commit}:any,data:any){
    commit('CHANGE_ZOOM',{zoom:data})
  },
  changeSort({dispatch,commit}:any,data:any){
    commit('CHANGE_SORT',{sort:data})
  }
};

const mutations = {
  CHANGE_LAYOUT(state: any, layout: any) {
    state.layout = layout.layout
  },
  CHANGE_ZOOM(state:any,zoom:any){
    state.zoom = zoom.zoom
  },
  CHANGE_SORT(state:any,sort:any){
    state.sort = sort.sort
  }
};
export const layout = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};