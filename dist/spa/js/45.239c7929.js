(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"031d":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("q-card",[e("q-card-actions",{attrs:{align:"left"}},[e("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],staticStyle:{width:"150px"},attrs:{color:"red",icon:"reply",label:"ត្រឡប់ក្រោយ"}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("ថយក្រោយ")])],1),e("q-space"),e("q-btn",{staticStyle:{width:"150px"},attrs:{color:"primary",icon:"print",label:"បោះពុម្ព"},on:{click:t.printPdf}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("បោះពុម្ព")])],1)],1),e("q-card-section",[e("q-table",{attrs:{title:"ព័ត៌មានលក់ចេញ",data:t.sale_data,columns:t.columns_default,"rows-per-page-options":[0],pagination:t.pagination,"hide-bottom":"",separator:"cell"},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"patient_name"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(a.row.patient.lname+" "+a.row.patient.fname)+"\n              "),e("br"),t._v("\n              "+t._s(a.row.patient.llatin+" "+a.row.patient.flatin)+"\n            ")])]),e("q-td",{key:"patient_contact",attrs:{props:a}},[e("q-input",{staticClass:"col",attrs:{readonly:"",type:"textarea",rows:"3",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:a.row.patient.contact,callback:function(e){t.$set(a.row.patient,"contact",e)},expression:"props.row.patient.contact"}})],1),e("q-td",{key:"description",attrs:{props:a}},[e("q-input",{staticClass:"col",attrs:{readonly:"",type:"textarea",rows:"3",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:a.row.description,callback:function(e){t.$set(a.row,"description",e)},expression:"props.row.description"}})],1),e("q-td",{key:"sale_status"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(a.row.sale_status)+"\n            ")])]),e("q-td",{key:"sale_date"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(t.dateConverted(a.row.sale_date))+"\n            ")])])],1)]}}])}),e("br"),e("q-separator",{attrs:{color:"orange",inset:""}}),e("br"),e("q-table",{attrs:{data:t.sale_detail_data,columns:t.columns_detail,pagination:t.pagination,"rows-per-page-options":[0],"hide-bottom":"",separator:"cell"},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"no"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(a.pageIndex+1)+"\n            ")])]),e("q-td",{key:"pro_name"},[e("span",{staticClass:"text-bold",staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(a.row.product.name)+"\n            ")])]),e("q-td",{key:"pro_description",attrs:{props:a}},[e("q-input",{staticClass:"col",attrs:{readonly:"",type:"textarea",rows:"1",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:a.row.product.description,callback:function(e){t.$set(a.row.product,"description",e)},expression:"props.row.product.description"}})],1),e("q-td",{key:"sale_qty"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(a.row.sale_qty)+"\n            ")])]),e("q-td",{key:"buy_price"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              $"+t._s(a.row.buy_price)+"\n            ")])]),e("q-td",{key:"sale_price"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              $"+t._s(a.row.sale_price)+"\n            ")])]),e("q-td",{key:"sale_status"},[e("span",{staticClass:"text-bold",staticStyle:{"font-size":"large"}},[t._v("\n              $"+t._s(a.row.sale_price*a.row.sale_qty)+"\n            ")])])],1)]}}])})],1),e("q-card-section",[e("div",{staticClass:"text-bold row q-gutter-x-sm q-mb-sm",staticStyle:{"font-size":"30px"}},[t._v("\n        តម្លៃសរុប: $"+t._s(t.data_amount.toFixed(2))+"\n      ")]),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("span",{staticClass:"col-1"}),e("span",{staticClass:"col-2 text-bold",staticStyle:{"font-size":"large"}},[e("u",[t._v("ថ្លៃចំណាយ: $"+t._s(t.data_paid.toFixed(2)))])]),e("span",{staticClass:"col-2 text-bold",staticStyle:{"font-size":"large"}},[e("u",[t._v("ថ្លៃជំពាក់: $"+t._s(t.data_due.toFixed(2)))])])])])],1)],1)},s=[],i=e("ea6e"),r=e.n(i),l=(e("2735"),e("c0e9")),o=e.n(l),c=[{align:"left",name:"patient_name",label:"អ្នកទិញ",field:"patient_name"},{align:"left",name:"patient_contact",label:"ទំនាក់ទំនង",field:"patient_contact"},{align:"left",name:"description",label:"ចំណាំ",field:"description"},{align:"left",name:"sale_status",label:"ស្ថានភាពលក់",field:"sale_status"},{align:"left",name:"sale_date",label:"ថ្ងៃខែឆ្នាំទិញ",field:"sale_date"}],d=[{align:"left",name:"no",label:"ល.រ",field:"no"},{align:"left",name:"pro_name",label:"ទំនិញ",field:"pro_name"},{align:"left",name:"pro_description",label:"ចំណាំ",field:"pro_description"},{align:"left",name:"sale_qty",label:"ចំនួនលក់ចេញ",field:"sale_qty"},{align:"left",name:"buy_price",label:"តម្លៃទិញ",field:"buy_price"},{align:"left",name:"sale_price",label:"តម្លៃលក់",field:"sale_price"},{align:"left",name:"total",label:"សរុប",field:"total"}],p={name:"SaleView",data:function(){return{pagination:{rowsPerPage:0},sale_data:[],sale_detail_data:[],columns_default:c,columns_detail:d,data_amount:0,data_paid:0,data_due:0}},created:function(){var t=this;return o()(r.a.mark((function a(){var e;return r.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=t,a.next=3,e.$store.dispatch("sale/viewSale",e.$route.params.id).then(function(){var t=o()(r.a.mark((function t(a){var n;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=a.data._id,e.sale_data=[],e.sale_data.push(a.data),e.data_amount=a.data.amount,e.data_paid=a.data.paid_amount,e.data_due=a.data.due_amount,t.next=8,e.$store.dispatch("sale/fetchSaleDetailBySale",n).then(function(){var t=o()(r.a.mark((function t(a){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.sale_detail_data=[],e.sale_detail_data=a.data;case 2:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}());case 3:case"end":return a.stop()}}),a)})))()},methods:{dateConverted:function(t){var a=new Date(t),e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(a),n=new Intl.DateTimeFormat("en",{month:"short"}).format(a),s=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(a);return"".concat(s,"-").concat(n,"-").concat(e)},printPdf:function(){this.$store.dispatch("pdf_make/printSale",{data:this.sale_data,detail:this.sale_detail_data})}}},u=p,_=e("7a99"),f=e("3d2d"),m=e.n(f),y=e("7441"),w=e("60e8"),b=e("49db"),g=e("31c6"),q=e("c150"),v=e("806e"),h=e("81d0"),x=e("86ca"),k=e("c62b"),S=e("fefc"),z=e("8e7c"),C=e("ab6e"),$=e("5879"),Q=Object(_["a"])(u,n,s,!1,null,"df703ff2",null);a["default"]=Q.exports;m()(Q,"components",{QPage:y["a"],QCard:w["a"],QCardActions:b["a"],QBtn:g["a"],QTooltip:q["a"],QSpace:v["a"],QCardSection:h["a"],QTable:x["a"],QTr:k["a"],QTd:S["a"],QInput:z["a"],QSeparator:C["a"]}),m()(Q,"directives",{GoBack:$["a"]})}}]);