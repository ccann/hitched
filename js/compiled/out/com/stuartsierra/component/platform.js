// Compiled by ClojureScript 1.9.671 {}
goog.provide('com.stuartsierra.component.platform');
goog.require('cljs.core');
com.stuartsierra.component.platform.argument_error = (function com$stuartsierra$component$platform$argument_error(message){
return cljs.core.ex_info.call(null,message,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component.platform","illegal-argument","com.stuartsierra.component.platform/illegal-argument",-1074189374)], null));
});
/**
 * Returns a string name for the type/class of x.
 */
com.stuartsierra.component.platform.type_name = (function com$stuartsierra$component$platform$type_name(x){
return cljs.core.type__GT_str.call(null,cljs.core.type.call(null,x));
});
/**
 * Returns a new ExceptionInfo with the same details as error and
 *   ex-data as the result of (apply f (ex-data throwable) args).
 */
com.stuartsierra.component.platform.alter_ex_data = (function com$stuartsierra$component$platform$alter_ex_data(var_args){
var args__34837__auto__ = [];
var len__34830__auto___46344 = arguments.length;
var i__34831__auto___46345 = (0);
while(true){
if((i__34831__auto___46345 < len__34830__auto___46344)){
args__34837__auto__.push((arguments[i__34831__auto___46345]));

var G__46346 = (i__34831__auto___46345 + (1));
i__34831__auto___46345 = G__46346;
continue;
} else {
}
break;
}

var argseq__34838__auto__ = ((((2) < args__34837__auto__.length))?(new cljs.core.IndexedSeq(args__34837__auto__.slice((2)),(0),null)):null);
return com.stuartsierra.component.platform.alter_ex_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__34838__auto__);
});

com.stuartsierra.component.platform.alter_ex_data.cljs$core$IFn$_invoke$arity$variadic = (function (error,f,args){
var ex = cljs.core.ex_info.call(null,cljs.core.ex_message.call(null,error),cljs.core.apply.call(null,f,cljs.core.ex_data.call(null,error),args),cljs.core.ex_cause.call(null,error));
ex.name = error.name;

ex.description = error.description;

ex.number = error.number;

ex.fileName = error.fileName;

ex.lineNumber = error.lineNumber;

ex.columnNumber = error.columnNumber;

ex.stack = error.stack;

return ex;
});

com.stuartsierra.component.platform.alter_ex_data.cljs$lang$maxFixedArity = (2);

com.stuartsierra.component.platform.alter_ex_data.cljs$lang$applyTo = (function (seq46341){
var G__46342 = cljs.core.first.call(null,seq46341);
var seq46341__$1 = cljs.core.next.call(null,seq46341);
var G__46343 = cljs.core.first.call(null,seq46341__$1);
var seq46341__$2 = cljs.core.next.call(null,seq46341__$1);
return com.stuartsierra.component.platform.alter_ex_data.cljs$core$IFn$_invoke$arity$variadic(G__46342,G__46343,seq46341__$2);
});


//# sourceMappingURL=platform.js.map?rel=1514142713638