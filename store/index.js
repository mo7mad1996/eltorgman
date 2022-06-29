let timeout;
const state = () => ({
  subject_sections: ["سياسه", "رياضه", "فن", "ادب", "تاريخ", "علوم"],
  alert: {
    text: "",
    type: "",
    active: false,
  },
  search: '',
  unread: false
});
const getters = {
  alert: (state) => state.alert,
  subject_sections: (state) => state.subject_sections,
  search: (state) => state.search,
  unread: state => state.unread
};
const mutations = {
  close_alert(state) {
    if (timeout) clearTimeout(timeout);
    state.alert.active = false;
  },
  open_alert(state) {
    state.alert.active = true;
    // close alert after 3 secounds
  },
  set_alert(state, data) {
    state.alert.text = data;
  },
  alert_type(state, data) {
    state.alert.type = data;
  },
  set_search(state, data) {
    state.search = data;
  },
  set_unread(state, data) {
    state.unread = data
  }
};
const actions = {
  set_alert({
    commit
  }, data) {
    commit("close_alert")
    setTimeout(_ => {
      commit("open_alert");
      commit("alert_type", data.type);
      commit("set_alert", data.text);
      timeout = setTimeout((_) => commit("close_alert"), 10e3);
    }, 30)
  },
  set_unread({
    commit
  }, data) {
    commit('set_unread', data)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};