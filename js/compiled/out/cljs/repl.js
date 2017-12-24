// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42439){
var map__42440 = p__42439;
var map__42440__$1 = ((((!((map__42440 == null)))?((((map__42440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42440):map__42440);
var m = map__42440__$1;
var n = cljs.core.get.call(null,map__42440__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42440__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42442_42464 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42443_42465 = null;
var count__42444_42466 = (0);
var i__42445_42467 = (0);
while(true){
if((i__42445_42467 < count__42444_42466)){
var f_42468 = cljs.core._nth.call(null,chunk__42443_42465,i__42445_42467);
cljs.core.println.call(null,"  ",f_42468);

var G__42469 = seq__42442_42464;
var G__42470 = chunk__42443_42465;
var G__42471 = count__42444_42466;
var G__42472 = (i__42445_42467 + (1));
seq__42442_42464 = G__42469;
chunk__42443_42465 = G__42470;
count__42444_42466 = G__42471;
i__42445_42467 = G__42472;
continue;
} else {
var temp__4657__auto___42473 = cljs.core.seq.call(null,seq__42442_42464);
if(temp__4657__auto___42473){
var seq__42442_42474__$1 = temp__4657__auto___42473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42442_42474__$1)){
var c__34525__auto___42475 = cljs.core.chunk_first.call(null,seq__42442_42474__$1);
var G__42476 = cljs.core.chunk_rest.call(null,seq__42442_42474__$1);
var G__42477 = c__34525__auto___42475;
var G__42478 = cljs.core.count.call(null,c__34525__auto___42475);
var G__42479 = (0);
seq__42442_42464 = G__42476;
chunk__42443_42465 = G__42477;
count__42444_42466 = G__42478;
i__42445_42467 = G__42479;
continue;
} else {
var f_42480 = cljs.core.first.call(null,seq__42442_42474__$1);
cljs.core.println.call(null,"  ",f_42480);

var G__42481 = cljs.core.next.call(null,seq__42442_42474__$1);
var G__42482 = null;
var G__42483 = (0);
var G__42484 = (0);
seq__42442_42464 = G__42481;
chunk__42443_42465 = G__42482;
count__42444_42466 = G__42483;
i__42445_42467 = G__42484;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42485 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__33705__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__33705__auto__)){
return or__33705__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42485);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42485)))?cljs.core.second.call(null,arglists_42485):arglists_42485));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42446_42486 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42447_42487 = null;
var count__42448_42488 = (0);
var i__42449_42489 = (0);
while(true){
if((i__42449_42489 < count__42448_42488)){
var vec__42450_42490 = cljs.core._nth.call(null,chunk__42447_42487,i__42449_42489);
var name_42491 = cljs.core.nth.call(null,vec__42450_42490,(0),null);
var map__42453_42492 = cljs.core.nth.call(null,vec__42450_42490,(1),null);
var map__42453_42493__$1 = ((((!((map__42453_42492 == null)))?((((map__42453_42492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42453_42492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42453_42492):map__42453_42492);
var doc_42494 = cljs.core.get.call(null,map__42453_42493__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42495 = cljs.core.get.call(null,map__42453_42493__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42491);

cljs.core.println.call(null," ",arglists_42495);

if(cljs.core.truth_(doc_42494)){
cljs.core.println.call(null," ",doc_42494);
} else {
}

var G__42496 = seq__42446_42486;
var G__42497 = chunk__42447_42487;
var G__42498 = count__42448_42488;
var G__42499 = (i__42449_42489 + (1));
seq__42446_42486 = G__42496;
chunk__42447_42487 = G__42497;
count__42448_42488 = G__42498;
i__42449_42489 = G__42499;
continue;
} else {
var temp__4657__auto___42500 = cljs.core.seq.call(null,seq__42446_42486);
if(temp__4657__auto___42500){
var seq__42446_42501__$1 = temp__4657__auto___42500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42446_42501__$1)){
var c__34525__auto___42502 = cljs.core.chunk_first.call(null,seq__42446_42501__$1);
var G__42503 = cljs.core.chunk_rest.call(null,seq__42446_42501__$1);
var G__42504 = c__34525__auto___42502;
var G__42505 = cljs.core.count.call(null,c__34525__auto___42502);
var G__42506 = (0);
seq__42446_42486 = G__42503;
chunk__42447_42487 = G__42504;
count__42448_42488 = G__42505;
i__42449_42489 = G__42506;
continue;
} else {
var vec__42455_42507 = cljs.core.first.call(null,seq__42446_42501__$1);
var name_42508 = cljs.core.nth.call(null,vec__42455_42507,(0),null);
var map__42458_42509 = cljs.core.nth.call(null,vec__42455_42507,(1),null);
var map__42458_42510__$1 = ((((!((map__42458_42509 == null)))?((((map__42458_42509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42458_42509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42458_42509):map__42458_42509);
var doc_42511 = cljs.core.get.call(null,map__42458_42510__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42512 = cljs.core.get.call(null,map__42458_42510__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42508);

cljs.core.println.call(null," ",arglists_42512);

if(cljs.core.truth_(doc_42511)){
cljs.core.println.call(null," ",doc_42511);
} else {
}

var G__42513 = cljs.core.next.call(null,seq__42446_42501__$1);
var G__42514 = null;
var G__42515 = (0);
var G__42516 = (0);
seq__42446_42486 = G__42513;
chunk__42447_42487 = G__42514;
count__42448_42488 = G__42515;
i__42449_42489 = G__42516;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__42460 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42461 = null;
var count__42462 = (0);
var i__42463 = (0);
while(true){
if((i__42463 < count__42462)){
var role = cljs.core._nth.call(null,chunk__42461,i__42463);
var temp__4657__auto___42517__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42517__$1)){
var spec_42518 = temp__4657__auto___42517__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_42518));
} else {
}

var G__42519 = seq__42460;
var G__42520 = chunk__42461;
var G__42521 = count__42462;
var G__42522 = (i__42463 + (1));
seq__42460 = G__42519;
chunk__42461 = G__42520;
count__42462 = G__42521;
i__42463 = G__42522;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__42460);
if(temp__4657__auto____$1){
var seq__42460__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42460__$1)){
var c__34525__auto__ = cljs.core.chunk_first.call(null,seq__42460__$1);
var G__42523 = cljs.core.chunk_rest.call(null,seq__42460__$1);
var G__42524 = c__34525__auto__;
var G__42525 = cljs.core.count.call(null,c__34525__auto__);
var G__42526 = (0);
seq__42460 = G__42523;
chunk__42461 = G__42524;
count__42462 = G__42525;
i__42463 = G__42526;
continue;
} else {
var role = cljs.core.first.call(null,seq__42460__$1);
var temp__4657__auto___42527__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42527__$2)){
var spec_42528 = temp__4657__auto___42527__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_42528));
} else {
}

var G__42529 = cljs.core.next.call(null,seq__42460__$1);
var G__42530 = null;
var G__42531 = (0);
var G__42532 = (0);
seq__42460 = G__42529;
chunk__42461 = G__42530;
count__42462 = G__42531;
i__42463 = G__42532;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1514096002955