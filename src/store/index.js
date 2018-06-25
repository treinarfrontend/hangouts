import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let tasks = [];
if('localStorage' in window) {
  tasks = JSON.parse(window.localStorage.getItem('tasks'));
}

export default new Vuex.Store({
  state: {
    tasks: tasks,
  },

  actions: {
    addTask(context, payload) {
      const newTask = { id: context.state.tasks.length + 1, title: payload, done: false };
      const tasks = [... context.state.tasks, newTask];

      context.commit('addTask', tasks);
    },

    doneTask({ state, commit }, task_id) {
      const tasks = state.tasks.map(task => {
        if(task.id === task_id)
          task.done = !task.done;
        return task;
      });

      commit('doneTask', tasks);
    },

    removeTask({ state, commit }, task_id) {
      const tasks = state.tasks.filter(task => task.id !== task_id);

      commit('removeTask', tasks);
    },
  },

  mutations: {
    addTask(state, payload) {
      state.tasks = payload;
    },

    doneTask(state, payload) {
      state.tasks = payload;
    },

    removeTask(state, payload) {
      state.tasks = payload;
    }
  },
});
