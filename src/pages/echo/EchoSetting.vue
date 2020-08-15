<template>
  <q-page>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">កំណត់អេកូ</div>
        <q-space/>
        <q-btn icon="add" flat round to="/echo-setting/create"/>
      </q-card-section>
      <q-card-section>
        <q-table
          class="table-virtual-scroll"
          :data="getEchoSettings"
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
                <q-btn size="10px" flat round color="grey" dense icon="fas fa-eye"
                       :to="`/echo-setting/${props.row._id}/edit`"/>
              </q-td>
              <q-td key="title" :props="props">
                {{props.row.title}}
              </q-td>
              <q-td key="content" :props="props">
                <div v-html="props.row.content"></div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
  export default {
    name: "EchoSetting",
    data() {
      return {
        filter: '',
        pagination: {
          rowsPerPage: 0
        },
        columns: [
          {align: 'left', name: '_id', field: '_id'},
          {align: 'left', name: 'title', label: 'Title', field: 'title', sortable: true},
          {align: 'left', name: 'content', label: 'Content', field: 'content', sortable: true},
        ],
      }
    },
    computed: {
      getEchoSettings() {
        return this.$store.getters['echo_setting/getEchoSetting']
      }
    }
  }
</script>

<style scoped>

</style>
