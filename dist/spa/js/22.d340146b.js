(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{c95f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("q-card",[a("q-card-section",{staticClass:"row items-center q-pb-none"},[a("div",{staticClass:"text-h6"},[e._v("ការកំណត់")]),a("q-space"),a("q-btn",{attrs:{icon:"add",flat:"",round:"",to:"/labo-setting/create"}})],1),a("q-card-section",[a("q-table",{staticClass:"table-virtual-scroll",attrs:{data:e.getLaboSettings,columns:e.columns,"row-key":"name",filter:e.filter,"virtual-scroll":"",pagination:e.pagination,"rows-per-page-options":[0],"virtual-scroll-sticky-size-start":48},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-right",fn:function(){return[a("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"_id",staticClass:"q-gutter-x-xs",attrs:{props:t}},[a("q-btn",{attrs:{size:"10px",flat:"",round:"",color:"grey",dense:"",icon:"fas fa-eye",to:"/labo-setting/"+t.row._id+"/edit"}})],1),a("q-td",{key:"type",attrs:{props:t}},[e._v("\n              "+e._s(t.row.type)+"\n            ")]),a("q-td",{key:"name",attrs:{props:t}},[e._v("\n              "+e._s(t.row.name)+"\n            ")]),a("q-td",{key:"value",attrs:{props:t}},[e._v("\n              "+e._s(t.row.value)),a("sup",[e._v(e._s(t.row.superscript))]),e._v(e._s(t.row.unit)+"\n            ")]),a("q-td",{key:"reference",attrs:{props:t}},["HAEMATHOLOGY"===t.row.type?a("span",[e._v("\n                ( "+e._s(t.row.min)+" - "+e._s(t.row.max)+" )\n              ")]):e._e(),"BIOCHEMISTRY"===t.row.type&&null===t.row.min&&null!==t.row.max?a("span",[e._v("\n                 N: < "+e._s(t.row.max)+"\n              ")]):e._e(),"BIOCHEMISTRY"===t.row.type&&null!==t.row.min&&null===t.row.max?a("span",[e._v("\n                N: > "+e._s(t.row.min)+"\n              ")]):e._e(),"BIOCHEMISTRY"===t.row.type&&null===t.row.min&&null===t.row.max?a("span"):e._e(),"BIOCHEMISTRY"===t.row.type&&null!==t.row.min&&null!==t.row.max?a("span",[e._v("\n                N:( "+e._s(t.row.min)+" - "+e._s(t.row.max)+" )\n              ")]):e._e()])],1)]}}])})],1)],1)],1)},r=[],o={name:"LaboSetting",data:function(){return{filter:"",pagination:{rowsPerPage:0},columns:[{align:"left",name:"_id",field:"_id"},{align:"left",name:"type",label:"ប្រភេទ",field:"type",sortable:!0},{align:"left",name:"name",label:"ឈ្មោះ",field:"name",sortable:!0},{align:"left",name:"value",label:"ឯកតា",field:"value",sortable:!0},{align:"left",name:"reference",label:"តម្លៃ",field:"reference",sortable:!0}]}},computed:{getLaboSettings:function(){return this.$store.getters["labo_setting/getLaboSetting"]}},created:function(){var e=this;e.$store.dispatch("labo_setting/fetchLaboSetting")}},s=o,l=a("7a99"),i=a("3d2d"),c=a.n(i),p=a("7441"),u=a("60e8"),d=a("81d0"),f=a("806e"),_=a("31c6"),w=a("86ca"),m=a("8e7c"),b=a("3cf2"),g=a("c62b"),y=a("fefc"),v=Object(l["a"])(s,n,r,!1,null,"3ca17ac4",null);t["default"]=v.exports;c()(v,"components",{QPage:p["a"],QCard:u["a"],QCardSection:d["a"],QSpace:f["a"],QBtn:_["a"],QTable:w["a"],QInput:m["a"],QIcon:b["a"],QTr:g["a"],QTd:y["a"]})}}]);