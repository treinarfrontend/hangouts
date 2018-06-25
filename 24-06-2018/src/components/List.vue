<template>
  <transition-group name="list" tag="ul" class="bg-white px-4 py-2 w-auto list-reset rounded shadow">
    <slot />
  </transition-group>
</template>

<style lang="scss">
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .list-enter-active, .list-leave-active {
    transition: all 0.5s;
  }

  .list-enter, .list-leave-to /* .list-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
    transform: translateY(10px);
  }
</style>

