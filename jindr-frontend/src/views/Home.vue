<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
	<ul class="background">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
	<button v-if="!front" class="back-button" v-on:click="home">↩ Back</button>
	<Login v-if="!front"/>
	<main v-if="front">

		<header>
			<h1>JINDR</h1>
			<p>A covenient way to match employers and employees</p>
		</header>
		<div class="select">
			<h2>I am a:</h2>
			<section>
				<button v-on:click="employer">Employer</button>
				<button v-on:click="employee">Employee</button>
			</section>
		</div>
	</main>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
export default {
	name: 'Home',
	data(){
		return{
			front: true,
		}
	},
	components:{
		Login,
	},
	methods:{
		employee(){
			// this.$router.push("/employee");
			this.front = false;
			this.$store.commit("changeLoginType", "employee");
		},
		employer(){
			// this.$router.push("/employer");
			this.front = false;
			this.$store.commit("changeLoginType", "employer");
		},
		home(){
			this.front = true;
			this.$store.commit("changeLoginType", "home");
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/styles.scss";
	.back-button{
		position: absolute;
		top: 40px;
		left: 50px;
		width: max-content;
		height: max-content;
		background-color: white;
		border: none;
		font-size: 20px;
		padding: 10px 30px 10px 30px;
	}
	main{	
		
		height: 100%;
	}

	h1{
		font-size: 4rem;
		font-family: Arial, Helvetica, sans-serif;
	}

	header{
		padding-top: 100px;
		&>p{
			font-size: 25px;
		}
	}

	.select{
		margin-top: 50px;

		& > section{
			display: flex;
			flex-direction: row;
			justify-content: center;
			width: 60%;
			margin: auto;


			& > button{
				width: 200px;
				font-size: 1.5rem;
				padding: 10px 0px;
				background-color: $primary-colour;
				color: white;
				margin: 10px;
				&:hover{
					background-color: $primary-hover;
				}

			}
		}
	}

	@keyframes animate {
		0%{
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}
		100%{
			transform: translateY(-1000px) rotate(720deg);
			opacity: 0;
			border-radius: 50%;
		}
	}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    // background: #6be1df;
	background-color: #9ae7f7;
    overflow: hidden;
	z-index: -2;
}
.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 19s linear infinite;
}




.background li:nth-child(0) {
    left: 81%;
    width: 140px;
    height: 140px;
    bottom: -140px;
    animation-delay: 1s;
}
.background li:nth-child(1) {
    left: 58%;
    width: 95px;
    height: 95px;
    bottom: -95px;
    animation-delay: 1s;
}
.background li:nth-child(2) {
    left: 46%;
    width: 227px;
    height: 227px;
    bottom: -227px;
    animation-delay: 4s;
}
.background li:nth-child(3) {
    left: 23%;
    width: 189px;
    height: 189px;
    bottom: -189px;
    animation-delay: 15s;
}
.background li:nth-child(4) {
    left: 40%;
    width: 118px;
    height: 118px;
    bottom: -118px;
    animation-delay: 1s;
}
.background li:nth-child(5) {
    left: 53%;
    width: 168px;
    height: 168px;
    bottom: -168px;
    animation-delay: 15s;
}
.background li:nth-child(6) {
    left: 17%;
    width: 169px;
    height: 169px;
    bottom: -169px;
    animation-delay: 24s;
}
.background li:nth-child(7) {
    left: 50%;
    width: 136px;
    height: 136px;
    bottom: -136px;
    animation-delay: 9s;
}
.background li:nth-child(8) {
    left: 63%;
    width: 112px;
    height: 112px;
    bottom: -112px;
    animation-delay: 26s;
}
.background li:nth-child(9) {
    left: 45%;
    width: 180px;
    height: 180px;
    bottom: -180px;
    animation-delay: 16s;
}
.background li:nth-child(10) {
    left: 88%;
    width: 235px;
    height: 235px;
    bottom: -235px;
    animation-delay: 35s;
}
.background li:nth-child(11) {
    left: 44%;
    width: 177px;
    height: 177px;
    bottom: -177px;
    animation-delay: 14s;
}
.background li:nth-child(12) {
    left: 88%;
    width: 102px;
    height: 102px;
    bottom: -102px;
    animation-delay: 31s;
}
.background li:nth-child(13) {
    left: 28%;
    width: 153px;
    height: 153px;
    bottom: -153px;
    animation-delay: 61s;
}
.background li:nth-child(14) {
    left: 33%;
    width: 191px;
    height: 191px;
    bottom: -191px;
    animation-delay: 21s;
}
.background li:nth-child(15) {
    left: 32%;
    width: 164px;
    height: 164px;
    bottom: -164px;
    animation-delay: 72s;
}
.background li:nth-child(16) {
    left: 38%;
    width: 147px;
    height: 147px;
    bottom: -147px;
    animation-delay: 64s;
}
.background li:nth-child(17) {
    left: 68%;
    width: 193px;
    height: 193px;
    bottom: -193px;
    animation-delay: 6s;
}
.background li:nth-child(18) {
    left: 27%;
    width: 250px;
    height: 250px;
    bottom: -250px;
    animation-delay: 51s;
}
.background li:nth-child(19) {
    left: 47%;
    width: 220px;
    height: 220px;
    bottom: -220px;
    animation-delay: 62s;
}
.background li:nth-child(20) {
    left: 32%;
    width: 173px;
    height: 173px;
    bottom: -173px;
    animation-delay: 50s;
}
.background li:nth-child(21) {
    left: 19%;
    width: 175px;
    height: 175px;
    bottom: -175px;
    animation-delay: 22s;
}

	

</style>