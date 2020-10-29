<template>
  <f7-page id="login-page" @page:init="pageInit" @page:reinit="pageInit">
    <f7-navbar>
      <InnerNavbar title="ورود اعضا" />
    </f7-navbar>
    <div class="main">
      <form @submit="onSubmit">
        <f7-list no-hairlines-md>
          <f7-list-input
            label="تلفن همراه"
            type="text"
            placeholder="09xxxxxxxxx"
            clear-button
            :value="phone"
            @input="phone = $event.target.value"
            required
          ></f7-list-input>

          <f7-list-input
            label="رمز عبور"
            type="password"
            placeholder="xxxxxxxx"
            clear-button
            :value="password"
            @input="password = $event.target.value"
            required
          ></f7-list-input>
        </f7-list>
        <f7-button type="submit" class="btn" raised fill>ورود اعضا</f7-button>
      </form>
    </div>
  </f7-page>
</template>

<style lang="scss">
#login-page {
  .item-title {
    font-family: IranSansWeb;
    font-weight: 400;
    color: black !important;
  }
  input {
    direction: ltr;
  }
  .btn {
    background: #0f0f0f;
    font-family: IranSansWeb;
    font-weight: 400;
  }
}
</style>

<script>
import page from "../mixins/page";
export default {
  mixins: [page],
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      console.log(this.phone, this.password);

      try {
        const result = await this.$axios.post(
          `${process.env.usersity.baseUrl}/user/signin`,
          { username: this.phone, password: this.password }
        );
        localStorage.token = result.data.payload.token;
        const { token, ...user } = result.data.payload;
        localStorage.user = JSON.stringify(user);
        this.$f7.dialog.alert(`خوش آمدی ${user.fname}`, "رادیو گل‌ها");
      } catch (error) {
        this.$f7.toast
          .create({
            text: error.response.data.message,
            closeTimeout: 2000,
            closeButton: true
          })
          .open();
      }
    }
  }
};
</script>
