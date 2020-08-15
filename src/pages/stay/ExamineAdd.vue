<template>
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
        <div class="row q-gutter-x-sm q-mb-sm">
          <q-item-label class="col q-my-sm">
           <span class="text-bold"> អត្តបទអ្នកជម្ងឺ </span>
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
          <q-select class="col"
                    outlined
                    v-model="data.room_obj"
                    label="ជ្រើសរើសបន្ទប់"
                    :options="getRooms"
                    square
                    lazy-rules
                    :rules="[ val => !!val || 'សូមជ្រើសរើសចន្លោះ']">
          </q-select>
          <q-input class="col" label="ថ្ងៃពិនិត្យ" outlined square v-model="data.exa_date" mask="date"
                   :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="data.exa_date" @input="() => $refs.qDateProxy.hide()"/>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="row q-gutter-x-sm q-mb-sm">
          <q-input
            class="col"
            v-model="data.reason"
            outlined
            label="មូលហេតុសម្រាក"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
          <q-input
            class="col"
            v-model="data.his_reaction"
            outlined
            label="ប្រវត្តិប្រតិកម្ម"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
          <q-input
            class="col"
            v-model="data.his_ill"
            outlined
            label="ប្រវត្តិជំងឺ"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
        </div>
        <div class="row q-gutter-x-sm q-mb-sm">
          <q-select
            class="col"
            square
            outlined
            label="អតីតកាលជំងឺ"
            v-model="data.ex_ill"
            use-input
            use-chips
            multiple
            input-debounce="0"
            @new-value="createValue"
            :options="filterOptions"
            @filter="filterFn"
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
        </div>
        <div class="row q-gutter-x-sm q-mb-sm">
          <q-input
            class="col"
            v-model="data.gen_status"
            outlined
            label="សភាពទូទៅ"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
          <q-input
            class="col"
            v-model="data.heat"
            outlined
            label="កំដៅ"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
          <q-input
            class="col"
            v-model="data.blood_pressure"
            outlined
            label="សំពាធឈាម"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
        </div>
        <div class="row q-gutter-x-sm q-mb-sm">
          <q-input
            class="col"
            v-model="data.pulse"
            outlined
            label="ជីពចរ"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
          <q-input
            class="col"
            v-model="data.spo"
            outlined
            label="Spo2"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
          <q-input
            class="col"
            v-model="data.weight"
            outlined
            label="ទំងន់"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
        </div>
        <div class="row q-gutter-x-sm q-mb-sm">
          <q-input
            class="col"
            v-model="data.signal_ill"
            outlined
            label="សញ្ញាតំអូញ"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
          <q-input
            class="col"
            v-model="data.mark_ill"
            outlined
            label="រូបសញ្ញា"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
        </div>
        <div class="row q-gutter-x-sm q-mb-sm">
          <q-input
            class="col"
            v-model="data.diagnose_in"
            outlined
            label="រោគវិនិច្ឆ័យចូល"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
        </div>
        <div class="row q-gutter-x-sm q-mb-sm">
          <q-input
            class="col"
            v-model="data.check_at"
            outlined
            label="ការពិនិត្យអម"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
        </div>
        <div class="row q-gutter-x-sm q-mb-sm">
          <q-input
            class="col"
            v-model="data.diagnose_out"
            outlined
            label="រោគវិនិច្ឆ័យចេញ"
            square
            lazy-rules
            :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
          />
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn icon="save" style="width: 150px; height: 50px" color="primary" label="រក្សារទុក" @click="$refs.addForm.submit()">
        <q-tooltip content-class="bg-white text-primary">Save</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
  const stringOptions = [
    'លើសសំពាធឈាម', 'របេង', 'ទឹកនោមផ្អែម'
  ];
  export default {
    name: "ExamineAdd",
    data() {
      return {
        data: {
          patient_obj: '',
          patient: '',
          room_obj: '',
          room: '',
          exa_date: '',
          reason: '',
          his_reaction: '',
          his_ill: '',
          ex_ill: [],
          gen_status: '',
          heat: '',
          blood_pressure: '',
          pulse: '',
          spo: '',
          weight: '',
          signal_ill: '',
          mark_ill: '',
          diagnose_in: '',
          check_at: '',
          diagnose_out: '',
          is_stay: true,
        },
        filterOptions: stringOptions
      }
    },
    computed: {
      getPatients() {
        let self = this;
        return this.$store.getters['patient/getPatient'].map(function (x) {
          return {
            label: `${x.lname} ${x.fname} - ${x.llatin} ${x.flatin}, ${x.gender}, ${self.dateConverted(x.dob)}`,
            value: x._id,
          }
        })
      },
      getRooms() {
        return this.$store.getters['room/getFreeRoom'].map((x) => {
          return {
            label: x.name,
            value: x._id
          }
        })
      }
    },
    methods: {
      onSubmit() {
        let self = this;
        self.data.patient = self.data.patient_obj.value;
        self.data.room = self.data.room_obj.value;
        self.$store.dispatch('examine/storeExamine', self.data).then(function (data) {
          if (data.status) {
            self.$store.dispatch('room/fetchRoom');
            window.history.back();
            self.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: data.message
            });

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
      createValue(val, done) {
        if (val.length > 2) {
          if (!stringOptions.includes(val)) {
            done(val, 'add-unique')
          }
        }
      },
      filterFn(val, update) {
        update(() => {
          if (val === '') {
            this.filterOptions = stringOptions
          } else {
            const needle = val.toLowerCase()
            this.filterOptions = stringOptions.filter(
              v => v.toLowerCase().indexOf(needle) > -1
            )
          }
        })
      },
      dateConverted(rawDate) {
        const d = new Date(rawDate);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
        return `${da}-${mo}-${ye}`;
      },
    }
  }
</script>

<style scoped>

</style>
