(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"5f19":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-card",{staticClass:"q-mx-xl q-my-md"},[e("q-card-actions",{attrs:{align:"center"}},[e("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],staticClass:"full-width",attrs:{color:"grey",icon:"keyboard_backspace"}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("ថយក្រោយ")])],1)],1),e("q-card-section",[e("q-card",{staticClass:"my-card bg-grey-1",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"column q-gutter-x-sm q-mb-sm"},[e("div",{staticClass:"col self-center"},[e("q-avatar",{attrs:{size:"200px"}},[e("q-img",{attrs:{src:""+t.data.hostname+t.data.thumbnail}})],1),e("q-icon",{attrs:{name:"edit",color:"primary",size:"25px"}},[e("q-popup-edit",{model:{value:t.photo_prev,callback:function(a){t.photo_prev=a},expression:"photo_prev"}},[e("q-file",{staticStyle:{width:"300px"},attrs:{label:"ជ្រើសរើសរូបភាព",outlined:"",square:"",accept:"image/*",dense:"","lazy-rules":"",rules:[function(t){return!!t||"សូមជ្រើសរើស"}]},on:{input:t.photoFn},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}]),model:{value:t.photo_prev,callback:function(a){t.photo_prev=a},expression:"photo_prev"}})],1)],1)],1),e("div",{staticClass:"col"},[e("div",{staticClass:"text-h6"},[t._v("\n              "+t._s(t.data.title)+"\n              "),e("q-popup-edit",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.initialValue,n=a.value,i=(a.emitValue,a.validate,a.set),s=a.cancel;return[e("q-input",{attrs:{dense:"",autofocus:""},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;a.stopPropagation()}},scopedSlots:t._u([{key:"after",fn:function(){return[e("q-btn",{attrs:{flat:"",dense:"",color:"negative",icon:"cancel"},on:{click:function(t){return t.stopPropagation(),s(t)}}}),e("q-btn",{attrs:{flat:"",dense:"",color:"positive",icon:"check_circle",disable:o===n},on:{click:[function(t){return t.stopPropagation(),i(t)},function(a){return t.updateBlog({id:t.$route.params.id,data:{title:t.data.title}})}]}})]},proxy:!0}],null,!0),model:{value:t.data.title,callback:function(a){t.$set(t.data,"title",a)},expression:"data.title"}})]}}]),model:{value:t.data.title,callback:function(a){t.$set(t.data,"title",a)},expression:"data.title"}}),e("q-icon",{attrs:{name:"edit",color:"primary"}})],1),e("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.data.createdAt)+"\n            ")]),e("div",{staticClass:"text-subtitle2"},[t._v("By: "+t._s(t.data.auth)+"\n              "),e("q-popup-edit",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.initialValue,n=a.value,i=(a.emitValue,a.validate,a.set),s=a.cancel;return[e("q-select",{attrs:{options:["Tun Cham Roeun","Nak Vanna"],dense:"",autofocus:""},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;a.stopPropagation()}},scopedSlots:t._u([{key:"after",fn:function(){return[e("q-btn",{attrs:{flat:"",dense:"",color:"negative",icon:"cancel"},on:{click:function(t){return t.stopPropagation(),s(t)}}}),e("q-btn",{attrs:{flat:"",dense:"",color:"positive",icon:"check_circle",disable:o===n},on:{click:[function(t){return t.stopPropagation(),i(t)},function(a){return t.updateBlog({id:t.$route.params.id,data:{auth:t.data.auth}})}]}})]},proxy:!0}],null,!0),model:{value:t.data.auth,callback:function(a){t.$set(t.data,"auth",a)},expression:"data.auth"}})]}}]),model:{value:t.data.auth,callback:function(a){t.$set(t.data,"auth",a)},expression:"data.auth"}}),e("q-icon",{attrs:{name:"edit",color:"primary"}})],1),e("div",{staticClass:"text-subtitle2"},[t._v("Tags: "+t._s(t.data.tags.join(", "))+"\n              "),e("q-popup-edit",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.initialValue,n=a.value,i=(a.emitValue,a.validate,a.set),s=a.cancel;return[e("q-select",{attrs:{"use-input":"","use-chips":"",multiple:"","hide-dropdown-icon":"","input-debounce":"0","new-value-mode":"add-unique",dense:"",autofocus:""},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;a.stopPropagation()}},scopedSlots:t._u([{key:"after",fn:function(){return[e("q-btn",{attrs:{flat:"",dense:"",color:"negative",icon:"cancel"},on:{click:function(t){return t.stopPropagation(),s(t)}}}),e("q-btn",{attrs:{flat:"",dense:"",color:"positive",icon:"check_circle",disable:o===n},on:{click:[function(t){return t.stopPropagation(),i(t)},function(a){return t.updateBlog({id:t.$route.params.id,data:{tags:t.data.tags}})}]}})]},proxy:!0}],null,!0),model:{value:t.data.tags,callback:function(a){t.$set(t.data,"tags",a)},expression:"data.tags"}})]}}]),model:{value:t.data.tags,callback:function(a){t.$set(t.data,"tags",a)},expression:"data.tags"}}),e("q-icon",{attrs:{name:"edit",color:"primary"}})],1),e("div",{staticClass:"text-subtitle2"},[t._v("Category: "+t._s(t.data.category)+"\n              "),e("q-popup-edit",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.initialValue,n=a.value,i=(a.emitValue,a.validate,a.set),s=a.cancel;return[e("q-select",{attrs:{options:["JavaScript","Flutter","Ubuntu","Quasar"],dense:"",autofocus:""},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;a.stopPropagation()}},scopedSlots:t._u([{key:"after",fn:function(){return[e("q-btn",{attrs:{flat:"",dense:"",color:"negative",icon:"cancel"},on:{click:function(t){return t.stopPropagation(),s(t)}}}),e("q-btn",{attrs:{flat:"",dense:"",color:"positive",icon:"check_circle",disable:o===n},on:{click:[function(t){return t.stopPropagation(),i(t)},function(a){return t.updateBlog({id:t.$route.params.id,data:{category:t.data.category}})}]}})]},proxy:!0}],null,!0),model:{value:t.data.category,callback:function(a){t.$set(t.data,"category",a)},expression:"data.category"}})]}}]),model:{value:t.data.category,callback:function(a){t.$set(t.data,"category",a)},expression:"data.category"}}),e("q-icon",{attrs:{name:"edit",color:"primary"}})],1),e("div",{staticClass:"text-subtitle2"},[t._v("\n              Visibility: "+t._s(t.data.isPublish.value?"Published":"Private")+"\n              "),e("q-popup-edit",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.initialValue,n=a.value,i=(a.emitValue,a.validate,a.set),s=a.cancel;return[e("q-select",{attrs:{options:[{label:"Publish",value:!0},{label:"Private",value:!1}],dense:"",autofocus:""},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;a.stopPropagation()}},scopedSlots:t._u([{key:"after",fn:function(){return[e("q-btn",{attrs:{flat:"",dense:"",color:"negative",icon:"cancel"},on:{click:function(t){return t.stopPropagation(),s(t)}}}),e("q-btn",{attrs:{flat:"",dense:"",color:"positive",icon:"check_circle",disable:o===n},on:{click:[function(t){return t.stopPropagation(),i(t)},function(a){return t.updateBlog({id:t.$route.params.id,data:{isPublish:t.data.isPublish}})}]}})]},proxy:!0}],null,!0),model:{value:t.data.isPublish,callback:function(a){t.$set(t.data,"isPublish",a)},expression:"data.isPublish"}})]}}]),model:{value:t.data.isPublish,callback:function(a){t.$set(t.data,"isPublish",a)},expression:"data.isPublish"}}),e("q-icon",{attrs:{name:"edit",color:"primary"}})],1),e("q-separator",{staticClass:"q-my-md"}),e("div",{staticClass:"text-subtitle2"},[t._v("\n              Description: "+t._s(t.data.description)+"\n              "),e("q-popup-edit",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.initialValue,n=a.value,i=(a.emitValue,a.validate,a.set),s=a.cancel;return[e("q-input",{attrs:{type:"textarea",autogrow:"",dense:"",autofocus:""},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;a.stopPropagation()}},scopedSlots:t._u([{key:"after",fn:function(){return[e("q-btn",{attrs:{flat:"",dense:"",color:"negative",icon:"cancel"},on:{click:function(t){return t.stopPropagation(),s(t)}}}),e("q-btn",{attrs:{flat:"",dense:"",color:"positive",icon:"check_circle",disable:o===n},on:{click:[function(t){return t.stopPropagation(),i(t)},function(a){return t.updateBlog({id:t.$route.params.id,data:{description:t.data.description}})}]}})]},proxy:!0}],null,!0),model:{value:t.data.description,callback:function(a){t.$set(t.data,"description",a)},expression:"data.description"}})]}}]),model:{value:t.data.description,callback:function(a){t.$set(t.data,"description",a)},expression:"data.description"}}),e("q-icon",{attrs:{name:"edit",color:"primary"}})],1),e("q-separator",{staticClass:"q-my-md"}),e("q-icon",{attrs:{name:"edit",color:"primary",size:"30px"},on:{click:function(a){t.dialog=!0}}}),e("div",{domProps:{innerHTML:t._s(t.data.content)}})],1)])]),e("q-dialog",{attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("q-card",[e("q-bar",[e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),e("q-card-section",[e("editor",{staticStyle:{width:"100%"},attrs:{"api-key":"qfbij8u6mn9gkgrw02lw40uqey8cj07cyg70tkjzi51aaa82",init:t.editorInit},model:{value:t.data.content,callback:function(a){t.$set(t.data,"content",a)},expression:"data.content"}})],1),e("q-card-actions",{attrs:{align:"center"}},[e("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"រក្សារទុក"},on:{click:function(a){return t.updateBlogContent({id:t.$route.params.id,data:{content:t.data.content}})}}},[e("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1)},n=[],i=e("967e"),s=e.n(i),r=(e("96cf"),e("fa84")),l=e.n(r),c=e("ca72"),u=e("c197"),d=e.n(u),p=(e("6b2c"),{name:"EditBlog",components:{Editor:c["a"]},data:function(){return{content:"Hi",dialog:!1,maximizedToggle:!0,editorInit:{max_height:650,menubar:!0,images_upload_url:"http://localhost:3030/file-upload",automatic_uploads:!0,images_reuse_filename:!0,relative_urls:!1,remove_script_host:!1,convert_urls:!0,plugins:["autoresize print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample code table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons"],toolbar:"code undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor casechange removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment"},formData:new FormData,dataPhoto:new FormData,photo_prev:null,data:{title:"",content_id:"",thumbnail:"",hostname:"http://localhost:3030/",category:"JavaScript",description:"",content:"",isPublish:{label:"Publish",value:!0},tags:[],auth:"Tun Cham Roeun",createdAt:null}}},methods:{photoFn:function(t){var a=this;a.dataPhoto.set("id",a.$route.params.id),a.dataPhoto.set("thumbnail",t);var e=new FileReader;e.readAsDataURL(t),e.onload=function(){a.data.thumbnail=e.result,a.data.hostname=""},a.updateBlogThumbnail(a.dataPhoto)},updateBlogThumbnail:function(t){var a=this;a.$store.dispatch("blog/updateBlogThumbnail",t).then((function(t){t.status?a.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:t.message}):a.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:t.message})}))},onSubmit:function(){var t=this,a=JSON.stringify(t.data);t.formData.set("data",a),t.$store.dispatch("blog/storeBlog",t.formData).then((function(a){a.status?(t.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:a.message}),t.isShow=!1):t.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:a.message})}))},updateBlog:function(t){var a=this;a.$store.dispatch("blog/updateBlog",t).then((function(t){t.status?a.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:t.message}):a.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:t.message})}))},updateBlogContent:function(t){var a=this;a.$store.dispatch("blog/updateBlogContent",t).then((function(t){t.status?a.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:t.message}):a.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:t.message})}))},factoryFnUploadPhoto:function(t){var a=this;a.formData.set("thumbnail",t[0])}},created:function(){var t=this;return l()(s.a.mark((function a(){var e,o;return s.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=t,o=e.$router.currentRoute.meta,a.next=4,e.$store.dispatch("active_route/updateCurrentRoute",o);case 4:e.$store.dispatch("blog/editBlog",t.$route.params.id).then((function(t){e.data.title=t.data.title,e.data.hostname="http://localhost:3030/",e.data.thumbnail=t.data.thumbnail,e.data.category=t.data.category,e.data.description=t.data.description,e.data.isPublish=t.data.isPublish?{label:"Publish",value:!0}:{label:"Private",value:!1},e.data.tags=t.data.tags,e.data.auth=t.data.auth,e.data.createdAt=t.data.createdAt})),e.$store.dispatch("blog/fetchContentByBlog",t.$route.params.id).then((function(t){e.data.content=t.data.content,e.data.content_id=t.data._id}));case 6:case"end":return a.stop()}}),a)})))()},updated:function(){d.a.highlightAll()}}),f=p,m=e("2877"),g=e("eebe"),h=e.n(g),b=e("f09f"),v=e("4b7e"),y=e("9c40"),k=e("05c0"),q=e("a370"),_=e("cb32"),x=e("068f"),w=e("0016"),P=e("42a1"),C=e("7d53"),$=e("27f9"),S=e("ddd8"),B=e("eb85"),Q=e("24e8"),V=e("d847"),z=e("2c91"),E=e("2eeb"),T=e("7f67"),D=Object(m["a"])(f,o,n,!1,null,"7327a927",null);a["default"]=D.exports;h()(D,"components",{QCard:b["a"],QCardActions:v["a"],QBtn:y["a"],QTooltip:k["a"],QCardSection:q["a"],QAvatar:_["a"],QImg:x["a"],QIcon:w["a"],QPopupEdit:P["a"],QFile:C["a"],QInput:$["a"],QSelect:S["a"],QSeparator:B["a"],QDialog:Q["a"],QBar:V["a"],QSpace:z["a"]}),h()(D,"directives",{GoBack:E["a"],ClosePopup:T["a"]})}}]);