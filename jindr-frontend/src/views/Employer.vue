<template>
    <button class="job-post" v-on:click="showModal">Post a Job</button>
    <div v-show="modal" class="shadow" v-on:click="showModal"></div>
    <JobPost v-show="modal"/>
    <main>
        <h1>Guy 1</h1>
    </main>
</template>
<script>
import JobPost from '@/components/Jobpost.vue'
export default {
    name: "Employer",
    data(){
        return{
            modal: false,
        }
    },
    components:{
        JobPost,
    },
    methods:{
        showModal(){
            if(this.modal == true){
                this.modal = false;
            }else{
                this.modal = true;
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles.scss";
    .job-post{
        font-size: 20px;
        background-color: $primary-colour;
        padding: 10px 30px 10px 30px;
        color: $vue-black;
        position: absolute;
        display: block;
        top: 40px;
        left: 50px;
        border-radius: 20px;
        &:hover{
            background-color: $primary-hover;
        }
    }
    .shadow{
        background-color: rgba(0, 0, 0, 0.205);
        position: fixed;
        height: 100vh;
        width:100vw;
        z-index: 1;
    }

</style>