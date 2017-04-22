/**
 * Created by Administrator on 2017/4/11.
 */
/**
 * @license Apache License Version 2.0, January 2004 http://www.apache.org/licenses/
 * @author cnliangwei@foxmail.com
 */
///<reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>"
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LayerConfig = (function () {
    function LayerConfig() {
    }
    return LayerConfig;
}());
exports.LayerConfig = LayerConfig;
var NgLayerRef = (function () {
    function NgLayerRef() {
    }
    /**
     * destory the layer.
     */
    NgLayerRef.prototype.close = function () {
        this.layerComponent.close();
    };
    ;
    /**
     * show close button or not
     */
    NgLayerRef.prototype.showCloseBtn = function (show) {
        this.layerComponent.config.closeAble = show;
        return this;
    };
    /**
     * update dialog title. for dialog only
     *
     * @return {NgLayerRef}
     */
    NgLayerRef.prototype.setTitle = function (title) {
        this.layerComponent.config.title = title;
        return this;
    };
    /**
     * update message of layer
     *
     * e.g.
     *
     * ```typescript
     * let tip = this.ly.tip("保存成功", 1000, "top", "warn");
     * setTimeout(()=>{
     * 	lyRef.setMessage("successfully saved").setTipType("success");
     * 	lyRef.close();
     * }, 2000);
     *
     * ```
     * @return {NgLayerRef}
     */
    NgLayerRef.prototype.setMessage = function (message) {
        this.layerComponent.config.message = message;
        return this;
    };
    /**
     * if the callBack return ture, the layer will be closed
     *
     * e.g.
     *
     * ```typescript
     * let lyRef = this.ly.confirm("are you sure?", "yes", "no");
     * lyRef.setOnClose(()=>{
     * 	if(...) return true;
     * });
     * ```
     * @return {NgLayerRef}
     */
    NgLayerRef.prototype.setOnClose = function (callBack) {
        this.layerComponent.onClose = callBack;
        return this;
    };
    /**
     * update "ok" button text, for alert layer or confirm layer
     *
     * e.g.
     *
     * ```typescript
     *let lyRef = this.ly.confirm("are you sure?", "yes", "no");
     *lyRef.setOkText("sure");
     * ```
     * @return {NgLayerRef}
     */
    NgLayerRef.prototype.setOkText = function (ok) {
        this.layerComponent.config.okTxt = ok;
        return this;
    };
    /**
     * update "cancel" button text, for confirm layer only
     *
     * e.g.
     *
     * ```typescript
     *let lyRef = this.ly.confirm("are you sure?", "yes", "no");
     *lyRef.setCancelText("not sure");
     * ```
     * @return {NgLayerRef}
     */
    NgLayerRef.prototype.setCancelText = function (cancel) {
        this.layerComponent.config.cancelTxt = cancel;
        return this;
    };
    /**
     * message type of tip layer
     *
     * e.g.
     *
     * ```typescript
     *let lyRef = this.ly.tip("saving...", "yes", "no");
     *lyRef.setTipType("error");
     * ```
     * @return {NgLayerRef}
     */
    /*setTipType(tipType:string){
     this.layerComponent.config.tipType=tipType;
     return this;
     }*/
    /**
     * okCallback called on 'ok' button click. for alert layer or confirm layer
     *
     * e.g.
     *
     * ```typescript
     *let lyRef = this.ly.confirm("are you sure?", "yes", "no");
     *lyRef.ok(()=>{
     * 	...do something...
     * });
     * ```
     * @return {NgLayerRef}
     */
    NgLayerRef.prototype.ok = function (okCallback) {
        this.layerComponent.onOk = okCallback;
        return this;
    };
    /**
     * cancelCallback called on "cancel" button click. for confirm layer only
     *
     * e.g.
     *
     * ```typescript
     *let lyRef = this.ly.confirm("are you sure?", "yes", "no");
     *lyRef.ok(()=>{
     * 	...do something...
     * });
     * ```
     *
     * @return {NgLayerRef}
     */
    NgLayerRef.prototype.cancel = function (cancelCallback) {
        this.layerComponent.onCancel = cancelCallback;
        return this;
    };
    return NgLayerRef;
}());
exports.NgLayerRef = NgLayerRef;
var NgLayer = (function () {
    function NgLayer(compiler, appRef, res) {
        this.compiler = compiler;
        this.appRef = appRef;
        this.res = res;
        this.tempCache = {};
    }
    /**
     * open a dialog window
     * @return {NgLayerRef}
     */
    NgLayer.prototype.dialog = function (config) {
        var layerId = "layer_" + new Date().getTime();
        return this.createComponent_(config, layerId);
    };
    /**
     * open a alert window
     *
     * @return {NgLayerRef}
     */
    NgLayer.prototype.alert = function (config) {
        return this.confirmOralert_(config, false);
    };
    /**
     * open a confirm window
     *
     * @return {NgLayerRef}
     */
    NgLayer.prototype.confirm = function (config) {
        return this.confirmOralert_(config, true);
    };
    /**
     * open a message layer
     *
     * @return {NgLayerRef}
     */
    NgLayer.prototype.tip = function (config) {
        return this.tipOrLoading_(config, true);
    };
    /**
     * open a loading layer
     *
     * @return {NgLayerRef}
     */
    NgLayer.prototype.loading = function (config) {
        return this.tipOrLoading_(config, false);
    };
    /**
     *
     */
    NgLayer.prototype.tipOrLoading_ = function (config, isTip) {
        if (!config.outSelector) {
            config.outSelector = "boingOut";
        }
        config = this.default_(config);
        var temp = '<div class="iconing_tip_body iconing_type_{{layerType}}">{{config.message}}</div>', layerId = "layer_" + new Date().getTime(), div = document.createElement("div"), claz = div.classList, modalStr;
        claz.add("iconing_tip_backdrop");
        claz.add(layerId);
        if (!config.align || ["center", "bottom", "top"].indexOf(config.align) < 0) {
            config.align = "top";
        }
        if (config.isModal) {
            claz.add("iconing_loading_modal");
            modalStr = ".iconing_loading_modal";
        }
        else {
            modalStr = "";
        }
        claz.add("iconing_align_" + config.align);
        document.body.appendChild(div);
        var LayerWraper = (function () {
            function LayerWraper(layerRef, self) {
                this.layerRef = layerRef;
                this.self = self;
                this.layerType = isTip ? "tip" : "loading";
                this.config = config;
                layerRef.layerComponent = this;
                this.layerRef = layerRef;
            }
            LayerWraper.prototype.ngAfterViewInit = function () {
                var _this = this;
                this.layerEle = this.self.element.nativeElement.querySelector(".iconing_tip_body");
                if (this.config.inSelector) {
                    this.layerEle.classList.add(this.config.inSelector);
                }
                if (isTip)
                    setTimeout(function () { return _this.close(); }, config.tipDuration + this.calCss_());
            };
            /** */
            LayerWraper.prototype.close = function () {
                var _this = this;
                if (this.config.outSelector) {
                    var classList = this.layerEle.classList;
                    classList.remove(this.config.inSelector);
                    classList.add(this.config.outSelector);
                    /**
                     * set a delay for layer closeing so the animation has time to play
                     */
                    setTimeout(function () { _this.thizRef.destroy(); }, this.calCss_());
                }
                else {
                    this.thizRef.destroy();
                }
            };
            LayerWraper.prototype.calCss_ = function () {
                var anima = getComputedStyle(this.layerEle).animationDuration, trans = getComputedStyle(this.layerEle).animationDuration, n1 = parseFloat(anima), n2 = parseFloat(trans);
                if (n1) {
                    var unit = anima.replace(n1.toString(), "").toLowerCase();
                    n1 = unit == "ms" ? n1 : unit == "s" ? n1 * 1000 : 0;
                }
                if (n2) {
                    var unit = anima.replace(n2.toString(), "").toLowerCase();
                    n2 = unit == "ms" ? n2 : unit == "s" ? n2 * 1000 : 0;
                }
                return Math.max(n1, n2) - 5;
            };
            return LayerWraper;
        }());
        LayerWraper = __decorate([
            core_1.Component({
                selector: ".iconing_tip_backdrop." + layerId + ".iconing_align_" + config.align + modalStr,
                template: temp,
                providers: [NgLayerRef]
            }),
            __metadata("design:paramtypes", [NgLayerRef, core_1.ViewContainerRef])
        ], LayerWraper);
        var DM = (function () {
            function DM() {
            }
            return DM;
        }());
        DM = __decorate([
            core_1.NgModule({ declarations: [LayerWraper] })
        ], DM);
        /** create layer */
        var moduleWithComponentFactories = this.compiler.compileModuleAndAllComponentsSync(DM), factory = moduleWithComponentFactories.componentFactories[0], layerWraper = this.appRef.bootstrap(factory);
        layerWraper.instance.thizRef = layerWraper;
        return layerWraper.instance.layerRef;
    };
    NgLayer.prototype.confirmOralert_ = function (config, isConfirm) {
        var layerId = "layer_" + new Date().getTime(), div = document.createElement("div");
        div.classList.add("iconing_layer_backdrop");
        div.classList.add(layerId);
        document.body.appendChild(div);
        var temp = '<div class="iconing_layer_body iconing_alert_body">' +
            '<div class="iconing_content">{{config.message}}</div>' +
            '<div class="iconing_alert_btn">CANCELBUTTON' +
            '<button class="iconing_btn_ok" (click)="ok()">{{config.okText}}</button>' +
            '</div>' +
            '</div>';
        temp = isConfirm ? temp.replace("CANCELBUTTON", '<button class="iconing_btn_cancel" (click)="cancel()">{{config.cancelText}}</button>') : temp.replace("CANCELBUTTON", "");
        var layerWraperType = this.createComponentClass_(config, temp, layerId, this, false);
        var DM = (function () {
            function DM() {
            }
            return DM;
        }());
        DM = __decorate([
            core_1.NgModule({ declarations: [layerWraperType] })
        ], DM);
        /** create layer */
        var moduleWithComponentFactories = this.compiler.compileModuleAndAllComponentsSync(DM), factory = moduleWithComponentFactories.componentFactories[0], layerWraper = this.appRef.bootstrap(factory);
        layerWraper.instance.thizRef = layerWraper;
        document.body.appendChild(layerWraper.location.nativeElement);
        return layerWraper.instance.layerRef;
    };
    /**
     * for dialog alert or confirm
     */
    NgLayer.prototype.createComponentClass_ = function (config, temp, layerId, layerFact, isDialog) {
        config = this.default_(config);
        var layerWraper = (function () {
            /**
             *
             */
            function layerWraper(layerRef, compiler, self) {
                this.layerRef = layerRef;
                this.compiler = compiler;
                this.self = self;
                this.layerFactory = layerFact;
                this.config = config;
                layerRef.layerComponent = this;
            }
            /**
             * add enter state selector to layer body
             */
            layerWraper.prototype.ngAfterViewInit = function () {
                var t = this, cfg = t.config;
                if (cfg.inSelector && !isDialog) {
                    t.layerEle = t.self.element.nativeElement.querySelector(".iconing_layer_body");
                    t.layerEle.classList.add(cfg.inSelector);
                    t.backdropStyle.background = "rgba(95, 95, 95, 0.5)";
                    t.backdropStyle.transition = "background " + t.calCss_(t.layerEle) + "ms";
                }
            };
            /**
             * init content Component
             */
            layerWraper.prototype.ngOnInit = function () {
                var _this = this;
                this.backdropStyle = this.self.element.nativeElement.style;
                if (isDialog) {
                    var promise = this.layerFactory.modifySelector_(config.dialogComponent, "iconing_layer_content");
                    promise.then(function (a) {
                        /**
                         * Ugly angular2
                         */
                        var dc = config.dialogComponent, decl = config.declarations;
                        if (decl) {
                            var i = config.declarations.indexOf(dc);
                            if (i > 0) {
                                decl = decl.splice(i, 1);
                            }
                            decl = [dc].concat(decl);
                        }
                        else {
                            decl = [dc];
                        }
                        var mateData = { declarations: decl };
                        if (config.imports) {
                            mateData.imports = config.imports;
                        }
                        var TempModule = (function () {
                            function TempModule() {
                            }
                            return TempModule;
                        }());
                        TempModule = __decorate([
                            core_1.NgModule(mateData)
                        ], TempModule);
                        var t = _this;
                        t.compiler.clearCache();
                        var factory = t.compiler.compileModuleAndAllComponentsSync(TempModule).componentFactories[0];
                        /** create layer */
                        var injector = core_1.ReflectiveInjector.fromResolvedProviders([], t.layerView.injector), component = t.layerView.createComponent(factory, null, injector, []).instance;
                        if (config.data && config.data instanceof Object) {
                            Object.assign(component, config.data);
                        }
                        t.layerEle = t.self.element.nativeElement.querySelector(".iconing_layer_body");
                        t.layerEle.style.display = "inline-block";
                        t.layerEle.classList.add(t.config.inSelector);
                        t.backdropStyle.background = "rgba(95, 95, 95, 0.5)";
                        t.backdropStyle.transition = "background " + t.calCss_(t.layerEle) + "ms";
                    });
                }
            };
            /** */
            layerWraper.prototype.close = function () {
                var _this = this;
                var cfg = this.config;
                if (!this.onClose || this.onClose()) {
                    if (cfg.outSelector) {
                        var classList = this.layerEle.classList;
                        classList.remove(cfg.inSelector);
                        classList.add(cfg.outSelector);
                        var duration = this.calCss_(this.layerEle);
                        this.backdropStyle.background = "rgba(138, 138, 138, 0.5)";
                        this.backdropStyle.transition = "background " + duration + "ms";
                        /**
                         * set a delay for layer closeing so the animation has time to play
                         */
                        setTimeout(function () { _this.thizRef.destroy(); }, duration);
                    }
                    else {
                        this.thizRef.destroy();
                    }
                }
            };
            layerWraper.prototype.cancel = function () {
                if (!this.onCancel || this.onCancel())
                    this.close();
            };
            layerWraper.prototype.onClose = function () { return true; };
            layerWraper.prototype.onCancel = function () { return true; };
            layerWraper.prototype.onOk = function () { return true; };
            /**
             * alert or confirm layer
             */
            layerWraper.prototype.ok = function () {
                if (!this.onOk || this.onOk())
                    this.close();
            };
            /**
             *
             */
            layerWraper.prototype.calCss_ = function (ele) {
                var anima = getComputedStyle(ele).animationDuration, trans = getComputedStyle(ele).animationDuration, n1 = parseFloat(anima), n2 = parseFloat(trans);
                if (n1) {
                    var unit = anima.replace(n1.toString(), "").toLowerCase();
                    n1 = unit == "ms" ? n1 : unit == "s" ? n1 * 1000 : 0;
                }
                if (n2) {
                    var unit = anima.replace(n2.toString(), "").toLowerCase();
                    n2 = unit == "ms" ? n2 : unit == "s" ? n2 * 1000 : 0;
                }
                return Math.max(n1, n2);
            };
            return layerWraper;
        }());
        __decorate([
            core_1.ViewChild('iconing_layer_content', { read: core_1.ViewContainerRef }),
            __metadata("design:type", core_1.ViewContainerRef)
        ], layerWraper.prototype, "layerView", void 0);
        layerWraper = __decorate([
            core_1.Component({
                selector: ".iconing_layer_backdrop." + layerId,
                template: temp,
                providers: [NgLayerRef]
            }),
            __metadata("design:paramtypes", [NgLayerRef, core_1.Compiler, core_1.ViewContainerRef])
        ], layerWraper);
        return layerWraper;
    };
    /**
     * preload template and change selector, for dialog only
     */
    NgLayer.prototype.modifySelector_ = function (clazz, contentSelector) {
        return new Promise(function (resolve, reject) {
            resolve(1);
        });
        /*if(!(Reflect && Reflect.getOwnMetadata)){
            throw 'reflect-metadata shim is required when using class decorators';
        }
        let mateData = Reflect.getOwnMetadata("annotations", clazz);

        mateData = mateData.find((annotation:any) => {
            if(annotation.toString()==="@Component") return annotation;
        })

        if(!mateData){
            throw 'busniess type required a @Component decorator';
        }
        mateData.selector = '.'+contentSelector;

        /!*pre load template*!/
        if(mateData.templateUrl){
            if(!this.tempCache[mateData.templateUrl]){
                return new Promise((resolve, reject)=>{
                    let http = new XMLHttpRequest();
                    http.onreadystatechange = (xhr)=>{
                        if(http.readyState === XMLHttpRequest.DONE) {
                            if(http.status === 200){
                                this.tempCache[mateData.templateUrl] = http.responseText;
                                mateData.template = http.responseText;
                                delete mateData.templateUrl;
                                resolve(Component(mateData)(clazz));
                            } else {
                                console.error("canot load template: "+mateData.templateUrl);
                                reject();
                            }
                        }
                    }
                    http.open('GET', mateData.templateUrl, true);
                    http.send();
                });
            } else {
                return new Promise((resolve, reject)=>{
                    mateData.template = this.tempCache[mateData.templateUrl];
                    delete mateData.templateUrl;
                    resolve(Component(mateData)(clazz));
                });
            }
        } else {
            return new Promise((resolve, reject)=>{
                resolve(Component(mateData)(clazz));
            });
        }*/
    };
    /**
     * for dialog only
     */
    NgLayer.prototype.createComponent_ = function (config, layerId) {
        var temp = '<div class="iconing_layer_body" style="display:none;">' +
            '<div class="iconing_layer_header">' +
            '<div class="iconing_layer_title">{{config.title}}</div>' +
            '<button (click)="close();" class="iconing_layer_close_btn {{config.closeAble?\'iconing_layer_close_able\':\'\'}}"></button>' +
            '</div>' +
            '<div #iconing_layer_content></div>' +
            '</div>';
        var layerWraperType = this.createComponentClass_(config, temp, layerId, this, true);
        var DM = (function () {
            function DM() {
            }
            return DM;
        }());
        DM = __decorate([
            core_1.NgModule({ declarations: [layerWraperType] })
        ], DM);
        /**
         * create layer
         */
        var moduleWithComponentFactories = this.compiler.compileModuleAndAllComponentsSync(DM), factory = moduleWithComponentFactories.componentFactories[0], layerWraper = null;
        if (!parent) {
            layerWraper = this.appRef.bootstrap(factory);
            document.body.appendChild(layerWraper.location.nativeElement);
        }
        else {
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], config.parent.injector);
            layerWraper = config.parent.createComponent(factory, null, injector, []);
            layerWraper.instance.thizRef = layerWraper;
            document.body.appendChild(layerWraper.location.nativeElement);
        }
        return layerWraper.instance.layerRef;
    };
    /**
     * default config
     */
    NgLayer.prototype.default_ = function (config) {
        var dfs = {
            title: "",
            align: "center",
            closeAble: true,
            cancelText: "cancel",
            okText: "ok",
            outSelector: "fadeOutDown",
            inSelector: "dropDown",
            parent: null,
            dialogComponent: null,
            isModal: false,
            tipDuration: 2500,
            message: ""
        };
        var keys = Object.keys(dfs), key;
        for (var i in keys) {
            key = keys[i];
            if (config[key] == undefined) {
                config[key] = dfs[key];
            }
        }
        return config;
    };
    return NgLayer;
}());
NgLayer = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Compiler, core_1.ApplicationRef, core_1.ComponentFactoryResolver])
], NgLayer);
exports.NgLayer = NgLayer;
//# sourceMappingURL=Dialog.js.map