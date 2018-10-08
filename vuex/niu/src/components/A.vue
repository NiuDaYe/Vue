

<!-- 零：在模板中我们引入我们刚建的store.js文件，并在模板中用{{$store.state.count}}输出count 的值。 -->

<!-- <template>
  <div class="hello">
      <router-link to="B">
        <h1>{{ msg }}</h1>
      </router-link>

      <div class="">
          <h3>{{$store.state.count}}</h3>
      </div>

      <div>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
      </div>

  </div>
</template>

<script>
import store from '@/vuex/store'

export default {
  name: 'A',
  data () {
    return {
      msg: 'A模板'
    }
  },
  store,
}
</script> -->



<!-- 一、 通过computed的计算属性直接赋值
computed属性可以在输出前，对data中的值进行改变，我们就利用这种特性把store.js中的state值赋值给我们模板中的data值。  -->

<!-- <template>
  <div class="hello">
      <router-link to="B">
        <h1>{{ msg }}</h1>
      </router-link>

      <div class="">
          <h3>{{count}}</h3>
      </div>

      <div>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
      </div>

  </div>
</template>

<script>
import store from '@/vuex/store'

export default {
  name: 'A',
  data () {
    return {
      msg: 'A模板'
    }
  },
  store,
  computed:{
        count(){
            return this.$store.state.count;
            // return this.$store.state.count;      11111
            // return this.$store.getters.count;    11211
        }
    }
}
</script> -->


<!-- 二、通过mapState的对象来赋值 -->

<!-- <template>
  <div class="hello">
      <router-link to="B">
        <h1>{{ msg }}</h1>
      </router-link>

      <div class="">
          <h3>{{count}}</h3>
      </div>

      <div>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
      </div>

  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'

export default {
  name: 'A',
  data () {
    return {
      msg: 'A模板'
    }
  },
  store,
  computed:mapState({
    count:state=>state.count   //理解为传入state对象，修改state.count属性
  })
}
</script> -->


<!-- 三、通过mapState的数组来赋值 -->

<!-- <template>
  <div class="hello">
      <router-link to="B">
        <h1>{{ msg }}</h1>
      </router-link>

      <div class="">
          <h3>{{count}}</h3>
      </div>

      <div>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
      </div>

  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'

export default {
  name: 'A',
  data () {
    return {
      msg: 'A模板'
    }
  },
  store,
  computed:mapState(["count"])
}
</script> -->


 <!-- 四、模板获取Mutations方法  直接调用store里面的加减操作 -->

<template>
  <div class="hello">
      <router-link to="B">
        <h1>{{ msg }}</h1>
      </router-link>

      <div class="">
          <h3>{{count}}</h3>
      </div>

      <div>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
      </div>

  </div>
</template>

<script>

// mapState     在computed内用 ...mapState获取storejs内state的值
// mapMutations 在methods内用  ...mapMutations来声明storejs内 mutations 里的事件
// mapGetters   在computed内用 ...mapGetters获取storejs内getters方法计算后的值


import store from '@/vuex/store'
import {mapState,mapMutations,getters,mapGetters} from 'vuex'

export default {
  name: 'A',
  data () {
    return {
      msg: 'A模板',
    }
  },
  created(){
    this.addbox();
  },
  store,
  // methods:mapMutations([
  //   'add','reduce',
  // ]),    声明加减事件  这样写的话methods里面写不了其他方法了 所以改写成下面的写法
  methods:{
      ...mapMutations(['add','reduce',]),   // 声明加减事件 改写后
      addbox(){
          setTimeout(function(){
              console.log('sadfsadf');
          },2000)
      },
  },
  // computed:mapState(["count"])   // 获取值 这样写的话computed里面写不了其他方法了 所以改写成下面的写法
  computed:{
    ...mapState(["count"]),     // 获取值
    // count(){
    //     return this.$store.getters.count;
    // }                        // 获取加了100的值
    // ...mapGetters(["count"])    // 获取加了100的值 简写
  }
}
</script>





<!-- actions异步修改状态  在模板中的使用          -->
<!--

<template>
  <div class="hello">
      <router-link to="B">
        <h1>{{ msg }}</h1>
      </router-link>

      <div class="">
          <h3>{{count}}</h3>
      </div>

      <div>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
      </div>

  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState,mapActions} from 'vuex'

export default {
  name: 'A',
  data () {
    return {
      msg: 'A模板'
    }
  },
  store,
  computed:{
    ...mapState(["count"]),     // 获取值
  },
  methods:{
    ...mapActions(['addAction','reduceAction'])
},
}
</script> -->
