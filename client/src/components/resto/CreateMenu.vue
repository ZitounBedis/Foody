<template>
    <div>

   <md-card>

     <md-card-content>
        

       <input v-model="id" type="hidden">

        <md-field>
         <label for="cathegory">cathegory</label>
          <md-select v-model="cathegory" name="cathegory" id="cathegory">
            <md-option value="sandwiches">Sandwiches</md-option>
            <md-option value="plates">Plates</md-option>
            <md-option value="snacks">Snacks</md-option>
            <md-option value="other">Other</md-option>
            
          </md-select>
       
        </md-field>
        <md-field>
            <md-input v-model="name" placeholder="name"> </md-input>
        </md-field>
        <md-field>
            <md-input v-model="description" placeholder="description"> </md-input>
        </md-field>
        
        <md-field>

             
      <label>  picture </label>
      <md-file v-model="picture" accept="image/*" />
    </md-field>
           
        <md-field>
            <md-input v-model="price" placeholder="price"> </md-input>
        </md-field>
        
        <md-button @click="postMenu" class="md-primary md-raised">Save</md-button>

     </md-card-content>

   </md-card>

   




  <md-table class="md-card">
      <md-table-row>
        
        <md-table-head>Cathegory</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Picture</md-table-head>
        <md-table-head>Price</md-table-head>
        <md-table-head>Edit</md-table-head>
        <md-table-head>Delete</md-table-head>
      </md-table-row>

      <md-table-row v-for="(menu,index) in menus" :key="index">
        
        <md-table-cell>{{menu.cathegory}}</md-table-cell>
        <md-table-cell>{{menu.name}}</md-table-cell>
        <md-table-cell>{{menu.description}}</md-table-cell>
        <md-table-cell >
           <img :src="menu.picture" alt="picture">
        </md-table-cell>
        <md-table-cell>{{menu.price}}</md-table-cell>
        <md-table-cell>
           <md-button @click="getOne(menu)" class="md-primary md-raised">Edit</md-button>
        </md-table-cell>
        <md-table-cell>
           <md-button @click="deleteOne(menu._id)" class="md-primary md-raised">Delete</md-button>
        </md-table-cell>
      </md-table-row>

      
       
    </md-table>

</div>

</template>



<script>
import axios from "axios"

export default {
    name: "CreateMenu",
    data() {
        return{
            menus:[],
            id:0,
            cathegory:"",
            name:"",
            description:"",
            picture:"",
            price:"",
            url:"http://localhost/api"


        }
    },

    async created(){
        
        this.getAll()

    },

    methods:{
        async getAll(){
            const res= await axios.get(this.url);
            this.menus=res.data;
            this.id=0,
            this.cathegory="",
            this.name="",
            this.description="",
            this.picture="",
            this.price=""
        },

        async getOne(menu){
            this.id=menu._id
            this.cathegory=menu.cathegory
            this.name=menu.name
            this.description=menu.description
            this.picture=menu.picture
            this.price=menu.price

        },

        async postMenu(){
            if(this.id==0){
            await axios.post(this.url,{
                cathegory:this.cathegory,
                name:this.name,
                description:this.description,
                picture:this.picture,
                price:this.price
            
                
                
                
                })
            this.getAll()
        
            }
            else{
                await axios.put(`${this.url}/${this.id}`,{
                cathegory:this.cathegory,
                name:this.name,
                description:this.description,
                picture:this.picture,
                price:this.price
            
                
                
                
                })
                this.getAll()
            }

        },

        async deleteOne(id){
             await axios.delete(`${this.url}/${id}`)
             this.getAll()

        }

    }

}


</script>


<style>


</style>