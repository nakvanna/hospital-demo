<template>
  <q-page>
    <q-card>
      <q-card-actions align="center">
        <q-btn class="full-width" color="grey" icon="keyboard_backspace" v-go-back.single>
          <q-tooltip content-class="bg-white text-primary">ថយក្រោយ</q-tooltip>
        </q-btn>
      </q-card-actions>
      <q-card-section>
        <div class="text-h6">
          {{data.title}}
          <q-popup-edit v-model="data.title">
            <template v-slot="{ initialValue, value, emitValue, validate, set, cancel }">
              <q-input @keyup.enter.stop v-model="data.title" dense autofocus>
                <template v-slot:after>
                  <q-btn flat dense color="negative" icon="cancel" @click.stop="cancel"/>
                  <q-btn flat dense color="positive" icon="check_circle" @click.stop="set"
                         @click="updateEchoSetting({id:$route.params.id,data:{title:data.title}})"
                         :disable="initialValue === value"/>
                </template>
              </q-input>
            </template>
          </q-popup-edit>
          <q-icon name="edit" color="primary"/>
        </div>
      </q-card-section>
      <q-card-section>
        <q-icon name="edit" color="primary" size="30px" @click="dialog = true"/>
        <div v-html="data.content"/>
      </q-card-section>
      <q-dialog
        v-model="dialog"
        persistent
        :maximized="true"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card>
          <q-bar>
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <editor
              style="width: 100%"
              api-key="2k96ej1mruarg9ku9fc8r5l22ufujvqu76zai34ohzuf79wu"
              v-model="data.content"
              :init="editorInit"
            />
          </q-card-section>
          <q-card-actions align="center">
            <q-btn class="full-width" color="primary" label="រក្សារទុក" @click="updateEchoSetting({id:$route.params.id,data:{content:data.content}})">
              <q-tooltip content-class="bg-white text-primary">Save</q-tooltip>
            </q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-card>
  </q-page>
</template>

<script>
  import Editor from '@tinymce/tinymce-vue';
  const columns_default = [
    {align: 'left', name: 'title', label: 'ចំណងជើង', field: 'title'},
  ];
  export default {
    name: "EchoSettingEdit",
    components: {Editor},
    data() {
      return {
        dialog: false,
        columns_default,
        echo_setting_data: [],
        data: {
          _id: null,
          title: '',
          content: ''
        },
        editorInit: {
          max_height:650,
          menubar: true,
          images_upload_url: 'http://localhost:3030/file-upload',
          automatic_uploads: true,
          images_reuse_filename: true,
          relative_urls: false,
          remove_script_host: false,
          convert_urls: true,
          plugins: [
            'autoresize print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample code table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
          ],
          toolbar:
            'code undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor casechange removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment'
        },
      }
    },
    created(){
      let self = this;
      self.$store.dispatch('echo_setting/editEchoSetting', self.$route.params.id).then((d)=>{
        self.data._id = d.data._id;
        self.data.title = d.data.title;
        self.data.content = d.data.content;
      })
    },
    methods: {
      updateEchoSetting(data){
        let self = this;
        self.$store.dispatch('echo_setting/updateEchoSetting', data).then(function (data) {
          if (data.status) {
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
        })
      }
    }
  }
</script>

<style scoped>

</style>
