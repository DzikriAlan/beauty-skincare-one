<template>
  <MarqueeAnimation
    :duration="duration"
    :direction="direction"
    :pauseOnHover="pauseOnHover"
    :clone="clone"
  >
    <template v-for="(item, index) in data" :key="index">
      <img v-if="item.type === 'image'" :src="item.src" :alt="item.alt || ''" height="200" class="h-[200px] w-auto object-contain mx-2 rounded-lg shadow-sm" />
      <div v-else-if="item.type === 'text'" class="mx-2 rounded-lg">{{ item.content }}</div>
      <slot v-else :item="item"></slot>
    </template>
  </MarqueeAnimation>
</template>

<script>
export default {
  props: {
    data: { type: Array, required: true },
    duration: { type: Number, default: 80 },
    direction: { type: String, default: 'left' },
    pauseOnHover: { type: Boolean, default: false },
    clone: { type: Boolean, default: false }
  }
}
</script>