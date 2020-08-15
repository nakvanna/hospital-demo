(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{2360:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("q-card",[e("q-card-section",{staticClass:"row items-center q-pb-none"},[e("div",{staticClass:"text-h5 text-bold"},[t._v("របាយការណ៍នាំចូលស្តុក")]),e("q-space"),e("div",{staticClass:"row q-gutter-x-sm"},[e("q-input",{staticClass:"col",attrs:{label:"ថ្ងៃទិញចូល",outlined:"",square:"",mask:"date",rules:["date"]},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{ref:"qDateProxyStart",attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{on:{input:function(a){return t.getStartDate()}},model:{value:t.data.start_date,callback:function(a){t.$set(t.data,"start_date",a)},expression:"data.start_date"}})],1)],1)]},proxy:!0}]),model:{value:t.data.start_date,callback:function(a){t.$set(t.data,"start_date",a)},expression:"data.start_date"}}),e("q-input",{staticClass:"col",attrs:{label:"ថ្ងៃលក់ចេញ",outlined:"",square:"",mask:"date",rules:["date"]},on:{change:function(a){return t.getEndDate()}},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{ref:"qDateProxyEnd",attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{on:{input:function(a){return t.getEndDate()}},model:{value:t.data.end_date,callback:function(a){t.$set(t.data,"end_date",a)},expression:"data.end_date"}})],1)],1)]},proxy:!0}]),model:{value:t.data.end_date,callback:function(a){t.$set(t.data,"end_date",a)},expression:"data.end_date"}})],1)],1),e("q-card-section",[e("div",{staticClass:"row q-gutter-x-sm"},[e("q-card",{staticClass:"col my-card text-white",staticStyle:{background:"radial-gradient(circle, #1C9C64 0%, #505353 100%)"}},[e("q-card-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-h3 text-bold"},[t._v("$"+t._s(t.getExpense))]),e("div",{staticClass:"text-subtitle2"},[t._v("ចំណាយ (Expenses)")])]),e("q-card-actions",[e("q-btn",{attrs:{size:"20px",icon:"fas fa-money-bill-wave",flat:"",round:""}})],1)],1)])],1),e("q-card",{staticClass:"col my-card text-white",staticStyle:{background:"radial-gradient(circle, #E5CA44 0%, #505353 100%)"}},[e("q-card-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-h3 text-bold"},[t._v("$"+t._s(t.getTotalIndebted))]),e("div",{staticClass:"text-subtitle2"},[t._v("ជំពាក់គេ (Indebted)")])]),e("q-card-actions",[e("q-btn",{attrs:{size:"20px",icon:"fas fa-money-bill-wave",flat:"",round:""}})],1)],1)])],1),e("q-card",{staticClass:"col my-card text-white",staticStyle:{background:"radial-gradient(circle, #F15451 0%, #505353 100%)"}},[e("q-card-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-h3 text-bold"},[t._v("$"+t._s(t.getTotalExpense))]),e("div",{staticClass:"text-subtitle2"},[t._v("ចំណាយសរុប (Total expenses)")])]),e("q-card-actions",[e("q-btn",{attrs:{size:"20px",icon:"fas fa-money-bill-wave",flat:"",round:""}})],1)],1)])],1)],1)]),e("q-card-section",[e("q-table",{staticClass:"table-virtual-scroll-stock",attrs:{data:t.getStock,columns:t.column_stock,"row-key":"_id",filter:t.filter,"virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],"virtual-scroll-sticky-size-start":48},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"top-right",fn:function(){return[e("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(a){t.filter=a},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{staticClass:"cursor-pointer",attrs:{props:a},on:{click:function(e){return t.$router.push({path:"/stock/"+a.row._id+"/view"})}}},[e("q-td",{key:"description",staticClass:"q-gutter-x-xs",attrs:{props:a}},[e("q-input",{staticClass:"col",attrs:{readonly:"",type:"textarea",rows:"1",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:a.row.description,callback:function(e){t.$set(a.row,"description",e)},expression:"props.row.description"}})],1),e("q-td",{key:"paid_amount",staticClass:"q-gutter-x-xs text-primary",attrs:{props:a}},[e("span",{staticClass:"text-h6 text-bold"},[t._v("$"+t._s(a.row.paid_amount))])]),e("q-td",{key:"due_amount",staticClass:"q-gutter-x-xs text-warning",attrs:{props:a}},[e("span",{staticClass:"text-h6 text-bold"},[t._v("$"+t._s(a.row.due_amount))])]),e("q-td",{key:"amount",staticClass:"q-gutter-x-xs text-negative",attrs:{props:a}},[e("span",{staticClass:"text-h6 text-bold"},[t._v("$"+t._s(a.row.amount))])]),e("q-td",{key:"purchase_date",staticClass:"q-gutter-x-xs",attrs:{props:a}},[e("span",{staticClass:"text-h6"},[t._v(t._s(t.dateConverted(a.row.purchase_date)))])])],1)]}}])})],1)],1)],1)},n=[],r=e("967e"),o=e.n(r),i=(e("96cf"),e("fa84")),c=e.n(i),d={name:"ImportStockReport",data:function(){return{filter:"",pagination:{rowsPerPage:0},column_stock:[{align:"left",name:"description",label:"ចំណាំ",field:"description",sortable:!0},{align:"left",name:"paid_amount",label:"ថ្លៃចំណាយ",field:"paid_amount",sortable:!0},{align:"left",name:"due_amount",label:"ថ្លៃជំពាក់",field:"due_amount",sortable:!0},{align:"left",name:"amount",label:"សរុប",field:"amount",sortable:!0},{align:"left",name:"purchase_date",label:"ថ្ងៃនាំចូល",field:"purchase_date",sortable:!0}],data:{start_date:"2020/01/01",end_date:(new Date).toISOString().slice(0,10)}}},created:function(){var t=this;return c()(o.a.mark((function a(){return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$q.loading.show(),a.next=3,t.$store.dispatch("stock/fetchStockByDate",t.data);case 3:t.$q.loading.hide();case 4:case"end":return a.stop()}}),a)})))()},computed:{getStock:function(){return this.$store.getters["stock/getStocksByDate"].filter((function(t){return"Receive"===t.purchase_status&&0!==t.amount}))},getExpense:function(){var t=0;return this.getStock.forEach((function(a){t+=a.paid_amount})),t},getTotalExpense:function(){var t=0;return this.getStock.forEach((function(a){t+=a.amount})),t},getTotalIndebted:function(){var t=0;return this.getStock.forEach((function(a){t+=a.due_amount})),t}},methods:{dateConverted:function(t){var a=new Date(t),e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(a),s=new Intl.DateTimeFormat("en",{month:"short"}).format(a),n=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(a);return"".concat(n,"-").concat(s,"-").concat(e)},getStartDate:function(){var t=this;return c()(o.a.mark((function a(){return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$q.loading.show(),t.$refs.qDateProxyStart.hide(),a.next=4,t.$store.dispatch("stock/fetchStockByDate",t.data);case 4:t.$q.loading.hide();case 5:case"end":return a.stop()}}),a)})))()},getEndDate:function(){var t=this;return c()(o.a.mark((function a(){return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$q.loading.show(),t.$refs.qDateProxyEnd.hide(),a.next=4,t.$store.dispatch("stock/fetchStockByDate",t.data);case 4:t.$q.loading.hide();case 5:case"end":return a.stop()}}),a)})))()}}},l=d,u=e("2877"),p=e("eebe"),f=e.n(p),x=e("9989"),m=e("f09f"),h=e("a370"),g=e("2c91"),q=e("27f9"),v=e("0016"),_=e("7cbe"),b=e("52ee"),w=e("4b7e"),k=e("9c40"),y=e("eaac"),C=e("bd08"),S=e("db86"),$=Object(u["a"])(l,s,n,!1,null,"0f111cb2",null);a["default"]=$.exports;f()($,"components",{QPage:x["a"],QCard:m["a"],QCardSection:h["a"],QSpace:g["a"],QInput:q["a"],QIcon:v["a"],QPopupProxy:_["a"],QDate:b["a"],QCardActions:w["a"],QBtn:k["a"],QTable:y["a"],QTr:C["a"],QTd:S["a"]})}}]);