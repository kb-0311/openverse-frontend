(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.5/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/sass-loader@10.2.0_sass@1.49.9/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/sass-resources-loader@2.2.4/node_modules/sass-resources-loader/lib/loader.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./src/components/SketchFabViewer.vue?vue&type=style&index=0&id=47c1eea1&lang=scss&scoped=true&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".image[data-v-47c1eea1]{display:block}.is-16by9[data-v-47c1eea1]{padding-top:56.25%;max-width:1000px}.has-ratio[data-v-47c1eea1]{position:absolute;left:0;top:0;right:0;bottom:0;height:100%;width:100%}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/vue-docgen-loader@1.5.0_4f483e0d3c950f846ed91d401997f598/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.5/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/sass-loader@10.2.0_sass@1.49.9/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/sass-resources-loader@2.2.4/node_modules/sass-resources-loader/lib/loader.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./src/components/SketchFabViewer.vue?vue&type=style&index=0&id=47c1eea1&lang=scss&scoped=true&":function(module,exports,__webpack_require__){var content=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.5/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/sass-loader@10.2.0_sass@1.49.9/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/sass-resources-loader@2.2.4/node_modules/sass-resources-loader/lib/loader.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./src/components/SketchFabViewer.vue?vue&type=style&index=0&id=47c1eea1&lang=scss&scoped=true&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("e4e039f8",content,!0,{sourceMap:!1})},"./src/components/SketchFabViewer.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.19.3/node_modules/core-js/modules/es.object.to-string.js");var utils_console=__webpack_require__("./src/utils/console.ts"),SketchFabViewervue_type_script_lang_js_={props:{uid:{type:String,required:!0}},data:function data(){var _this=this;return{client:null,clientConfig:{success:function success(api){api.addEventListener("viewerready",(function(){_this.loading=!1,Object(utils_console.a)("LOADED!")}))},error:function error(){Object(utils_console.a)("Viewer error")}},loading:!0}},mounted:function mounted(){var _this2=this;this.initSketchfab().then(this.initViewer).catch((function(error){console.error(error),_this2.$emit("failure")}))},methods:{initSketchfab:function initSketchfab(){var _this3=this;return function loadScript(){var url=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(resolve,reject){"undefined"==typeof document&&reject();var el=document.createElement("script");el.src=url,el.defer=!0,el.addEventListener("load",resolve),el.addEventListener("error",reject),document.head.appendChild(el)}))}("https://static.sketchfab.com/api/sketchfab-viewer-1.10.1.js").then((function(){_this3.client=new window.Sketchfab(_this3.$refs.sketchfabIframe)}))},initViewer:function initViewer(){this.client&&this.client.init(this.uid,this.clientConfig)}}},components_SketchFabViewervue_type_script_lang_js_=SketchFabViewervue_type_script_lang_js_,componentNormalizer=(__webpack_require__("./src/components/SketchFabViewer.vue?vue&type=style&index=0&id=47c1eea1&lang=scss&scoped=true&"),__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_SketchFabViewervue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"sketchfab-viewer image is-16by9"},[_c("iframe",{ref:"sketchfabIframe",staticClass:"has-ratio",attrs:{id:"sketchfab-iframe",src:"",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",title:"Sketchfab iframe",allow:"autoplay; fullscreen; vr",autoplay:!0}})])}),[],!1,null,"47c1eea1",null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"SketchFabViewer",description:"",tags:{},props:[{name:"uid",type:{name:"string"},required:!0}],events:[{name:"failure"}]}},"./src/components/SketchFabViewer.vue?vue&type=style&index=0&id=47c1eea1&lang=scss&scoped=true&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/.pnpm/vue-docgen-loader@1.5.0_4f483e0d3c950f846ed91d401997f598/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.5/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/sass-loader@10.2.0_sass@1.49.9/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/sass-resources-loader@2.2.4/node_modules/sass-resources-loader/lib/loader.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./src/components/SketchFabViewer.vue?vue&type=style&index=0&id=47c1eea1&lang=scss&scoped=true&")}}]);