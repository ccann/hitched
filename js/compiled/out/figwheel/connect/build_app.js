// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('hitched.system');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('cljs.user');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__45857__delegate = function (x){
if(cljs.core.truth_(hitched.system.reset)){
return cljs.core.apply.call(null,hitched.system.reset,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'hitched.system/reset' is missing");
}
};
var G__45857 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__45858__i = 0, G__45858__a = new Array(arguments.length -  0);
while (G__45858__i < G__45858__a.length) {G__45858__a[G__45858__i] = arguments[G__45858__i + 0]; ++G__45858__i;}
  x = new cljs.core.IndexedSeq(G__45858__a,0,null);
} 
return G__45857__delegate.call(this,x);};
G__45857.cljs$lang$maxFixedArity = 0;
G__45857.cljs$lang$applyTo = (function (arglist__45859){
var x = cljs.core.seq(arglist__45859);
return G__45857__delegate(x);
});
G__45857.cljs$core$IFn$_invoke$arity$variadic = G__45857__delegate;
return G__45857;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1514139044251