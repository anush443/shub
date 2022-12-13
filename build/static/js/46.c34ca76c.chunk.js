(this["webpackJsonpbitcoin-price-betting"]=this["webpackJsonpbitcoin-price-betting"]||[]).push([[46],{2380:function(n,e,t){"use strict";t.r(e),t.d(e,"OpenloginAdapter",(function(){return D})),t.d(e,"getOpenloginDefaultOptions",(function(){return P}));var i=t(401),r=t(18),o=t(33),a=t.n(o),s=t(79),c=t.n(s),l=t(80),u=t.n(l),h=t(35),p=t.n(h),g=t(664),d=t.n(g),f=t(115),v=t.n(f),b=t(128),C=t.n(b),O=t(65),y=t.n(O),N=t(25),k=t.n(N),w=t(22),m=t.n(w),E=t(2017),I=t(250),x=t.n(I),P=function(n,e){return{adapterSettings:{network:i.b.MAINNET,clientId:"",uxMode:i.d.POPUP},chainConfig:n?Object(r.p)(n,e):null,loginSettings:{}}};function R(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function S(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?R(Object(t),!0).forEach((function(e){k()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function T(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,i=y()(n);if(e){var r=y()(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return C()(this,t)}}var D=function(n){v()(o,n);var e=T(o);function o(n){var t,a,s,l,u;c()(this,o),u=e.call(this),k()(p()(u),"name",r.j.OPENLOGIN),k()(p()(u),"adapterNamespace",r.c.MULTICHAIN),k()(p()(u),"type",r.a.IN_APP),k()(p()(u),"openloginInstance",null),k()(p()(u),"clientId",void 0),k()(p()(u),"status",r.d.NOT_READY),k()(p()(u),"currentChainNamespace",r.g.EIP155),k()(p()(u),"openloginOptions",void 0),k()(p()(u),"loginSettings",{}),k()(p()(u),"privKeyProvider",null),r.s.debug("const openlogin adapter",n);var h=P(null===(t=n.chainConfig)||void 0===t?void 0:t.chainNamespace,null===(a=n.chainConfig)||void 0===a?void 0:a.chainId);if(u.openloginOptions=S(S({clientId:"",network:i.b.MAINNET},h.adapterSettings),n.adapterSettings||{}),u.clientId=null===(s=n.adapterSettings)||void 0===s?void 0:s.clientId,u.loginSettings=S(S({},h.loginSettings),n.loginSettings),u.sessionTime=u.loginSettings.sessionTime||86400,null!==(l=n.chainConfig)&&void 0!==l&&l.chainNamespace){var g;u.currentChainNamespace=null===(g=n.chainConfig)||void 0===g?void 0:g.chainNamespace;var d=h.chainConfig?h.chainConfig:{};if(u.chainConfig=S(S({},d),null===n||void 0===n?void 0:n.chainConfig),r.s.debug("const openlogin chainConfig",u.chainConfig),!u.chainConfig.rpcTarget&&n.chainConfig.chainNamespace!==r.g.OTHER)throw r.k.invalidParams("rpcTarget is required in chainConfig")}return u}return u()(o,[{key:"chainConfigProxy",get:function(){return this.chainConfig?S({},this.chainConfig):null}},{key:"provider",get:function(){var n;return(null===(n=this.privKeyProvider)||void 0===n?void 0:n.provider)||null},set:function(n){throw new Error("Not implemented")}},{key:"init",value:function(){var n=a()(m.a.mark((function n(e){var t,a,s;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d()(y()(o.prototype),"checkInitializationRequirements",this).call(this),null!==(t=this.openloginOptions)&&void 0!==t&&t.clientId){n.next=3;break}throw r.k.invalidParams("clientId is required before openlogin's initialization");case 3:if(this.chainConfig){n.next=5;break}throw r.k.invalidParams("chainConfig is required before initialization");case 5:return a=!1,this.openloginOptions.uxMode===i.d.REDIRECT&&(s=Object(i.f)(),Object.keys(s).length>0&&s._pid&&(a=!0)),this.openloginOptions=S(S({},this.openloginOptions),{},{replaceUrlOnRedirect:a}),this.openloginInstance=new i.e(this.openloginOptions),r.s.debug("initializing openlogin adapter init"),n.next=12,this.openloginInstance.init();case 12:if(this.status=r.d.READY,this.emit(r.b.READY,r.j.OPENLOGIN),n.prev=14,r.s.debug("initializing openlogin adapter"),!this.openloginInstance.privKey||!e.autoConnect&&!a){n.next=19;break}return n.next=19,this.connect();case 19:n.next=25;break;case 21:n.prev=21,n.t0=n.catch(14),r.s.error("Failed to connect with cached openlogin provider",n.t0),this.emit("ERRORED",n.t0);case 25:case"end":return n.stop()}}),n,this,[[14,21]])})));return function(e){return n.apply(this,arguments)}}()},{key:"connect",value:function(){var n=a()(m.a.mark((function n(e){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d()(y()(o.prototype),"checkConnectionRequirements",this).call(this),this.status=r.d.CONNECTING,this.emit(r.b.CONNECTING,S(S({},e),{},{adapter:r.j.OPENLOGIN})),n.prev=3,n.next=6,this.connectWithProvider(e);case 6:return n.abrupt("return",this.provider);case 9:if(n.prev=9,n.t0=n.catch(3),r.s.error("Failed to connect with openlogin provider",n.t0),this.status=r.d.READY,this.emit(r.b.ERRORED,n.t0),null===n.t0||void 0===n.t0||!n.t0.message.includes("user closed popup")){n.next=16;break}throw r.l.popupClosed();case 16:throw r.l.connectionError("Failed to login with openlogin");case 17:case"end":return n.stop()}}),n,this,[[3,9]])})));return function(e){return n.apply(this,arguments)}}()},{key:"disconnect",value:function(){var n=a()(m.a.mark((function n(){var e,t=arguments;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.length>0&&void 0!==t[0]?t[0]:{cleanup:!1},this.status===r.d.CONNECTED){n.next=3;break}throw r.l.notConnectedError("Not connected with wallet");case 3:if(this.openloginInstance){n.next=5;break}throw r.k.notReady("openloginInstance is not ready");case 5:return n.next=7,this.openloginInstance.logout();case 7:e.cleanup?(this.status=r.d.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=r.d.READY,this.emit(r.b.DISCONNECTED);case 9:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"authenticateUser",value:function(){var n=a()(m.a.mark((function n(){var e;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.status===r.d.CONNECTED){n.next=2;break}throw r.l.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return n.next=4,this.getUserInfo();case 4:return e=n.sent,n.abrupt("return",{idToken:e.idToken});case 6:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var n=a()(m.a.mark((function n(){var e;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.status===r.d.CONNECTED){n.next=2;break}throw r.l.notConnectedError("Not connected with wallet");case 2:if(this.openloginInstance){n.next=4;break}throw r.k.notReady("openloginInstance is not ready");case 4:return n.next=6,this.openloginInstance.getUserInfo();case 6:return e=n.sent,n.abrupt("return",e);case 8:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(n){if(this.status!==r.d.READY){var e=P();this.openloginOptions=S(S(S({},e.adapterSettings),this.openloginOptions||{}),n),n.sessionTime&&(this.loginSettings=S(S({},this.loginSettings),{},{sessionTime:n.sessionTime})),n.clientId&&(this.clientId=n.clientId)}}},{key:"setChainConfig",value:function(n){d()(y()(o.prototype),"setChainConfig",this).call(this,n),this.currentChainNamespace=n.chainNamespace}},{key:"connectWithProvider",value:function(){var n=a()(m.a.mark((function n(e){var o,a,s,c,l,u,h,p;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.chainConfig){n.next=2;break}throw r.k.invalidParams("chainConfig is required before initialization");case 2:if(this.openloginInstance){n.next=4;break}throw r.k.notReady("openloginInstance is not ready");case 4:if(this.currentChainNamespace!==r.g.SOLANA){n.next=12;break}return n.next=7,Promise.all([t.e(2),t.e(4),t.e(25)]).then(t.bind(null,2016));case 7:o=n.sent,a=o.SolanaPrivateKeyProvider,this.privKeyProvider=new a({config:{chainConfig:this.chainConfig}}),n.next=25;break;case 12:if(this.currentChainNamespace!==r.g.EIP155){n.next=20;break}return n.next=15,Promise.all([t.e(5),t.e(6),t.e(34)]).then(t.bind(null,2085));case 15:s=n.sent,c=s.EthereumPrivateKeyProvider,this.privKeyProvider=new c({config:{chainConfig:this.chainConfig}}),n.next=25;break;case 20:if(this.currentChainNamespace!==r.g.OTHER){n.next=24;break}this.privKeyProvider=new E.b,n.next=25;break;case 24:throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));case 25:if(this.openloginInstance.privKey||!e){n.next=29;break}return this.loginSettings.curve||(this.loginSettings.curve=this.currentChainNamespace===r.g.SOLANA?i.c.ED25519:i.c.SECP256K1),n.next=29,this.openloginInstance.login(x()(this.loginSettings,{loginProvider:e.loginProvider},{extraLoginOptions:S(S({},e.extraLoginOptions||{}),{},{login_hint:e.login_hint||(null===(l=e.extraLoginOptions)||void 0===l?void 0:l.login_hint)})}));case 29:if(!(u=this.openloginInstance.privKey)){n.next=41;break}if(this.currentChainNamespace!==r.g.SOLANA){n.next=37;break}return n.next=34,Promise.all([t.e(2),t.e(30)]).then(t.bind(null,2354));case 34:h=n.sent,p=h.getED25519Key,u=p(u).sk.toString("hex");case 37:return n.next=39,this.privKeyProvider.setupProvider(u);case 39:this.status=r.d.CONNECTED,this.emit(r.b.CONNECTED,{adapter:r.j.OPENLOGIN,reconnected:!e});case 41:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()}]),o}(r.e)}}]);
//# sourceMappingURL=46.c34ca76c.chunk.js.map