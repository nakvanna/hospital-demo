(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{f80f:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("q-card",[e("q-card-actions",[e("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],staticStyle:{width:"150px"},attrs:{color:"red",icon:"reply",label:"ត្រឡប់ក្រោយ"}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("ថយក្រោយ")])],1),e("q-space"),e("q-btn",{staticStyle:{width:"150px"},attrs:{color:"primary",icon:"print",label:"បោះពុម្ព"},on:{click:t.printPdf}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("បោះពុម្ព")])],1)],1),e("q-card-section",[e("q-table",{attrs:{title:"ព័ត៌មាននាំទំនិញចូល",data:t.stock_data,columns:t.columns_default,pagination:t.pagination,"rows-per-page-options":[0],"hide-bottom":"",separator:"cell"},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"sup_name"},[e("span",{staticStyle:{"font-size":"medium"}},[t._v("\n              ឈ្មោះ "+t._s(a.row.supplier.name)+" from\n              "+t._s(a.row.supplier.company)),e("br"),e("q-icon",{attrs:{name:"place",size:"30px"}}),t._v("\n              "+t._s(a.row.supplier.current_address_book.province)+"-\n              "+t._s(a.row.supplier.current_address_book.district)+"-\n              "+t._s(a.row.supplier.current_address_book.commune)+"-\n              "+t._s(a.row.supplier.current_address_book.village)+"\n            ")],1)]),e("q-td",{key:"sup_contact",attrs:{props:a}},[e("q-input",{staticClass:"col",attrs:{readonly:"",type:"textarea",rows:"3",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:a.row.supplier.contact,callback:function(e){t.$set(a.row.supplier,"contact",e)},expression:"props.row.supplier.contact"}})],1),e("q-td",{key:"description",attrs:{props:a}},[e("q-input",{staticClass:"col",attrs:{readonly:"",type:"textarea",rows:"3",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:a.row.description,callback:function(e){t.$set(a.row,"description",e)},expression:"props.row.description"}})],1),e("q-td",{key:"purchase_status"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(a.row.purchase_status)+"\n            ")])]),e("q-td",{key:"purchase_date"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(t.dateConverted(a.row.purchase_date))+"\n            ")])])],1)]}}])}),e("br"),e("q-separator",{attrs:{color:"orange",inset:""}}),e("br"),e("q-table",{attrs:{data:t.stock_data_detail,columns:t.columns_detail,pagination:t.pagination,"rows-per-page-options":[0],"hide-bottom":"",separator:"cell"},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"no"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(a.pageIndex+1)+"\n            ")])]),e("q-td",{key:"pro_name"},[e("span",{staticClass:"text-bold",staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(a.row.product.name)+"\n            ")])]),e("q-td",{key:"pro_description",attrs:{props:a}},[e("q-input",{staticClass:"col",attrs:{readonly:"",type:"textarea",rows:"1",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:a.row.product.description,callback:function(e){t.$set(a.row.product,"description",e)},expression:"props.row.product.description"}})],1),e("q-td",{key:"qty"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(a.row.qty)+"\n            ")])]),e("q-td",{key:"stock_qty"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              "+t._s(a.row.stock_qty)+"\n            ")])]),e("q-td",{key:"buy_price"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              $"+t._s(a.row.buy_price)+"\n            ")])]),e("q-td",{key:"sale_price"},[e("span",{staticStyle:{"font-size":"large"}},[t._v("\n              $"+t._s(a.row.sale_price)+"\n            ")])]),e("q-td",{key:"purchase_status"},[e("span",{staticClass:"text-bold",staticStyle:{"font-size":"large"}},[t._v("\n              $"+t._s(a.row.buy_price*a.row.qty)+"\n            ")])])],1)]}}])})],1),e("q-card-section",[e("div",{staticClass:"text-bold row q-gutter-x-sm q-mb-sm",staticStyle:{"font-size":"30px"}},[t._v("\n        តម្លៃសរុប: $"+t._s(t.data_amount)+"\n      ")]),e("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[e("span",{staticClass:"col-1"}),e("span",{staticClass:"col-2 text-bold",staticStyle:{"font-size":"large"}},[e("u",[t._v("ថ្លៃចំណាយ: $"+t._s(t.data_paid))])]),e("span",{staticClass:"col-2 text-bold",staticStyle:{"font-size":"large"}},[e("u",[t._v("ថ្លៃជំពាក់: $"+t._s(t.data_due))])])])])],1)],1)},s=[],r=e("ea6e"),o=e.n(r),i=(e("2735"),e("c0e9")),c=e.n(i),l=[{align:"left",name:"sup_name",label:"អ្នកផ្គត់ផ្គង់",field:"sup_name"},{align:"left",name:"sup_contact",label:"ទំនាក់ទំនង",field:"sup_contact"},{align:"left",name:"description",label:"ចំណាំ",field:"description"},{align:"left",name:"purchase_status",label:"ស្ថានភាពទិញ",field:"purchase_status"},{align:"left",name:"purchase_date",label:"ថ្ងៃខែឆ្នាំទិញ",field:"purchase_date"}],p=[{align:"left",name:"no",label:"ល.រ",field:"no"},{align:"left",name:"pro_name",label:"ទំនិញ",field:"pro_name"},{align:"left",name:"pro_description",label:"ចំណាំ",field:"pro_description"},{align:"left",name:"qty",label:"ចំនួនទិញចូល",field:"qty"},{align:"left",name:"stock_qty",label:"ចំនួននៅសល់",field:"stock_qty"},{align:"left",name:"buy_price",label:"តម្លៃទិញ",field:"buy_price"},{align:"left",name:"sale_price",label:"តម្លៃលក់",field:"sale_price"},{align:"left",name:"total",label:"សរុប",field:"total"}],d={name:"StockView",data:function(){return{pagination:{rowsPerPage:0},dialog:!1,url:null,columns_default:l,columns_detail:p,stock_data:[],data_amount:0,data_paid:0,data_due:0,stock_data_detail:[]}},created:function(){var t=this;return c()(o.a.mark((function a(){var e;return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=t,a.next=3,e.$store.dispatch("stock/viewStock",e.$route.params.id).then(function(){var t=c()(o.a.mark((function t(a){var n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=a.data._id,e.stock_data=[],e.stock_data.push(a.data),e.data_amount=a.data.amount,e.data_paid=a.data.paid_amount,e.data_due=a.data.due_amount,t.next=8,e.$store.dispatch("stock/fetchStockDetailByStock",n).then(function(){var t=c()(o.a.mark((function t(a){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.stock_data_detail=[],e.stock_data_detail=a.data;case 2:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}());case 3:case"end":return a.stop()}}),a)})))()},methods:{printPdf:function(){this.$store.dispatch("pdf_make/printStock",{data:this.stock_data,detail:this.stock_data_detail})},dateConverted:function(t){var a=new Date(t),e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(a),n=new Intl.DateTimeFormat("en",{month:"short"}).format(a),s=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(a);return"".concat(s,"-").concat(n,"-").concat(e)}}},u=d,_=e("7a99"),f=e("3d2d"),m=e.n(f),y=e("7441"),w=e("60e8"),b=e("49db"),k=e("31c6"),g=e("c150"),q=e("806e"),v=e("81d0"),h=e("86ca"),x=e("c62b"),S=e("fefc"),z=e("3cf2"),C=e("8e7c"),$=e("ab6e"),Q=e("5879"),T=Object(_["a"])(u,n,s,!1,null,"104d37a8",null);a["default"]=T.exports;m()(T,"components",{QPage:y["a"],QCard:w["a"],QCardActions:b["a"],QBtn:k["a"],QTooltip:g["a"],QSpace:q["a"],QCardSection:v["a"],QTable:h["a"],QTr:x["a"],QTd:S["a"],QIcon:z["a"],QInput:C["a"],QSeparator:$["a"]}),m()(T,"directives",{GoBack:Q["a"]})}}]);