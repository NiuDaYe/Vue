import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state        状态值
// getters      获取变量值
// mutations    同步修改state的状态值
// actions      异步修改state的状态值    actions是可以调用Mutations里的方法的
// dispatch触发action

const state = {
    // count:[1,2,3],
    count:11111
}

// count的数值会先加100
const getters = {
    count:function(state){
        return state.count +=100;
    }
    // count:state => state.count,
}

// 通过actions调用 mutations内的方法        commit调用
const mutations={
    add(state){
        state.count+=1;
    },
    reduce(state){
        state.count-=1;
    }
}

//dispatch触发action
const actions ={
    addAction(context,aa){

        setTimeout(function(){
            context.commit('add');
        },2000)
        
        console.log('观察上面的数组变化。。。我比add提前执行,');
    },
    reduceAction({commit}){
        commit('reduce')
    }
}
// context：上下文对象，这里你可以理解称store本身。
// {commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。

export default new Vuex.Store({
    state,mutations,getters,actions
});



// module模块组
// 随着项目的复杂性增加，我们共享的状态越来越多，这时候我们就需要把我们状态的各种操作进行一个分组，分组后再进行按组编写。那今天我们就学习一下module：状态管理器的模块组操作。

// const moduleA={
//     state,mutations,getters,actions
// }
// export default new Vuex.Store({
//     modules:{a:moduleA}
// })

// 在模板中使用
// 现在我们要在模板中使用count状态，要用插值的形式写入。
// <h3>{{$store.state.a.count}}</h3>
// 如果想用简单的方法引入，还是要在我们的计算属性中rutrun我们的状态。写法如下：
// computed:{
//     count(){
//         return this.$store.state.a.count;
//     }
// },
