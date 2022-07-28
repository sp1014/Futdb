<template>
    <div>
        <Header />
<div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" v-model="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary"  v-on:click="fetch()">search</button>
</div>
<br/>
<div class="card" style="width: 18rem;">
  <img src="../assets/perfil.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{play.name}}</h5>
    <p class="card-text">{{play.age}} age</p>
        <p class="card-text">defending: {{play.defending}}</p>
            <p class="card-text">dribbling: {{play.dribbling}}</p>
              <p class="card-text">dribbling: {{play.dribbling}}</p>
                <p class="card-text">nation: {{play.nation}}</p>
                  <p class="card-text">position: {{play.position}}</p>  
  </div>
</div>
    </div>
</template>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script>
import Header from '@/components/Header.vue'
import axios from 'axios';
import global from "../../config.js";
export default {
    name:"search", 
    data:function(){
        return {
        Search:"",
             page:1,
             pages:1,
             event:null,
             player:"",
             id:"",
             play:"",
             img:"",
        }
    },
    components:{
        Header
    },
    methods:{     
  fetch() {
      var request = global.PAGE + this.page;
      var url = global.API + request;
      axios.get(url,{
            headers: {
                'X-AUTH-TOKEN': global.X_AUTH_TOKEN
           
            }}).then((res) => {
        this.pages= res.data.page_total; 
        this.event= res.data.items;
      for (var i=0;i<this.event.length;i++) {
  var name  = this.event[i].name;
  if (name == this.Search || name == this.Search) {
     this.player = JSON.stringify(this.event[i], null, 2)
     this.id =JSON.parse(this.player)
          }
        }
      });
       var urlId = global.API_PLAYER+this.id.id
        axios.get(urlId,{
            headers: {
                'X-AUTH-TOKEN': global.X_AUTH_TOKEN
           
            }}).then((res) => {
             this.play = res.data.item
             console.log(this.play)
            });
            var urlImg = global.API_PLAYER+this.id.id+"/image"
        axios.get(urlImg,{
            headers: {
                'X-AUTH-TOKEN': global.X_AUTH_TOKEN 
            }}).then((res) => {
             this.img = res.data
             console.log(this.img)
            });
    },     
 },  
}
</script>
<style scoped>
.left{
    text-align:  left;
}
</style>