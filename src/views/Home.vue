<template>
    <v-container >
      <div class="d-flex justify-start">
        <div>
          <v-img src="@/assets/up_logo.png" width="90"></v-img>
        </div>

        <div class="text-center flex-grow-1">
          <p class="display-2 font-italic font-weight-black blue-grey--text">Dormitory University of Phayao</p>
          <v-btn rounded color="deep-orange" dark href="https://www.youtube.com/watch?v=DkH6rzF4Wig" target="_blank">คลิก</v-btn>
        </div>
      </div><br>

      <v-carousel>
        <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
<!--      <div class="d-flex justify-start ma-4">-->
<!--        <v-img src="@/assets/wine.jpg" height="300" width="200"></v-img>-->
<!--        <v-img src="@/assets/1.jpg" height="300" width="200"></v-img>-->
<!--      </div>-->
      <div class="text-center flex-grow-1">
        <p class="display-2 font-italic font-weight-black purple--text">จองหอพัก</p>
        <v-btn rounded color="amber" dark href="https://reg.up.ac.th/" target="_blank">คลิก</v-btn>
      </div>
      <div class="d-flex justify-start ma-4">
        <v-img src="@/assets/2.jpg" height="300" width="200"></v-img>
      </div>
    </v-container>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
        items: [
          {
            src: 'https://1.bp.blogspot.com/--GVyQGSvnjU/WQy64WQ6kfI/AAAAAAAAABk/r1hjZqwg7uQgCBEvmpjuG3iSQA7HPGbSwCLcB/w1200-h630-p-k-no-nu/2.jpg',
          },
          {
            src: 'https://f.ptcdn.info/406/032/000/1434208925-o.jpg',
          },
          {
            src: 'https://image.dek-d.com/27/0489/0333/119272276',
          },
          {
            src: 'https://f.ptcdn.info/399/032/000/1434198554-10-o.jpg',
          },
        ],
      }
    },
  }
</script>