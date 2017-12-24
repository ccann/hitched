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
var G__45903__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45904__i = 0, G__45904__a = new Array(arguments.length -  0);
while (G__45904__i < G__45904__a.length) {G__45904__a[G__45904__i] = arguments[G__45904__i + 0]; ++G__45904__i;}
  args = new cljs.core.IndexedSeq(G__45904__a,0,null);
} 
return G__45903__delegate.call(this,args);};
G__45903.cljs$lang$maxFixedArity = 0;
G__45903.cljs$lang$applyTo = (function (arglist__45905){
var args = cljs.core.seq(arglist__45905);
return G__45903__delegate(args);
});
G__45903.cljs$core$IFn$_invoke$arity$variadic = G__45903__delegate;
return G__45903;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__45906__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45907__i = 0, G__45907__a = new Array(arguments.length -  0);
while (G__45907__i < G__45907__a.length) {G__45907__a[G__45907__i] = arguments[G__45907__i + 0]; ++G__45907__i;}
  args = new cljs.core.IndexedSeq(G__45907__a,0,null);
} 
return G__45906__delegate.call(this,args);};
G__45906.cljs$lang$maxFixedArity = 0;
G__45906.cljs$lang$applyTo = (function (arglist__45908){
var args = cljs.core.seq(arglist__45908);
return G__45906__delegate(args);
});
G__45906.cljs$core$IFn$_invoke$arity$variadic = G__45906__delegate;
return G__45906;
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

//# sourceMappingURL=debug.js.map?rel=1514142712537