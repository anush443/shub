(this["webpackJsonpbitcoin-price-betting"]=this["webpackJsonpbitcoin-price-betting"]||[]).push([[30],{1977:function(n,r){},2354:function(n,r,t){"use strict";t.r(r),function(n){t.d(r,"getED25519Key",(function(){return c}));var e=t(28),i=t(2084),a=t.n(i).a.lowlevel;function c(r){var t;t="string"===typeof r?n.from(r,"hex"):r;var i=new Uint8Array(64),c=[a.gf(),a.gf(),a.gf(),a.gf()],o=new Uint8Array([].concat(Object(e.a)(new Uint8Array(t)),Object(e.a)(new Uint8Array(32)))),f=new Uint8Array(32);a.crypto_hash(i,o,32),i[0]&=248,i[31]&=127,i[31]|=64,a.scalarbase(c,i),a.pack(f,c);for(var s=0;s<32;s+=1)o[s+32]=f[s];return{sk:n.from(o),pk:n.from(f)}}}.call(this,t(40).Buffer)}}]);
//# sourceMappingURL=30.be625968.chunk.js.map