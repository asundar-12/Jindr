<template>
	<body>
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
	<div class='signup-container'>
	  <div class='left-container'>
	    <h1>
	    
	      EMPLOYEE'S PROFILE
	    </h1>
	    <div class='employee'>
	      <img src='https://thumbs.dreamstime.com/z/happy-cv-man-holding-personnel-resume-concept-template-design-work-animation-over-white-background-full-length-happy-cv-man-120972864.jpg'>
	    </div>
	  </div>
	  <div class='right-container'>
	    <header>
	      <h1>Fill out your profile</h1>
	      <div class='set'>
		<div class='e-name'>
		  <label for='e-name'>Name   </label>
		  <input id='e-name' placeholder="Enter your full name" type='text'>
		</div>
		
	      </div>
	      <div class='set'>
		<div class='e_exp'>
		  <label for='e_exp'>Experience</label>
		  <input id='e_exp' placeholder="Enter your experience" type='text'>
		</div>
		<div class='e-birthday'>
		  <label for='e-birthday'>Birthday</label>
		  <input id='e-birthday' placeholder='MM/DD/YYYY' type='text'>
		</div>
	      </div>
	      <div class='set'>
		<div class='e-gender'>
		  <label for='e-gender-female'>Gender</label>
		  <div class='radio-container'>
		    <input checked='' id='e-gender-female' name='e-gender' type='radio' value='female'>
		    <label for='e-gender-female'>Female</label>
		    <input id='e-gender-male' name='e-gender' type='radio' value='male'>
		    <label for='e-gender-male'>Male</label>
		  </div>
		  </div>
		  <div class='e_skills'>
		  <label for='e_skills'>Skills</label>
		  <input id='e_skills' placeholder="Enter your skills" type='text'>
		
		</div>
		
	      </div>
	       <div class='set'>
		<div class='e_education'>
		  <label for='e_education'>Education</label>
		  <input id='e_education' placeholder="Enter your education" type='text'>
		
		</div>
		  <div class='e_interests'>
		  <label for='e_interests'>Interests</label>
		  <input id='e_interests' placeholder="Enter your interests" type='text'>
		
		</div>
		
	      </div>
	  
	    </header>
	    <footer>
	      <div class='set'>
		<button id='back' v-on:click="home">Back</button>
		<button id='next'>Next</button>
	      </div>
	    </footer>
	  </div>
	</div>
	</body>
	</template>
	
	<script>
		export default {
			name: 'Employee',
			methods:{
				home(){
					this.$router.push("/");
				},
			
			}
		}
	</script>
	
	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped>
		@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap");
		* {
		  box-sizing: border-box;
		  margin: 0;
		  padding: 0;
		}
		
		body {
		  align-items: center;
		  
		  color: rgba(0, 0, 0, 0.8);
		  display: grid;
		  font-family: "Montserrat", sans-serif;
		  font-size: 14px;
		  font-weight: 400;
		  height: 100vh;
		  justify-items: center;
		  weight: 100vw;
		}
		
		.signup-container {
		  display: grid;
		  grid-template-areas: "left right";
		  max-width: 900px;
		}
		
		.left-container {
		  background: #ffffff;
		  overflow: hidden;
		  padding: 40px 0 0 0;
		  position: relative;
		  text-align: center;
		  width: 300px;
		}
		.left-container h1 {
		  color: rgba(0, 0, 0, 0.8);
		  display: inline-block;
		  font-size: 24px;
		}
		.left-container h1 i {
		  background: #F7B1AB;
		  border-radius: 50%;
		  color: #807182;
		  font-size: 24px;
		  margin-right: 5px;
		  padding: 10px;
		  transform: rotate(-45deg);
		}
		.left-container .employee {
		  bottom: -5px;
		  position: absolute;
		  text-align: center;
		}
		.left-container .employee:before {
		  background: #ffffff;
		  content: "";
		  height: 100%;
		  left: 0;
		  opacity: 0.4;
		  position: absolute;
		  width: 100%;
		  z-index: 1;
		}
		.left-container img {
		 
		  width: 70%;
		}
		
		.right-container {
		  background: #08cbd1;
		  display: grid;
		  grid-template-areas: "." ".";
		  width: 500px;
		}
		.right-container h1:nth-of-type(1) {
		  color: rgba(0, 0, 0, 0.8);
		  font-size: 28px;
		  font-weight: 600;
		}
		.right-container .set {
		  display: flex;
		  justify-content: space-between;
		  margin: 10px 0;
		}
		.right-container input {
		  border: 1px solid rgba(0, 0, 0, 0.1);
		  border-radius: 4px;
		  height: 38px;
		  line-height: 38px;
		  padding-left: 5px;
		}
		.right-container input, .right-container label {
		  color: rgba(0, 0, 0, 0.8);
		}
		.right-container header {
		  padding: 40px;
		}
		.right-container label, .right-container input, .right-container .pets-photo {
		  width: 176px;
		}
		
		.right-container footer {
		  align-items: center;
		  background: #fff;
		  display: grid;
		  padding: 5px 40px;
		}
		.right-container footer button {
		  border: 1px solid rgba(0, 0, 0, 0.2);
		  height: 38px;
		  line-height: 38px;
		  width: 100px;
		  border-radius: 19px;
		  font-family: "Montserrat", sans-serif;
		}
		.right-container footer #back {
		  background: #fff;
		  transition: 0.2s all ease-in-out;
		}
		.right-container footer #back:hover {
		  background: #51e8ed;
		  color: white;
		}
		.right-container footer #next {
		  background: #51e8ed;
		  border: 1px solid transparent;
		  color: #fff;
		}
		.right-container footer #next:hover {
		  background: #51e8ed;
		}
		
		.e-name label {
		  display: block;
		  margin-bottom: 5px;
		}
		
		.radio-container {
		  background: #fff;
		  border: 1px solid rgba(0, 0, 0, 0.1);
		  border-radius: 4px;
		  display: inline-block;
		  padding: 5px;
		}
		
		.radio-container label {
		  background: transparent;
		  border: 1px solid transparent;
		  border-radius: 2px;
		  display: inline-block;
		  height: 26px;
		  line-height: 26px;
		  margin: 0;
		  padding: 0;
		  text-align: center;
		  transition: 0.2s all ease-in-out;
		  width: 80px;
		}
		
		.radio-container input[type=radio] {
		  display: none;
		}
		
		.radio-container input[type=radio]:checked + label {
		  background: #009ea3;
		  border: 1px solid rgba(0, 0, 0, 0.1);
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
		    background: #6be1df;
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
		  
