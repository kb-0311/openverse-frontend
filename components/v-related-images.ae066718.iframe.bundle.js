(window.webpackJsonp=window.webpackJsonp||[]).push([[24,15,18,19],{"./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.5/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/sass-loader@10.2.0_sass@1.49.9/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/sass-resources-loader@2.2.4/node_modules/sass-resources-loader/lib/loader.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=5499727e&lang=scss&scoped=true&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'@media (min-width: 768px){.image-grid[data-v-5499727e]:after{content:"";-webkit-box-flex:999999999;-ms-flex-positive:999999999;flex-grow:999999999}}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/vue-docgen-loader@1.5.0_4f483e0d3c950f846ed91d401997f598/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.5/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/sass-loader@10.2.0_sass@1.49.9/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/sass-resources-loader@2.2.4/node_modules/sass-resources-loader/lib/loader.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=5499727e&lang=scss&scoped=true&":function(module,exports,__webpack_require__){var content=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.5/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/sass-loader@10.2.0_sass@1.49.9/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/sass-resources-loader@2.2.4/node_modules/sass-resources-loader/lib/loader.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=5499727e&lang=scss&scoped=true&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("1404f4dc",content,!0,{sourceMap:!1})},"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.8bfa6bb.png"},"./src/components/VImageDetails/VRelatedImages.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.27.0_nuxt@2.15.8/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),use_related=__webpack_require__("./src/composables/use-related.js"),media=__webpack_require__("./src/constants/media.ts"),VImageDetails_VRelatedImagesvue_type_script_lang_js_={name:"VRelatedImages",components:{VImageGrid:__webpack_require__("./src/components/VImageGrid/VImageGrid.vue").default},props:{imageId:{type:String,required:!0},service:{}},setup:function setup(props){var mainImageId=Object(runtime.l)(props.imageId),relatedOptions={mediaType:media.c,mediaId:mainImageId};return props.service&&(relatedOptions.service=props.service),{images:Object(use_related.a)(relatedOptions).media}}},componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VImageDetails_VRelatedImagesvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("aside",[_c("h3",{staticClass:"text-2xl md:text-3xl mb-6"},[this._v("\n    "+this._s(this.$t("image-details.related-images"))+"\n  ")]),this._v(" "),_c("VImageGrid",{attrs:{images:this.images,"can-load-more":!1,"fetch-state":{isFetching:this.$fetchState.pending,fetchingError:this.$fetchState.error}}})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageGrid:__webpack_require__("./src/components/VImageGrid/VImageGrid.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VRelatedImages",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string"},required:!0},{name:"service"}]}},"./src/components/VImageGrid/VImageCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.19.3/node_modules/core-js/modules/es.array.concat.js");var VLicense=__webpack_require__("./src/components/License/VLicense.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),errorImage=__webpack_require__("./src/assets/image_not_available_placeholder.png"),maxAspect=16/9,toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VImageGrid_VImageCellvue_type_script_lang_js_={name:"VImageCell",components:{VLicense:VLicense.default,VLink:VLink.default},props:["image"],data:function data(){return{widthBasis:253.125,imgHeight:this.image.height||100,imgWidth:this.image.width||100}},computed:{imageAspect:function imageAspect(){return this.imgWidth/this.imgHeight},containerAspect:function containerAspect(){return this.imageAspect>maxAspect?maxAspect:this.imageAspect<.75?.75:this.imageAspect},iPadding:function iPadding(){return this.imageAspect<.75?1/.75*100:this.imageAspect>maxAspect?56.25:1/this.imageAspect*100},imageWidth:function imageWidth(){return this.imageAspect<maxAspect?100:this.imageAspect/maxAspect*100},imageTop:function imageTop(){return this.imageAspect>.75?0:(.75-this.imageAspect)/(.75*this.imageAspect*.75)*-50},imageLeft:function imageLeft(){return this.imageAspect<maxAspect?0:(this.imageAspect-maxAspect)/maxAspect*-50}},methods:{getImageUrl:function getImageUrl(image){if(!image)return"";var url=image.thumbnail||image.url;return this.imageAspect,toAbsolutePath(url)},getImageForeignUrl:function getImageForeignUrl(image){return toAbsolutePath(image.foreign_landing_url)},onGotoDetailPage:function onGotoDetailPage(event,image){if(!event.metaKey&&!event.ctrlKey){event.preventDefault();var detailRoute=this.localeRoute({name:"PhotoDetailPage",params:{id:image.id,location:window.scrollY}});this.$router.push(detailRoute)}},onImageLoadError:function onImageLoadError(event,image){var element=event.target;element.src!==image.url?element.src=image.url:element.src=errorImage},getImgDimension:function getImgDimension(e){this.imgHeight=e.target.naturalHeight,this.imgWidth=e.target.naturalWidth}}},componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VImageGrid_VImageCellvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VLink",{staticClass:"w-full block group relative overflow-hidden rounded-sm focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px] focus:outline-none bg-dark-charcoal-10 text-dark-charcoal-10",style:"width: "+_vm.containerAspect*_vm.widthBasis+"px;flex-grow: "+_vm.containerAspect*_vm.widthBasis,attrs:{href:"/image/"+_vm.image.id,"aria-label":_vm.image.title},on:{click:function($event){return _vm.onGotoDetailPage($event,_vm.image)}}},[_c("figure",{staticClass:"absolute w-full",style:"width: "+_vm.imageWidth+"%; top: "+_vm.imageTop+"%; left:"+_vm.imageLeft+"%;"},[_c("img",{ref:"img",staticClass:"margin-auto block w-full",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.getImageUrl(_vm.image),width:_vm.imgWidth,height:_vm.imgHeight},on:{load:_vm.getImgDimension,error:function($event){return _vm.onImageLoadError($event,_vm.image)}}}),_vm._v(" "),_c("figcaption",{staticClass:"absolute left-0 bottom-0 invisible group-hover:visible group-focus:visible bg-white p-1 text-dark-charcoal"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)]),_vm._v(" "),_c("i",{staticClass:"block",style:"padding-bottom:"+_vm.iPadding+"%",attrs:{"aria-hidden":""}})])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/License/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"undefined"}}]}},"./src/components/VImageGrid/VImageGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VImageCell=__webpack_require__("./src/components/VImageGrid/VImageCell.vue"),VImageGrid_VImageGridvue_type_script_lang_js_={name:"ImageGrid",components:{VLoadMore:VLoadMore.default,VImageCell:VImageCell.default},props:{images:{default:function _default(){return[]}},canLoadMore:{type:Boolean,default:!0},fetchState:{required:!0}},computed:{isError:function isError(){return!!this.fetchState.fetchingError},fetchingErrorHeading:function fetchingErrorHeading(){var type=this.$t("browse-page.search-form.image");return this.$t("browse-page.fetching-error",{type:type})}},methods:{onLoadMore:function onLoadMore(){this.$emit("load-more")}}},componentNormalizer=(__webpack_require__("./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=5499727e&lang=scss&scoped=true&"),__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js")),component=Object(componentNormalizer.a)(VImageGrid_VImageGridvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",[_c("div",{staticClass:"image-grid flex flex-wrap gap-4"},_vm._l(_vm.images,(function(image,index){return _c("VImageCell",{key:index,attrs:{image:image}})})),1),_vm._v(" "),_vm.isError&&!_vm.fetchState.isFinished?_c("h5",{staticClass:"py-4"},[_vm._v("\n    "+_vm._s(_vm.fetchState.fetchingError)+"\n  ")]):_vm._e(),_vm._v(" "),_c("footer",{staticClass:"pt-4"},[_vm.canLoadMore&&!_vm.fetchState.isFinished?_c("VLoadMore",{attrs:{"is-fetching":_vm.fetchState.isFetching,"data-testid":"load-more"},on:{onLoadMore:_vm.onLoadMore}}):_vm._e()],1)])}),[],!1,null,"5499727e",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageCell:__webpack_require__("./src/components/VImageGrid/VImageCell.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageGrid",exportName:"default",description:"",tags:{},props:[{name:"images",type:{name:"func"},defaultValue:{func:!0,value:"() => []"}},{name:"canLoadMore",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"fetchState",required:!0}],events:[{name:"load-more"}]}},"./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=5499727e&lang=scss&scoped=true&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/.pnpm/vue-docgen-loader@1.5.0_4f483e0d3c950f846ed91d401997f598/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.5/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/sass-loader@10.2.0_sass@1.49.9/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/sass-resources-loader@2.2.4/node_modules/sass-resources-loader/lib/loader.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=5499727e&lang=scss&scoped=true&")},"./src/components/VLoadMore.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.27.0_nuxt@2.15.8/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VButton=__webpack_require__("./src/components/VButton.vue"),components_VLoadMorevue_type_script_lang_js_=Object(runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},props:{isFetching:{type:Boolean,default:!0}},setup:function setup(props,_ref){var emit=_ref.emit,i18n=Object(runtime.p)().i18n;return{buttonLabel:Object(runtime.a)((function(){return i18n.t("browse-page.load")})),onLoadMore:function onLoadMore(){emit("onLoadMore")}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_js_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VButton",{attrs:{size:"large",variant:"full",type:"button",disabled:this.isFetching},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{},props:[{name:"isFetching",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}]}},"./src/composables/use-related.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useRelated}));var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.27.0_nuxt@2.15.8/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),_store_media__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/store/media.js");function useRelated(_ref){var mediaType=_ref.mediaType,mediaId=_ref.mediaId,_ref$service=_ref.service,service=void 0===_ref$service?_store_media__WEBPACK_IMPORTED_MODULE_3__.mediaServices[mediaType]:_ref$service,media=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_2__.l)([]);return(0,Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_2__.q)(Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a)(regeneratorRuntime.mark((function _callee(){var data;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,service.getRelatedMedia({id:mediaId.value});case 2:data=_context.sent,media.value=data.results;case 4:case"end":return _context.stop()}}),_callee)})))).fetch)(),{media:media}}}}]);