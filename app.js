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
                    title: "To Success",
                    author: "Harper Lee",
                    age: 60,
                    image: 'assets/jsB.png',
                    fiveStar:true
                },
                {
                    title: "1984",
                    author: "George Orwell",
                    age: 72,
                    image: 'assets/jsC.jpg',
                    fiveStar:false

                },
                {
                    title: "The Catcher in the Rye",
                    author: "J.D. Salinger",
                    age: 70,
                    image: 'assets/vue.png',
                    fiveStar:true


                }
            ],
            url:'https://react.dev/learn/start-a-new-react-project'
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
        },
        changeBoolean(item){
            console.log('item',item.fiveStar)
                item.fiveStar = !item.fiveStar
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book)=>book.fiveStar)
        }
    }
})
app.mount('#app')