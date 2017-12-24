// Compiled by ClojureScript 1.9.671 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35878__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35879__i = 0, G__35879__a = new Array(arguments.length -  0);
while (G__35879__i < G__35879__a.length) {G__35879__a[G__35879__i] = arguments[G__35879__i + 0]; ++G__35879__i;}
  args = new cljs.core.IndexedSeq(G__35879__a,0,null);
} 
return G__35878__delegate.call(this,args);};
G__35878.cljs$lang$maxFixedArity = 0;
G__35878.cljs$lang$applyTo = (function (arglist__35880){
var args = cljs.core.seq(arglist__35880);
return G__35878__delegate(args);
});
G__35878.cljs$core$IFn$_invoke$arity$variadic = G__35878__delegate;
return G__35878;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35881__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35882__i = 0, G__35882__a = new Array(arguments.length -  0);
while (G__35882__i < G__35882__a.length) {G__35882__a[G__35882__i] = arguments[G__35882__i + 0]; ++G__35882__i;}
  args = new cljs.core.IndexedSeq(G__35882__a,0,null);
} 
return G__35881__delegate.call(this,args);};
G__35881.cljs$lang$maxFixedArity = 0;
G__35881.cljs$lang$applyTo = (function (arglist__35883){
var args = cljs.core.seq(arglist__35883);
return G__35881__delegate(args);
});
G__35881.cljs$core$IFn$_invoke$arity$variadic = G__35881__delegate;
return G__35881;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1514095995973