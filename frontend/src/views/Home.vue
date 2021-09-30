<template>
  <div class="home">
    <game-window />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameWindow from '@/components/GameWindow.vue'

export default defineComponent({
  name: 'Home',
  components: {
    GameWindow
  },
  setup() {


    return {}
  }
});
</script>
