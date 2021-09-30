<template>
  <div class="game-window-wrapper">
    <canvas id="game-window" class="game-window" ref="gameWindow" width="544" height="544"></canvas>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useGame } from "@/composable/useGame";

export default defineComponent({
  name: 'GameWindow',
  setup() {

    const { getGameInstance } = useGame()

    onMounted(() => getGameInstance())

    return {}
  }
})
</script>

<style scoped lang="scss">
.game-window {
  border: 1px solid black;
}
</style>
