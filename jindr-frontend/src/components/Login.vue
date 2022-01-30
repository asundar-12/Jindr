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
       
            <form v-show="logintype=='employer'" class="employer-login" action="">
                <input type="text" placeholder="Username">
                <div style="height:20px"></div>
                <input type="password" placeholder="Password">
                <div style="height:20px"></div>
                <button type="submit">LOGIN</button>
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
                <input type="text" placeholder="Interests">
                <div style="height:20px"></div>
                <button v-on:click="employee">Sign Up</button>
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
    methods:{
        employee(){
            this.$router.push("/employee")
        }
    },
    mounted(){
        this.logintype = this.$store.state.logintype
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles.scss";
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
        margin-top: 20px;
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
            
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            &>*{
                display: block;
                width: 45%;
                max-width: 90%;
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