(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"952d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-card-actions",{attrs:{align:"left"}},[a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],staticStyle:{width:"150px"},attrs:{color:"red",icon:"reply",label:"ត្រឡប់ក្រោយ"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("ថយក្រោយ")])],1)],1),a("q-card",{staticClass:"my-card bg-grey-1",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("q-form",{ref:"addForm",staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[a("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[a("q-input",{staticClass:"col",attrs:{outlined:"",label:"ឈ្មោះទំនិញ",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}}),a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("q-select",{staticClass:"col",attrs:{outlined:"",label:"ជ្រើសរើសប្រភេទ",options:t.getProductTypes,square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},model:{value:t.data.type_obj,callback:function(e){t.$set(t.data,"type_obj",e)},expression:"data.type_obj"}}),a("q-btn",{staticClass:"col-1",staticStyle:{height:"55px"},attrs:{dense:"",color:"primary",icon:"add"},on:{click:function(e){return t.$refs.ProductType.show()}}})],1)]),a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("q-select",{staticClass:"col",attrs:{outlined:"",label:"ជ្រើសរើសឯកតា",options:t.getUnitTypes,square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},model:{value:t.data.unit_obj,callback:function(e){t.$set(t.data,"unit_obj",e)},expression:"data.unit_obj"}}),a("q-btn",{staticClass:"col-1",staticStyle:{height:"55px"},attrs:{dense:"",color:"primary",icon:"add"},on:{click:function(e){return t.$refs.UnitType.show()}}})],1)])],1),a("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[a("q-input",{staticClass:"col",attrs:{outlined:"",label:"តម្លៃទិញ",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.buy_price,callback:function(e){t.$set(t.data,"buy_price",e)},expression:"data.buy_price"}}),a("q-input",{staticClass:"col",attrs:{outlined:"",label:"តម្លៃលក់",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.sale_price,callback:function(e){t.$set(t.data,"sale_price",e)},expression:"data.sale_price"}}),a("q-select",{staticClass:"col",attrs:{outlined:"",label:"ប្រភេទស្តុក",options:["Inventory-Part","Service","Sale-Only","Purchase-Only"],square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},model:{value:t.data.invent_type,callback:function(e){t.$set(t.data,"invent_type",e)},expression:"data.invent_type"}}),a("q-input",{staticClass:"col",attrs:{outlined:"",label:"ចំនួនជូនដំណឹង",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.stock_alert,callback:function(e){t.$set(t.data,"stock_alert",e)},expression:"data.stock_alert"}})],1),a("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[a("q-input",{staticClass:"col",attrs:{outlined:"",label:"ចំណាំ",square:"",type:"textarea","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.description,callback:function(e){t.$set(t.data,"description",e)},expression:"data.description"}})],1),a("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[a("q-uploader",{staticClass:"col",staticStyle:{"max-width":"300px"},attrs:{factory:t.factoryFnUploadPhoto,accept:"image/*","hide-upload-btn":"",label:"ដាក់រូបភាព",color:"grey",square:"",flat:"",bordered:"","auto-upload":""}})],1)])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{staticStyle:{width:"150px",height:"50px"},attrs:{icon:"save",color:"primary",label:"រក្សារទុក"},on:{click:function(e){return t.$refs.addForm.submit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Save")])],1)],1)],1),a("product-type",{ref:"ProductType"}),a("unit-type",{ref:"UnitType"})],1)},o=[],n=a("ea6e"),r=a.n(n),i=(a("2735"),a("c0e9")),c=a.n(i),l=(a("a4eb"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{"full-width":"",position:"top"},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[a("q-card",[a("q-bar",[a("h6",[t._v("បន្ថែមប្រភេទទំនិញ")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),a("q-card-section",[a("q-form",{ref:"addForm",staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[a("q-input",{staticClass:"col",attrs:{outlined:"",label:"ឈ្មោះប្រភេទ",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col",attrs:{align:"right"}},[a("q-btn",{attrs:{dense:"",icon:"save",label:"រក្សាទុក",color:"primary"},on:{click:function(e){return t.$refs.addForm.submit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Save")])],1)],1)])],1)],1)],1)}),u=[],d={name:"ProductType",data:function(){return{isShow:!1,data:{name:""}}},methods:{onSubmit:function(){var t=this;t.$q.loading.show(),t.$store.dispatch("product/storeProductType",t.data).then(function(){var e=c()(r.a.mark((function e(a){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.status){e.next=8;break}return t.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:a.message}),t.isShow=!1,e.next=5,t.$store.dispatch("product/fetchProductType");case 5:t.$q.loading.hide(),e.next=9;break;case 8:t.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:a.message});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},show:function(){this.isShow=!0}}},p=d,m=a("7a99"),f=a("3d2d"),b=a.n(f),h=a("29ad"),y=a("60e8"),q=a("a63a"),v=a("806e"),g=a("31c6"),w=a("c150"),_=a("81d0"),x=a("a238"),C=a("8e7c"),k=a("8506"),$=Object(m["a"])(p,l,u,!1,null,"6d03c546",null),S=$.exports;b()($,"components",{QDialog:h["a"],QCard:y["a"],QBar:q["a"],QSpace:v["a"],QBtn:g["a"],QTooltip:w["a"],QCardSection:_["a"],QForm:x["a"],QInput:C["a"]}),b()($,"directives",{ClosePopup:k["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{"full-width":"",position:"top"},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[a("q-card",[a("q-bar",[a("h6",[t._v("បន្ថែមឯកតាទំនិញ")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),a("q-card-section",[a("q-form",{ref:"addForm",staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[a("q-input",{staticClass:"col",attrs:{outlined:"",label:"ឈ្មោះឯកតា",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col",attrs:{align:"right"}},[a("q-btn",{attrs:{dense:"",icon:"save",label:"រក្សាទុក",color:"primary"},on:{click:function(e){return t.$refs.addForm.submit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Save")])],1)],1)])],1)],1)],1)},T=[],P={name:"UnitType",data:function(){return{isShow:!1,data:{name:""}}},methods:{onSubmit:function(){var t=this;t.$q.loading.show(),t.$store.dispatch("product/storeUnitType",t.data).then(function(){var e=c()(r.a.mark((function e(a){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.status){e.next=8;break}return t.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:a.message}),t.isShow=!1,e.next=5,t.$store.dispatch("product/fetchUnitType");case 5:t.$q.loading.hide(),e.next=9;break;case 8:t.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:a.message});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},show:function(){this.isShow=!0}}},j=P,F=Object(m["a"])(j,Q,T,!1,null,"2a346084",null),U=F.exports;b()(F,"components",{QDialog:h["a"],QCard:y["a"],QBar:q["a"],QSpace:v["a"],QBtn:g["a"],QTooltip:w["a"],QCardSection:_["a"],QForm:x["a"],QInput:C["a"]}),b()(F,"directives",{ClosePopup:k["a"]});var z={name:"ProductAdd",components:{ProductType:S,UnitType:U},data:function(){return{formData:new FormData,data:{name:"",type_obj:null,unit_obj:null,stock_alert:"",buy_price:"0",sale_price:"0",invent_type:"",description:"",hostname:"https://api.hospital.demo.cloudware.com.kh/"}}},computed:{getProductTypes:function(){return this.$store.getters["product/getProductTypes"].map((function(t){return{label:t.name,value:t._id}}))},getUnitTypes:function(){return this.$store.getters["product/getUnitTypes"].map((function(t){return{label:t.name,value:t._id}}))}},methods:{onSubmit:function(){var t=this;t.$q.loading.show();var e=t.data,a=JSON.stringify({name:e.name,type:e.type_obj.label,unit:e.unit_obj.label,stock_alert:e.stock_alert,buy_price:e.buy_price,sale_price:e.sale_price,invent_type:e.invent_type,description:e.description,hostname:e.hostname});t.formData.set("data",a),t.$store.dispatch("product/storeProduct",t.formData).then(function(){var e=c()(r.a.mark((function e(a){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.status?(t.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:a.message}),t.$q.loading.hide(),window.history.back()):t.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:a.message});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},factoryFnUploadPhoto:function(t){var e=this;e.formData.set("photo",t[0])}}},D=z,B=a("7441"),O=a("49db"),I=a("17bc"),N=a("84ed"),E=a("5879"),J=Object(m["a"])(D,s,o,!1,null,"4685c65c",null);e["default"]=J.exports;b()(J,"components",{QPage:B["a"],QCardActions:O["a"],QBtn:g["a"],QTooltip:w["a"],QCard:y["a"],QCardSection:_["a"],QForm:x["a"],QInput:C["a"],QSelect:I["a"],QUploader:N["a"]}),b()(J,"directives",{GoBack:E["a"]})}}]);