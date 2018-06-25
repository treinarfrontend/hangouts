<template>
  <form class="flex flex-row justify-between mb-6 bg-white py-2 px-2 rounded shadow" @submit.prevent="addTask">
    <input type="text" class="w-5/6 mx-1 outline-none" placeholder="O que você fará hoje?" v-model="task">
    <button class="btn btn-blue w-1/6">Adicionar</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        task: '',
      }
    },

    methods: {
      addTask() {
        if(this.task === '') {
          return;
        }

        this.$store.dispatch('addTask', this.task);
        this.task = '';
      }
    },
  }
</script>


<style lang="scss" scoped>
  @tailwind utilities;

  .btn {
    @apply .font-bold .py-2 .px-4 .rounded;
  }

  .btn-blue {
    @apply .bg-blue .text-white;
  }

  .btn-blue:hover {
    @apply .bg-blue-dark;
  }
</style>

