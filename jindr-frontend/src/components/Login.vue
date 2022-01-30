<template>
	<div class='login'>
		<div class='login--left'>
			<h1 v-if="logintype=='employer'">JOB POSTING CREATION</h1>
            <h1 v-else>EMPLOYEE'S PROFILE</h1>
			<div class='job'>
			<img src='https://cdn.dribbble.com/users/3848091/screenshots/7827479/media/5f226eb6aa71d3b639a73d214e716db6.gif'>
			</div>
		</div>
		<div class='login--right'>
            <h1>Login Form</h1>
			<!-- <header>
			    <h1>Login Form</h1>
			<div class='set'>
			<div class='j_title'>
			<label for='j_title'>Job Title   </label>
			<input id='j_title' placeholder="Enter the job title" type='text'>
			</div>
			
			</div>
			<div class='set'>
			<div class='j_exp'>
			<label for='j_exp'>Year's Of Experience Required</label>
			<input id='j_exp' placeholder="Enter year's of experience required" type='text'>
			</div>
			<div class='j_qua'>
			<label for='j_qua'>Qualifications</label>
			<input id='j_qua' placeholder="Enter qualification" type='text'>
			</div>
			</div>
			
			<div class='set'>
			<div class='j_emp'>
			<label for='j_emp'>Employee Responsibilities</label>
			<input id='j_emp' placeholder="Enter employee responsibilities" type='text'>
			</div>
			<div class='j_vi'>
			<label for='j_vi'>Visa/Sponsorship Requirement</label>
			<input id='j_vi' placeholder="Enter visa/sponsorship requirements" type='text'>
			</div>
			
			</div>
			
		
			
		
			</header>

			<footer>
				<div class='set'>
				<button id='back' v-on:click="home">Back</button>
				<button id='next'>Next</button>
				</div>
			</footer> -->
            <form action="">
                <input type="text" placeholder="Username">
                <div style="height:20px"></div>
                <input type="password" placeholder="Password">
                <div style="height:20px"></div>
                <button>LOGIN</button>
            </form>
		</div>
	</div>
</template>

<script>


export default{
    name: "Login",
    data(){
        return{
            logintype: "employer",
        }
    },
    mounted(){
        this.logintype = this.$store.state.logintype
    }
}
</script>

<style lang="scss" scoped>
    .login{
        width: 85%;
        height: 450px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        overflow: hidden;

        &--left{
            width: 40%;
            float: left;
            background-color: #c9f6ff;
            height: 100%;

            & >h1{
                padding: 20px 10px 20px 10px;
        
            }
        }

        &--right{
            width: 60%;
            float: right;
            background-color: white;
            height: 100%;

            &>h1{
                padding-top: 20px;
            }
        }
    }

    form{
        width: 55%;
        margin: auto;
        margin-top: 30px;
        &>input{
            display: block;
            width: 100%;
            border-radius: 20px;
            padding: 10px 20px 10px 20px;
            font-size: 20px;
            outline: none;
            border: none;
            background-color: rgb(230, 230, 230);
            text-align: center;
        }
        &>button{
            display: block;
            width: 100%;
            background-color: #c9f6ff;
            padding: 10px 20px 10px 20px;
            font-size: 20px;
            outline: none;
            // border: 5px solid #c9f6ff ;
            color: black;
            &:hover{
                background-color: #acd6df;
            }
        }
    }
    .job{
        width: 85%;
        padding-top: 20px;
        margin: auto;
        &>img{
            width: 100%;
        }
    }
</style>