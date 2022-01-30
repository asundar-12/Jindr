<template>
	<div class='login'>
		<div class='login--left'>
			<h1>JOB POSTING CREATION</h1>

			<div class='job'>
			<img src='https://cdn.dribbble.com/users/3848091/screenshots/7827479/media/5f226eb6aa71d3b639a73d214e716db6.gif'>
			</div>
		</div>
		<div class='login--right'>
            <h1>Fill out job posting</h1>
            <form action="">
                <div class="company">
                    <label for='company'>Company</label>
			        <input id='company' placeholder="Enter name of company" type='text'>
                </div>
                <div class="jobtitle">
                    <label for='jobtitle'>Job Title</label>
			        <input id='jobtitle' placeholder="Enter the job title" type='text'>
                </div>
                <div class="location">
                    <label for='location'>Location</label>
			        <input id='location' placeholder="Enter location" type='text'>
                </div>
                <div class="jobcategory">
                    <label for='jobcategory'>Job Category</label>
			        <input id='jobcategory' placeholder="Enter job category" type='text'>
                </div>
                <div class="employmenttype">
                    <label for='employmenttype'>Employment Type</label>
			        <input id='employmenttype' placeholder="Enter employment type" type='text'>
                </div>
                <div class="qualifications">
                    <label for='qualifications'>Qualifications</label>
			        <input id='qualifications' placeholder="Enter qualification" type='text'>
                </div>
                <div class="jobdescription">
                    <label for='jobdescription'>Job Description</label>
			        <input id='jobdescription' placeholder="Enter Job Description" type='text'>
                </div>
                
                <button>Submit</button>
                
            </form>
         
			<!-- <div class='set'>
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
			
			</div> -->
		</div>
	</div>
</template>

<script>

export default {
    name: "Login",
    data(){
        return{
            logintype: "employer",
        }
    },
    methods:{
        employee(){
            this.$router.push("/employee")
        },
        employer(){
            this.$router.push("/employer")
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
        width: 75%;
        height: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        overflow: hidden;
        z-index: 2;
        box-shadow: #3a3a3a 0px 0px 20px 1px;

        &--left{
            width: 40%;
            float: left;
            background-color: #c9f6ff;
            height: 100%;

            & >h1{
                padding: 20px 20px 20px 20px;
        
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
        width: 80%;
        margin: auto;
        margin-top: 0px;
        // background-color: rebeccapurple;
        display: grid;
        grid-template-columns: 1fr 10px;
        grid-template-rows: 60px 60px 60px 60px 60px 40px;
        gap: 10px ;
        
        &>div{
            // background-color: red;

            &>label{
                display: block;
                // background-color: blue;
                text-align: left;
                font-size: 15px;
            }
            &>input{
                display: block;
                padding: 10px 20px 10px 20px;
                background-color: $input-colour;
                border-radius: 10px;
                font-size: 15px;
                width: 100%;
            }
        }
        &>.company{
            grid-column-start: 1;
            grid-column-end: end;
        }
        &>.jobtitle{
            grid-column-start: 1;
            grid-column-end: 1;
        }
        &>.location{
            grid-column-start: 3;
            grid-column-end: 3;
        }
        &>.employmenttype{
            grid-column-start: 3;
            grid-column-end: 3;
        }

        &>.qualifications{
            grid-column-start: 1;
            grid-column-end: end;
        }
        &>.jobdescription{
            grid-column-start: 1;
            grid-column-end: end;
        }
        &>button{
            display: block;
            width: 100%;
            background-color: #c9f6ff;
            color: $vue-black;
            grid-column-start: 1;
            grid-column-end: end;
            &:hover{
                background-color: $primary-hover;
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