<template>
  <v-form @submit.prevent="save" ref="form" v-model="valid" lazy-validation>
    <input-duplicate-check
      ref="id"
      v-model="form.mb_id"
      label="아이디"
      prepend-icon="mdi-account"
      counter="30"
      :rules="rules.id()"
      :cbCheck="cbCheckId"
    />
    <v-text-field
      label="이름"
      v-model="form.mb_name"
      prepend-icon="mdi-card-account-details-outline"
      :rules="rules.name()"
    />

    <input-password 
      label="비밀번호"
      v-model="form.mb_password"
      prepend-icon="mdi-lock"
      :rules="rules.password()"
    />

    <input-password 
      label="비밀번호 확인"
      v-model="confirmPw"
      prepend-icon="mdi-lock"
      :rules="[rules.matchValue(form.mb_password)]"
    />

    <input-duplicate-check
      ref="email"
      v-model="form.mb_email"
      label="이메일"
      prepend-icon="mdi-email"      
      :rules="rules.email()"
      :cbCheck="cbCheckEmail"
    />

    <v-btn type="submit" block color="primary">회원가입</v-btn>
  </v-form>
</template>

<script>
import validateRules from "../../../util/validateRules";
import InputDuplicateCheck from "../InputForms/InputDuplicateCheck.vue";
import InputPassword from '../InputForms/InputPassword.vue';
export default {
  components: { InputDuplicateCheck, InputPassword },
  name: "SignUpForm",
  props: {
    cbCheckId: {
      type: Function,
      default: null,
    },
    cbCheckEmail:{
      type: Function,
      default: null,
    }
  },
  data() {
    return {
      valid: true,
      form: {
        mb_id: "",
        mb_password: "",
        mb_name: "",
        mb_birth: "",
        mb_gender: "",
        mb_email: "",
        mb_phone: "",
        mb_zip: "",
        mb_addr1: "",
        mb_addr2: "",
      },
      confirmPw : "",
    };
  },
  computed: {
    rules: () => validateRules,
  },
  methods: {
    async save() {
      this.$refs.form.validate();
      await this.$nextTick();
      if (!this.valid) return;
      if (!this.$refs.id.validate()) return;
      if (!this.$refs.email.validate()) return;
      console.log(this.form);
    },
  },
};
</script>