<template >
  <div class="">
    {{getData()}}
    <div v-for="item in tableData">
      <div class="table-row">
        <div class="table-col">
          {{item[0]}}
        </div>
        <div class="table-col">
          {{item[1]}}
        </div>
        <div class="table-col">
          {{item[2]}}
        </div>
        <div class="table-col">
          {{item[3]}}
        </div>
        <div class="table-col">
          {{item[4]}}
        </div>
        <div class="table-col">
          {{item[5]}}
        </div>
        <div class="table-col">
          {{item[6]}}
        </div>
        <div class="table-col">
          {{item[7]}}
        </div>
        <div class="table-col">
          {{item[8]}}
        </div>
        <div class="table-col">
          {{item[9]}}
        </div>
        <div class="table-col">
          {{item[10]}}
        </div>
        <div class="table-col">
          {{item[11]}}
        </div>
        <div class="table-col">
          <button class="delete-ticket-btn" @click="deleteTicket(item[0]);">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TicketsData from "../data/tickets.json";
import axios from "axios";

export default {
  name: 'table',
  data(){
      return{
        tableData : []
      }
  },
  methods:{
    getData(){
      console.log(2222222222)
      console.log(this.tableData);
      // axios.get("https://terminal/getDataHttp.php").then(function (response) {
      //   console.log(this.tableData);
      //   this.tableData = response.data.data;
      //   console.log(this.tableData);
      // })
      axios.get('https://terminal/getDataHttp.php').then(response => this.tableData = response.data.data);
    },
    deleteTicket(id){
      axios.post('https://terminal/deleteTicket.php').then(response => {console.log(response); this.getData()});
    }
  }
}
</script>