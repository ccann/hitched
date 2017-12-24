// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.11";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__51318 = arguments.length;
switch (G__51318) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__34837__auto__ = [];
var len__34830__auto___51321 = arguments.length;
var i__34831__auto___51322 = (0);
while(true){
if((i__34831__auto___51322 < len__34830__auto___51321)){
args__34837__auto__.push((arguments[i__34831__auto___51322]));

var G__51323 = (i__34831__auto___51322 + (1));
i__34831__auto___51322 = G__51323;
continue;
} else {
}
break;
}

var argseq__34838__auto__ = ((((0) < args__34837__auto__.length))?(new cljs.core.IndexedSeq(args__34837__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__34838__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51320){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51320));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__34837__auto__ = [];
var len__34830__auto___51325 = arguments.length;
var i__34831__auto___51326 = (0);
while(true){
if((i__34831__auto___51326 < len__34830__auto___51325)){
args__34837__auto__.push((arguments[i__34831__auto___51326]));

var G__51327 = (i__34831__auto___51326 + (1));
i__34831__auto___51326 = G__51327;
continue;
} else {
}
break;
}

var argseq__34838__auto__ = ((((0) < args__34837__auto__.length))?(new cljs.core.IndexedSeq(args__34837__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__34838__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51324){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51324));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51328){
var map__51329 = p__51328;
var map__51329__$1 = ((((!((map__51329 == null)))?((((map__51329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51329):map__51329);
var message = cljs.core.get.call(null,map__51329__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51329__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__33705__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__33705__auto__)){
return or__33705__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__33693__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__33693__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__33693__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__37825__auto___51408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___51408,ch){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___51408,ch){
return (function (state_51380){
var state_val_51381 = (state_51380[(1)]);
if((state_val_51381 === (7))){
var inst_51376 = (state_51380[(2)]);
var state_51380__$1 = state_51380;
var statearr_51382_51409 = state_51380__$1;
(statearr_51382_51409[(2)] = inst_51376);

(statearr_51382_51409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (1))){
var state_51380__$1 = state_51380;
var statearr_51383_51410 = state_51380__$1;
(statearr_51383_51410[(2)] = null);

(statearr_51383_51410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (4))){
var inst_51333 = (state_51380[(7)]);
var inst_51333__$1 = (state_51380[(2)]);
var state_51380__$1 = (function (){var statearr_51384 = state_51380;
(statearr_51384[(7)] = inst_51333__$1);

return statearr_51384;
})();
if(cljs.core.truth_(inst_51333__$1)){
var statearr_51385_51411 = state_51380__$1;
(statearr_51385_51411[(1)] = (5));

} else {
var statearr_51386_51412 = state_51380__$1;
(statearr_51386_51412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (15))){
var inst_51340 = (state_51380[(8)]);
var inst_51355 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51340);
var inst_51356 = cljs.core.first.call(null,inst_51355);
var inst_51357 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51356);
var inst_51358 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51357)].join('');
var inst_51359 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51358);
var state_51380__$1 = state_51380;
var statearr_51387_51413 = state_51380__$1;
(statearr_51387_51413[(2)] = inst_51359);

(statearr_51387_51413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (13))){
var inst_51364 = (state_51380[(2)]);
var state_51380__$1 = state_51380;
var statearr_51388_51414 = state_51380__$1;
(statearr_51388_51414[(2)] = inst_51364);

(statearr_51388_51414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (6))){
var state_51380__$1 = state_51380;
var statearr_51389_51415 = state_51380__$1;
(statearr_51389_51415[(2)] = null);

(statearr_51389_51415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (17))){
var inst_51362 = (state_51380[(2)]);
var state_51380__$1 = state_51380;
var statearr_51390_51416 = state_51380__$1;
(statearr_51390_51416[(2)] = inst_51362);

(statearr_51390_51416[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (3))){
var inst_51378 = (state_51380[(2)]);
var state_51380__$1 = state_51380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51380__$1,inst_51378);
} else {
if((state_val_51381 === (12))){
var inst_51339 = (state_51380[(9)]);
var inst_51353 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51339,opts);
var state_51380__$1 = state_51380;
if(cljs.core.truth_(inst_51353)){
var statearr_51391_51417 = state_51380__$1;
(statearr_51391_51417[(1)] = (15));

} else {
var statearr_51392_51418 = state_51380__$1;
(statearr_51392_51418[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (2))){
var state_51380__$1 = state_51380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51380__$1,(4),ch);
} else {
if((state_val_51381 === (11))){
var inst_51340 = (state_51380[(8)]);
var inst_51345 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51346 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51340);
var inst_51347 = cljs.core.async.timeout.call(null,(1000));
var inst_51348 = [inst_51346,inst_51347];
var inst_51349 = (new cljs.core.PersistentVector(null,2,(5),inst_51345,inst_51348,null));
var state_51380__$1 = state_51380;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51380__$1,(14),inst_51349);
} else {
if((state_val_51381 === (9))){
var inst_51340 = (state_51380[(8)]);
var inst_51366 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51367 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51340);
var inst_51368 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51367);
var inst_51369 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51368)].join('');
var inst_51370 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51369);
var state_51380__$1 = (function (){var statearr_51393 = state_51380;
(statearr_51393[(10)] = inst_51366);

return statearr_51393;
})();
var statearr_51394_51419 = state_51380__$1;
(statearr_51394_51419[(2)] = inst_51370);

(statearr_51394_51419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (5))){
var inst_51333 = (state_51380[(7)]);
var inst_51335 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51336 = (new cljs.core.PersistentArrayMap(null,2,inst_51335,null));
var inst_51337 = (new cljs.core.PersistentHashSet(null,inst_51336,null));
var inst_51338 = figwheel.client.focus_msgs.call(null,inst_51337,inst_51333);
var inst_51339 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51338);
var inst_51340 = cljs.core.first.call(null,inst_51338);
var inst_51341 = figwheel.client.autoload_QMARK_.call(null);
var state_51380__$1 = (function (){var statearr_51395 = state_51380;
(statearr_51395[(8)] = inst_51340);

(statearr_51395[(9)] = inst_51339);

return statearr_51395;
})();
if(cljs.core.truth_(inst_51341)){
var statearr_51396_51420 = state_51380__$1;
(statearr_51396_51420[(1)] = (8));

} else {
var statearr_51397_51421 = state_51380__$1;
(statearr_51397_51421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (14))){
var inst_51351 = (state_51380[(2)]);
var state_51380__$1 = state_51380;
var statearr_51398_51422 = state_51380__$1;
(statearr_51398_51422[(2)] = inst_51351);

(statearr_51398_51422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (16))){
var state_51380__$1 = state_51380;
var statearr_51399_51423 = state_51380__$1;
(statearr_51399_51423[(2)] = null);

(statearr_51399_51423[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (10))){
var inst_51372 = (state_51380[(2)]);
var state_51380__$1 = (function (){var statearr_51400 = state_51380;
(statearr_51400[(11)] = inst_51372);

return statearr_51400;
})();
var statearr_51401_51424 = state_51380__$1;
(statearr_51401_51424[(2)] = null);

(statearr_51401_51424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (8))){
var inst_51339 = (state_51380[(9)]);
var inst_51343 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51339,opts);
var state_51380__$1 = state_51380;
if(cljs.core.truth_(inst_51343)){
var statearr_51402_51425 = state_51380__$1;
(statearr_51402_51425[(1)] = (11));

} else {
var statearr_51403_51426 = state_51380__$1;
(statearr_51403_51426[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37825__auto___51408,ch))
;
return ((function (switch__37737__auto__,c__37825__auto___51408,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____0 = (function (){
var statearr_51404 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51404[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__);

(statearr_51404[(1)] = (1));

return statearr_51404;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____1 = (function (state_51380){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_51380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e51405){if((e51405 instanceof Object)){
var ex__37741__auto__ = e51405;
var statearr_51406_51427 = state_51380;
(statearr_51406_51427[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51428 = state_51380;
state_51380 = G__51428;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__ = function(state_51380){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____1.call(this,state_51380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___51408,ch))
})();
var state__37827__auto__ = (function (){var statearr_51407 = f__37826__auto__.call(null);
(statearr_51407[(6)] = c__37825__auto___51408);

return statearr_51407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___51408,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51429_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51429_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51431 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51431){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e51430){if((e51430 instanceof Error)){
var e = e51430;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51431], null));
} else {
var e = e51430;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_51431))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51432){
var map__51433 = p__51432;
var map__51433__$1 = ((((!((map__51433 == null)))?((((map__51433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51433):map__51433);
var opts = map__51433__$1;
var build_id = cljs.core.get.call(null,map__51433__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51433,map__51433__$1,opts,build_id){
return (function (p__51435){
var vec__51436 = p__51435;
var seq__51437 = cljs.core.seq.call(null,vec__51436);
var first__51438 = cljs.core.first.call(null,seq__51437);
var seq__51437__$1 = cljs.core.next.call(null,seq__51437);
var map__51439 = first__51438;
var map__51439__$1 = ((((!((map__51439 == null)))?((((map__51439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51439):map__51439);
var msg = map__51439__$1;
var msg_name = cljs.core.get.call(null,map__51439__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51437__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51436,seq__51437,first__51438,seq__51437__$1,map__51439,map__51439__$1,msg,msg_name,_,map__51433,map__51433__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51436,seq__51437,first__51438,seq__51437__$1,map__51439,map__51439__$1,msg,msg_name,_,map__51433,map__51433__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51433,map__51433__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51441){
var vec__51442 = p__51441;
var seq__51443 = cljs.core.seq.call(null,vec__51442);
var first__51444 = cljs.core.first.call(null,seq__51443);
var seq__51443__$1 = cljs.core.next.call(null,seq__51443);
var map__51445 = first__51444;
var map__51445__$1 = ((((!((map__51445 == null)))?((((map__51445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51445):map__51445);
var msg = map__51445__$1;
var msg_name = cljs.core.get.call(null,map__51445__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51443__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51447){
var map__51448 = p__51447;
var map__51448__$1 = ((((!((map__51448 == null)))?((((map__51448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51448):map__51448);
var on_compile_warning = cljs.core.get.call(null,map__51448__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51448__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51448,map__51448__$1,on_compile_warning,on_compile_fail){
return (function (p__51450){
var vec__51451 = p__51450;
var seq__51452 = cljs.core.seq.call(null,vec__51451);
var first__51453 = cljs.core.first.call(null,seq__51452);
var seq__51452__$1 = cljs.core.next.call(null,seq__51452);
var map__51454 = first__51453;
var map__51454__$1 = ((((!((map__51454 == null)))?((((map__51454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51454):map__51454);
var msg = map__51454__$1;
var msg_name = cljs.core.get.call(null,map__51454__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51452__$1;
var pred__51456 = cljs.core._EQ_;
var expr__51457 = msg_name;
if(cljs.core.truth_(pred__51456.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51457))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51456.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51457))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51448,map__51448__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__,msg_hist,msg_names,msg){
return (function (state_51546){
var state_val_51547 = (state_51546[(1)]);
if((state_val_51547 === (7))){
var inst_51466 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
if(cljs.core.truth_(inst_51466)){
var statearr_51548_51595 = state_51546__$1;
(statearr_51548_51595[(1)] = (8));

} else {
var statearr_51549_51596 = state_51546__$1;
(statearr_51549_51596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (20))){
var inst_51540 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
var statearr_51550_51597 = state_51546__$1;
(statearr_51550_51597[(2)] = inst_51540);

(statearr_51550_51597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (27))){
var inst_51536 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
var statearr_51551_51598 = state_51546__$1;
(statearr_51551_51598[(2)] = inst_51536);

(statearr_51551_51598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (1))){
var inst_51459 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51546__$1 = state_51546;
if(cljs.core.truth_(inst_51459)){
var statearr_51552_51599 = state_51546__$1;
(statearr_51552_51599[(1)] = (2));

} else {
var statearr_51553_51600 = state_51546__$1;
(statearr_51553_51600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (24))){
var inst_51538 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
var statearr_51554_51601 = state_51546__$1;
(statearr_51554_51601[(2)] = inst_51538);

(statearr_51554_51601[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (4))){
var inst_51544 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51546__$1,inst_51544);
} else {
if((state_val_51547 === (15))){
var inst_51542 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
var statearr_51555_51602 = state_51546__$1;
(statearr_51555_51602[(2)] = inst_51542);

(statearr_51555_51602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (21))){
var inst_51495 = (state_51546[(2)]);
var inst_51496 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51497 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51496);
var state_51546__$1 = (function (){var statearr_51556 = state_51546;
(statearr_51556[(7)] = inst_51495);

return statearr_51556;
})();
var statearr_51557_51603 = state_51546__$1;
(statearr_51557_51603[(2)] = inst_51497);

(statearr_51557_51603[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (31))){
var inst_51525 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51546__$1 = state_51546;
if(cljs.core.truth_(inst_51525)){
var statearr_51558_51604 = state_51546__$1;
(statearr_51558_51604[(1)] = (34));

} else {
var statearr_51559_51605 = state_51546__$1;
(statearr_51559_51605[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (32))){
var inst_51534 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
var statearr_51560_51606 = state_51546__$1;
(statearr_51560_51606[(2)] = inst_51534);

(statearr_51560_51606[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (33))){
var inst_51521 = (state_51546[(2)]);
var inst_51522 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51523 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51522);
var state_51546__$1 = (function (){var statearr_51561 = state_51546;
(statearr_51561[(8)] = inst_51521);

return statearr_51561;
})();
var statearr_51562_51607 = state_51546__$1;
(statearr_51562_51607[(2)] = inst_51523);

(statearr_51562_51607[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (13))){
var inst_51480 = figwheel.client.heads_up.clear.call(null);
var state_51546__$1 = state_51546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51546__$1,(16),inst_51480);
} else {
if((state_val_51547 === (22))){
var inst_51501 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51502 = figwheel.client.heads_up.append_warning_message.call(null,inst_51501);
var state_51546__$1 = state_51546;
var statearr_51563_51608 = state_51546__$1;
(statearr_51563_51608[(2)] = inst_51502);

(statearr_51563_51608[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (36))){
var inst_51532 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
var statearr_51564_51609 = state_51546__$1;
(statearr_51564_51609[(2)] = inst_51532);

(statearr_51564_51609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (29))){
var inst_51512 = (state_51546[(2)]);
var inst_51513 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51514 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51513);
var state_51546__$1 = (function (){var statearr_51565 = state_51546;
(statearr_51565[(9)] = inst_51512);

return statearr_51565;
})();
var statearr_51566_51610 = state_51546__$1;
(statearr_51566_51610[(2)] = inst_51514);

(statearr_51566_51610[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (6))){
var inst_51461 = (state_51546[(10)]);
var state_51546__$1 = state_51546;
var statearr_51567_51611 = state_51546__$1;
(statearr_51567_51611[(2)] = inst_51461);

(statearr_51567_51611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (28))){
var inst_51508 = (state_51546[(2)]);
var inst_51509 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51510 = figwheel.client.heads_up.display_warning.call(null,inst_51509);
var state_51546__$1 = (function (){var statearr_51568 = state_51546;
(statearr_51568[(11)] = inst_51508);

return statearr_51568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51546__$1,(29),inst_51510);
} else {
if((state_val_51547 === (25))){
var inst_51506 = figwheel.client.heads_up.clear.call(null);
var state_51546__$1 = state_51546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51546__$1,(28),inst_51506);
} else {
if((state_val_51547 === (34))){
var inst_51527 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51546__$1 = state_51546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51546__$1,(37),inst_51527);
} else {
if((state_val_51547 === (17))){
var inst_51486 = (state_51546[(2)]);
var inst_51487 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51488 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51487);
var state_51546__$1 = (function (){var statearr_51569 = state_51546;
(statearr_51569[(12)] = inst_51486);

return statearr_51569;
})();
var statearr_51570_51612 = state_51546__$1;
(statearr_51570_51612[(2)] = inst_51488);

(statearr_51570_51612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (3))){
var inst_51478 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51546__$1 = state_51546;
if(cljs.core.truth_(inst_51478)){
var statearr_51571_51613 = state_51546__$1;
(statearr_51571_51613[(1)] = (13));

} else {
var statearr_51572_51614 = state_51546__$1;
(statearr_51572_51614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (12))){
var inst_51474 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
var statearr_51573_51615 = state_51546__$1;
(statearr_51573_51615[(2)] = inst_51474);

(statearr_51573_51615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (2))){
var inst_51461 = (state_51546[(10)]);
var inst_51461__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51546__$1 = (function (){var statearr_51574 = state_51546;
(statearr_51574[(10)] = inst_51461__$1);

return statearr_51574;
})();
if(cljs.core.truth_(inst_51461__$1)){
var statearr_51575_51616 = state_51546__$1;
(statearr_51575_51616[(1)] = (5));

} else {
var statearr_51576_51617 = state_51546__$1;
(statearr_51576_51617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (23))){
var inst_51504 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51546__$1 = state_51546;
if(cljs.core.truth_(inst_51504)){
var statearr_51577_51618 = state_51546__$1;
(statearr_51577_51618[(1)] = (25));

} else {
var statearr_51578_51619 = state_51546__$1;
(statearr_51578_51619[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (35))){
var state_51546__$1 = state_51546;
var statearr_51579_51620 = state_51546__$1;
(statearr_51579_51620[(2)] = null);

(statearr_51579_51620[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (19))){
var inst_51499 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51546__$1 = state_51546;
if(cljs.core.truth_(inst_51499)){
var statearr_51580_51621 = state_51546__$1;
(statearr_51580_51621[(1)] = (22));

} else {
var statearr_51581_51622 = state_51546__$1;
(statearr_51581_51622[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (11))){
var inst_51470 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
var statearr_51582_51623 = state_51546__$1;
(statearr_51582_51623[(2)] = inst_51470);

(statearr_51582_51623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (9))){
var inst_51472 = figwheel.client.heads_up.clear.call(null);
var state_51546__$1 = state_51546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51546__$1,(12),inst_51472);
} else {
if((state_val_51547 === (5))){
var inst_51463 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51546__$1 = state_51546;
var statearr_51583_51624 = state_51546__$1;
(statearr_51583_51624[(2)] = inst_51463);

(statearr_51583_51624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (14))){
var inst_51490 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51546__$1 = state_51546;
if(cljs.core.truth_(inst_51490)){
var statearr_51584_51625 = state_51546__$1;
(statearr_51584_51625[(1)] = (18));

} else {
var statearr_51585_51626 = state_51546__$1;
(statearr_51585_51626[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (26))){
var inst_51516 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51546__$1 = state_51546;
if(cljs.core.truth_(inst_51516)){
var statearr_51586_51627 = state_51546__$1;
(statearr_51586_51627[(1)] = (30));

} else {
var statearr_51587_51628 = state_51546__$1;
(statearr_51587_51628[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (16))){
var inst_51482 = (state_51546[(2)]);
var inst_51483 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51484 = figwheel.client.heads_up.display_exception.call(null,inst_51483);
var state_51546__$1 = (function (){var statearr_51588 = state_51546;
(statearr_51588[(13)] = inst_51482);

return statearr_51588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51546__$1,(17),inst_51484);
} else {
if((state_val_51547 === (30))){
var inst_51518 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51519 = figwheel.client.heads_up.display_warning.call(null,inst_51518);
var state_51546__$1 = state_51546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51546__$1,(33),inst_51519);
} else {
if((state_val_51547 === (10))){
var inst_51476 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
var statearr_51589_51629 = state_51546__$1;
(statearr_51589_51629[(2)] = inst_51476);

(statearr_51589_51629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (18))){
var inst_51492 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51493 = figwheel.client.heads_up.display_exception.call(null,inst_51492);
var state_51546__$1 = state_51546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51546__$1,(21),inst_51493);
} else {
if((state_val_51547 === (37))){
var inst_51529 = (state_51546[(2)]);
var state_51546__$1 = state_51546;
var statearr_51590_51630 = state_51546__$1;
(statearr_51590_51630[(2)] = inst_51529);

(statearr_51590_51630[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51547 === (8))){
var inst_51468 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51546__$1 = state_51546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51546__$1,(11),inst_51468);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37825__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37737__auto__,c__37825__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____0 = (function (){
var statearr_51591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51591[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__);

(statearr_51591[(1)] = (1));

return statearr_51591;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____1 = (function (state_51546){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_51546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e51592){if((e51592 instanceof Object)){
var ex__37741__auto__ = e51592;
var statearr_51593_51631 = state_51546;
(statearr_51593_51631[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51632 = state_51546;
state_51546 = G__51632;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__ = function(state_51546){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____1.call(this,state_51546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__,msg_hist,msg_names,msg))
})();
var state__37827__auto__ = (function (){var statearr_51594 = f__37826__auto__.call(null);
(statearr_51594[(6)] = c__37825__auto__);

return statearr_51594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__,msg_hist,msg_names,msg))
);

return c__37825__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37825__auto___51661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___51661,ch){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___51661,ch){
return (function (state_51647){
var state_val_51648 = (state_51647[(1)]);
if((state_val_51648 === (1))){
var state_51647__$1 = state_51647;
var statearr_51649_51662 = state_51647__$1;
(statearr_51649_51662[(2)] = null);

(statearr_51649_51662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (2))){
var state_51647__$1 = state_51647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51647__$1,(4),ch);
} else {
if((state_val_51648 === (3))){
var inst_51645 = (state_51647[(2)]);
var state_51647__$1 = state_51647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51647__$1,inst_51645);
} else {
if((state_val_51648 === (4))){
var inst_51635 = (state_51647[(7)]);
var inst_51635__$1 = (state_51647[(2)]);
var state_51647__$1 = (function (){var statearr_51650 = state_51647;
(statearr_51650[(7)] = inst_51635__$1);

return statearr_51650;
})();
if(cljs.core.truth_(inst_51635__$1)){
var statearr_51651_51663 = state_51647__$1;
(statearr_51651_51663[(1)] = (5));

} else {
var statearr_51652_51664 = state_51647__$1;
(statearr_51652_51664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (5))){
var inst_51635 = (state_51647[(7)]);
var inst_51637 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51635);
var state_51647__$1 = state_51647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51647__$1,(8),inst_51637);
} else {
if((state_val_51648 === (6))){
var state_51647__$1 = state_51647;
var statearr_51653_51665 = state_51647__$1;
(statearr_51653_51665[(2)] = null);

(statearr_51653_51665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (7))){
var inst_51643 = (state_51647[(2)]);
var state_51647__$1 = state_51647;
var statearr_51654_51666 = state_51647__$1;
(statearr_51654_51666[(2)] = inst_51643);

(statearr_51654_51666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (8))){
var inst_51639 = (state_51647[(2)]);
var state_51647__$1 = (function (){var statearr_51655 = state_51647;
(statearr_51655[(8)] = inst_51639);

return statearr_51655;
})();
var statearr_51656_51667 = state_51647__$1;
(statearr_51656_51667[(2)] = null);

(statearr_51656_51667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__37825__auto___51661,ch))
;
return ((function (switch__37737__auto__,c__37825__auto___51661,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37738__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37738__auto____0 = (function (){
var statearr_51657 = [null,null,null,null,null,null,null,null,null];
(statearr_51657[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37738__auto__);

(statearr_51657[(1)] = (1));

return statearr_51657;
});
var figwheel$client$heads_up_plugin_$_state_machine__37738__auto____1 = (function (state_51647){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_51647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e51658){if((e51658 instanceof Object)){
var ex__37741__auto__ = e51658;
var statearr_51659_51668 = state_51647;
(statearr_51659_51668[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51669 = state_51647;
state_51647 = G__51669;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37738__auto__ = function(state_51647){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37738__auto____1.call(this,state_51647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37738__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37738__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___51661,ch))
})();
var state__37827__auto__ = (function (){var statearr_51660 = f__37826__auto__.call(null);
(statearr_51660[(6)] = c__37825__auto___51661);

return statearr_51660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___51661,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__){
return (function (state_51675){
var state_val_51676 = (state_51675[(1)]);
if((state_val_51676 === (1))){
var inst_51670 = cljs.core.async.timeout.call(null,(3000));
var state_51675__$1 = state_51675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51675__$1,(2),inst_51670);
} else {
if((state_val_51676 === (2))){
var inst_51672 = (state_51675[(2)]);
var inst_51673 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51675__$1 = (function (){var statearr_51677 = state_51675;
(statearr_51677[(7)] = inst_51672);

return statearr_51677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51675__$1,inst_51673);
} else {
return null;
}
}
});})(c__37825__auto__))
;
return ((function (switch__37737__auto__,c__37825__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____0 = (function (){
var statearr_51678 = [null,null,null,null,null,null,null,null];
(statearr_51678[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__);

(statearr_51678[(1)] = (1));

return statearr_51678;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____1 = (function (state_51675){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_51675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e51679){if((e51679 instanceof Object)){
var ex__37741__auto__ = e51679;
var statearr_51680_51682 = state_51675;
(statearr_51680_51682[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51683 = state_51675;
state_51675 = G__51683;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__ = function(state_51675){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____1.call(this,state_51675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__))
})();
var state__37827__auto__ = (function (){var statearr_51681 = f__37826__auto__.call(null);
(statearr_51681[(6)] = c__37825__auto__);

return statearr_51681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__))
);

return c__37825__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__,figwheel_version,temp__4657__auto__){
return (function (state_51690){
var state_val_51691 = (state_51690[(1)]);
if((state_val_51691 === (1))){
var inst_51684 = cljs.core.async.timeout.call(null,(2000));
var state_51690__$1 = state_51690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51690__$1,(2),inst_51684);
} else {
if((state_val_51691 === (2))){
var inst_51686 = (state_51690[(2)]);
var inst_51687 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_51688 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51687);
var state_51690__$1 = (function (){var statearr_51692 = state_51690;
(statearr_51692[(7)] = inst_51686);

return statearr_51692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51690__$1,inst_51688);
} else {
return null;
}
}
});})(c__37825__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__37737__auto__,c__37825__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____0 = (function (){
var statearr_51693 = [null,null,null,null,null,null,null,null];
(statearr_51693[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__);

(statearr_51693[(1)] = (1));

return statearr_51693;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____1 = (function (state_51690){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_51690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e51694){if((e51694 instanceof Object)){
var ex__37741__auto__ = e51694;
var statearr_51695_51697 = state_51690;
(statearr_51695_51697[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51698 = state_51690;
state_51690 = G__51698;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__ = function(state_51690){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____1.call(this,state_51690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__,figwheel_version,temp__4657__auto__))
})();
var state__37827__auto__ = (function (){var statearr_51696 = f__37826__auto__.call(null);
(statearr_51696[(6)] = c__37825__auto__);

return statearr_51696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__,figwheel_version,temp__4657__auto__))
);

return c__37825__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51699){
var map__51700 = p__51699;
var map__51700__$1 = ((((!((map__51700 == null)))?((((map__51700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51700):map__51700);
var file = cljs.core.get.call(null,map__51700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51700__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51700__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51702 = "";
var G__51702__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51702),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51702);
var G__51702__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51702__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51702__$1);
if(cljs.core.truth_((function (){var and__33693__auto__ = line;
if(cljs.core.truth_(and__33693__auto__)){
return column;
} else {
return and__33693__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51702__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51702__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51703){
var map__51704 = p__51703;
var map__51704__$1 = ((((!((map__51704 == null)))?((((map__51704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51704):map__51704);
var ed = map__51704__$1;
var formatted_exception = cljs.core.get.call(null,map__51704__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51704__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51704__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51706_51710 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51707_51711 = null;
var count__51708_51712 = (0);
var i__51709_51713 = (0);
while(true){
if((i__51709_51713 < count__51708_51712)){
var msg_51714 = cljs.core._nth.call(null,chunk__51707_51711,i__51709_51713);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51714);

var G__51715 = seq__51706_51710;
var G__51716 = chunk__51707_51711;
var G__51717 = count__51708_51712;
var G__51718 = (i__51709_51713 + (1));
seq__51706_51710 = G__51715;
chunk__51707_51711 = G__51716;
count__51708_51712 = G__51717;
i__51709_51713 = G__51718;
continue;
} else {
var temp__4657__auto___51719 = cljs.core.seq.call(null,seq__51706_51710);
if(temp__4657__auto___51719){
var seq__51706_51720__$1 = temp__4657__auto___51719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51706_51720__$1)){
var c__34525__auto___51721 = cljs.core.chunk_first.call(null,seq__51706_51720__$1);
var G__51722 = cljs.core.chunk_rest.call(null,seq__51706_51720__$1);
var G__51723 = c__34525__auto___51721;
var G__51724 = cljs.core.count.call(null,c__34525__auto___51721);
var G__51725 = (0);
seq__51706_51710 = G__51722;
chunk__51707_51711 = G__51723;
count__51708_51712 = G__51724;
i__51709_51713 = G__51725;
continue;
} else {
var msg_51726 = cljs.core.first.call(null,seq__51706_51720__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51726);

var G__51727 = cljs.core.next.call(null,seq__51706_51720__$1);
var G__51728 = null;
var G__51729 = (0);
var G__51730 = (0);
seq__51706_51710 = G__51727;
chunk__51707_51711 = G__51728;
count__51708_51712 = G__51729;
i__51709_51713 = G__51730;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51731){
var map__51732 = p__51731;
var map__51732__$1 = ((((!((map__51732 == null)))?((((map__51732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51732):map__51732);
var w = map__51732__$1;
var message = cljs.core.get.call(null,map__51732__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__33693__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__33693__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__33693__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__51734 = cljs.core.seq.call(null,plugins);
var chunk__51735 = null;
var count__51736 = (0);
var i__51737 = (0);
while(true){
if((i__51737 < count__51736)){
var vec__51738 = cljs.core._nth.call(null,chunk__51735,i__51737);
var k = cljs.core.nth.call(null,vec__51738,(0),null);
var plugin = cljs.core.nth.call(null,vec__51738,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51744 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51734,chunk__51735,count__51736,i__51737,pl_51744,vec__51738,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51744.call(null,msg_hist);
});})(seq__51734,chunk__51735,count__51736,i__51737,pl_51744,vec__51738,k,plugin))
);
} else {
}

var G__51745 = seq__51734;
var G__51746 = chunk__51735;
var G__51747 = count__51736;
var G__51748 = (i__51737 + (1));
seq__51734 = G__51745;
chunk__51735 = G__51746;
count__51736 = G__51747;
i__51737 = G__51748;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51734);
if(temp__4657__auto__){
var seq__51734__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51734__$1)){
var c__34525__auto__ = cljs.core.chunk_first.call(null,seq__51734__$1);
var G__51749 = cljs.core.chunk_rest.call(null,seq__51734__$1);
var G__51750 = c__34525__auto__;
var G__51751 = cljs.core.count.call(null,c__34525__auto__);
var G__51752 = (0);
seq__51734 = G__51749;
chunk__51735 = G__51750;
count__51736 = G__51751;
i__51737 = G__51752;
continue;
} else {
var vec__51741 = cljs.core.first.call(null,seq__51734__$1);
var k = cljs.core.nth.call(null,vec__51741,(0),null);
var plugin = cljs.core.nth.call(null,vec__51741,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51753 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51734,chunk__51735,count__51736,i__51737,pl_51753,vec__51741,k,plugin,seq__51734__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51753.call(null,msg_hist);
});})(seq__51734,chunk__51735,count__51736,i__51737,pl_51753,vec__51741,k,plugin,seq__51734__$1,temp__4657__auto__))
);
} else {
}

var G__51754 = cljs.core.next.call(null,seq__51734__$1);
var G__51755 = null;
var G__51756 = (0);
var G__51757 = (0);
seq__51734 = G__51754;
chunk__51735 = G__51755;
count__51736 = G__51756;
i__51737 = G__51757;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__51759 = arguments.length;
switch (G__51759) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__51760_51765 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51761_51766 = null;
var count__51762_51767 = (0);
var i__51763_51768 = (0);
while(true){
if((i__51763_51768 < count__51762_51767)){
var msg_51769 = cljs.core._nth.call(null,chunk__51761_51766,i__51763_51768);
figwheel.client.socket.handle_incoming_message.call(null,msg_51769);

var G__51770 = seq__51760_51765;
var G__51771 = chunk__51761_51766;
var G__51772 = count__51762_51767;
var G__51773 = (i__51763_51768 + (1));
seq__51760_51765 = G__51770;
chunk__51761_51766 = G__51771;
count__51762_51767 = G__51772;
i__51763_51768 = G__51773;
continue;
} else {
var temp__4657__auto___51774 = cljs.core.seq.call(null,seq__51760_51765);
if(temp__4657__auto___51774){
var seq__51760_51775__$1 = temp__4657__auto___51774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51760_51775__$1)){
var c__34525__auto___51776 = cljs.core.chunk_first.call(null,seq__51760_51775__$1);
var G__51777 = cljs.core.chunk_rest.call(null,seq__51760_51775__$1);
var G__51778 = c__34525__auto___51776;
var G__51779 = cljs.core.count.call(null,c__34525__auto___51776);
var G__51780 = (0);
seq__51760_51765 = G__51777;
chunk__51761_51766 = G__51778;
count__51762_51767 = G__51779;
i__51763_51768 = G__51780;
continue;
} else {
var msg_51781 = cljs.core.first.call(null,seq__51760_51775__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51781);

var G__51782 = cljs.core.next.call(null,seq__51760_51775__$1);
var G__51783 = null;
var G__51784 = (0);
var G__51785 = (0);
seq__51760_51765 = G__51782;
chunk__51761_51766 = G__51783;
count__51762_51767 = G__51784;
i__51763_51768 = G__51785;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__34837__auto__ = [];
var len__34830__auto___51790 = arguments.length;
var i__34831__auto___51791 = (0);
while(true){
if((i__34831__auto___51791 < len__34830__auto___51790)){
args__34837__auto__.push((arguments[i__34831__auto___51791]));

var G__51792 = (i__34831__auto___51791 + (1));
i__34831__auto___51791 = G__51792;
continue;
} else {
}
break;
}

var argseq__34838__auto__ = ((((0) < args__34837__auto__.length))?(new cljs.core.IndexedSeq(args__34837__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__34838__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51787){
var map__51788 = p__51787;
var map__51788__$1 = ((((!((map__51788 == null)))?((((map__51788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51788):map__51788);
var opts = map__51788__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51786){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51786));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51793){if((e51793 instanceof Error)){
var e = e51793;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51793;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__51794){
var map__51795 = p__51794;
var map__51795__$1 = ((((!((map__51795 == null)))?((((map__51795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51795):map__51795);
var msg_name = cljs.core.get.call(null,map__51795__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1514142719888