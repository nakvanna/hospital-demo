(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"7a52":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-card",[a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],staticClass:"full-width",attrs:{color:"grey",icon:"keyboard_backspace"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("ថយក្រោយ")])],1)],1),a("q-card-section",[a("q-form",{ref:"addForm",staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[a("q-card",{staticClass:"my-card bg-grey-1",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[a("q-input",{staticClass:"col",attrs:{outlined:"",label:"ចំណងជើង",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}})],1),a("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[a("editor",{staticStyle:{width:"100%"},attrs:{"api-key":"2k96ej1mruarg9ku9fc8r5l22ufujvqu76zai34ohzuf79wu",init:t.editorInit},model:{value:t.data.content,callback:function(e){t.$set(t.data,"content",e)},expression:"data.content"}})],1)]),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"រក្សារទុក"},on:{click:function(e){return t.$refs.addForm.submit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1)},o=[],r=a("ca72"),s={name:"EchoSettingAdd",components:{Editor:r["a"]},data:function(){return{editorInit:{height:500,menubar:!0,images_upload_url:"http://localhost:3000/file-upload",automatic_uploads:!0,images_reuse_filename:!0,relative_urls:!1,remove_script_host:!1,convert_urls:!0,plugins:["print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons"],toolbar:"undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor casechange removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment"},data:{title:"",content:""}}},methods:{onSubmit:function(){var t=this;t.$store.dispatch("echo_setting/storeEchoSetting",t.data).then((function(e){e.status?(t.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:e.message}),t.isShow=!1):t.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:e.message})}))}}},n=s,c=a("2877"),l=a("eebe"),d=a.n(l),u=a("9989"),m=a("f09f"),p=a("4b7e"),g=a("9c40"),b=a("05c0"),f=a("a370"),h=a("0378"),v=a("27f9"),k=a("2eeb"),q=Object(c["a"])(n,i,o,!1,null,"b72e2c46",null);e["default"]=q.exports;d()(q,"components",{QPage:u["a"],QCard:m["a"],QCardActions:p["a"],QBtn:g["a"],QTooltip:b["a"],QCardSection:f["a"],QForm:h["a"],QInput:v["a"]}),d()(q,"directives",{GoBack:k["a"]})}}]);