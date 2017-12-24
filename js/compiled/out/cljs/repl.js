// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51029){
var map__51030 = p__51029;
var map__51030__$1 = ((((!((map__51030 == null)))?((((map__51030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51030):map__51030);
var m = map__51030__$1;
var n = cljs.core.get.call(null,map__51030__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51030__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__51032_51054 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51033_51055 = null;
var count__51034_51056 = (0);
var i__51035_51057 = (0);
while(true){
if((i__51035_51057 < count__51034_51056)){
var f_51058 = cljs.core._nth.call(null,chunk__51033_51055,i__51035_51057);
cljs.core.println.call(null,"  ",f_51058);

var G__51059 = seq__51032_51054;
var G__51060 = chunk__51033_51055;
var G__51061 = count__51034_51056;
var G__51062 = (i__51035_51057 + (1));
seq__51032_51054 = G__51059;
chunk__51033_51055 = G__51060;
count__51034_51056 = G__51061;
i__51035_51057 = G__51062;
continue;
} else {
var temp__4657__auto___51063 = cljs.core.seq.call(null,seq__51032_51054);
if(temp__4657__auto___51063){
var seq__51032_51064__$1 = temp__4657__auto___51063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51032_51064__$1)){
var c__34525__auto___51065 = cljs.core.chunk_first.call(null,seq__51032_51064__$1);
var G__51066 = cljs.core.chunk_rest.call(null,seq__51032_51064__$1);
var G__51067 = c__34525__auto___51065;
var G__51068 = cljs.core.count.call(null,c__34525__auto___51065);
var G__51069 = (0);
seq__51032_51054 = G__51066;
chunk__51033_51055 = G__51067;
count__51034_51056 = G__51068;
i__51035_51057 = G__51069;
continue;
} else {
var f_51070 = cljs.core.first.call(null,seq__51032_51064__$1);
cljs.core.println.call(null,"  ",f_51070);

var G__51071 = cljs.core.next.call(null,seq__51032_51064__$1);
var G__51072 = null;
var G__51073 = (0);
var G__51074 = (0);
seq__51032_51054 = G__51071;
chunk__51033_51055 = G__51072;
count__51034_51056 = G__51073;
i__51035_51057 = G__51074;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51075 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__33705__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__33705__auto__)){
return or__33705__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51075);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51075)))?cljs.core.second.call(null,arglists_51075):arglists_51075));
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
var seq__51036_51076 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51037_51077 = null;
var count__51038_51078 = (0);
var i__51039_51079 = (0);
while(true){
if((i__51039_51079 < count__51038_51078)){
var vec__51040_51080 = cljs.core._nth.call(null,chunk__51037_51077,i__51039_51079);
var name_51081 = cljs.core.nth.call(null,vec__51040_51080,(0),null);
var map__51043_51082 = cljs.core.nth.call(null,vec__51040_51080,(1),null);
var map__51043_51083__$1 = ((((!((map__51043_51082 == null)))?((((map__51043_51082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51043_51082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51043_51082):map__51043_51082);
var doc_51084 = cljs.core.get.call(null,map__51043_51083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51085 = cljs.core.get.call(null,map__51043_51083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51081);

cljs.core.println.call(null," ",arglists_51085);

if(cljs.core.truth_(doc_51084)){
cljs.core.println.call(null," ",doc_51084);
} else {
}

var G__51086 = seq__51036_51076;
var G__51087 = chunk__51037_51077;
var G__51088 = count__51038_51078;
var G__51089 = (i__51039_51079 + (1));
seq__51036_51076 = G__51086;
chunk__51037_51077 = G__51087;
count__51038_51078 = G__51088;
i__51039_51079 = G__51089;
continue;
} else {
var temp__4657__auto___51090 = cljs.core.seq.call(null,seq__51036_51076);
if(temp__4657__auto___51090){
var seq__51036_51091__$1 = temp__4657__auto___51090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51036_51091__$1)){
var c__34525__auto___51092 = cljs.core.chunk_first.call(null,seq__51036_51091__$1);
var G__51093 = cljs.core.chunk_rest.call(null,seq__51036_51091__$1);
var G__51094 = c__34525__auto___51092;
var G__51095 = cljs.core.count.call(null,c__34525__auto___51092);
var G__51096 = (0);
seq__51036_51076 = G__51093;
chunk__51037_51077 = G__51094;
count__51038_51078 = G__51095;
i__51039_51079 = G__51096;
continue;
} else {
var vec__51045_51097 = cljs.core.first.call(null,seq__51036_51091__$1);
var name_51098 = cljs.core.nth.call(null,vec__51045_51097,(0),null);
var map__51048_51099 = cljs.core.nth.call(null,vec__51045_51097,(1),null);
var map__51048_51100__$1 = ((((!((map__51048_51099 == null)))?((((map__51048_51099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51048_51099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51048_51099):map__51048_51099);
var doc_51101 = cljs.core.get.call(null,map__51048_51100__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51102 = cljs.core.get.call(null,map__51048_51100__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51098);

cljs.core.println.call(null," ",arglists_51102);

if(cljs.core.truth_(doc_51101)){
cljs.core.println.call(null," ",doc_51101);
} else {
}

var G__51103 = cljs.core.next.call(null,seq__51036_51091__$1);
var G__51104 = null;
var G__51105 = (0);
var G__51106 = (0);
seq__51036_51076 = G__51103;
chunk__51037_51077 = G__51104;
count__51038_51078 = G__51105;
i__51039_51079 = G__51106;
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

var seq__51050 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51051 = null;
var count__51052 = (0);
var i__51053 = (0);
while(true){
if((i__51053 < count__51052)){
var role = cljs.core._nth.call(null,chunk__51051,i__51053);
var temp__4657__auto___51107__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51107__$1)){
var spec_51108 = temp__4657__auto___51107__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_51108));
} else {
}

var G__51109 = seq__51050;
var G__51110 = chunk__51051;
var G__51111 = count__51052;
var G__51112 = (i__51053 + (1));
seq__51050 = G__51109;
chunk__51051 = G__51110;
count__51052 = G__51111;
i__51053 = G__51112;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__51050);
if(temp__4657__auto____$1){
var seq__51050__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51050__$1)){
var c__34525__auto__ = cljs.core.chunk_first.call(null,seq__51050__$1);
var G__51113 = cljs.core.chunk_rest.call(null,seq__51050__$1);
var G__51114 = c__34525__auto__;
var G__51115 = cljs.core.count.call(null,c__34525__auto__);
var G__51116 = (0);
seq__51050 = G__51113;
chunk__51051 = G__51114;
count__51052 = G__51115;
i__51053 = G__51116;
continue;
} else {
var role = cljs.core.first.call(null,seq__51050__$1);
var temp__4657__auto___51117__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51117__$2)){
var spec_51118 = temp__4657__auto___51117__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_51118));
} else {
}

var G__51119 = cljs.core.next.call(null,seq__51050__$1);
var G__51120 = null;
var G__51121 = (0);
var G__51122 = (0);
seq__51050 = G__51119;
chunk__51051 = G__51120;
count__51052 = G__51121;
i__51053 = G__51122;
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

//# sourceMappingURL=repl.js.map?rel=1514142719332