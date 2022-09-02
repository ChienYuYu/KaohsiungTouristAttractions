<template>
  <div class="card h-100">
    <img :src="item.Picture1" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ item.Name }}</h5>
      <p class="card-text">{{ item.Add }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'index'],
  data() {
    return {};
  },
};
</script>
