<template>
  <q-page padding>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h5 text-bold">អ្នកជម្ងឺ</div>
        <q-space/>
        <q-btn size="20px" icon="add_circle_outline" flat round to="/patient/create"/>
      </q-card-section>
      <q-card-section>
        <q-table
          class="table-virtual-scroll"
          :data="getPatients"
          :columns="columns"
          row-key="name"
          :filter="filter"
          virtual-scroll
          :pagination.sync="pagination"
          :rows-per-page-options="[0]"
          :virtual-scroll-sticky-size-start="48"
        >
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search"/>
              </template>
            </q-input>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="_id" :props="props" class="q-gutter-x-xs">
                <q-btn flat icon="more_vert" dense color="grey" size="12px">
                  <q-menu>
                    <q-list dense style="min-width: 100px">
                      <q-item clickable :to="`/patient/${props.row._id}/edit`">
                        <q-item-section side>
                          <q-icon name="edit" size="15px"/>
                        </q-item-section>
                        <q-item-section>
                          Edit
                        </q-item-section>
                        <q-item-section side>
                          <q-icon name="keyboard_arrow_right" size="15px"/>
                        </q-item-section>
                      </q-item>
                      <q-separator/>
                      <q-item clickable disable @click="printStaffCV(props.row._id)">
                        <q-item-section side>
                          <q-icon name="print" size="15px"/>
                        </q-item-section>
                        <q-item-section>CV</q-item-section>
                        <q-item-section side>
                          <q-icon name="keyboard_arrow_right" size="15px"/>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-td>
              <q-td key="thumbnail" :props="props">
                <q-avatar size="100px" class="shadow-1">
                  <q-img :src="props.row.hostname+props.row.photo"/>
                </q-avatar>
              </q-td>
              <q-td key="full_name" :props="props">
                {{props.row.full_name}}
              </q-td>
              <q-td key="full_latin" :props="props">
                {{props.row.full_latin}}
              </q-td>
              <q-td key="gender" :props="props">
                {{props.row.gender}}
              </q-td>
              <q-td key="dob" :props="props">
                {{dateConverted(props.row.dob)}}
              </q-td>
              <q-td key="phone" :props="props">
                {{props.row.phone}}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
  import {getPatient} from "src/store/patient/getters";

  export default {
    name: "Patient",
    data() {
      return {
        filter: '',
        pagination: {
          rowsPerPage: 0
        },
        columns: [
          {align: 'left', name: '_id', field: '_id'},
          {align: 'left', name: 'thumbnail', field: 'thumbnail'},
          {align: 'left', name: 'full_name', label: 'ឈ្មោះខ្មែរ', field: 'full_name', sortable: true},
          {align: 'left', name: 'full_latin', label: 'ឈ្មោះឡាតាំង', field: 'full_latin', sortable: true},
          {align: 'left', name: 'gender', label: 'ភេទ', field: 'gender', sortable: true},
          {align: 'left', name: 'dob', label: 'ថ្ងៃខែឆ្នាំកំណើត', field: 'dob', sortable: true},
          {align: 'left', name: 'phone', label: 'លេខទូរសព្ទ', field: 'phone', sortable: true},
        ],
      }
    },
    computed: {
      getPatients() {
        return this.$store.getters['patient/getPatient'].map(function (x) {
          return {
            ...x,
            full_name: `${x.lname} ${x.fname}`,
            full_latin: `${x.llatin} ${x.flatin}`,
          }
        })
      }
    },
    methods: {
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
