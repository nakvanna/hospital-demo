(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{ad83:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-card",[e("q-card-actions",{attrs:{align:"left"}},[e("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],staticStyle:{width:"150px"},attrs:{color:"red",icon:"reply",label:"ត្រឡប់ក្រោយ"}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("ថយក្រោយ")])],1)],1),e("q-card-section",[e("q-form",{ref:"addForm",staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[e("q-card",{staticClass:"my-card bg-grey-1",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-item-label",{staticClass:"q-my-sm"},[t._v("\n                ឈ្មោះខ្មែរ\n              ")])],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-input",{staticClass:"col",attrs:{outlined:"",label:"នាមត្រកូល",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.lname,callback:function(a){t.$set(t.data,"lname",a)},expression:"data.lname"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"នាមខ្លួន",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.fname,callback:function(a){t.$set(t.data,"fname",a)},expression:"data.fname"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-item-label",{staticClass:"q-my-sm"},[t._v("\n                ឈ្មោះឡាតាំង\n              ")])],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-input",{staticClass:"col",attrs:{outlined:"",label:"នាមត្រកូលឡាតាំង",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.llatin,callback:function(a){t.$set(t.data,"llatin",a)},expression:"data.llatin"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"នាមខ្លួនឡាតាំង",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.flatin,callback:function(a){t.$set(t.data,"flatin",a)},expression:"data.flatin"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-select",{staticClass:"col",attrs:{outlined:"",label:"ភេទ",options:["ស្រី","ប្រុស"],square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},model:{value:t.data.gender,callback:function(a){t.$set(t.data,"gender",a)},expression:"data.gender"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"ថ្ងៃខែឆ្នាំកំណើត",square:"","lazy-rules":"",mask:"date",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{ref:"dateDOB",attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{on:{input:function(){return t.$refs.dateDOB.hide()}},model:{value:t.data.dob,callback:function(a){t.$set(t.data,"dob",a)},expression:"data.dob"}})],1)],1)]},proxy:!0}]),model:{value:t.data.dob,callback:function(a){t.$set(t.data,"dob",a)},expression:"data.dob"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"លេខអត្តសញ្ញាណប័ណ្ឌ",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.national_id,callback:function(a){t.$set(t.data,"national_id",a)},expression:"data.national_id"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-input",{staticClass:"col",attrs:{outlined:"",label:"លេខគណនីធនាគារ",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bank_account_no,callback:function(a){t.$set(t.data,"bank_account_no",a)},expression:"data.bank_account_no"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"ឈ្មោះធនាគា",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.bank_name,callback:function(a){t.$set(t.data,"bank_name",a)},expression:"data.bank_name"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-item-label",{staticClass:"q-my-sm"},[t._v("\n                ទំនាក់ទំនង\n              ")])],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-input",{staticClass:"col",attrs:{outlined:"",label:"អ៊ីម៉ែ់ល",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.email,callback:function(a){t.$set(t.data,"email",a)},expression:"data.email"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"លេខទូរស័ព្ទ",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.tel,callback:function(a){t.$set(t.data,"tel",a)},expression:"data.tel"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-input",{staticClass:"col",attrs:{outlined:"",label:"Telegram",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.telegram,callback:function(a){t.$set(t.data,"telegram",a)},expression:"data.telegram"}}),e("q-input",{staticClass:"col",attrs:{outlined:"",label:"Facebook",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.facebook,callback:function(a){t.$set(t.data,"facebook",a)},expression:"data.facebook"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-item-label",{staticClass:"q-my-sm"},[t._v("\n                ទីកន្លែងកំណើត\n                "),e("q-btn",{attrs:{icon:"add",round:"",flat:"",color:"primary"},on:{click:function(a){return t.$refs.addressBook.show()}}})],1)],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-select",{staticClass:"col",attrs:{"use-input":"",outlined:"",label:"ជ្រើសរើស ទីកន្លែងកំណើត...",options:t.optionsAddressBook,square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},on:{filter:t.filterFnAddressBook},model:{value:t.data.pob_address_book,callback:function(a){t.$set(t.data,"pob_address_book",a)},expression:"data.pob_address_book"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-item-label",{staticClass:"q-my-sm"},[t._v("\n                អាស័យដ្ឋានបច្ចុប្បន្ន\n                "),e("q-btn",{attrs:{icon:"add",round:"",flat:"",color:"primary"},on:{click:function(a){return t.$refs.addressBook.show()}}})],1)],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-select",{staticClass:"col",attrs:{"use-input":"",outlined:"",label:"ជ្រើសរើស អាស័យដ្ឋានបច្ចុប្បន្ន",options:t.optionsAddressBook,square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},on:{filter:t.filterFnAddressBook},model:{value:t.data.current_address_book,callback:function(a){t.$set(t.data,"current_address_book",a)},expression:"data.current_address_book"}})],1),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("q-uploader",{staticClass:"col",staticStyle:{"max-width":"300px"},attrs:{factory:t.factoryFnUploadPhoto,accept:"image/*","hide-upload-btn":"",label:"ដាក់រូបភាព",color:"grey",square:"",flat:"",bordered:"","auto-upload":""}})],1)]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{staticStyle:{width:"150px",height:"50px"},attrs:{icon:"save",color:"primary",label:"រក្សារទុក"},on:{click:function(a){return t.$refs.addForm.submit()}}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Save")])],1)],1)],1)],1)],1),e("address-book",{ref:"addressBook"})],1)},o=[],l=e("2744"),n={name:"StaffAdd",components:{AddressBook:l["a"]},data:function(){return{content:"Hi",dialog:!1,maximizedToggle:!0,formData:new FormData,data:{lname:"",fname:"",llatin:"",flatin:"",gender:"",dob:"",national_id:"",bank_account_no:"",bank_name:"",email:"",tel:"",telegram:"",facebook:"",pob_address_book:"",current_address_book:"",hostname:"https://api.hospital.demo.cloudware.com.kh/"},optionsAddressBook:[]}},computed:{getAddressBooks:function(){return this.$store.getters["address_book/getAddressBook"].map((function(t){return{value:t._id,label:"".concat(t.province," - ").concat(t.district," - ").concat(t.commune," - ").concat(t.village)}}))}},methods:{onSubmit:function(){var t=this;t.$q.loading.show();var a=JSON.stringify(t.data);t.formData.set("data",a),t.$store.dispatch("staff/storeStaff",t.formData).then((function(a){a.status?(t.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:a.message}),t.isShow=!1,t.$q.loading.hide(),window.history.back()):t.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:a.message})}))},filterFnAddressBook:function(t,a,e){var s=this;a((function(){var a=t.toLowerCase();s.optionsAddressBook=s.getAddressBooks.filter((function(t){return t.label.toLowerCase().indexOf(a)>-1}))}))},factoryFnUploadPhoto:function(t){var a=this;a.formData.set("photo",t[0])}}},r=n,i=e("2877"),c=e("eebe"),d=e.n(c),u=e("f09f"),m=e("4b7e"),b=e("9c40"),f=e("05c0"),q=e("a370"),p=e("0378"),k=e("0170"),g=e("27f9"),v=e("ddd8"),x=e("0016"),C=e("7cbe"),_=e("52ee"),y=e("ee89"),w=e("2eeb"),h=Object(i["a"])(r,s,o,!1,null,"bb0d2eae",null);a["default"]=h.exports;d()(h,"components",{QCard:u["a"],QCardActions:m["a"],QBtn:b["a"],QTooltip:f["a"],QCardSection:q["a"],QForm:p["a"],QItemLabel:k["a"],QInput:g["a"],QSelect:v["a"],QIcon:x["a"],QPopupProxy:C["a"],QDate:_["a"],QUploader:y["a"]}),d()(h,"directives",{GoBack:w["a"]})}}]);