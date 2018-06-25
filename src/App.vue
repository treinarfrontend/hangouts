<template>
  <div class="container mx-auto mt-16">

    <t-form />

    <t-list v-if="tarefas.length">
      <t-list-item
        v-for="task in tarefas"
        :key="task.id"
        :task="task"
      />
    </t-list>

  </div>
</template>

<script>
  import TForm from './components/Form';
  import TList from './components/List';
  import TListItem from './components/ListItem';

  import { mapState } from 'vuex';

  export default {
    components: {
      TForm,
      TList,
      TListItem,
    },

    mounted() {
      this.$store.subscribe((mutation, state) => {
        if('localStorage' in window) {
          window.localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
      });
    },

    computed: {
      ...mapState({
        tarefas: 'tasks'
      }),
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    max-width: 640px;
  }
</style>

