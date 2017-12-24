// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('hitched.system');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('cljs.user');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__36831__delegate = function (x){
if(cljs.core.truth_(hitched.system.reset)){
return cljs.core.apply.call(null,hitched.system.reset,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'hitched.system/reset' is missing");
}
};
var G__36831 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__36832__i = 0, G__36832__a = new Array(arguments.length -  0);
while (G__36832__i < G__36832__a.length) {G__36832__a[G__36832__i] = arguments[G__36832__i + 0]; ++G__36832__i;}
  x = new cljs.core.IndexedSeq(G__36832__a,0,null);
} 
return G__36831__delegate.call(this,x);};
G__36831.cljs$lang$maxFixedArity = 0;
G__36831.cljs$lang$applyTo = (function (arglist__36833){
var x = cljs.core.seq(arglist__36833);
return G__36831__delegate(x);
});
G__36831.cljs$core$IFn$_invoke$arity$variadic = G__36831__delegate;
return G__36831;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1514144762664