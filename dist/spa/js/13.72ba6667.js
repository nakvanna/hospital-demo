(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{5445:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("q-card",[e("q-card-actions",{attrs:{align:"left"}},[e("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],staticStyle:{width:"150px"},attrs:{color:"red",icon:"reply",label:"ត្រឡប់ក្រោយ"}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("ថយក្រោយ")])],1)],1),e("q-card-section",[e("q-form",{ref:"addForm",staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[e("q-card",{staticClass:"my-card bg-grey-1",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-item-label",{staticClass:"col q-my-sm"},[t._v("\n                ពត៍មានអ្នកជម្ងឺ\n              ")])],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-select",{staticClass:"col",attrs:{outlined:"",label:"ឈ្មោះអ្នកជម្ងឺ",options:t.getPatients,square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},model:{value:t.data.patient_obj,callback:function(a){t.$set(t.data,"patient_obj",a)},expression:"data.patient_obj"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-item-label",{staticClass:"col q-my-sm"},[t._v("\n                ពត៍មានពិនិត្យ\n              ")])],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-input",{staticClass:"col",attrs:{outlined:"",label:"ចំនួនទារក",type:"number",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bby_num,callback:function(a){t.$set(t.data,"bby_num",a)},expression:"data.bby_num"}}),e("q-select",{staticClass:"col",attrs:{outlined:"",label:"ភេទទារក",options:["ប្រុស","ស្រី"],square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},model:{value:t.data.bby_gender,callback:function(a){t.$set(t.data,"bby_gender",a)},expression:"data.bby_gender"}}),e("q-select",{staticClass:"col",attrs:{outlined:"",label:"ទីតាំងសុក",options:["មុខ","ក្រោយ"],square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},model:{value:t.data.place_placenta,callback:function(a){t.$set(t.data,"place_placenta",a)},expression:"data.place_placenta"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-input",{staticClass:"col",attrs:{outlined:"",label:"ទំរង់របស់កូន",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bby_status,callback:function(a){t.$set(t.data,"bby_status",a)},expression:"data.bby_status"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"ស្ថានភាពទឹកភ្លោះ",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.status_waterfall,callback:function(a){t.$set(t.data,"status_waterfall",a)},expression:"data.status_waterfall"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"សុខភាពទារក",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bby_healthy,callback:function(a){t.$set(t.data,"bby_healthy",a)},expression:"data.bby_healthy"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-input",{staticClass:"col",attrs:{outlined:"",label:"ចលនាចង្វាក់បេះដូង(ធម្មតា 150)",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bby_heartrate,callback:function(a){t.$set(t.data,"bby_heartrate",a)},expression:"data.bby_heartrate"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"សកម្មភាពទារក",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bby_activity,callback:function(a){t.$set(t.data,"bby_activity",a)},expression:"data.bby_activity"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"ទំហំឆ្អឹងក្បាល",type:"number",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bby_skull,callback:function(a){t.$set(t.data,"bby_skull",a)},expression:"data.bby_skull"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-input",{staticClass:"col",attrs:{outlined:"",label:"ប្រវែងឆ្អឹងភ្លៅ",type:"number",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bby_thigh_bone,callback:function(a){t.$set(t.data,"bby_thigh_bone",a)},expression:"data.bby_thigh_bone"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"ទំងន់ទារក",type:"number",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bby_weight,callback:function(a){t.$set(t.data,"bby_weight",a)},expression:"data.bby_weight"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"អាយុទារក(4ខែ 4សប្ដាហ៍ 4ថ្ងៃ)",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bby_age,callback:function(a){t.$set(t.data,"bby_age",a)},expression:"data.bby_age"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-input",{staticClass:"col",attrs:{label:"ថ្ងៃគ្រប់ខែ",outlined:"",square:"",mask:"date",rules:["date"]},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{ref:"qDateProxyBirth",attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{on:{input:function(){return t.$refs.qDateProxyBirth.hide()}},model:{value:t.data.bby_birth,callback:function(a){t.$set(t.data,"bby_birth",a)},expression:"data.bby_birth"}})],1)],1)]},proxy:!0}]),model:{value:t.data.bby_birth,callback:function(a){t.$set(t.data,"bby_birth",a)},expression:"data.bby_birth"}}),e("q-input",{staticClass:"col",attrs:{label:"ថ្ងៃពិនិត្យ",outlined:"",square:"",mask:"date",rules:["date"]},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{ref:"qDateProxyCheck",attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{on:{input:function(){return t.$refs.qDateProxyCheck.hide()}},model:{value:t.data.check_date,callback:function(a){t.$set(t.data,"check_date",a)},expression:"data.check_date"}})],1)],1)]},proxy:!0}]),model:{value:t.data.check_date,callback:function(a){t.$set(t.data,"check_date",a)},expression:"data.check_date"}}),e("q-select",{staticClass:"col",attrs:{outlined:"",label:"ឈ្មោះគ្រូពេទ្យ",options:["Dr.SORN Visai"],square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},model:{value:t.data.doctor,callback:function(a){t.$set(t.data,"doctor",a)},expression:"data.doctor"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-uploader",{staticClass:"col",staticStyle:{"max-width":"300px"},attrs:{factory:t.factoryFnUploadPhotoUp,accept:"image/*","hide-upload-btn":"",label:"ដាក់រូបភាពខាងលើ",color:"grey",square:"",flat:"",bordered:"","auto-upload":""}}),e("q-uploader",{staticClass:"col",staticStyle:{"max-width":"300px"},attrs:{factory:t.factoryFnUploadPhotoDown,accept:"image/*","hide-upload-btn":"",label:"ដាក់រូបភាពខាងក្រោម",color:"grey",square:"",flat:"",bordered:"","auto-upload":""}})],1)]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{staticStyle:{width:"150px",height:"50px"},attrs:{icon:"save",color:"primary",label:"រក្សារទុក"},on:{click:function(a){return t.$refs.addForm.submit()}}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1)},l=[],o={name:"EchoAdd",data:function(){return{formData:new FormData,data:{patient_obj:"",type:"Obstétrique",bby_num:1,bby_gender:"",place_placenta:"",bby_status:"",status_waterfall:"",bby_healthy:"",bby_heartrate:"",bby_activity:"",bby_skull:"",bby_thigh_bone:"",bby_weight:"",bby_age:"",bby_birth:"",check_date:"",doctor:"",photo:"",hostname:"https://api.visai.cloudware.com.kh/"}}},computed:{getPatients:function(){var t=this;return t.$store.getters["patient/getPatient"].map((function(a){return{label:"".concat(a.lname," ").concat(a.fname," - ").concat(a.llatin," ").concat(a.flatin,", ").concat(a.gender,", ").concat(t.dateConverted(a.dob)),value:a._id}}))}},methods:{onSubmit:function(){var t=this,a=t.data;t.$q.loading.show();var e=JSON.stringify({patient:a.patient_obj.value,type:a.type,bby_num:a.bby_num,bby_gender:a.bby_gender,place_placenta:a.place_placenta,bby_status:a.bby_status,status_waterfall:a.status_waterfall,bby_healthy:a.bby_healthy,bby_heartrate:a.bby_heartrate,bby_activity:a.bby_activity,bby_skull:a.bby_skull,bby_thigh_bone:a.bby_thigh_bone,bby_weight:a.bby_weight,bby_age:a.bby_age,bby_birth:a.bby_birth,check_date:a.check_date,doctor:a.doctor,hostname:a.hostname});t.formData.set("data",e),t.$store.dispatch("echo/storeEchoBaby",t.formData).then((function(a){a.status?(t.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:a.message}),t.isShow=!1,window.history.back(),t.$q.loading.hide()):t.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:a.message})}))},factoryFnUploadPhotoUp:function(t){var a=this;a.formData.append("photos",t[0])},factoryFnUploadPhotoDown:function(t){var a=this;a.formData.append("photos",t[0])},dateConverted:function(t){var a=new Date(t),e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(a),s=new Intl.DateTimeFormat("en",{month:"short"}).format(a),l=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(a);return"".concat(l,"-").concat(s,"-").concat(e)}}},r=o,n=e("2877"),i=e("eebe"),c=e.n(i),b=e("9989"),u=e("f09f"),d=e("4b7e"),y=e("9c40"),p=e("05c0"),m=e("a370"),_=e("0378"),h=e("0170"),f=e("ddd8"),q=e("27f9"),g=e("0016"),v=e("7cbe"),w=e("52ee"),x=e("ee89"),k=e("2eeb"),C=Object(n["a"])(r,s,l,!1,null,"68819a3a",null);a["default"]=C.exports;c()(C,"components",{QPage:b["a"],QCard:u["a"],QCardActions:d["a"],QBtn:y["a"],QTooltip:p["a"],QCardSection:m["a"],QForm:_["a"],QItemLabel:h["a"],QSelect:f["a"],QInput:q["a"],QIcon:g["a"],QPopupProxy:v["a"],QDate:w["a"],QUploader:x["a"]}),c()(C,"directives",{GoBack:k["a"]})}}]);