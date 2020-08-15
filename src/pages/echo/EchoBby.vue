<template>
  <q-page padding>
    <q-card>
      <q-card-actions align="left">
        <q-btn style="width: 150px" color="red" icon="reply" label="ត្រឡប់ក្រោយ" v-go-back.single>
          <q-tooltip content-class="bg-white text-primary">ថយក្រោយ</q-tooltip>
        </q-btn>
      </q-card-actions>
      <q-card-section>
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
          ref="addForm"
        >
          <q-card flat bordered class="my-card bg-grey-1">
            <q-card-section>
              <div class="row q-gutter-x-sm q-mb-sm">
                <q-item-label class="col q-my-sm">
                  ពត៍មានអ្នកជម្ងឺ
                </q-item-label>
              </div>
              <div class="row q-gutter-x-sm q-mb-sm">
                <q-select class="col"
                          outlined
                          v-model="data.patient_obj"
                          label="ឈ្មោះអ្នកជម្ងឺ"
                          :options="getPatients"
                          square
                          lazy-rules
                          :rules="[ val => !!val || 'សូមជ្រើសរើសចន្លោះ']">
                </q-select>
              </div>
              <div class="row q-gutter-x-sm q-mb-sm">
                <q-item-label class="col q-my-sm">
                  ពត៍មានពិនិត្យ
                </q-item-label>
              </div>
              <div class="row q-gutter-x-sm q-mb-sm">
                <q-input
                  class="col"
                  outlined
                  v-model="data.bby_num"
                  label="ចំនួនទារក"
                  type="number"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
                <q-select class="col"
                          outlined
                          v-model="data.bby_gender"
                          label="ភេទទារក"
                          :options="['ប្រុស','ស្រី']"
                          square
                          lazy-rules
                          :rules="[ val => !!val || 'សូមជ្រើសរើសចន្លោះ']">
                </q-select>
                <q-select class="col"
                          outlined
                          v-model="data.place_placenta"
                          label="ទីតាំងសុក"
                          :options="['មុខ', 'ក្រោយ']"
                          square
                          lazy-rules
                          :rules="[ val => !!val || 'សូមជ្រើសរើសចន្លោះ']">
                </q-select>
              </div>
              <div class="row q-gutter-x-sm q-mb-sm">
                <q-input
                  class="col"
                  outlined
                  v-model="data.bby_status"
                  label="ទំរង់របស់កូន"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
                <q-input
                  class="col"
                  outlined
                  v-model="data.status_waterfall"
                  label="ស្ថានភាពទឹកភ្លោះ"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
                <q-input
                  class="col"
                  outlined
                  v-model="data.bby_healthy"
                  label="សុខភាពទារក"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
              </div>
              <div class="row q-gutter-x-sm q-mb-sm">
                <q-input
                  class="col"
                  outlined
                  v-model="data.bby_heartrate"
                  label="ចលនាចង្វាក់បេះដូង(ធម្មតា 150)"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
                <q-input
                  class="col"
                  outlined
                  v-model="data.bby_activity"
                  label="សកម្មភាពទារក"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
                <q-input
                  class="col"
                  outlined
                  v-model="data.bby_skull"
                  label="ទំហំឆ្អឹងក្បាល"
                  type="number"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
              </div>
              <div class="row q-gutter-x-sm q-mb-sm">
                <q-input
                  class="col"
                  outlined
                  v-model="data.bby_thigh_bone"
                  label="ប្រវែងឆ្អឹងភ្លៅ"
                  type="number"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
                <q-input
                  class="col"
                  outlined
                  v-model="data.bby_weight"
                  label="ទំងន់ទារក"
                  type="number"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
                <q-input
                  class="col"
                  outlined
                  v-model="data.bby_age"
                  label="អាយុទារក(4ខែ 4សប្ដាហ៍ 4ថ្ងៃ)"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
              </div>
              <div class="row q-gutter-x-sm q-mb-sm">
                <q-input class="col" label="ថ្ងៃគ្រប់ខែ" outlined square v-model="data.bby_birth" mask="date"
                         :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxyBirth" transition-show="scale" transition-hide="scale">
                        <q-date v-model="data.bby_birth" @input="() => $refs.qDateProxyBirth.hide()"/>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-input class="col" label="ថ្ងៃពិនិត្យ" outlined square v-model="data.check_date" mask="date"
                         :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxyCheck" transition-show="scale" transition-hide="scale">
                        <q-date v-model="data.check_date" @input="() => $refs.qDateProxyCheck.hide()"/>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-select class="col"
                          outlined
                          v-model="data.doctor"
                          label="ឈ្មោះគ្រូពេទ្យ"
                          :options="['Dr.SORN Visai']"
                          square
                          lazy-rules
                          :rules="[ val => !!val || 'សូមជ្រើសរើសចន្លោះ']">
                </q-select>
              </div>
              <div class="row q-gutter-x-sm q-mb-sm">
                <q-uploader
                  :factory="factoryFnUploadPhotoUp"
                  class="col"
                  accept="image/*"
                  hide-upload-btn
                  label="ដាក់រូបភាពខាងលើ"
                  color="grey"
                  square
                  flat
                  bordered
                  style="max-width: 300px"
                  auto-upload
                />
                <q-uploader
                  :factory="factoryFnUploadPhotoDown"
                  class="col"
                  accept="image/*"
                  hide-upload-btn
                  label="ដាក់រូបភាពខាងក្រោម"
                  color="grey"
                  square
                  flat
                  bordered
                  style="max-width: 300px"
                  auto-upload
                />
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn icon="save" style="width: 150px; height: 50px" color="primary" label="រក្សារទុក"
                     @click="$refs.addForm.submit()">
                <q-tooltip content-class="bg-white text-primary">Save</q-tooltip>
              </q-btn>
            </q-card-actions>
          </q-card>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
  export default {
    name: "EchoAdd",
    data() {
      return {
        formData: new FormData(),
        data: {
          patient_obj: '',
          type: 'Obstétrique',
          bby_num: 1,
          bby_gender: '',
          place_placenta: '',
          bby_status: '',
          status_waterfall: '',
          bby_healthy: '',
          bby_heartrate: '',
          bby_activity: '',
          bby_skull: '',
          bby_thigh_bone: '',
          bby_weight: '',
          bby_age: '',
          bby_birth: '',
          check_date: '',
          doctor: '',
          photo: '',
          hostname: 'https://api.hospital.demo.cloudware.com.kh/',
          // hostname: 'http://localhost:3030/',
        }
      }
    },
    computed: {
      getPatients() {
        let self = this;
        return self.$store.getters['patient/getPatient'].map(function (x) {
          return {
            label: `${x.lname} ${x.fname} - ${x.llatin} ${x.flatin}, ${x.gender}, ${self.dateConverted(x.dob)}`,
            value: x._id,
          }
        })
      },
    },
    methods: {
      onSubmit() {
        let self = this;
        let vm = self.data;
        self.$q.loading.show();
        let postData = JSON.stringify({
          patient: vm.patient_obj.value,
          type: vm.type,
          bby_num: vm.bby_num,
          bby_gender: vm.bby_gender,
          place_placenta: vm.place_placenta,
          bby_status: vm.bby_status,
          status_waterfall: vm.status_waterfall,
          bby_healthy: vm.bby_healthy,
          bby_heartrate: vm.bby_heartrate,
          bby_activity: vm.bby_activity,
          bby_skull: vm.bby_skull,
          bby_thigh_bone: vm.bby_thigh_bone,
          bby_weight: vm.bby_weight,
          bby_age: vm.bby_age,
          bby_birth: vm.bby_birth,
          check_date: vm.check_date,
          doctor: vm.doctor,
          hostname: vm.hostname,
        });
        self.formData.set("data", postData);
        self.$store.dispatch('echo/storeEchoBaby', self.formData).then(function (data) {
          if (data.status) {
            self.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: data.message
            });
            self.isShow = false;
            window.history.back();
            self.$q.loading.hide();
          } else {
            self.$q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: data.message
            })
          }
        });
      },
      factoryFnUploadPhotoUp(file) {
        let self = this;
        self.formData.append('photos', file[0]);
      },
      factoryFnUploadPhotoDown(file) {
        let self = this;
        self.formData.append('photos', file[0]);
      },
      dateConverted(rawDate) {
        const d = new Date(rawDate);
        const ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(d)
        const mo = new Intl.DateTimeFormat('en', {month: 'short'}).format(d)
        const da = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(d)
        return `${da}-${mo}-${ye}`;
      }
    }
  }
</script>

<style scoped>

</style>
