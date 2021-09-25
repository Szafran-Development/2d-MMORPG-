<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameClient from "@/client/core/GameClient";

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const game = GameClient.getInstance()
// dasad
    return {}
  }
});
</script>
