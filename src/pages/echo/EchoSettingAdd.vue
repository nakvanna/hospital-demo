<template>
  <q-page>
    <q-card>
      <q-card-actions align="center">
        <q-btn class="full-width" color="grey" icon="keyboard_backspace" v-go-back.single>
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
                <q-input
                  class="col"
                  outlined
                  v-model="data.title"
                  label="ចំណងជើង"
                  square
                  lazy-rules
                  :rules="[ val => !!val || 'សូមបំពេញចន្លោះ']"
                />
              </div>
              <div class="row q-gutter-x-sm q-mb-sm">
                <editor
                  style="width: 100%"
                  api-key="2k96ej1mruarg9ku9fc8r5l22ufujvqu76zai34ohzuf79wu"
                  v-model="data.content"
                  :init="editorInit"
                />
              </div>
            </q-card-section>
            <q-card-actions align="center">
              <q-btn class="full-width" color="primary" label="រក្សារទុក" @click="$refs.addForm.submit()">
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
  import Editor from '@tinymce/tinymce-vue';
  export default {
    name: "EchoSettingAdd",
    components: { Editor },
    data() {
      return {
        editorInit: {
          height: 500,
          menubar: true,
          images_upload_url: 'http://localhost:3030/file-upload',
          automatic_uploads: true,
          images_reuse_filename: true,
          relative_urls: false,
          remove_script_host: false,
          convert_urls: true,
          plugins: [
            'print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
          ],
          toolbar:
            'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor casechange removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment'
        },
        data: {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      onSubmit() {
        let self = this;
        self.$store.dispatch('echo_setting/storeEchoSetting', self.data).then(function (data) {
          if (data.status) {
            self.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: data.message
            });
            self.isShow = false
          } else {
            self.$q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: data.message
            })
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
