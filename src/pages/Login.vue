<template>
    <div id="login" >
        <div class="ui-form ui-border-t ck-certer">
            <form action="#">
                <div class="ui-form-item ui-form-item-pure ui-border-b" style="text-align: center;">
                    <a href="javascript:;">天刀图系統</a>
                    <br/><br/>
                </div>

                <div class="ui-form-item ui-form-item-pure ui-border-b">
                    <input type="text" placeholder="邮箱" name="accout" v-model="account">
                    <a href="javascript:;" v-on:click="removeAccount" class="ui-icon-close"></a>
                </div>
                <div class="ui-form-item ui-form-item-pure ui-border-b">
                    <input type="password" placeholder="密码" name="password" v-model="password">
                    <a href="javascript:;" v-on:click="removePassword" class="ui-icon-close"></a>
                </div>
                <div class="ui-form-item ui-form-item-order ui-border-b" style="text-align: center;">
                    <a href="javascript:;" v-on:click="userLogin">sign in</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data () {
            return {
                account: "jiawenjun@jucaicat.com",
                password: ''
            }
        },
        methods:{
            removeAccount(e){
                this.account = "";
            },
            removePassword(){
                this.password = "";
            },
            userLogin(){

            }
        }
    }
</script>

<style lang="scss">
    #login{
        position: relative;
        top: 140px;
        padding: 15px 30px;
    }
</style>