<template>
  <q-page>
    <q-card-section>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        ref="addForm"
      >
        <div class="row q-gutter-x-sm q-mb-sm">
          <q-select class="col"
                    outlined
                    v-model="data.patient_obj"
                    label="ជ្រើសរើសអតិថិជន"
                    :options="getPatient"
                    @input="patientSelect"
                    square
                    lazy-rules
                    :rules="[ val => !!val || 'សូមជ្រើសរើសចន្លោះ']">
          </q-select>
        </div>
      </q-form>
    </q-card-section>
    {{getAllCart}}
  </q-page>
</template>

<script>
  export default {
    name: "Cashier",
    data(){
      return {
        data: {}
      }
    },
    computed: {
      getPatient() {
        return this.$store.getters['patient/getPatient'].map((m) => {
          return {
            label: m.lname + ' ' + m.fname,
            _id: m._id,
          }
        });
      },
      getAllCart(){
        return this.$store.getters['patient_cart/getPatientCartByPatient'];
      },
    },
    methods: {
      onSubmit(){

      },
      async patientSelect(data){
        await this.$store.dispatch('patient_cart/fetchPatientCartByPatient', data._id);
      }
    }
  }
</script>

<style scoped>

</style>
