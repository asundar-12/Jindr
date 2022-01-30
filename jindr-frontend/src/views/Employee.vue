<template>
    <main>
        <section>
            <h1>Software Engineer</h1>
            <p>Requires 5+ years of experience</p>
        </section>
        <div class="choose">
            <button class="like">Like</button>
            <button class="dislike">Dislike</button>
        </div>
    </main>
</template>

<script>
    export default{
        name: "Employee",
    }
</script>

<style lang="scss" scoped>
    main{
        height: 600px;
        width: 75%;
        background-color: aliceblue;
        border-radius: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        &>section{
            height: 90%;
            width: 100%;
            background-color: #c9f6ff;
        }
        &>.choose{
            display: flex;
            align-content: stretch;
            justify-content: space-around;
            background-color: black;
            height: 10%;
            &>button{
                display: block;
                width: 50%;
                text-align: center;
                font-size: 25px;
                color: white;
                border-radius: 0px;
            }
            &>.like{
                background-color: #42b983;
                &:hover{
                    background-color: #33996b;
                }
            }
            &>.dislike{
                background-color: rgb(235, 75, 54);
                &:hover{
                    background-color: rgb(194, 61, 43);
                }
            }
        }
    }
</style>