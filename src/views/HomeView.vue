<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      <div class="col" v-for="(item, index) in showData" :key="index">
        <Card :item="item" :index="index" />
      </div>
    </div>
    <Pagination
    :totalPage="totalPage"
    :eachPageData="eachPageData"
    :currentPage="currentPage"
    @previous-page="previousPage"
    @next-page="nextPage"
    @go-Page="goPage"
    ></Pagination>
  </div>
</template>

<script>
import Card from '../components/CardView.vue';
import Pagination from '../components/PaginationView.vue';

export default {
  name: 'HomeView',
  components: {
    Card,
    Pagination,
  },
  data() {
    return {
      apiUrl: 'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c',
      positionData: [], // api資料放這邊
      totalPage: 0, // 總頁數
      eachPageData: [], // 每頁資料[{},{},{}...]
      currentPage: 0, // 當前在哪頁
    };
  },
  methods: {
    getData() {
      this.axios.get(this.apiUrl).then((res) => {
        this.positionData = res.data.data.XML_Head.Infos.Info;
        this.pageNum();
        // console.log(this.eachPageData);
      });
    },
    pageNum() {
      this.totalPage = Math.ceil(this.positionData.length / 30); // 12
      for (let i = 0; i < this.totalPage; i += 1) {
        const tempArr = this.positionData.slice(i * 30, i * 30 + 30);
        this.eachPageData.push(tempArr);
      }
    },
    previousPage() {
      this.currentPage -= 1;
    },
    nextPage() {
      this.currentPage += 1;
    },
    goPage(index) {
      this.currentPage = index;
    },
  },
  computed: {
    showData() {
      return this.eachPageData[this.currentPage];
    },
  },
  created() {
    this.getData();
  },
};
</script>
