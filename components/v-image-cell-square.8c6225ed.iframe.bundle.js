(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.8bfa6bb.png"},"./src/components/VAllResultsGrid/VImageCellSquare.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.19.3/node_modules/core-js/modules/es.array.concat.js");var VLink=__webpack_require__("./src/components/VLink.vue"),VLicense=__webpack_require__("./src/components/License/VLicense.vue"),errorImage=__webpack_require__("./src/assets/image_not_available_placeholder.png"),toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VAllResultsGrid_VImageCellSquarevue_type_script_lang_js_={name:"VImageCell",components:{VLink:VLink.default,VLicense:VLicense.default},props:["image"],methods:{getImageUrl:function getImageUrl(image){if(!image)return"";var url=image.thumbnail||image.url;return toAbsolutePath(url)},getImageForeignUrl:function getImageForeignUrl(image){return toAbsolutePath(image.foreign_landing_url)},onImageLoadError:function onImageLoadError(event,image){var element=event.target;element.src!==image.url?element.src=image.url:element.src=errorImage},onFocusLeave:function onFocusLeave(event){this.$emit("focus-leave",event)}}},componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VAllResultsGrid_VImageCellSquarevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VLink",{staticClass:"group block focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px] focus:outline-none rounded-sm",attrs:{itemprop:"contentUrl",title:_vm.image.title,href:"/image/"+_vm.image.id}},[_c("figure",{staticClass:"aspect-square relative rounded-sm",attrs:{itemprop:"image",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[_c("img",{ref:"img",staticClass:"w-full h-full object-cover rounded-sm bg-dark-charcoal-10 text-dark-charcoal-10",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.getImageUrl(_vm.image),width:250,height:250,itemprop:"thumbnailUrl"},on:{error:function($event){return _vm.onImageLoadError($event,_vm.image)}}}),_vm._v(" "),_c("figcaption",{staticClass:"absolute left-0 bottom-0 invisible group-hover:visible group-focus:visible bg-white p-1 text-dark-charcoal"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)])])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/License/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"undefined"}}],events:[{name:"focus-leave",type:{names:["undefined"]}}]}}}]);