<template>
  <div>
    <img
      v-if="this.image"
      class="avatar-img"
      :src="`https://files.radio-golha.com${this.image}`"
      :style="{
        width: `${this.size}px`,
        height: `${this.size}px`,
        'border-radius': `${radius}px`
      }"
    />
    <div
      v-else
      class="avatar-img avatar-no-img"
      :style="{
        width: `${this.size}px`,
        height: `${this.size}px`,
        'border-radius': `${radius}px`
      }"
    >
      <f7-icon f7="mic"></f7-icon>
    </div>
  </div>
</template>

<style lang="scss">
.avatar-img {
  object-fit: cover;
  filter: grayscale(100%);
  &.avatar-no-img {
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      color: #ffffff;
      font-size: 7rem;
    }
  }
}
</style>

<script>
export default {
  props: ["image", "size", "radius"]
};
</script>
