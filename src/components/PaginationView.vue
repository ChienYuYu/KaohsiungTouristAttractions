<template>
  <nav aria-label="Page navigation example" class="mt-5">
  <ul class="pagination justify-content-center flex-wrap">
    <li class="page-item" :class="{'disabled' : currentPage === 0}">
      <a class="page-link" href="#"
      @click.prevent="$emit('previous-page')">Previous</a>
    </li>
    <li class="page-item" :class="{'active': currentPage == index}"
    v-for="(item, index) in eachPageData" :key="index">
      <a class="page-link" href="#" @click.prevent="$emit('go-page', index)">
        {{ index + 1 }}
      </a>
    </li>
    <li class="page-item" :class="{'disabled': currentPage === totalPage - 1}">
      <a class="page-link" href="#"
      @click.prevent="$emit('next-page')">Next</a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  props: ['totalPage', 'eachPageData', 'currentPage'],
};
</script>
