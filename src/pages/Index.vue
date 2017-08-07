<template>
    <div id="index">
        <section class="ui-panel ui-panel-pure ui-border-t">
            <h3>{{ title }}</h3>
            <ul class="ui-list ui-list-pure ui-border-tb">
                <li class="ui-border-t">
                    <p><span><router-link to="companyReport">1.企业经营报告 </router-link></span><span class="date"></span></p>
                    <h4>这个报告厉害了啊</h4>
                </li>
                <li class="ui-border-t">
                    <p><span><router-link to="flowMonitor">2.流动性监控 </router-link></span><span class="date"></span></p>
                    <h4>这个监控牛B了哦</h4>
                </li>
                <li class="ui-border-t">
                    <p><span><router-link to="operationMonitor">3.运营实时监控 </router-link></span><span class="date"></span></p>
                    <h4>你懂的，牛在天上飞呢</h4>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
              title: "监控目录中心",
              liData: [
                  {id: 1, name: "企业经营报告", desc:"这个报告厉害了啊",path:"/operationMonitor"}
              ]
          }
        },
        methods:{
            demo(){
                this.$router.push("/operationMonitor")
            }
        }
    }
</script>
<style lang="scss">
    #index{
        position: relative;
        top: 100px;
        padding: 15px 30px;
    }
</style>