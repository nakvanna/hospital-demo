(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"9ff0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("q-card",[n("q-card-section",{staticClass:"row items-center q-pb-none"},[n("div",{staticClass:"text-h5 text-bold"},[t._v("ពិនិត្រអេកូ")]),n("q-space"),n("q-btn-group",[n("q-btn",{attrs:{to:"/echo/baby/create",push:"",label:"obstétrique",icon:"pregnant_woman"}}),n("q-btn",{attrs:{disable:"",push:"",label:"abdomino-pelvienne",icon:"airline_seat_flat"}}),n("q-btn",{attrs:{disable:"",push:"",label:"X-Ray",icon:"personal_video"}})],1)],1),n("q-card-section",[n("q-table",{staticClass:"table-virtual-scroll",attrs:{data:t.getEchoBabies,columns:t.columns,"row-key":"name",filter:t.filter,"virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],"virtual-scroll-sticky-size-start":48},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top-right",fn:function(){return[n("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(e){return[n("q-tr",{attrs:{props:e}},[n("q-td",{key:"_id",staticClass:"q-gutter-x-xs",attrs:{props:e}},[n("q-btn",{attrs:{flat:"",icon:"more_vert",dense:"",color:"grey",size:"12px"}},[n("q-menu",[n("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[n("q-item",{attrs:{clickable:"",disable:"",to:"/echo/"+e.row._id+"/edit"}},[n("q-item-section",{attrs:{side:""}},[n("q-icon",{attrs:{name:"edit",size:"15px"}})],1),n("q-item-section",[t._v("\n                        Edit\n                      ")]),n("q-item-section",{attrs:{side:""}},[n("q-icon",{attrs:{name:"keyboard_arrow_right",size:"15px"}})],1)],1),n("q-separator"),n("q-item",{attrs:{clickable:""},on:{click:function(n){return t.printEchoBaby(e.row._id)}}},[n("q-item-section",{attrs:{side:""}},[n("q-icon",{attrs:{name:"print",size:"15px"}})],1),n("q-item-section",[t._v("\n                        Print\n                      ")]),n("q-item-section",{attrs:{side:""}},[n("q-icon",{attrs:{name:"keyboard_arrow_right",size:"15px"}})],1)],1),n("q-separator"),n("q-item",{attrs:{clickable:""},on:{click:function(n){return t.downloadEchoBaby(e.row._id)}}},[n("q-item-section",{attrs:{side:""}},[n("q-icon",{attrs:{name:"print",size:"15px"}})],1),n("q-item-section",[t._v("\n                        Download\n                      ")]),n("q-item-section",{attrs:{side:""}},[n("q-icon",{attrs:{name:"keyboard_arrow_right",size:"15px"}})],1)],1)],1)],1)],1)],1),n("q-td",{key:"photo",attrs:{props:e}},[n("q-avatar",{staticClass:"shadow-1",attrs:{size:"100px"}},[n("q-img",{attrs:{src:t.hostname+e.row.patient.photo}})],1)],1),n("q-td",{key:"full_name",attrs:{props:e}},[t._v("\n              "+t._s(e.row.full_name)+"\n            ")]),n("q-td",{key:"title",attrs:{props:e}},[t._v("\n              "+t._s(e.row.title)+"\n            ")]),n("q-td",{key:"doctor",attrs:{props:e}},[t._v("\n              "+t._s(e.row.doctor)+"\n            ")]),n("q-td",{key:"createdAt",attrs:{props:e}},[t._v("\n              "+t._s(e.row.createdAt)+"\n            ")])],1)]}}])})],1)],1)],1)},r=[],o=(n("3118"),n("c76c"),n("d1bb"),n("b5e6"),n("8887"),n("3552"),n("ea6e")),i=n.n(o),s=(n("2735"),n("c0e9")),c=n.n(s),l=n("4fbb"),d=n.n(l);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){d()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"Echo",data:function(){return{hostname:"https://api.hospital.demo.cloudware.com.kh/",filter:"",pagination:{rowsPerPage:0},columns:[{align:"left",name:"_id",field:"_id"},{align:"left",name:"photo",field:"photo"},{align:"left",name:"full_name",label:"អ្នកជម្ងឺ",field:"full_name",sortable:!0},{align:"left",name:"title",label:"ចំណងជើង",field:"title",sortable:!0},{align:"left",name:"doctor",label:"ពិនិត្យដោយ",field:"doctor",sortable:!0},{align:"left",name:"createdAt",label:"កាលបរិច្ឆេទ",field:"createdAt"}]}},computed:{getEchos:function(){return this.$store.getters["echo/getEchos"].map((function(t){return u(u({},t),{},{full_name:"".concat(t.patient.lname," ").concat(t.patient.fname)})}))},getEchoBabies:function(){return this.$store.getters["echo/getEchoBabies"].map((function(t){return u(u({},t),{},{full_name:"".concat(t.patient.lname," ").concat(t.patient.fname),title:"Obstétrique"})}))}},methods:{printEcho:function(t){var e=this;e.$q.loading.show(),e.$store.dispatch("report/printEcho",t).then((function(t){t.status&&setTimeout((function(){e.$q.loading.hide(),window.open(t.data.pdf,"_blank")}),2e3)}))},printEchoBaby:function(t){var e=this;return c()(i.a.mark((function n(){var a;return i.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e,a.$q.loading.show(),n.next=4,a.$store.dispatch("report/printEchoBaby",t).then((function(t){t.status&&setTimeout((function(){a.$q.loading.hide(),window.open(t.data.pdf,"_blank")}),1500)}));case 4:case"end":return n.stop()}}),n)})))()},downloadEchoBaby:function(t){var e=this;return c()(i.a.mark((function n(){var a;return i.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e,a.$q.loading.show(),n.next=4,a.$store.dispatch("report/downloadEchoBabyDocx",t).then((function(t){t.status?a.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Successfully downloaded DOCX's file!"}):a.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Error download DOCX's file!"}),a.$q.loading.hide()}));case 4:case"end":return n.stop()}}),n)})))()}}},b=f,h=n("7a99"),m=n("3d2d"),q=n.n(m),w=n("7441"),g=n("60e8"),_=n("81d0"),y=n("806e"),v=n("8e78"),k=n("31c6"),x=n("86ca"),O=n("8e7c"),E=n("3cf2"),Q=n("c62b"),$=n("fefc"),j=n("7c13"),P=n("b6ad"),B=n("f6b4"),C=n("ec49"),S=n("ab6e"),z=n("6f5a"),D=n("de2d"),A=Object(h["a"])(b,a,r,!1,null,"62a27cf2",null);e["default"]=A.exports;q()(A,"components",{QPage:w["a"],QCard:g["a"],QCardSection:_["a"],QSpace:y["a"],QBtnGroup:v["a"],QBtn:k["a"],QTable:x["a"],QInput:O["a"],QIcon:E["a"],QTr:Q["a"],QTd:$["a"],QMenu:j["a"],QList:P["a"],QItem:B["a"],QItemSection:C["a"],QSeparator:S["a"],QAvatar:z["a"],QImg:D["a"]})}}]);