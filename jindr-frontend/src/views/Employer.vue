<template>

  <div>
 
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
 
   <ul v-for="(item, index) in list" :key="index">
   <div class="container">
       <span>First Nmae: {{ item.fName }}</span><br>
        <span>Last Name:{{ item.lName }}</span><br>
        <span>Age: {{ item.age }}</span><br>
        <span>Gender: {{ item.gender }}</span><br>
         <span>Location: {{ item.location }}</span><br>
        <span>Summary: {{ item.summary }}</span><br>
        <span>Experience: {{ item.experience}}</span><br>
        <span>Education: {{ item.education }}</span><br>
        <span>Skills: {{ item.skills }}</span><br>
        <span> <button>Like</button>
        </span>
        <span><button @click="deleteFromList(index)">Dislike</button></span>
        </div>
   </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {"fName": "John", 
    "lName": "Doe", 
    "age": "21", 
    "gender": "Male", 
    "location": "NYC", 
    "summary": "Summary", 
    "experience": "10 years of Java", 
    "education": "B.CS; MIT", 
    "skills": "Java"},
    {"fName": "Kat", 
    "lName": "Gomez", 
    "age": "21", 
    "gender": "Female", 
    "location": "LA", 
    "summary": "Summary", 
    "experience": "3 years of data science", 
    "education": "B.CS; Stanford", 
    "skills": "Data Science"},
    {"fName": "Justin", 
    "lName": "Grant", 
    "age": "21", 
    "gender": "Male", 
    "location": "Miami", 
    "summary": "Summary", 
    "experience": "4 years of C++", 
    "education": "B.CS; MIT", 
    "skills": "C++"}
      ]
    };
  },
  methods: {
    deleteFromList(index) {
      this.list.splice(index, 1);
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;900&display=swap');
.card {
  display: flex;
  height: 280px;
  width: 200px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
/*   margin-left: -50px; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.container  {
  position: absolute;
  height: 280px;
  width: 200px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  background: #ffffff;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 20px 8px #d0d0d0;
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