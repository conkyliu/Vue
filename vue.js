var app = new Vue({
    el: '#app',
    data: {text: 'hello Vue'}

})
var app2 = new Vue({
    el: '#app2',
    data: {
        text2: '你好啊!vue'
    }
})
var app3 = new Vue({
    el: '#app3',
    data: {
        seen: 1

    }
})

var app4 = new Vue({
    el: "#app4",
    data: {
        items: [
            {text: '学习 JavaScript'},
            {text: '学习 Vue'},
            {text: '整个牛项目'}
        ]
    }
})
var app5 = new Vue({
    el: "#app5",
    data: {
        text3: 'hello vue js!'
    },
    methods: {
        reverseText: function () {
            this.text3 = this.text3.split('').reverse().join('')
            console.log(this.text3)
        }
    }

});
var app6 = new Vue({
    el: '#app6',
    data: {
        text6: 'heoolo Vue'
    }
});
Vue.component('todo-item',
    {
        props:['todo'],
        template:'<li>{{todo.text}}</li>'
    });
var app7=new Vue({
    el:'#app7',
    data:{
        aa:[
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})
