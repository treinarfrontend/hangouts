<template>
  <li class="py-3 border-b flex justify-between" :class="{'done': task.done}">
    <span class="title" @click="doneTask(task.id)">{{ task.title }}</span>
    <span class="delete text-red" @click="removeTask">remover</span>
  </li>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['task'],

    methods: {
      removeTask(task_id) {
        this.$store.dispatch('removeTask', this.task.id);
      },

      ...mapActions(['doneTask']),
    },
  }
</script>

<style lang="scss">
  @tailwind utilities;

  li {
    &:last-child {
      border-bottom-color: transparent;
    }

    .title,
    .delete {
      cursor: pointer;
    }

    .title {
      text-transform: lowercase;
    }

    &.done > .title {
      @apply .text-grey;

      text-decoration: line-through;
    }
  }
</style>

