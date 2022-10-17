<template>
<q-from @submit="submitForm">
  <q-input 
  v-if="tab=='register'"
    outlined 
    class="q-mb-md"
    v-model="formData.name" 
    label="Name"/>
  <q-input 
    outlined 
    class="q-mb-md"
    v-model="formData.email" 
    type="email" 
    label="E-mail" />
  <q-input 
    outlined 
    class="q-mb-md"
    v-model="formData.password" 
    type="password" 
    label="password" />
  <div class="row">
    <q-space />
    <q-btn 
    color="primary" 
    type="submit"
    :label="tab" />
  </div>

</q-from>

</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods : {
    ...mapActions('store', ['registerUser']),
    submitForm() {
      if (this.tab =='login') {
        console.log('login the user')
      }
      else {
        this.registerUser()
      }
    }

  }
}
</script>

<style lang="scss" scoped>

</style>