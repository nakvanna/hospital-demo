(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{1352:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-card",{staticClass:"my-card bg-grey-1",attrs:{flat:"",bordered:""}},[a("q-expansion-item",{attrs:{"expand-separator":"",duration:1e3,label:"តារាងគិតលុយ",caption:"គិតលុយអតិថជន"},model:{value:t.expand,callback:function(e){t.expand=e},expression:"expand"}},[a("q-card-section",[a("q-form",{ref:"addForm",staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[a("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[a("q-select",{staticClass:"col",attrs:{"use-input":"","input-debounce":"0",behavior:"dialog",outlined:"",label:"ជ្រើសរើសអតិថជន",options:t.options,square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},on:{filter:t.filterFn,input:t.onPatientSelect},model:{value:t.data.patient_obj,callback:function(e){t.$set(t.data,"patient_obj",e)},expression:"data.patient_obj"}})],1),a("q-table",{attrs:{separator:"cell",title:"បញ្ចីទំនិញ នឹងតម្លៃសរុប $"+(t.data.amount=t.totalAmount),data:t.data_detail,columns:t.columns,"rows-per-page-options":[0],"hide-bottom":""},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",[a("q-td",[t._v("\n                  "+t._s(e.pageIndex+1)+"\n                ")]),a("q-td",{key:"name",staticStyle:{width:"300px"}},[a("q-select",{staticClass:"col",attrs:{options:t.data_detail,square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើសចន្លោះ"}]},model:{value:e.row.product_obj,callback:function(a){t.$set(e.row,"product_obj",a)},expression:"props.row.product_obj"}})],1),a("q-td",{staticStyle:{width:"200px"}},[a("q-input",{staticClass:"col",attrs:{placeholder:"ចំណាំ",readonly:"",type:"textarea",rows:"1",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:e.row.description,callback:function(a){t.$set(e.row,"description",a)},expression:"props.row.description"}})],1),a("q-td",[a("q-input",{staticClass:"col",attrs:{placeholder:"ប្រភេទស្ដុក",readonly:"",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:e.row.invent_type,callback:function(a){t.$set(e.row,"invent_type",a)},expression:"props.row.invent_type"}})],1),a("q-td",[a("q-input",{staticClass:"col",attrs:{type:"number",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:e.row.sale_qty,callback:function(a){t.$set(e.row,"sale_qty",a)},expression:"props.row.sale_qty"}})],1),a("q-td",[a("q-input",{staticClass:"col",attrs:{type:"number",square:"","lazy-rules":"",rules:[function(t){return!!t||"សូមបំពេញចន្លោះ"}]},model:{value:e.row.sale_price,callback:function(a){t.$set(e.row,"sale_price",a)},expression:"props.row.sale_price"}})],1),a("q-td",[a("span",{staticClass:"text-bold",staticStyle:{"font-size":"large"}},[t._v("\n                  $"+t._s(e.row.sale_qty*e.row.sale_price)+"\n                ")])])],1)]}}])}),a("q-separator",{attrs:{color:"orange",inset:""}}),a("div",{staticClass:"row q-gutter-x-sm q-mb-sm"},[a("q-input",{staticClass:"col-3",attrs:{type:"number",label:"ថ្លៃចំណាយ",square:""},model:{value:t.data.paid_balance=t.totalAmount,callback:function(e){t.$set(t.data,"paid_balance = totalAmount",e)},expression:"data.paid_balance = totalAmount"}}),a("q-input",{staticClass:"col-3",attrs:{type:"number",label:"ថ្លៃជំពាក់",disable:"",square:""},model:{value:t.data.due_balance=t.getDueBalance,callback:function(e){t.$set(t.data,"due_balance = getDueBalance",e)},expression:"data.due_balance = getDueBalance"}})],1)],1)],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.data_detail.length,expression:"!data_detail.length"}],staticStyle:{width:"150px",height:"35px"},attrs:{disable:"",icon:"save",color:"primary",label:"គិតលុយ"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Save")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.data_detail.length,expression:"data_detail.length"}],staticStyle:{width:"150px",height:"35px"},attrs:{icon:"save",color:"primary",label:"គិតលុយ"},on:{click:function(e){t.confirm_cashier=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Save")])],1)],1)],1),a("q-expansion-item",{attrs:{"expand-separator":"",duration:1e3,label:"បញ្ចីគិតលុយ",caption:"អតិថជនដែលបានគិតលុយ"},model:{value:t.getToggleExpand,callback:function(e){t.getToggleExpand=e},expression:"getToggleExpand"}},[a("q-card-section",[a("q-table",{staticClass:"table-virtual-scroll-stock",attrs:{data:t.getSalesReceive,columns:t.columns_receive,"row-key":"_id",filter:t.filter,"virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],"virtual-scroll-sticky-size-start":48},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top-right",fn:function(){return[a("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{staticClass:"cursor-pointer",attrs:{props:e},on:{click:function(a){return t.$router.push({path:"/sale/"+e.row._id+"/view"})}}},[a("q-td",{key:"no",staticClass:"q-gutter-x-xs",attrs:{props:e}},[a("span",[t._v(t._s(e.rowIndex+1))])]),a("q-td",{key:"patient_name",staticClass:"q-gutter-x-xs",attrs:{props:e}},[a("span",{staticClass:"text-bold text-uppercase"},[t._v(t._s(e.row.patient.lname+" "+e.row.patient.fname))])]),a("q-td",{key:"amount",staticClass:"q-gutter-x-xs",attrs:{props:e}},[a("span",{staticClass:"text-bold text-primary"},[t._v("$"+t._s(e.row.amount))])]),a("q-td",{key:"paid_amount",staticClass:"q-gutter-x-xs",attrs:{props:e}},[a("span",{staticClass:"text-bold text-warning"},[t._v("$"+t._s(e.row.paid_amount))])]),a("q-td",{key:"due_amount",staticClass:"q-gutter-x-xs",attrs:{props:e}},[a("span",{staticClass:"text-bold text-negative"},[t._v("$"+t._s(e.row.due_amount))])]),a("q-td",{key:"sale_date",staticClass:"q-gutter-x-xs",attrs:{props:e}},[a("span",{staticClass:"text-bold"},[t._v(t._s(t.dateConverted(e.row.sale_date)))])])],1)]}}])})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.confirm_cashier,callback:function(e){t.confirm_cashier=e},expression:"confirm_cashier"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center"},[a("q-avatar",{attrs:{icon:"info",color:"primary","text-color":"white"}}),a("span",{staticClass:"q-ml-sm text-h6"},[t._v("តើអ្នកប្រាកដហើយមែនទេ?")])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"ទេ",color:"negative"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"បាទ/ចាស",color:"primary"},on:{click:function(e){return t.$refs.addForm.submit()}}})],1)],1)],1)],1)},r=[],s=(a("7f7f"),a("551c"),a("ac6a"),a("cadf"),a("06db"),a("5df3"),a("967e")),i=a.n(s),o=(a("96cf"),a("fa84")),l=a.n(o),c=a("18d6"),u=[],d={name:"Cashier",data:function(){return{confirm_cashier:!1,patient_data:u,options:u,expand:!0,data:{_id:null,user_cashier:c["a"].getItem("userInfo")["user_info"]._id,patient_obj:null,patient:null,sale_status:"Receive",sale_date:null,description:"",amount:"0",paid_amount:"0",paid_balance:"0",due_balance:"0",due_amount:"0"},data_detail:[],columns:[{align:"left",name:"no",label:"ល.រ",field:"no",sortable:!0},{align:"left",name:"name",label:"ទំនិញ",field:"name",sortable:!0},{align:"left",name:"description",label:"ចំណាំ",field:"description",sortable:!0},{align:"left",name:"invent_type",label:"ប្រភេទស្តុក",field:"invent_type",sortable:!0},{align:"left",name:"sale_qty",label:"ចំនួន",field:"sale_qty",sortable:!0},{align:"left",name:"sale_price",label:"តម្លៃលក់",field:"sale_price",sortable:!0},{align:"left",name:"total",label:"សរុប/មុខ",field:"total",sortable:!0}],filter:"",pagination:{rowsPerPage:0},columns_receive:[{align:"left",name:"no",label:"ល.រ",field:"no",sortable:!0},{align:"left",name:"patient_name",label:"អ្នកជម្ងឺ",field:"patient_name",sortable:!0},{align:"left",name:"amount",label:"សរុប",field:"amount",sortable:!0},{align:"left",name:"paid_amount",label:"ថ្លៃចំណាយ",field:"paid_amount",sortable:!0},{align:"left",name:"due_amount",label:"ថ្លៃជំពាក់",field:"due_amount",sortable:!0},{align:"left",name:"sale_date",label:"ថ្ងៃនាំចូល",field:"sale_date",sortable:!0}]}},created:function(){var t=this;return l()(i.a.mark((function e(){var a;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,e.next=3,a.$store.dispatch("patient/fetchPatient").then((function(t){a.patient_data=t.data.map((function(t){return{label:"ឈ្មោះ "+t.lname+" "+t.fname+" ភេទ "+t.gender+" លេខទូរសព្ទ "+t.phone,name:t.lname+" "+t.fname,phone:t.phone,_id:t._id}}))}));case 3:case"end":return e.stop()}}),e)})))()},computed:{getToggleExpand:function(){return!this.expand},getPatient:function(){return this.$store.getters["patient/getPatient"].map((function(t){return{label:t.lname+" "+t.fname+" "+t.llatin+" "+t.flatin,name:t.lname+" "+t.fname,phone:t.phone,_id:t._id}}))},totalAmount:function(){var t=this,e=t.data_detail.map((function(t){return{total:t.sale_qty*t.sale_price}})),a=0;return e.forEach((function(t){a+=t.total})),a},getDueBalance:function(){return this.totalAmount-this.data.paid_balance},getSalesReceive:function(){return this.$store.getters["sale/getSales"].filter((function(t){return"Receive"===t.sale_status}))}},methods:{onSubmit:function(){var t=this;return l()(i.a.mark((function e(){var a,n,r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,n=a.data,r=a.data_detail,n.paid_amount=n.paid_balance,n.due_amount=n.due_balance,console.log(n),e.next=8,a.$store.dispatch("sale/deleteSaleDetail",a.data._id).then(function(){var t=l()(i.a.mark((function t(e){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.status){t.next=3;break}return t.next=3,a.$store.dispatch("sale/updateSale",a.data).then(function(){var t=l()(i.a.mark((function t(e){var s;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.status&&(s=r.map(function(){var t=l()(i.a.mark((function t(r){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.data._id;case 2:return r.sale=t.sent,t.next=5,r.product_obj._id;case 5:return r.product=t.sent,t.next=8,n.sale_status;case 8:return r.sale_status=t.sent,t.next=11,r.sale_qty;case 11:return r.sale_qty=t.sent,t.next=14,a.$store.dispatch("sale/storeSaleDetail",r);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Promise.all(s).then(l()(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.$store.dispatch("stock/fetchStock");case 2:return t.next=4,a.$store.dispatch("stock/fetchStockDetailForReport");case 4:return t.next=6,a.$store.dispatch("sale/fetchSale");case 6:a.expand=!1,a.$q.loading.hide();case 8:case"end":return t.stop()}}),t)})))));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e)})))()},onPatientSelect:function(t){var e=this;return l()(i.a.mark((function a(){var n;return i.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e,n.$q.loading.show(),n.data.patient=t._id,n.data_detail=[],a.next=6,n.$store.dispatch("sale/fetchSaleByPatient",t._id).then(function(){var t=l()(i.a.mark((function t(e){var a;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.data.length){t.next=11;break}return a=e.data[0]._id,n.data.sale_date=e.data[0].sale_date,n.data.description=e.data[0].description,n.data.paid_balance=e.data[0].paid_balance,n.data.sale_date=e.data[0].sale_date,n.data._id=e.data[0]._id,t.next=9,n.$store.dispatch("sale/fetchSaleDetailBySale",a).then((function(t){t.data.map((function(t){t.product_obj={label:t.product.name,_id:t.product._id},t.description=t.product.description,t.invent_type=t.product.invent_type})),n.data_detail=t.data.map((function(t){return{buy_price:"".concat(t.buy_price),sale_price:"".concat(t.sale_price),sale_qty:"".concat(t.sale_qty),description:t.description,invent_type:t.invent_type,product:null,product_obj:t.product_obj,sale:null,stock_detail_id:t.stock_detail_id,stock_qty:t.stock_qty}})),n.$q.loading.hide()}));case 9:t.next=12;break;case 11:n.$q.loading.hide();case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return a.stop()}}),a)})))()},dateConverted:function(t){var e=new Date(t),a=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),n=new Intl.DateTimeFormat("en",{month:"short"}).format(e),r=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e);return"".concat(r,"-").concat(n,"-").concat(a)},filterFn:function(t,e){var a=this;e(""!==t?function(){var e=t.toLowerCase();a.options=a.patient_data.map((function(t){return t})).filter((function(t){return isNaN(e)?t.name.toLowerCase().indexOf(e)>-1:t.phone.toLowerCase().indexOf(e)>-1}))}:function(){a.options=a.patient_data.map((function(t){return t}))})}}},p=d,f=a("2877"),m=a("eebe"),_=a.n(m),b=a("9989"),h=a("f09f"),x=a("3b73"),v=a("a370"),g=a("0378"),w=a("ddd8"),q=a("eaac"),y=a("bd08"),k=a("db86"),C=a("27f9"),$=a("eb85"),S=a("4b7e"),Q=a("9c40"),D=a("05c0"),j=a("0016"),P=a("24e8"),T=a("cb32"),I=a("7f67"),F=Object(f["a"])(p,n,r,!1,null,"3edb7dc6",null);e["default"]=F.exports;_()(F,"components",{QPage:b["a"],QCard:h["a"],QExpansionItem:x["a"],QCardSection:v["a"],QForm:g["a"],QSelect:w["a"],QTable:q["a"],QTr:y["a"],QTd:k["a"],QInput:C["a"],QSeparator:$["a"],QCardActions:S["a"],QBtn:Q["a"],QTooltip:D["a"],QIcon:j["a"],QDialog:P["a"],QAvatar:T["a"]}),_()(F,"directives",{ClosePopup:I["a"]})}}]);