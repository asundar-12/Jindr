<template>
	<div class='login'>
		<div class='login--left'>
			<h1 v-if="logintype=='employer'">JOB POSTING CREATION</h1>
            <h1 v-else>EMPLOYEE'S PROFILE</h1>
			<div class='job'>
			<img v-if="logintype=='employer'" src='https://cdn.dribbble.com/users/3848091/screenshots/7827479/media/5f226eb6aa71d3b639a73d214e716db6.gif'>
            <img v-else src="https://images.clipartlogo.com/files/istock/previews/9800/98006543-hand-holding-resume.jpg" alt="" style="width:75%">
			</div>
		</div>
		<div class='login--right'>
            <h1 v-if="logintype=='employer'">Employer Login</h1>
            <h1 v-show="logintype=='employee'">Fill out your profile</h1>
       
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
            <form v-show="logintype=='employer'" class="employer-login" action="">
                <input type="text" placeholder="Username">
                <div style="height:20px"></div>
                <input type="password" placeholder="Password">
                <div style="height:20px"></div>
                <button>LOGIN</button>
            </form>
            <form v-show="logintype=='employee'" class="employee-form" action="">
                <input type="text" placeholder="Name">
                <div style="height:20px"></div>
                <input type="text" placeholder="Enter your experience">
                <div style="height:20px"></div>
                <section>
                    <div class="birthday">
                        <label for="birthday">Birthday:</label>
                        <input type="date" id="birthday" style="margin-left:10px">
                    </div>
                    
                    <div class="gender-selection">
                        <input type="radio" id="male" value="male" name="gender" v-model="gender"/>
                        <label for="male" style="margin-right:10px">Male</label>
                      
                        <input type="radio" id="female" value="female" name="gender" v-model="gender"/>
                        <label for="female">Female</label>
                    </div>
                </section>

                <div style="height:10px"></div>
                <div class="employee-form__skilladnedu">
                    <input type="text" placeholder="Skills">
                    <input type="text" placeholder="Education">
                </div>
          
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

    .employer-login{
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
    .employee-form{
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
            &:focus{
                outline: none;
                border: none;
            }
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
        &>section{
            background-color: white;
            height: 30px;

            &>.birthday{
                float: left;
            }
            &>.gender-selection{
                float: right;
            }
        }

        &__skilladnedu{
            background-color: red;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            &>*{
                display: block;
                width: 90%;
                border-radius: 20px;
                padding: 10px 20px 10px 20px;
                font-size: 20px;
                outline: none;
                border: none;
                &:focus{
                    outline: none;
                    border: none;
                }
                background-color: rgb(230, 230, 230);
       

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