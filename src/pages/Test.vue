<template>
  <div id="test">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>

    <h2>frozenui demo</h2>
    <div class="ui-btn-wrap">
      <button class="ui-btn ui-btn-progress">确定</button>
      <button class="ui-btn ui-btn-progress">
        <span>50%</span>
        <span class="ui-btn-inner" style="width:50%"><span>50%</span></span>
      </button>
      <button class="ui-btn ui-btn-progress" disabled>取消</button>
    </div>

    <div class="ui-center">
      <div class="ui-btn" id="btn1">弹出提示</div>
    </div>

  </div>
</template>

<script>

  import frozenui from 'frozenui'

  export default {
      name: 'test',
      data () {
          return {
              msg: 'Welcome to jcc.bi App'
          }
      },
      mounted(){
          console.log("hello world");
          $.get('http://localhost:8084/demo/test1',function (result) {
              console.log("result:"+result);
          });

          var el;
          $("#btn1").tap(function(){
              el=$.tips({
                  content:'温馨提示内容',
                  stayTime:2000,
                  type:"success"
              })
              el.on("tips:hide",function(){
                  console.log("tips hide");
              })

          });
      }
  }
</script>

<style lang="scss">
#test {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
