<template>
 <div>
             <Header/>       
               <br>  
                          <button type="submit" class="btn btn-primary fw-bold float-end" v-on:click="search()" >Search</button> 
                <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">IMAGE</th>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">POSITION</th>            
                        <th scope="col">NATION</th>
                        <th scope="col">CLUB</th>          
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in event" :key="user.id"  >
                       <td><img src="../assets/perfil.jpg" class="card-img-top" alt="MDN"></td>   
                        <th scope="row">{{ user.id}}</th>
                        <td>{{ user.name }}</td>                                
                        <td>{{ user.position }}</td>
                          <td>{{ user.nation }}</td>
                            <td>{{ user.club }}</td>                                   
                    </tr>
                </tbody>
                <nav class="pagination" role="navigation" aria-label="pagination">
      <a class="pagination-previous" v-on:click="changePage( page - 1);">Anterior</a>
      <ul class="pagination-list">
        <li>
          <a class="pagination-link is-current">{{page}}</a>
        </li>
      </ul>
        <a class="pagination-next" v-on:click="changePage( page + 1);">Siguiente</a>
     </nav> 
                </table>
    </div>
</template>
<script>
import axios from "axios";
import Header from '@/components/Header'
import global from "../../config.js";
   export default {
     components:{
       Header
     },
    data(){
        return{
           admin: '',
            empleados:null,
             nombreCoctel: "",
             page:1,
             pages:1,
             event:null      
        }       
    },
         methods: {
             search(){
            this.$router.push("/search");
        },
    fetch() {
      var request = global.PAGE + this.page;
      var url = global.API + request;
      axios.get(url,{
            headers: {
                'X-AUTH-TOKEN': global.X_AUTH_TOKEN     
            }}).then((res) => {
      this.pages= res.data.page_total; 
        this.event= res.data.items;
      });
    },
    changePage(page) {
      this.page= (page <=0 || page > this.pages) ? this.page : page
      this.fetch()
    }
  },
}
</script>
<style  scoped>
img{
  height:150px;
  width:100%;
}

div [class^="col-"]{
  padding-left:5px;
  padding-right:5px;
}
.card{
  transition:0.5s;
  cursor:pointer;
}
.card-title{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
}
.card-title i{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
  color:#ffa710
}
.card-title i:hover{
  transform: scale(1.25) rotate(100deg); 
  color:#18d4ca;
  
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
.card-text{
  height:80px;  
}

.card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  transform: scale3d(1, 1, 1);
}
</style>



          
