var app = new Vue({
    el: '#app',
    data: {
        todoLists: [
            {title: '会議資料を作成する', checkToggle: false},
            {title: '取引先にメールを返信する', checkToggle: false},
            {title: '見積書を作成する', checkToggle: false}
        ],
        newTitleToggle: false,
        newTitle: ''
    },
    methods: {
        checkEnteredValue(){
            if(this.newTitle !== ''){
                this.newTitleToggle = true;
            }else{
                this.newTitleToggle = false;
            }
        },
        addToDoList(){
            // dataの中で記述した値を関数の中で使うには「this.」を付ける
            this.todoLists.push({
                title: this.newTitle,
                checkToggle: false
            });
            this.newTitleToggle = false;
            this.newTitle = '';
        },
        deleteToDoList(){
            this.todoLists = this.todoLists.filter(function(list) {
                return list.checkToggle == false;
            });
        }
    }
})