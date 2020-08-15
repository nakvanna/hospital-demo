(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{a710:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("q-card",[e("q-card-section",{staticClass:"row items-center q-pb-none"},[e("div",{staticClass:"text-h5 text-bold"},[t._v("របាយការណ៍ចំណេញ-ខាតនៃការលក់")]),e("q-space"),e("div",{staticClass:"row q-gutter-x-sm"},[e("q-input",{staticClass:"col",attrs:{label:"ថ្ងៃទិញចូល",outlined:"",square:"",mask:"date",rules:["date"]},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{ref:"qDateProxyStart",attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{on:{input:function(a){return t.getStartDate()}},model:{value:t.data.start_date,callback:function(a){t.$set(t.data,"start_date",a)},expression:"data.start_date"}})],1)],1)]},proxy:!0}]),model:{value:t.data.start_date,callback:function(a){t.$set(t.data,"start_date",a)},expression:"data.start_date"}}),e("q-input",{staticClass:"col",attrs:{label:"ថ្ងៃលក់ចេញ",outlined:"",square:"",mask:"date",rules:["date"]},on:{change:function(a){return t.getEndDate()}},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{ref:"qDateProxyEnd",attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{on:{input:function(a){return t.getEndDate()}},model:{value:t.data.end_date,callback:function(a){t.$set(t.data,"end_date",a)},expression:"data.end_date"}})],1)],1)]},proxy:!0}]),model:{value:t.data.end_date,callback:function(a){t.$set(t.data,"end_date",a)},expression:"data.end_date"}})],1)],1),e("q-card-section",[e("div",{staticClass:"row q-gutter-x-sm"},[e("q-card",{staticClass:"col my-card text-white",staticStyle:{cursor:"pointer",background:"radial-gradient(circle, #E5CA44 0%, #505353 100%)"},on:{click:function(a){return t.$router.push({path:"/import-report"})}}},[e("q-card-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-h3 text-bold"},[t._v(t._s(t.totalStockAmount.toFixed(2))+" "),e("span",{staticClass:"text-h6"},[t._v("ដុល្លា")])]),e("div",{staticClass:"text-subtitle2"},[t._v("ថ្លៃទិញ")])]),e("q-card-actions",[e("q-icon",{attrs:{size:"50px",name:"local_atm"}})],1)],1)])],1),e("q-card",{staticClass:"col my-card text-white",staticStyle:{cursor:"pointer",background:"radial-gradient(circle, #1C9C64 0%, #505353 100%)"},on:{click:function(a){return t.$router.push({path:"/sale-report"})}}},[e("q-card-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-h3 text-bold"},[t._v(t._s(t.totalSaleAmount.toFixed(2))+" "),e("span",{staticClass:"text-h6"},[t._v("ដុល្លា")])]),e("div",{staticClass:"text-subtitle2"},[t._v("ថ្លៃលក់")])]),e("q-card-actions",[e("q-icon",{attrs:{size:"50px",name:"local_atm"}})],1)],1)])],1),e("q-card",{staticClass:"col my-card text-white",style:t.profitOrLose<0?t.LoseStyle:t.ProfitStyle,on:{click:function(a){t.tab="empty-stock"}}},[e("q-card-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-h3 text-bold"},[t._v(t._s(parseFloat(t.profitOrLose).toFixed(2))+" "),e("span",{staticClass:"text-h6"},[t._v("ដុល្លា")])]),e("div",{staticClass:"text-subtitle2"},[t._v("ចំណេញ-ខាត")])]),e("q-card-actions",[e("q-icon",{attrs:{size:"50px",name:"local_atm"}})],1)],1)])],1)],1)])],1)],1)},n=[],r=e("967e"),o=e.n(r),c=(e("96cf"),e("fa84")),i=e.n(c),d={name:"ProfitAndLose",data:function(){return{data:{start_date:"2020/01/01",end_date:(new Date).toISOString().slice(0,10)},LoseStyle:"background: radial-gradient(circle, #F15451 0%, #505353 100%)",ProfitStyle:"background: radial-gradient(circle, #294EF9 0%, #505353 100%)"}},computed:{getStock:function(){return this.$store.getters["stock/getStocksByDate"].filter((function(t){return"Receive"===t.purchase_status&&0!==t.amount}))},getSale:function(){return this.$store.getters["sale/getSalesByDate"].filter((function(t){return"Receive"===t.sale_status&&0!==t.amount}))},totalStockAmount:function(){var t=0;return this.getStock.map((function(a){t+=a.amount})),t},totalSaleAmount:function(){var t=0;return this.getSale.map((function(a){t+=a.amount})),t},profitOrLose:function(){return this.totalSaleAmount-this.totalStockAmount}},created:function(){var t=this;return i()(o.a.mark((function a(){return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$q.loading.show(),a.next=3,t.$store.dispatch("stock/fetchStockByDate",t.data);case 3:return a.next=5,t.$store.dispatch("sale/fetchSaleByDate",t.data);case 5:t.$q.loading.hide();case 6:case"end":return a.stop()}}),a)})))()},methods:{dateConverted:function(t){var a=new Date(t),e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(a),s=new Intl.DateTimeFormat("en",{month:"short"}).format(a),n=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(a);return"".concat(n,"-").concat(s,"-").concat(e)},getStartDate:function(){var t=this;return i()(o.a.mark((function a(){return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$q.loading.show(),t.$refs.qDateProxyStart.hide(),a.next=4,t.$store.dispatch("stock/fetchStockByDate",t.data);case 4:return a.next=6,t.$store.dispatch("sale/fetchSaleByDate",t.data);case 6:t.$q.loading.hide();case 7:case"end":return a.stop()}}),a)})))()},getEndDate:function(){var t=this;return i()(o.a.mark((function a(){return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$q.loading.show(),t.$refs.qDateProxyEnd.hide(),a.next=4,t.$store.dispatch("stock/fetchStockByDate",t.data);case 4:return a.next=6,t.$store.dispatch("sale/fetchSaleByDate",t.data);case 6:t.$q.loading.hide();case 7:case"end":return a.stop()}}),a)})))()}}},l=d,u=e("2877"),p=e("eebe"),f=e.n(p),h=e("9989"),m=e("f09f"),x=e("a370"),v=e("2c91"),q=e("27f9"),_=e("0016"),g=e("7cbe"),k=e("52ee"),w=e("4b7e"),S=Object(u["a"])(l,s,n,!1,null,"616afdb2",null);a["default"]=S.exports;f()(S,"components",{QPage:h["a"],QCard:m["a"],QCardSection:x["a"],QSpace:v["a"],QInput:q["a"],QIcon:_["a"],QPopupProxy:g["a"],QDate:k["a"],QCardActions:w["a"]})}}]);