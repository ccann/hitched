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
var G__42728 = arguments.length;
switch (G__42728) {
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
var len__34830__auto___42731 = arguments.length;
var i__34831__auto___42732 = (0);
while(true){
if((i__34831__auto___42732 < len__34830__auto___42731)){
args__34837__auto__.push((arguments[i__34831__auto___42732]));

var G__42733 = (i__34831__auto___42732 + (1));
i__34831__auto___42732 = G__42733;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42730){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42730));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__34837__auto__ = [];
var len__34830__auto___42735 = arguments.length;
var i__34831__auto___42736 = (0);
while(true){
if((i__34831__auto___42736 < len__34830__auto___42735)){
args__34837__auto__.push((arguments[i__34831__auto___42736]));

var G__42737 = (i__34831__auto___42736 + (1));
i__34831__auto___42736 = G__42737;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42734){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42734));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42738){
var map__42739 = p__42738;
var map__42739__$1 = ((((!((map__42739 == null)))?((((map__42739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42739):map__42739);
var message = cljs.core.get.call(null,map__42739__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42739__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__37825__auto___42818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___42818,ch){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___42818,ch){
return (function (state_42790){
var state_val_42791 = (state_42790[(1)]);
if((state_val_42791 === (7))){
var inst_42786 = (state_42790[(2)]);
var state_42790__$1 = state_42790;
var statearr_42792_42819 = state_42790__$1;
(statearr_42792_42819[(2)] = inst_42786);

(statearr_42792_42819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (1))){
var state_42790__$1 = state_42790;
var statearr_42793_42820 = state_42790__$1;
(statearr_42793_42820[(2)] = null);

(statearr_42793_42820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (4))){
var inst_42743 = (state_42790[(7)]);
var inst_42743__$1 = (state_42790[(2)]);
var state_42790__$1 = (function (){var statearr_42794 = state_42790;
(statearr_42794[(7)] = inst_42743__$1);

return statearr_42794;
})();
if(cljs.core.truth_(inst_42743__$1)){
var statearr_42795_42821 = state_42790__$1;
(statearr_42795_42821[(1)] = (5));

} else {
var statearr_42796_42822 = state_42790__$1;
(statearr_42796_42822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (15))){
var inst_42750 = (state_42790[(8)]);
var inst_42765 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42750);
var inst_42766 = cljs.core.first.call(null,inst_42765);
var inst_42767 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42766);
var inst_42768 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42767)].join('');
var inst_42769 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42768);
var state_42790__$1 = state_42790;
var statearr_42797_42823 = state_42790__$1;
(statearr_42797_42823[(2)] = inst_42769);

(statearr_42797_42823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (13))){
var inst_42774 = (state_42790[(2)]);
var state_42790__$1 = state_42790;
var statearr_42798_42824 = state_42790__$1;
(statearr_42798_42824[(2)] = inst_42774);

(statearr_42798_42824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (6))){
var state_42790__$1 = state_42790;
var statearr_42799_42825 = state_42790__$1;
(statearr_42799_42825[(2)] = null);

(statearr_42799_42825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (17))){
var inst_42772 = (state_42790[(2)]);
var state_42790__$1 = state_42790;
var statearr_42800_42826 = state_42790__$1;
(statearr_42800_42826[(2)] = inst_42772);

(statearr_42800_42826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (3))){
var inst_42788 = (state_42790[(2)]);
var state_42790__$1 = state_42790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42790__$1,inst_42788);
} else {
if((state_val_42791 === (12))){
var inst_42749 = (state_42790[(9)]);
var inst_42763 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42749,opts);
var state_42790__$1 = state_42790;
if(cljs.core.truth_(inst_42763)){
var statearr_42801_42827 = state_42790__$1;
(statearr_42801_42827[(1)] = (15));

} else {
var statearr_42802_42828 = state_42790__$1;
(statearr_42802_42828[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (2))){
var state_42790__$1 = state_42790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42790__$1,(4),ch);
} else {
if((state_val_42791 === (11))){
var inst_42750 = (state_42790[(8)]);
var inst_42755 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42756 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42750);
var inst_42757 = cljs.core.async.timeout.call(null,(1000));
var inst_42758 = [inst_42756,inst_42757];
var inst_42759 = (new cljs.core.PersistentVector(null,2,(5),inst_42755,inst_42758,null));
var state_42790__$1 = state_42790;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42790__$1,(14),inst_42759);
} else {
if((state_val_42791 === (9))){
var inst_42750 = (state_42790[(8)]);
var inst_42776 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42777 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42750);
var inst_42778 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42777);
var inst_42779 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42778)].join('');
var inst_42780 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42779);
var state_42790__$1 = (function (){var statearr_42803 = state_42790;
(statearr_42803[(10)] = inst_42776);

return statearr_42803;
})();
var statearr_42804_42829 = state_42790__$1;
(statearr_42804_42829[(2)] = inst_42780);

(statearr_42804_42829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (5))){
var inst_42743 = (state_42790[(7)]);
var inst_42745 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42746 = (new cljs.core.PersistentArrayMap(null,2,inst_42745,null));
var inst_42747 = (new cljs.core.PersistentHashSet(null,inst_42746,null));
var inst_42748 = figwheel.client.focus_msgs.call(null,inst_42747,inst_42743);
var inst_42749 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42748);
var inst_42750 = cljs.core.first.call(null,inst_42748);
var inst_42751 = figwheel.client.autoload_QMARK_.call(null);
var state_42790__$1 = (function (){var statearr_42805 = state_42790;
(statearr_42805[(9)] = inst_42749);

(statearr_42805[(8)] = inst_42750);

return statearr_42805;
})();
if(cljs.core.truth_(inst_42751)){
var statearr_42806_42830 = state_42790__$1;
(statearr_42806_42830[(1)] = (8));

} else {
var statearr_42807_42831 = state_42790__$1;
(statearr_42807_42831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (14))){
var inst_42761 = (state_42790[(2)]);
var state_42790__$1 = state_42790;
var statearr_42808_42832 = state_42790__$1;
(statearr_42808_42832[(2)] = inst_42761);

(statearr_42808_42832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (16))){
var state_42790__$1 = state_42790;
var statearr_42809_42833 = state_42790__$1;
(statearr_42809_42833[(2)] = null);

(statearr_42809_42833[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (10))){
var inst_42782 = (state_42790[(2)]);
var state_42790__$1 = (function (){var statearr_42810 = state_42790;
(statearr_42810[(11)] = inst_42782);

return statearr_42810;
})();
var statearr_42811_42834 = state_42790__$1;
(statearr_42811_42834[(2)] = null);

(statearr_42811_42834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42791 === (8))){
var inst_42749 = (state_42790[(9)]);
var inst_42753 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42749,opts);
var state_42790__$1 = state_42790;
if(cljs.core.truth_(inst_42753)){
var statearr_42812_42835 = state_42790__$1;
(statearr_42812_42835[(1)] = (11));

} else {
var statearr_42813_42836 = state_42790__$1;
(statearr_42813_42836[(1)] = (12));

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
});})(c__37825__auto___42818,ch))
;
return ((function (switch__37737__auto__,c__37825__auto___42818,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____0 = (function (){
var statearr_42814 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42814[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__);

(statearr_42814[(1)] = (1));

return statearr_42814;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____1 = (function (state_42790){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_42790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e42815){if((e42815 instanceof Object)){
var ex__37741__auto__ = e42815;
var statearr_42816_42837 = state_42790;
(statearr_42816_42837[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42838 = state_42790;
state_42790 = G__42838;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__ = function(state_42790){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____1.call(this,state_42790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37738__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___42818,ch))
})();
var state__37827__auto__ = (function (){var statearr_42817 = f__37826__auto__.call(null);
(statearr_42817[(6)] = c__37825__auto___42818);

return statearr_42817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___42818,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42839_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42839_SHARP_));
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
var base_path_42841 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42841){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42840){if((e42840 instanceof Error)){
var e = e42840;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42841], null));
} else {
var e = e42840;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42841))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42842){
var map__42843 = p__42842;
var map__42843__$1 = ((((!((map__42843 == null)))?((((map__42843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42843):map__42843);
var opts = map__42843__$1;
var build_id = cljs.core.get.call(null,map__42843__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42843,map__42843__$1,opts,build_id){
return (function (p__42845){
var vec__42846 = p__42845;
var seq__42847 = cljs.core.seq.call(null,vec__42846);
var first__42848 = cljs.core.first.call(null,seq__42847);
var seq__42847__$1 = cljs.core.next.call(null,seq__42847);
var map__42849 = first__42848;
var map__42849__$1 = ((((!((map__42849 == null)))?((((map__42849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42849):map__42849);
var msg = map__42849__$1;
var msg_name = cljs.core.get.call(null,map__42849__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42847__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42846,seq__42847,first__42848,seq__42847__$1,map__42849,map__42849__$1,msg,msg_name,_,map__42843,map__42843__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42846,seq__42847,first__42848,seq__42847__$1,map__42849,map__42849__$1,msg,msg_name,_,map__42843,map__42843__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42843,map__42843__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42851){
var vec__42852 = p__42851;
var seq__42853 = cljs.core.seq.call(null,vec__42852);
var first__42854 = cljs.core.first.call(null,seq__42853);
var seq__42853__$1 = cljs.core.next.call(null,seq__42853);
var map__42855 = first__42854;
var map__42855__$1 = ((((!((map__42855 == null)))?((((map__42855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42855):map__42855);
var msg = map__42855__$1;
var msg_name = cljs.core.get.call(null,map__42855__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42853__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42857){
var map__42858 = p__42857;
var map__42858__$1 = ((((!((map__42858 == null)))?((((map__42858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42858):map__42858);
var on_compile_warning = cljs.core.get.call(null,map__42858__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42858__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42858,map__42858__$1,on_compile_warning,on_compile_fail){
return (function (p__42860){
var vec__42861 = p__42860;
var seq__42862 = cljs.core.seq.call(null,vec__42861);
var first__42863 = cljs.core.first.call(null,seq__42862);
var seq__42862__$1 = cljs.core.next.call(null,seq__42862);
var map__42864 = first__42863;
var map__42864__$1 = ((((!((map__42864 == null)))?((((map__42864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42864):map__42864);
var msg = map__42864__$1;
var msg_name = cljs.core.get.call(null,map__42864__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42862__$1;
var pred__42866 = cljs.core._EQ_;
var expr__42867 = msg_name;
if(cljs.core.truth_(pred__42866.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42867))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42866.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42867))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42858,map__42858__$1,on_compile_warning,on_compile_fail))
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
return (function (state_42956){
var state_val_42957 = (state_42956[(1)]);
if((state_val_42957 === (7))){
var inst_42876 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
if(cljs.core.truth_(inst_42876)){
var statearr_42958_43005 = state_42956__$1;
(statearr_42958_43005[(1)] = (8));

} else {
var statearr_42959_43006 = state_42956__$1;
(statearr_42959_43006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (20))){
var inst_42950 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42960_43007 = state_42956__$1;
(statearr_42960_43007[(2)] = inst_42950);

(statearr_42960_43007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (27))){
var inst_42946 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42961_43008 = state_42956__$1;
(statearr_42961_43008[(2)] = inst_42946);

(statearr_42961_43008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (1))){
var inst_42869 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42956__$1 = state_42956;
if(cljs.core.truth_(inst_42869)){
var statearr_42962_43009 = state_42956__$1;
(statearr_42962_43009[(1)] = (2));

} else {
var statearr_42963_43010 = state_42956__$1;
(statearr_42963_43010[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (24))){
var inst_42948 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42964_43011 = state_42956__$1;
(statearr_42964_43011[(2)] = inst_42948);

(statearr_42964_43011[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (4))){
var inst_42954 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42956__$1,inst_42954);
} else {
if((state_val_42957 === (15))){
var inst_42952 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42965_43012 = state_42956__$1;
(statearr_42965_43012[(2)] = inst_42952);

(statearr_42965_43012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (21))){
var inst_42905 = (state_42956[(2)]);
var inst_42906 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42907 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42906);
var state_42956__$1 = (function (){var statearr_42966 = state_42956;
(statearr_42966[(7)] = inst_42905);

return statearr_42966;
})();
var statearr_42967_43013 = state_42956__$1;
(statearr_42967_43013[(2)] = inst_42907);

(statearr_42967_43013[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (31))){
var inst_42935 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42956__$1 = state_42956;
if(cljs.core.truth_(inst_42935)){
var statearr_42968_43014 = state_42956__$1;
(statearr_42968_43014[(1)] = (34));

} else {
var statearr_42969_43015 = state_42956__$1;
(statearr_42969_43015[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (32))){
var inst_42944 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42970_43016 = state_42956__$1;
(statearr_42970_43016[(2)] = inst_42944);

(statearr_42970_43016[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (33))){
var inst_42931 = (state_42956[(2)]);
var inst_42932 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42933 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42932);
var state_42956__$1 = (function (){var statearr_42971 = state_42956;
(statearr_42971[(8)] = inst_42931);

return statearr_42971;
})();
var statearr_42972_43017 = state_42956__$1;
(statearr_42972_43017[(2)] = inst_42933);

(statearr_42972_43017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (13))){
var inst_42890 = figwheel.client.heads_up.clear.call(null);
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42956__$1,(16),inst_42890);
} else {
if((state_val_42957 === (22))){
var inst_42911 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42912 = figwheel.client.heads_up.append_warning_message.call(null,inst_42911);
var state_42956__$1 = state_42956;
var statearr_42973_43018 = state_42956__$1;
(statearr_42973_43018[(2)] = inst_42912);

(statearr_42973_43018[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (36))){
var inst_42942 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42974_43019 = state_42956__$1;
(statearr_42974_43019[(2)] = inst_42942);

(statearr_42974_43019[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (29))){
var inst_42922 = (state_42956[(2)]);
var inst_42923 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42924 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42923);
var state_42956__$1 = (function (){var statearr_42975 = state_42956;
(statearr_42975[(9)] = inst_42922);

return statearr_42975;
})();
var statearr_42976_43020 = state_42956__$1;
(statearr_42976_43020[(2)] = inst_42924);

(statearr_42976_43020[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (6))){
var inst_42871 = (state_42956[(10)]);
var state_42956__$1 = state_42956;
var statearr_42977_43021 = state_42956__$1;
(statearr_42977_43021[(2)] = inst_42871);

(statearr_42977_43021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (28))){
var inst_42918 = (state_42956[(2)]);
var inst_42919 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42920 = figwheel.client.heads_up.display_warning.call(null,inst_42919);
var state_42956__$1 = (function (){var statearr_42978 = state_42956;
(statearr_42978[(11)] = inst_42918);

return statearr_42978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42956__$1,(29),inst_42920);
} else {
if((state_val_42957 === (25))){
var inst_42916 = figwheel.client.heads_up.clear.call(null);
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42956__$1,(28),inst_42916);
} else {
if((state_val_42957 === (34))){
var inst_42937 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42956__$1,(37),inst_42937);
} else {
if((state_val_42957 === (17))){
var inst_42896 = (state_42956[(2)]);
var inst_42897 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42898 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42897);
var state_42956__$1 = (function (){var statearr_42979 = state_42956;
(statearr_42979[(12)] = inst_42896);

return statearr_42979;
})();
var statearr_42980_43022 = state_42956__$1;
(statearr_42980_43022[(2)] = inst_42898);

(statearr_42980_43022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (3))){
var inst_42888 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42956__$1 = state_42956;
if(cljs.core.truth_(inst_42888)){
var statearr_42981_43023 = state_42956__$1;
(statearr_42981_43023[(1)] = (13));

} else {
var statearr_42982_43024 = state_42956__$1;
(statearr_42982_43024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (12))){
var inst_42884 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42983_43025 = state_42956__$1;
(statearr_42983_43025[(2)] = inst_42884);

(statearr_42983_43025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (2))){
var inst_42871 = (state_42956[(10)]);
var inst_42871__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42956__$1 = (function (){var statearr_42984 = state_42956;
(statearr_42984[(10)] = inst_42871__$1);

return statearr_42984;
})();
if(cljs.core.truth_(inst_42871__$1)){
var statearr_42985_43026 = state_42956__$1;
(statearr_42985_43026[(1)] = (5));

} else {
var statearr_42986_43027 = state_42956__$1;
(statearr_42986_43027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (23))){
var inst_42914 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42956__$1 = state_42956;
if(cljs.core.truth_(inst_42914)){
var statearr_42987_43028 = state_42956__$1;
(statearr_42987_43028[(1)] = (25));

} else {
var statearr_42988_43029 = state_42956__$1;
(statearr_42988_43029[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (35))){
var state_42956__$1 = state_42956;
var statearr_42989_43030 = state_42956__$1;
(statearr_42989_43030[(2)] = null);

(statearr_42989_43030[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (19))){
var inst_42909 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42956__$1 = state_42956;
if(cljs.core.truth_(inst_42909)){
var statearr_42990_43031 = state_42956__$1;
(statearr_42990_43031[(1)] = (22));

} else {
var statearr_42991_43032 = state_42956__$1;
(statearr_42991_43032[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (11))){
var inst_42880 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42992_43033 = state_42956__$1;
(statearr_42992_43033[(2)] = inst_42880);

(statearr_42992_43033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (9))){
var inst_42882 = figwheel.client.heads_up.clear.call(null);
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42956__$1,(12),inst_42882);
} else {
if((state_val_42957 === (5))){
var inst_42873 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42956__$1 = state_42956;
var statearr_42993_43034 = state_42956__$1;
(statearr_42993_43034[(2)] = inst_42873);

(statearr_42993_43034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (14))){
var inst_42900 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42956__$1 = state_42956;
if(cljs.core.truth_(inst_42900)){
var statearr_42994_43035 = state_42956__$1;
(statearr_42994_43035[(1)] = (18));

} else {
var statearr_42995_43036 = state_42956__$1;
(statearr_42995_43036[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (26))){
var inst_42926 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42956__$1 = state_42956;
if(cljs.core.truth_(inst_42926)){
var statearr_42996_43037 = state_42956__$1;
(statearr_42996_43037[(1)] = (30));

} else {
var statearr_42997_43038 = state_42956__$1;
(statearr_42997_43038[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (16))){
var inst_42892 = (state_42956[(2)]);
var inst_42893 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42894 = figwheel.client.heads_up.display_exception.call(null,inst_42893);
var state_42956__$1 = (function (){var statearr_42998 = state_42956;
(statearr_42998[(13)] = inst_42892);

return statearr_42998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42956__$1,(17),inst_42894);
} else {
if((state_val_42957 === (30))){
var inst_42928 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42929 = figwheel.client.heads_up.display_warning.call(null,inst_42928);
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42956__$1,(33),inst_42929);
} else {
if((state_val_42957 === (10))){
var inst_42886 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_42999_43039 = state_42956__$1;
(statearr_42999_43039[(2)] = inst_42886);

(statearr_42999_43039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (18))){
var inst_42902 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42903 = figwheel.client.heads_up.display_exception.call(null,inst_42902);
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42956__$1,(21),inst_42903);
} else {
if((state_val_42957 === (37))){
var inst_42939 = (state_42956[(2)]);
var state_42956__$1 = state_42956;
var statearr_43000_43040 = state_42956__$1;
(statearr_43000_43040[(2)] = inst_42939);

(statearr_43000_43040[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42957 === (8))){
var inst_42878 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42956__$1 = state_42956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42956__$1,(11),inst_42878);
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
var statearr_43001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43001[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__);

(statearr_43001[(1)] = (1));

return statearr_43001;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____1 = (function (state_42956){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_42956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e43002){if((e43002 instanceof Object)){
var ex__37741__auto__ = e43002;
var statearr_43003_43041 = state_42956;
(statearr_43003_43041[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43042 = state_42956;
state_42956 = G__43042;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__ = function(state_42956){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____1.call(this,state_42956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__,msg_hist,msg_names,msg))
})();
var state__37827__auto__ = (function (){var statearr_43004 = f__37826__auto__.call(null);
(statearr_43004[(6)] = c__37825__auto__);

return statearr_43004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__,msg_hist,msg_names,msg))
);

return c__37825__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37825__auto___43071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___43071,ch){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___43071,ch){
return (function (state_43057){
var state_val_43058 = (state_43057[(1)]);
if((state_val_43058 === (1))){
var state_43057__$1 = state_43057;
var statearr_43059_43072 = state_43057__$1;
(statearr_43059_43072[(2)] = null);

(statearr_43059_43072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43058 === (2))){
var state_43057__$1 = state_43057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43057__$1,(4),ch);
} else {
if((state_val_43058 === (3))){
var inst_43055 = (state_43057[(2)]);
var state_43057__$1 = state_43057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43057__$1,inst_43055);
} else {
if((state_val_43058 === (4))){
var inst_43045 = (state_43057[(7)]);
var inst_43045__$1 = (state_43057[(2)]);
var state_43057__$1 = (function (){var statearr_43060 = state_43057;
(statearr_43060[(7)] = inst_43045__$1);

return statearr_43060;
})();
if(cljs.core.truth_(inst_43045__$1)){
var statearr_43061_43073 = state_43057__$1;
(statearr_43061_43073[(1)] = (5));

} else {
var statearr_43062_43074 = state_43057__$1;
(statearr_43062_43074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43058 === (5))){
var inst_43045 = (state_43057[(7)]);
var inst_43047 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43045);
var state_43057__$1 = state_43057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43057__$1,(8),inst_43047);
} else {
if((state_val_43058 === (6))){
var state_43057__$1 = state_43057;
var statearr_43063_43075 = state_43057__$1;
(statearr_43063_43075[(2)] = null);

(statearr_43063_43075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43058 === (7))){
var inst_43053 = (state_43057[(2)]);
var state_43057__$1 = state_43057;
var statearr_43064_43076 = state_43057__$1;
(statearr_43064_43076[(2)] = inst_43053);

(statearr_43064_43076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43058 === (8))){
var inst_43049 = (state_43057[(2)]);
var state_43057__$1 = (function (){var statearr_43065 = state_43057;
(statearr_43065[(8)] = inst_43049);

return statearr_43065;
})();
var statearr_43066_43077 = state_43057__$1;
(statearr_43066_43077[(2)] = null);

(statearr_43066_43077[(1)] = (2));


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
});})(c__37825__auto___43071,ch))
;
return ((function (switch__37737__auto__,c__37825__auto___43071,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37738__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37738__auto____0 = (function (){
var statearr_43067 = [null,null,null,null,null,null,null,null,null];
(statearr_43067[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37738__auto__);

(statearr_43067[(1)] = (1));

return statearr_43067;
});
var figwheel$client$heads_up_plugin_$_state_machine__37738__auto____1 = (function (state_43057){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_43057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e43068){if((e43068 instanceof Object)){
var ex__37741__auto__ = e43068;
var statearr_43069_43078 = state_43057;
(statearr_43069_43078[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43079 = state_43057;
state_43057 = G__43079;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37738__auto__ = function(state_43057){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37738__auto____1.call(this,state_43057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37738__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37738__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___43071,ch))
})();
var state__37827__auto__ = (function (){var statearr_43070 = f__37826__auto__.call(null);
(statearr_43070[(6)] = c__37825__auto___43071);

return statearr_43070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___43071,ch))
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
return (function (state_43085){
var state_val_43086 = (state_43085[(1)]);
if((state_val_43086 === (1))){
var inst_43080 = cljs.core.async.timeout.call(null,(3000));
var state_43085__$1 = state_43085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43085__$1,(2),inst_43080);
} else {
if((state_val_43086 === (2))){
var inst_43082 = (state_43085[(2)]);
var inst_43083 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43085__$1 = (function (){var statearr_43087 = state_43085;
(statearr_43087[(7)] = inst_43082);

return statearr_43087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43085__$1,inst_43083);
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
var statearr_43088 = [null,null,null,null,null,null,null,null];
(statearr_43088[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__);

(statearr_43088[(1)] = (1));

return statearr_43088;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____1 = (function (state_43085){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_43085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e43089){if((e43089 instanceof Object)){
var ex__37741__auto__ = e43089;
var statearr_43090_43092 = state_43085;
(statearr_43090_43092[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43093 = state_43085;
state_43085 = G__43093;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__ = function(state_43085){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____1.call(this,state_43085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37738__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__))
})();
var state__37827__auto__ = (function (){var statearr_43091 = f__37826__auto__.call(null);
(statearr_43091[(6)] = c__37825__auto__);

return statearr_43091;
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
return (function (state_43100){
var state_val_43101 = (state_43100[(1)]);
if((state_val_43101 === (1))){
var inst_43094 = cljs.core.async.timeout.call(null,(2000));
var state_43100__$1 = state_43100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43100__$1,(2),inst_43094);
} else {
if((state_val_43101 === (2))){
var inst_43096 = (state_43100[(2)]);
var inst_43097 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_43098 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43097);
var state_43100__$1 = (function (){var statearr_43102 = state_43100;
(statearr_43102[(7)] = inst_43096);

return statearr_43102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43100__$1,inst_43098);
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
var statearr_43103 = [null,null,null,null,null,null,null,null];
(statearr_43103[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__);

(statearr_43103[(1)] = (1));

return statearr_43103;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____1 = (function (state_43100){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_43100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e43104){if((e43104 instanceof Object)){
var ex__37741__auto__ = e43104;
var statearr_43105_43107 = state_43100;
(statearr_43105_43107[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43108 = state_43100;
state_43100 = G__43108;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__ = function(state_43100){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____1.call(this,state_43100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__,figwheel_version,temp__4657__auto__))
})();
var state__37827__auto__ = (function (){var statearr_43106 = f__37826__auto__.call(null);
(statearr_43106[(6)] = c__37825__auto__);

return statearr_43106;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43109){
var map__43110 = p__43109;
var map__43110__$1 = ((((!((map__43110 == null)))?((((map__43110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43110):map__43110);
var file = cljs.core.get.call(null,map__43110__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43110__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43110__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43112 = "";
var G__43112__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43112),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__43112);
var G__43112__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43112__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__43112__$1);
if(cljs.core.truth_((function (){var and__33693__auto__ = line;
if(cljs.core.truth_(and__33693__auto__)){
return column;
} else {
return and__33693__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43112__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__43112__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43113){
var map__43114 = p__43113;
var map__43114__$1 = ((((!((map__43114 == null)))?((((map__43114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43114):map__43114);
var ed = map__43114__$1;
var formatted_exception = cljs.core.get.call(null,map__43114__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43114__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43114__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43116_43120 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43117_43121 = null;
var count__43118_43122 = (0);
var i__43119_43123 = (0);
while(true){
if((i__43119_43123 < count__43118_43122)){
var msg_43124 = cljs.core._nth.call(null,chunk__43117_43121,i__43119_43123);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43124);

var G__43125 = seq__43116_43120;
var G__43126 = chunk__43117_43121;
var G__43127 = count__43118_43122;
var G__43128 = (i__43119_43123 + (1));
seq__43116_43120 = G__43125;
chunk__43117_43121 = G__43126;
count__43118_43122 = G__43127;
i__43119_43123 = G__43128;
continue;
} else {
var temp__4657__auto___43129 = cljs.core.seq.call(null,seq__43116_43120);
if(temp__4657__auto___43129){
var seq__43116_43130__$1 = temp__4657__auto___43129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43116_43130__$1)){
var c__34525__auto___43131 = cljs.core.chunk_first.call(null,seq__43116_43130__$1);
var G__43132 = cljs.core.chunk_rest.call(null,seq__43116_43130__$1);
var G__43133 = c__34525__auto___43131;
var G__43134 = cljs.core.count.call(null,c__34525__auto___43131);
var G__43135 = (0);
seq__43116_43120 = G__43132;
chunk__43117_43121 = G__43133;
count__43118_43122 = G__43134;
i__43119_43123 = G__43135;
continue;
} else {
var msg_43136 = cljs.core.first.call(null,seq__43116_43130__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43136);

var G__43137 = cljs.core.next.call(null,seq__43116_43130__$1);
var G__43138 = null;
var G__43139 = (0);
var G__43140 = (0);
seq__43116_43120 = G__43137;
chunk__43117_43121 = G__43138;
count__43118_43122 = G__43139;
i__43119_43123 = G__43140;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43141){
var map__43142 = p__43141;
var map__43142__$1 = ((((!((map__43142 == null)))?((((map__43142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43142):map__43142);
var w = map__43142__$1;
var message = cljs.core.get.call(null,map__43142__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__43144 = cljs.core.seq.call(null,plugins);
var chunk__43145 = null;
var count__43146 = (0);
var i__43147 = (0);
while(true){
if((i__43147 < count__43146)){
var vec__43148 = cljs.core._nth.call(null,chunk__43145,i__43147);
var k = cljs.core.nth.call(null,vec__43148,(0),null);
var plugin = cljs.core.nth.call(null,vec__43148,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43154 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43144,chunk__43145,count__43146,i__43147,pl_43154,vec__43148,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43154.call(null,msg_hist);
});})(seq__43144,chunk__43145,count__43146,i__43147,pl_43154,vec__43148,k,plugin))
);
} else {
}

var G__43155 = seq__43144;
var G__43156 = chunk__43145;
var G__43157 = count__43146;
var G__43158 = (i__43147 + (1));
seq__43144 = G__43155;
chunk__43145 = G__43156;
count__43146 = G__43157;
i__43147 = G__43158;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43144);
if(temp__4657__auto__){
var seq__43144__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43144__$1)){
var c__34525__auto__ = cljs.core.chunk_first.call(null,seq__43144__$1);
var G__43159 = cljs.core.chunk_rest.call(null,seq__43144__$1);
var G__43160 = c__34525__auto__;
var G__43161 = cljs.core.count.call(null,c__34525__auto__);
var G__43162 = (0);
seq__43144 = G__43159;
chunk__43145 = G__43160;
count__43146 = G__43161;
i__43147 = G__43162;
continue;
} else {
var vec__43151 = cljs.core.first.call(null,seq__43144__$1);
var k = cljs.core.nth.call(null,vec__43151,(0),null);
var plugin = cljs.core.nth.call(null,vec__43151,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43163 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43144,chunk__43145,count__43146,i__43147,pl_43163,vec__43151,k,plugin,seq__43144__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43163.call(null,msg_hist);
});})(seq__43144,chunk__43145,count__43146,i__43147,pl_43163,vec__43151,k,plugin,seq__43144__$1,temp__4657__auto__))
);
} else {
}

var G__43164 = cljs.core.next.call(null,seq__43144__$1);
var G__43165 = null;
var G__43166 = (0);
var G__43167 = (0);
seq__43144 = G__43164;
chunk__43145 = G__43165;
count__43146 = G__43166;
i__43147 = G__43167;
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
var G__43169 = arguments.length;
switch (G__43169) {
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

var seq__43170_43175 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43171_43176 = null;
var count__43172_43177 = (0);
var i__43173_43178 = (0);
while(true){
if((i__43173_43178 < count__43172_43177)){
var msg_43179 = cljs.core._nth.call(null,chunk__43171_43176,i__43173_43178);
figwheel.client.socket.handle_incoming_message.call(null,msg_43179);

var G__43180 = seq__43170_43175;
var G__43181 = chunk__43171_43176;
var G__43182 = count__43172_43177;
var G__43183 = (i__43173_43178 + (1));
seq__43170_43175 = G__43180;
chunk__43171_43176 = G__43181;
count__43172_43177 = G__43182;
i__43173_43178 = G__43183;
continue;
} else {
var temp__4657__auto___43184 = cljs.core.seq.call(null,seq__43170_43175);
if(temp__4657__auto___43184){
var seq__43170_43185__$1 = temp__4657__auto___43184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43170_43185__$1)){
var c__34525__auto___43186 = cljs.core.chunk_first.call(null,seq__43170_43185__$1);
var G__43187 = cljs.core.chunk_rest.call(null,seq__43170_43185__$1);
var G__43188 = c__34525__auto___43186;
var G__43189 = cljs.core.count.call(null,c__34525__auto___43186);
var G__43190 = (0);
seq__43170_43175 = G__43187;
chunk__43171_43176 = G__43188;
count__43172_43177 = G__43189;
i__43173_43178 = G__43190;
continue;
} else {
var msg_43191 = cljs.core.first.call(null,seq__43170_43185__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43191);

var G__43192 = cljs.core.next.call(null,seq__43170_43185__$1);
var G__43193 = null;
var G__43194 = (0);
var G__43195 = (0);
seq__43170_43175 = G__43192;
chunk__43171_43176 = G__43193;
count__43172_43177 = G__43194;
i__43173_43178 = G__43195;
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
var len__34830__auto___43200 = arguments.length;
var i__34831__auto___43201 = (0);
while(true){
if((i__34831__auto___43201 < len__34830__auto___43200)){
args__34837__auto__.push((arguments[i__34831__auto___43201]));

var G__43202 = (i__34831__auto___43201 + (1));
i__34831__auto___43201 = G__43202;
continue;
} else {
}
break;
}

var argseq__34838__auto__ = ((((0) < args__34837__auto__.length))?(new cljs.core.IndexedSeq(args__34837__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__34838__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43197){
var map__43198 = p__43197;
var map__43198__$1 = ((((!((map__43198 == null)))?((((map__43198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43198):map__43198);
var opts = map__43198__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43196){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43196));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43203){if((e43203 instanceof Error)){
var e = e43203;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43203;

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
return (function (p__43204){
var map__43205 = p__43204;
var map__43205__$1 = ((((!((map__43205 == null)))?((((map__43205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43205):map__43205);
var msg_name = cljs.core.get.call(null,map__43205__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1514096003481