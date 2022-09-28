<template>
  <div>
    <h1>Toast Test</h1>
    <div>
      <ul><v-btn @click="toastTest1">INFO</v-btn></ul>
      <ul><v-btn @click="toastTest2">SUCCESS</v-btn></ul>
      <ul><v-btn @click="toastTest3">ERROR</v-btn></ul>
      <ul><v-btn @click="toastTest4">WARNING</v-btn></ul>
      <ul><v-btn @click="toastTest5">전역 error</v-btn></ul>
    </div>

    <h1>progressBar Test</h1>
    <div>
      <v-btn @click="barTest1">Start</v-btn>
      <v-btn @click="barTest2">End</v-btn>
      <v-btn @click="barTest3">fail</v-btn>
    </div>

    <h1>Notify Test</h1>
    <div>
      <v-btn @click="notifyTest1">Alert</v-btn>
      <v-btn @click="notifyTest2">Confirm</v-btn>
      <v-btn @click="notifyTest3">Prompt</v-btn>
    </div>
  </div>
</template>

<script>
  export default {    
    name: "Home",
    data(){
        return {
            title : "My App",
        }
    },
    title(){
        //console.log('Home.vue * title-mixin')
        //return "My HomePage";
        return this.title;
    },
    // beforeCreate(){
    // console.log('Home.vue * beforeCreate');
    // },
    // created(){
    //     console.log('Home.vue * created', this.$ssrContext);
    // },
    // beforeMount(){
    //     console.log('Home.vue * beforeMount');
    // },
    // mounted(){
    //     console.log('Home.vue * mounted');
    // },
    // serverPrefetch(){
    //     console.log('Home.vue * serverPrefetch');
    //     return new Promise((resolve, reject) => {
    //     console.log('Home.vue * serverPrefetch Promise');
    //     resolve();
    //     });
    // },
    // 타이틀 변경하는 방법
    // mounted(){
    //     document.title = "myHome"
    // },
    methods: {
        toastTest1() {
            this.$toast.info("hello Info");
        },
        toastTest2() {
            this.$toast.success("hello Info");
        },
        toastTest3() {
            this.$toast.error("hello Info");
        },
        toastTest4() {
            this.$toast.warning("hello Info");
        },
        toastTest5() {
            throw new Error("전역 에러!!");
        },
        barTest1() {
            this.$Progress.start();
        },
        barTest2() {
            this.$Progress.finish();
        },
        barTest3() {
            this.$Progress.fail();
        },
        async notifyTest1() {
            const res = await this.$notify.alert("테스트 내용입니다." ,"안내", {icon:"mdi-alert"});
            console.log(res);
        },
        async notifyTest2() {
            const res = await this.$notify.confirm("테스트 내용입니다." ,"");
            console.log(res);
        },
        async notifyTest3() {
            const res = await this.$notify.prompt("테스트 내용입니다." ,"프롬프트", {width:200});
            console.log(res);
        }
    }
    
}
</script>
