// console.log('hello vue3')

const app = Vue.createApp({
    // template:'<h3>From app.js</h3>'
    data(){
        return{
            showNotes:true,
            title:'The Final Countdown',
            author:'Rock',
            age:1986,
            // for mouseMove
            x : 0,
            y : 0,
            books : [
                {
                    title: "To Kill a Mockingbird",
                    author: "Harper Lee",
                    age: 60
                },
                {
                    title: "1984",
                    author: "George Orwell",
                    age: 72
                },
                {
                    title: "The Catcher in the Rye",
                    author: "J.D. Salinger",
                    age: 70
                }
            ]
        }
    },
    methods:{
        changeTitle(item){
            this.title=item
        },
        showHideNotes(){
            this.showNotes= !this.showNotes
        },
        handleEvent1(e,data){
            // alert('handle event1')
            console.log(e,e.type)
            if (data){
                console.log(data,'data')
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})
app.mount('#app')