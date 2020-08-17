<template>
  <q-page class="flex flex-center" padding
          style="background-image: url(../statics/login-bg.jpg);background-position: center; background-repeat: no-repeat;background-size: cover;">

    <q-card class="my-card bg-grey">
      <q-card-section>
        <div class="row flex-center q-gutter-md">
          <div v-show="!$q.platform.is.mobile" class="col ">
            <q-avatar size="400px" square>
              <img
                src="https://gawvs.in//assets/img/login.png">
            </q-avatar>
          </div>
          <div class="col text-center">
            <div class="row">
              <q-avatar class="col" square size="200px">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ios7-active-basic/512/user_access-512.png">
              </q-avatar>
            </div>
            <q-form @submit="onSubmit">
              <div class="row">
                <q-input
                  class="col"
                  lazy-rules
                  autofocus
                  :rules="[ val => !!val||'Please enter your email' ]"
                  dark filled bottom-slots v-model="data.email"
                  label="E-mail">
                  <template v-slot:prepend>
                    <q-icon name="person"/>
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click="data.email = ''" class="cursor-pointer"/>
                  </template>
                </q-input>
              </div>
              <div class="row">
                <q-input
                  class="col"
                  lazy-rules
                  :rules="[val => !!val||'Please enter your password']"
                  type="password" dark filled bottom-slots
                  v-model="data.password" label="Password">
                  <template v-slot:prepend>
                    <q-icon name="vpn_key"/>
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click="data.password = ''" class="cursor-pointer"/>
                  </template>
                </q-input>
              </div>
              <div class="row">
                <q-btn class="col" type="submit" unelevated rounded color="primary" label="Login"/>
              </div>
            </q-form>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        isPwd: true,
        data: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
        let self = this;
        self.$q.loading.show();
        self.$store.dispatch('auth/login', self.data).then(function (data) {
          if (data.status) {
            self.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: data.message
            });
            self.$router.push('/');
            self.$q.loading.hide();
          } else {
            self.$q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: data.message
            })
          }
          if (!data) {
            self.$q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'Please check input again!'
            })
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
