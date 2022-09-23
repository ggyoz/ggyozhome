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
    </div>
    <NotifyComponent/>
  </div>
</template>

<script>
import NotifyComponent from '@/plugins-client/notifyPlugin/notifyComponent.vue';
  export default {
    name: "Home",
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
        notifyTest1() {
            alert("message");
        }
    },
    components: { NotifyComponent }
}
</script>
