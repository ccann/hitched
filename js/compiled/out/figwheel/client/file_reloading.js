// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__33705__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__33705__auto__){
return or__33705__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__33705__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__33705__auto__)){
return or__33705__auto__;
} else {
var or__33705__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__33705__auto____$1)){
return or__33705__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41022_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41022_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41023 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41024 = null;
var count__41025 = (0);
var i__41026 = (0);
while(true){
if((i__41026 < count__41025)){
var n = cljs.core._nth.call(null,chunk__41024,i__41026);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41027 = seq__41023;
var G__41028 = chunk__41024;
var G__41029 = count__41025;
var G__41030 = (i__41026 + (1));
seq__41023 = G__41027;
chunk__41024 = G__41028;
count__41025 = G__41029;
i__41026 = G__41030;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41023);
if(temp__4657__auto__){
var seq__41023__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41023__$1)){
var c__34525__auto__ = cljs.core.chunk_first.call(null,seq__41023__$1);
var G__41031 = cljs.core.chunk_rest.call(null,seq__41023__$1);
var G__41032 = c__34525__auto__;
var G__41033 = cljs.core.count.call(null,c__34525__auto__);
var G__41034 = (0);
seq__41023 = G__41031;
chunk__41024 = G__41032;
count__41025 = G__41033;
i__41026 = G__41034;
continue;
} else {
var n = cljs.core.first.call(null,seq__41023__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41035 = cljs.core.next.call(null,seq__41023__$1);
var G__41036 = null;
var G__41037 = (0);
var G__41038 = (0);
seq__41023 = G__41035;
chunk__41024 = G__41036;
count__41025 = G__41037;
i__41026 = G__41038;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41048_41056 = cljs.core.seq.call(null,deps);
var chunk__41049_41057 = null;
var count__41050_41058 = (0);
var i__41051_41059 = (0);
while(true){
if((i__41051_41059 < count__41050_41058)){
var dep_41060 = cljs.core._nth.call(null,chunk__41049_41057,i__41051_41059);
topo_sort_helper_STAR_.call(null,dep_41060,(depth + (1)),state);

var G__41061 = seq__41048_41056;
var G__41062 = chunk__41049_41057;
var G__41063 = count__41050_41058;
var G__41064 = (i__41051_41059 + (1));
seq__41048_41056 = G__41061;
chunk__41049_41057 = G__41062;
count__41050_41058 = G__41063;
i__41051_41059 = G__41064;
continue;
} else {
var temp__4657__auto___41065 = cljs.core.seq.call(null,seq__41048_41056);
if(temp__4657__auto___41065){
var seq__41048_41066__$1 = temp__4657__auto___41065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41048_41066__$1)){
var c__34525__auto___41067 = cljs.core.chunk_first.call(null,seq__41048_41066__$1);
var G__41068 = cljs.core.chunk_rest.call(null,seq__41048_41066__$1);
var G__41069 = c__34525__auto___41067;
var G__41070 = cljs.core.count.call(null,c__34525__auto___41067);
var G__41071 = (0);
seq__41048_41056 = G__41068;
chunk__41049_41057 = G__41069;
count__41050_41058 = G__41070;
i__41051_41059 = G__41071;
continue;
} else {
var dep_41072 = cljs.core.first.call(null,seq__41048_41066__$1);
topo_sort_helper_STAR_.call(null,dep_41072,(depth + (1)),state);

var G__41073 = cljs.core.next.call(null,seq__41048_41066__$1);
var G__41074 = null;
var G__41075 = (0);
var G__41076 = (0);
seq__41048_41056 = G__41073;
chunk__41049_41057 = G__41074;
count__41050_41058 = G__41075;
i__41051_41059 = G__41076;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41052){
var vec__41053 = p__41052;
var seq__41054 = cljs.core.seq.call(null,vec__41053);
var first__41055 = cljs.core.first.call(null,seq__41054);
var seq__41054__$1 = cljs.core.next.call(null,seq__41054);
var x = first__41055;
var xs = seq__41054__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41053,seq__41054,first__41055,seq__41054__$1,x,xs,get_deps__$1){
return (function (p1__41039_SHARP_){
return clojure.set.difference.call(null,p1__41039_SHARP_,x);
});})(vec__41053,seq__41054,first__41055,seq__41054__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41077 = cljs.core.seq.call(null,provides);
var chunk__41078 = null;
var count__41079 = (0);
var i__41080 = (0);
while(true){
if((i__41080 < count__41079)){
var prov = cljs.core._nth.call(null,chunk__41078,i__41080);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41081_41089 = cljs.core.seq.call(null,requires);
var chunk__41082_41090 = null;
var count__41083_41091 = (0);
var i__41084_41092 = (0);
while(true){
if((i__41084_41092 < count__41083_41091)){
var req_41093 = cljs.core._nth.call(null,chunk__41082_41090,i__41084_41092);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41093,prov);

var G__41094 = seq__41081_41089;
var G__41095 = chunk__41082_41090;
var G__41096 = count__41083_41091;
var G__41097 = (i__41084_41092 + (1));
seq__41081_41089 = G__41094;
chunk__41082_41090 = G__41095;
count__41083_41091 = G__41096;
i__41084_41092 = G__41097;
continue;
} else {
var temp__4657__auto___41098 = cljs.core.seq.call(null,seq__41081_41089);
if(temp__4657__auto___41098){
var seq__41081_41099__$1 = temp__4657__auto___41098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41081_41099__$1)){
var c__34525__auto___41100 = cljs.core.chunk_first.call(null,seq__41081_41099__$1);
var G__41101 = cljs.core.chunk_rest.call(null,seq__41081_41099__$1);
var G__41102 = c__34525__auto___41100;
var G__41103 = cljs.core.count.call(null,c__34525__auto___41100);
var G__41104 = (0);
seq__41081_41089 = G__41101;
chunk__41082_41090 = G__41102;
count__41083_41091 = G__41103;
i__41084_41092 = G__41104;
continue;
} else {
var req_41105 = cljs.core.first.call(null,seq__41081_41099__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41105,prov);

var G__41106 = cljs.core.next.call(null,seq__41081_41099__$1);
var G__41107 = null;
var G__41108 = (0);
var G__41109 = (0);
seq__41081_41089 = G__41106;
chunk__41082_41090 = G__41107;
count__41083_41091 = G__41108;
i__41084_41092 = G__41109;
continue;
}
} else {
}
}
break;
}

var G__41110 = seq__41077;
var G__41111 = chunk__41078;
var G__41112 = count__41079;
var G__41113 = (i__41080 + (1));
seq__41077 = G__41110;
chunk__41078 = G__41111;
count__41079 = G__41112;
i__41080 = G__41113;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41077);
if(temp__4657__auto__){
var seq__41077__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41077__$1)){
var c__34525__auto__ = cljs.core.chunk_first.call(null,seq__41077__$1);
var G__41114 = cljs.core.chunk_rest.call(null,seq__41077__$1);
var G__41115 = c__34525__auto__;
var G__41116 = cljs.core.count.call(null,c__34525__auto__);
var G__41117 = (0);
seq__41077 = G__41114;
chunk__41078 = G__41115;
count__41079 = G__41116;
i__41080 = G__41117;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41077__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41085_41118 = cljs.core.seq.call(null,requires);
var chunk__41086_41119 = null;
var count__41087_41120 = (0);
var i__41088_41121 = (0);
while(true){
if((i__41088_41121 < count__41087_41120)){
var req_41122 = cljs.core._nth.call(null,chunk__41086_41119,i__41088_41121);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41122,prov);

var G__41123 = seq__41085_41118;
var G__41124 = chunk__41086_41119;
var G__41125 = count__41087_41120;
var G__41126 = (i__41088_41121 + (1));
seq__41085_41118 = G__41123;
chunk__41086_41119 = G__41124;
count__41087_41120 = G__41125;
i__41088_41121 = G__41126;
continue;
} else {
var temp__4657__auto___41127__$1 = cljs.core.seq.call(null,seq__41085_41118);
if(temp__4657__auto___41127__$1){
var seq__41085_41128__$1 = temp__4657__auto___41127__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41085_41128__$1)){
var c__34525__auto___41129 = cljs.core.chunk_first.call(null,seq__41085_41128__$1);
var G__41130 = cljs.core.chunk_rest.call(null,seq__41085_41128__$1);
var G__41131 = c__34525__auto___41129;
var G__41132 = cljs.core.count.call(null,c__34525__auto___41129);
var G__41133 = (0);
seq__41085_41118 = G__41130;
chunk__41086_41119 = G__41131;
count__41087_41120 = G__41132;
i__41088_41121 = G__41133;
continue;
} else {
var req_41134 = cljs.core.first.call(null,seq__41085_41128__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41134,prov);

var G__41135 = cljs.core.next.call(null,seq__41085_41128__$1);
var G__41136 = null;
var G__41137 = (0);
var G__41138 = (0);
seq__41085_41118 = G__41135;
chunk__41086_41119 = G__41136;
count__41087_41120 = G__41137;
i__41088_41121 = G__41138;
continue;
}
} else {
}
}
break;
}

var G__41139 = cljs.core.next.call(null,seq__41077__$1);
var G__41140 = null;
var G__41141 = (0);
var G__41142 = (0);
seq__41077 = G__41139;
chunk__41078 = G__41140;
count__41079 = G__41141;
i__41080 = G__41142;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41143_41147 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41144_41148 = null;
var count__41145_41149 = (0);
var i__41146_41150 = (0);
while(true){
if((i__41146_41150 < count__41145_41149)){
var ns_41151 = cljs.core._nth.call(null,chunk__41144_41148,i__41146_41150);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41151);

var G__41152 = seq__41143_41147;
var G__41153 = chunk__41144_41148;
var G__41154 = count__41145_41149;
var G__41155 = (i__41146_41150 + (1));
seq__41143_41147 = G__41152;
chunk__41144_41148 = G__41153;
count__41145_41149 = G__41154;
i__41146_41150 = G__41155;
continue;
} else {
var temp__4657__auto___41156 = cljs.core.seq.call(null,seq__41143_41147);
if(temp__4657__auto___41156){
var seq__41143_41157__$1 = temp__4657__auto___41156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41143_41157__$1)){
var c__34525__auto___41158 = cljs.core.chunk_first.call(null,seq__41143_41157__$1);
var G__41159 = cljs.core.chunk_rest.call(null,seq__41143_41157__$1);
var G__41160 = c__34525__auto___41158;
var G__41161 = cljs.core.count.call(null,c__34525__auto___41158);
var G__41162 = (0);
seq__41143_41147 = G__41159;
chunk__41144_41148 = G__41160;
count__41145_41149 = G__41161;
i__41146_41150 = G__41162;
continue;
} else {
var ns_41163 = cljs.core.first.call(null,seq__41143_41157__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41163);

var G__41164 = cljs.core.next.call(null,seq__41143_41157__$1);
var G__41165 = null;
var G__41166 = (0);
var G__41167 = (0);
seq__41143_41147 = G__41164;
chunk__41144_41148 = G__41165;
count__41145_41149 = G__41166;
i__41146_41150 = G__41167;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__33705__auto__ = goog.require__;
if(cljs.core.truth_(or__33705__auto__)){
return or__33705__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__41168__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41169__i = 0, G__41169__a = new Array(arguments.length -  0);
while (G__41169__i < G__41169__a.length) {G__41169__a[G__41169__i] = arguments[G__41169__i + 0]; ++G__41169__i;}
  args = new cljs.core.IndexedSeq(G__41169__a,0,null);
} 
return G__41168__delegate.call(this,args);};
G__41168.cljs$lang$maxFixedArity = 0;
G__41168.cljs$lang$applyTo = (function (arglist__41170){
var args = cljs.core.seq(arglist__41170);
return G__41168__delegate(args);
});
G__41168.cljs$core$IFn$_invoke$arity$variadic = G__41168__delegate;
return G__41168;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41171 = cljs.core._EQ_;
var expr__41172 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41171.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41172))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__41171,expr__41172){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__41171,expr__41172))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__41171,expr__41172){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41174){if((e41174 instanceof Error)){
var e = e41174;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41174;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__41171,expr__41172))
} else {
if(cljs.core.truth_(pred__41171.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41172))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__41171.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__41172))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__41171.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__41172))){
return ((function (pred__41171,expr__41172){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41175){if((e41175 instanceof Error)){
var e = e41175;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41175;

}
}})());
});
;})(pred__41171,expr__41172))
} else {
return ((function (pred__41171,expr__41172){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41171,expr__41172))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41176,callback){
var map__41177 = p__41176;
var map__41177__$1 = ((((!((map__41177 == null)))?((((map__41177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41177):map__41177);
var file_msg = map__41177__$1;
var request_url = cljs.core.get.call(null,map__41177__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41177,map__41177__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41177,map__41177__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__){
return (function (state_41201){
var state_val_41202 = (state_41201[(1)]);
if((state_val_41202 === (7))){
var inst_41197 = (state_41201[(2)]);
var state_41201__$1 = state_41201;
var statearr_41203_41220 = state_41201__$1;
(statearr_41203_41220[(2)] = inst_41197);

(statearr_41203_41220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (1))){
var state_41201__$1 = state_41201;
var statearr_41204_41221 = state_41201__$1;
(statearr_41204_41221[(2)] = null);

(statearr_41204_41221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (4))){
var inst_41181 = (state_41201[(7)]);
var inst_41181__$1 = (state_41201[(2)]);
var state_41201__$1 = (function (){var statearr_41205 = state_41201;
(statearr_41205[(7)] = inst_41181__$1);

return statearr_41205;
})();
if(cljs.core.truth_(inst_41181__$1)){
var statearr_41206_41222 = state_41201__$1;
(statearr_41206_41222[(1)] = (5));

} else {
var statearr_41207_41223 = state_41201__$1;
(statearr_41207_41223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (6))){
var state_41201__$1 = state_41201;
var statearr_41208_41224 = state_41201__$1;
(statearr_41208_41224[(2)] = null);

(statearr_41208_41224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (3))){
var inst_41199 = (state_41201[(2)]);
var state_41201__$1 = state_41201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41201__$1,inst_41199);
} else {
if((state_val_41202 === (2))){
var state_41201__$1 = state_41201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41201__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41202 === (11))){
var inst_41193 = (state_41201[(2)]);
var state_41201__$1 = (function (){var statearr_41209 = state_41201;
(statearr_41209[(8)] = inst_41193);

return statearr_41209;
})();
var statearr_41210_41225 = state_41201__$1;
(statearr_41210_41225[(2)] = null);

(statearr_41210_41225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (9))){
var inst_41187 = (state_41201[(9)]);
var inst_41185 = (state_41201[(10)]);
var inst_41189 = inst_41187.call(null,inst_41185);
var state_41201__$1 = state_41201;
var statearr_41211_41226 = state_41201__$1;
(statearr_41211_41226[(2)] = inst_41189);

(statearr_41211_41226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (5))){
var inst_41181 = (state_41201[(7)]);
var inst_41183 = figwheel.client.file_reloading.blocking_load.call(null,inst_41181);
var state_41201__$1 = state_41201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41201__$1,(8),inst_41183);
} else {
if((state_val_41202 === (10))){
var inst_41185 = (state_41201[(10)]);
var inst_41191 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41185);
var state_41201__$1 = state_41201;
var statearr_41212_41227 = state_41201__$1;
(statearr_41212_41227[(2)] = inst_41191);

(statearr_41212_41227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (8))){
var inst_41181 = (state_41201[(7)]);
var inst_41187 = (state_41201[(9)]);
var inst_41185 = (state_41201[(2)]);
var inst_41186 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41187__$1 = cljs.core.get.call(null,inst_41186,inst_41181);
var state_41201__$1 = (function (){var statearr_41213 = state_41201;
(statearr_41213[(9)] = inst_41187__$1);

(statearr_41213[(10)] = inst_41185);

return statearr_41213;
})();
if(cljs.core.truth_(inst_41187__$1)){
var statearr_41214_41228 = state_41201__$1;
(statearr_41214_41228[(1)] = (9));

} else {
var statearr_41215_41229 = state_41201__$1;
(statearr_41215_41229[(1)] = (10));

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
});})(c__37825__auto__))
;
return ((function (switch__37737__auto__,c__37825__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37738__auto__ = null;
var figwheel$client$file_reloading$state_machine__37738__auto____0 = (function (){
var statearr_41216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41216[(0)] = figwheel$client$file_reloading$state_machine__37738__auto__);

(statearr_41216[(1)] = (1));

return statearr_41216;
});
var figwheel$client$file_reloading$state_machine__37738__auto____1 = (function (state_41201){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_41201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e41217){if((e41217 instanceof Object)){
var ex__37741__auto__ = e41217;
var statearr_41218_41230 = state_41201;
(statearr_41218_41230[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41231 = state_41201;
state_41201 = G__41231;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37738__auto__ = function(state_41201){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37738__auto____1.call(this,state_41201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37738__auto____0;
figwheel$client$file_reloading$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37738__auto____1;
return figwheel$client$file_reloading$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__))
})();
var state__37827__auto__ = (function (){var statearr_41219 = f__37826__auto__.call(null);
(statearr_41219[(6)] = c__37825__auto__);

return statearr_41219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__))
);

return c__37825__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41232,callback){
var map__41233 = p__41232;
var map__41233__$1 = ((((!((map__41233 == null)))?((((map__41233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41233):map__41233);
var file_msg = map__41233__$1;
var namespace = cljs.core.get.call(null,map__41233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41233,map__41233__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41233,map__41233__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41235){
var map__41236 = p__41235;
var map__41236__$1 = ((((!((map__41236 == null)))?((((map__41236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41236):map__41236);
var file_msg = map__41236__$1;
var namespace = cljs.core.get.call(null,map__41236__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41238){
var map__41239 = p__41238;
var map__41239__$1 = ((((!((map__41239 == null)))?((((map__41239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41239):map__41239);
var file_msg = map__41239__$1;
var namespace = cljs.core.get.call(null,map__41239__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__33693__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__33693__auto__){
var or__33705__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__33705__auto__)){
return or__33705__auto__;
} else {
var or__33705__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__33705__auto____$1)){
return or__33705__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__33693__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41241,callback){
var map__41242 = p__41241;
var map__41242__$1 = ((((!((map__41242 == null)))?((((map__41242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41242):map__41242);
var file_msg = map__41242__$1;
var request_url = cljs.core.get.call(null,map__41242__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41242__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__37825__auto___41292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___41292,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___41292,out){
return (function (state_41277){
var state_val_41278 = (state_41277[(1)]);
if((state_val_41278 === (1))){
var inst_41251 = cljs.core.seq.call(null,files);
var inst_41252 = cljs.core.first.call(null,inst_41251);
var inst_41253 = cljs.core.next.call(null,inst_41251);
var inst_41254 = files;
var state_41277__$1 = (function (){var statearr_41279 = state_41277;
(statearr_41279[(7)] = inst_41252);

(statearr_41279[(8)] = inst_41254);

(statearr_41279[(9)] = inst_41253);

return statearr_41279;
})();
var statearr_41280_41293 = state_41277__$1;
(statearr_41280_41293[(2)] = null);

(statearr_41280_41293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (2))){
var inst_41260 = (state_41277[(10)]);
var inst_41254 = (state_41277[(8)]);
var inst_41259 = cljs.core.seq.call(null,inst_41254);
var inst_41260__$1 = cljs.core.first.call(null,inst_41259);
var inst_41261 = cljs.core.next.call(null,inst_41259);
var inst_41262 = (inst_41260__$1 == null);
var inst_41263 = cljs.core.not.call(null,inst_41262);
var state_41277__$1 = (function (){var statearr_41281 = state_41277;
(statearr_41281[(10)] = inst_41260__$1);

(statearr_41281[(11)] = inst_41261);

return statearr_41281;
})();
if(inst_41263){
var statearr_41282_41294 = state_41277__$1;
(statearr_41282_41294[(1)] = (4));

} else {
var statearr_41283_41295 = state_41277__$1;
(statearr_41283_41295[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (3))){
var inst_41275 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41277__$1,inst_41275);
} else {
if((state_val_41278 === (4))){
var inst_41260 = (state_41277[(10)]);
var inst_41265 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41260);
var state_41277__$1 = state_41277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41277__$1,(7),inst_41265);
} else {
if((state_val_41278 === (5))){
var inst_41271 = cljs.core.async.close_BANG_.call(null,out);
var state_41277__$1 = state_41277;
var statearr_41284_41296 = state_41277__$1;
(statearr_41284_41296[(2)] = inst_41271);

(statearr_41284_41296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (6))){
var inst_41273 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
var statearr_41285_41297 = state_41277__$1;
(statearr_41285_41297[(2)] = inst_41273);

(statearr_41285_41297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (7))){
var inst_41261 = (state_41277[(11)]);
var inst_41267 = (state_41277[(2)]);
var inst_41268 = cljs.core.async.put_BANG_.call(null,out,inst_41267);
var inst_41254 = inst_41261;
var state_41277__$1 = (function (){var statearr_41286 = state_41277;
(statearr_41286[(8)] = inst_41254);

(statearr_41286[(12)] = inst_41268);

return statearr_41286;
})();
var statearr_41287_41298 = state_41277__$1;
(statearr_41287_41298[(2)] = null);

(statearr_41287_41298[(1)] = (2));


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
});})(c__37825__auto___41292,out))
;
return ((function (switch__37737__auto__,c__37825__auto___41292,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____0 = (function (){
var statearr_41288 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41288[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__);

(statearr_41288[(1)] = (1));

return statearr_41288;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____1 = (function (state_41277){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_41277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e41289){if((e41289 instanceof Object)){
var ex__37741__auto__ = e41289;
var statearr_41290_41299 = state_41277;
(statearr_41290_41299[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41300 = state_41277;
state_41277 = G__41300;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__ = function(state_41277){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____1.call(this,state_41277);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___41292,out))
})();
var state__37827__auto__ = (function (){var statearr_41291 = f__37826__auto__.call(null);
(statearr_41291[(6)] = c__37825__auto___41292);

return statearr_41291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___41292,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41301,opts){
var map__41302 = p__41301;
var map__41302__$1 = ((((!((map__41302 == null)))?((((map__41302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41302):map__41302);
var eval_body = cljs.core.get.call(null,map__41302__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41302__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__33693__auto__ = eval_body;
if(cljs.core.truth_(and__33693__auto__)){
return typeof eval_body === 'string';
} else {
return and__33693__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41304){var e = e41304;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41305_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41305_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41306){
var vec__41307 = p__41306;
var k = cljs.core.nth.call(null,vec__41307,(0),null);
var v = cljs.core.nth.call(null,vec__41307,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41310){
var vec__41311 = p__41310;
var k = cljs.core.nth.call(null,vec__41311,(0),null);
var v = cljs.core.nth.call(null,vec__41311,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41317,p__41318){
var map__41319 = p__41317;
var map__41319__$1 = ((((!((map__41319 == null)))?((((map__41319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41319):map__41319);
var opts = map__41319__$1;
var before_jsload = cljs.core.get.call(null,map__41319__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41319__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41319__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41320 = p__41318;
var map__41320__$1 = ((((!((map__41320 == null)))?((((map__41320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41320):map__41320);
var msg = map__41320__$1;
var files = cljs.core.get.call(null,map__41320__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41320__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41320__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41474){
var state_val_41475 = (state_41474[(1)]);
if((state_val_41475 === (7))){
var inst_41336 = (state_41474[(7)]);
var inst_41335 = (state_41474[(8)]);
var inst_41337 = (state_41474[(9)]);
var inst_41334 = (state_41474[(10)]);
var inst_41342 = cljs.core._nth.call(null,inst_41335,inst_41337);
var inst_41343 = figwheel.client.file_reloading.eval_body.call(null,inst_41342,opts);
var inst_41344 = (inst_41337 + (1));
var tmp41476 = inst_41336;
var tmp41477 = inst_41335;
var tmp41478 = inst_41334;
var inst_41334__$1 = tmp41478;
var inst_41335__$1 = tmp41477;
var inst_41336__$1 = tmp41476;
var inst_41337__$1 = inst_41344;
var state_41474__$1 = (function (){var statearr_41479 = state_41474;
(statearr_41479[(7)] = inst_41336__$1);

(statearr_41479[(8)] = inst_41335__$1);

(statearr_41479[(9)] = inst_41337__$1);

(statearr_41479[(10)] = inst_41334__$1);

(statearr_41479[(11)] = inst_41343);

return statearr_41479;
})();
var statearr_41480_41563 = state_41474__$1;
(statearr_41480_41563[(2)] = null);

(statearr_41480_41563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (20))){
var inst_41377 = (state_41474[(12)]);
var inst_41385 = figwheel.client.file_reloading.sort_files.call(null,inst_41377);
var state_41474__$1 = state_41474;
var statearr_41481_41564 = state_41474__$1;
(statearr_41481_41564[(2)] = inst_41385);

(statearr_41481_41564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (27))){
var state_41474__$1 = state_41474;
var statearr_41482_41565 = state_41474__$1;
(statearr_41482_41565[(2)] = null);

(statearr_41482_41565[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (1))){
var inst_41326 = (state_41474[(13)]);
var inst_41323 = before_jsload.call(null,files);
var inst_41324 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41325 = (function (){return ((function (inst_41326,inst_41323,inst_41324,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41314_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41314_SHARP_);
});
;})(inst_41326,inst_41323,inst_41324,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41326__$1 = cljs.core.filter.call(null,inst_41325,files);
var inst_41327 = cljs.core.not_empty.call(null,inst_41326__$1);
var state_41474__$1 = (function (){var statearr_41483 = state_41474;
(statearr_41483[(13)] = inst_41326__$1);

(statearr_41483[(14)] = inst_41323);

(statearr_41483[(15)] = inst_41324);

return statearr_41483;
})();
if(cljs.core.truth_(inst_41327)){
var statearr_41484_41566 = state_41474__$1;
(statearr_41484_41566[(1)] = (2));

} else {
var statearr_41485_41567 = state_41474__$1;
(statearr_41485_41567[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (24))){
var state_41474__$1 = state_41474;
var statearr_41486_41568 = state_41474__$1;
(statearr_41486_41568[(2)] = null);

(statearr_41486_41568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (39))){
var inst_41427 = (state_41474[(16)]);
var state_41474__$1 = state_41474;
var statearr_41487_41569 = state_41474__$1;
(statearr_41487_41569[(2)] = inst_41427);

(statearr_41487_41569[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (46))){
var inst_41469 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
var statearr_41488_41570 = state_41474__$1;
(statearr_41488_41570[(2)] = inst_41469);

(statearr_41488_41570[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (4))){
var inst_41371 = (state_41474[(2)]);
var inst_41372 = cljs.core.List.EMPTY;
var inst_41373 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41372);
var inst_41374 = (function (){return ((function (inst_41371,inst_41372,inst_41373,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41315_SHARP_){
var and__33693__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41315_SHARP_);
if(cljs.core.truth_(and__33693__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41315_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41315_SHARP_)));
} else {
return and__33693__auto__;
}
});
;})(inst_41371,inst_41372,inst_41373,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41375 = cljs.core.filter.call(null,inst_41374,files);
var inst_41376 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41377 = cljs.core.concat.call(null,inst_41375,inst_41376);
var state_41474__$1 = (function (){var statearr_41489 = state_41474;
(statearr_41489[(17)] = inst_41373);

(statearr_41489[(18)] = inst_41371);

(statearr_41489[(12)] = inst_41377);

return statearr_41489;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41490_41571 = state_41474__$1;
(statearr_41490_41571[(1)] = (16));

} else {
var statearr_41491_41572 = state_41474__$1;
(statearr_41491_41572[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (15))){
var inst_41361 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
var statearr_41492_41573 = state_41474__$1;
(statearr_41492_41573[(2)] = inst_41361);

(statearr_41492_41573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (21))){
var inst_41387 = (state_41474[(19)]);
var inst_41387__$1 = (state_41474[(2)]);
var inst_41388 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41387__$1);
var state_41474__$1 = (function (){var statearr_41493 = state_41474;
(statearr_41493[(19)] = inst_41387__$1);

return statearr_41493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41474__$1,(22),inst_41388);
} else {
if((state_val_41475 === (31))){
var inst_41472 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41474__$1,inst_41472);
} else {
if((state_val_41475 === (32))){
var inst_41427 = (state_41474[(16)]);
var inst_41432 = inst_41427.cljs$lang$protocol_mask$partition0$;
var inst_41433 = (inst_41432 & (64));
var inst_41434 = inst_41427.cljs$core$ISeq$;
var inst_41435 = (cljs.core.PROTOCOL_SENTINEL === inst_41434);
var inst_41436 = (inst_41433) || (inst_41435);
var state_41474__$1 = state_41474;
if(cljs.core.truth_(inst_41436)){
var statearr_41494_41574 = state_41474__$1;
(statearr_41494_41574[(1)] = (35));

} else {
var statearr_41495_41575 = state_41474__$1;
(statearr_41495_41575[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (40))){
var inst_41449 = (state_41474[(20)]);
var inst_41448 = (state_41474[(2)]);
var inst_41449__$1 = cljs.core.get.call(null,inst_41448,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41450 = cljs.core.get.call(null,inst_41448,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41451 = cljs.core.not_empty.call(null,inst_41449__$1);
var state_41474__$1 = (function (){var statearr_41496 = state_41474;
(statearr_41496[(20)] = inst_41449__$1);

(statearr_41496[(21)] = inst_41450);

return statearr_41496;
})();
if(cljs.core.truth_(inst_41451)){
var statearr_41497_41576 = state_41474__$1;
(statearr_41497_41576[(1)] = (41));

} else {
var statearr_41498_41577 = state_41474__$1;
(statearr_41498_41577[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (33))){
var state_41474__$1 = state_41474;
var statearr_41499_41578 = state_41474__$1;
(statearr_41499_41578[(2)] = false);

(statearr_41499_41578[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (13))){
var inst_41347 = (state_41474[(22)]);
var inst_41351 = cljs.core.chunk_first.call(null,inst_41347);
var inst_41352 = cljs.core.chunk_rest.call(null,inst_41347);
var inst_41353 = cljs.core.count.call(null,inst_41351);
var inst_41334 = inst_41352;
var inst_41335 = inst_41351;
var inst_41336 = inst_41353;
var inst_41337 = (0);
var state_41474__$1 = (function (){var statearr_41500 = state_41474;
(statearr_41500[(7)] = inst_41336);

(statearr_41500[(8)] = inst_41335);

(statearr_41500[(9)] = inst_41337);

(statearr_41500[(10)] = inst_41334);

return statearr_41500;
})();
var statearr_41501_41579 = state_41474__$1;
(statearr_41501_41579[(2)] = null);

(statearr_41501_41579[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (22))){
var inst_41395 = (state_41474[(23)]);
var inst_41387 = (state_41474[(19)]);
var inst_41391 = (state_41474[(24)]);
var inst_41390 = (state_41474[(25)]);
var inst_41390__$1 = (state_41474[(2)]);
var inst_41391__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41390__$1);
var inst_41392 = (function (){var all_files = inst_41387;
var res_SINGLEQUOTE_ = inst_41390__$1;
var res = inst_41391__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41395,inst_41387,inst_41391,inst_41390,inst_41390__$1,inst_41391__$1,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41316_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41316_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41395,inst_41387,inst_41391,inst_41390,inst_41390__$1,inst_41391__$1,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41393 = cljs.core.filter.call(null,inst_41392,inst_41390__$1);
var inst_41394 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41395__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41394);
var inst_41396 = cljs.core.not_empty.call(null,inst_41395__$1);
var state_41474__$1 = (function (){var statearr_41502 = state_41474;
(statearr_41502[(23)] = inst_41395__$1);

(statearr_41502[(26)] = inst_41393);

(statearr_41502[(24)] = inst_41391__$1);

(statearr_41502[(25)] = inst_41390__$1);

return statearr_41502;
})();
if(cljs.core.truth_(inst_41396)){
var statearr_41503_41580 = state_41474__$1;
(statearr_41503_41580[(1)] = (23));

} else {
var statearr_41504_41581 = state_41474__$1;
(statearr_41504_41581[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (36))){
var state_41474__$1 = state_41474;
var statearr_41505_41582 = state_41474__$1;
(statearr_41505_41582[(2)] = false);

(statearr_41505_41582[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (41))){
var inst_41449 = (state_41474[(20)]);
var inst_41453 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41454 = cljs.core.map.call(null,inst_41453,inst_41449);
var inst_41455 = cljs.core.pr_str.call(null,inst_41454);
var inst_41456 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41455)].join('');
var inst_41457 = figwheel.client.utils.log.call(null,inst_41456);
var state_41474__$1 = state_41474;
var statearr_41506_41583 = state_41474__$1;
(statearr_41506_41583[(2)] = inst_41457);

(statearr_41506_41583[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (43))){
var inst_41450 = (state_41474[(21)]);
var inst_41460 = (state_41474[(2)]);
var inst_41461 = cljs.core.not_empty.call(null,inst_41450);
var state_41474__$1 = (function (){var statearr_41507 = state_41474;
(statearr_41507[(27)] = inst_41460);

return statearr_41507;
})();
if(cljs.core.truth_(inst_41461)){
var statearr_41508_41584 = state_41474__$1;
(statearr_41508_41584[(1)] = (44));

} else {
var statearr_41509_41585 = state_41474__$1;
(statearr_41509_41585[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (29))){
var inst_41395 = (state_41474[(23)]);
var inst_41427 = (state_41474[(16)]);
var inst_41387 = (state_41474[(19)]);
var inst_41393 = (state_41474[(26)]);
var inst_41391 = (state_41474[(24)]);
var inst_41390 = (state_41474[(25)]);
var inst_41423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41426 = (function (){var all_files = inst_41387;
var res_SINGLEQUOTE_ = inst_41390;
var res = inst_41391;
var files_not_loaded = inst_41393;
var dependencies_that_loaded = inst_41395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41395,inst_41427,inst_41387,inst_41393,inst_41391,inst_41390,inst_41423,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41425){
var map__41510 = p__41425;
var map__41510__$1 = ((((!((map__41510 == null)))?((((map__41510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41510):map__41510);
var namespace = cljs.core.get.call(null,map__41510__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41395,inst_41427,inst_41387,inst_41393,inst_41391,inst_41390,inst_41423,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41427__$1 = cljs.core.group_by.call(null,inst_41426,inst_41393);
var inst_41429 = (inst_41427__$1 == null);
var inst_41430 = cljs.core.not.call(null,inst_41429);
var state_41474__$1 = (function (){var statearr_41512 = state_41474;
(statearr_41512[(16)] = inst_41427__$1);

(statearr_41512[(28)] = inst_41423);

return statearr_41512;
})();
if(inst_41430){
var statearr_41513_41586 = state_41474__$1;
(statearr_41513_41586[(1)] = (32));

} else {
var statearr_41514_41587 = state_41474__$1;
(statearr_41514_41587[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (44))){
var inst_41450 = (state_41474[(21)]);
var inst_41463 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41450);
var inst_41464 = cljs.core.pr_str.call(null,inst_41463);
var inst_41465 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41464)].join('');
var inst_41466 = figwheel.client.utils.log.call(null,inst_41465);
var state_41474__$1 = state_41474;
var statearr_41515_41588 = state_41474__$1;
(statearr_41515_41588[(2)] = inst_41466);

(statearr_41515_41588[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (6))){
var inst_41368 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
var statearr_41516_41589 = state_41474__$1;
(statearr_41516_41589[(2)] = inst_41368);

(statearr_41516_41589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (28))){
var inst_41393 = (state_41474[(26)]);
var inst_41420 = (state_41474[(2)]);
var inst_41421 = cljs.core.not_empty.call(null,inst_41393);
var state_41474__$1 = (function (){var statearr_41517 = state_41474;
(statearr_41517[(29)] = inst_41420);

return statearr_41517;
})();
if(cljs.core.truth_(inst_41421)){
var statearr_41518_41590 = state_41474__$1;
(statearr_41518_41590[(1)] = (29));

} else {
var statearr_41519_41591 = state_41474__$1;
(statearr_41519_41591[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (25))){
var inst_41391 = (state_41474[(24)]);
var inst_41407 = (state_41474[(2)]);
var inst_41408 = cljs.core.not_empty.call(null,inst_41391);
var state_41474__$1 = (function (){var statearr_41520 = state_41474;
(statearr_41520[(30)] = inst_41407);

return statearr_41520;
})();
if(cljs.core.truth_(inst_41408)){
var statearr_41521_41592 = state_41474__$1;
(statearr_41521_41592[(1)] = (26));

} else {
var statearr_41522_41593 = state_41474__$1;
(statearr_41522_41593[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (34))){
var inst_41443 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
if(cljs.core.truth_(inst_41443)){
var statearr_41523_41594 = state_41474__$1;
(statearr_41523_41594[(1)] = (38));

} else {
var statearr_41524_41595 = state_41474__$1;
(statearr_41524_41595[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (17))){
var state_41474__$1 = state_41474;
var statearr_41525_41596 = state_41474__$1;
(statearr_41525_41596[(2)] = recompile_dependents);

(statearr_41525_41596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (3))){
var state_41474__$1 = state_41474;
var statearr_41526_41597 = state_41474__$1;
(statearr_41526_41597[(2)] = null);

(statearr_41526_41597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (12))){
var inst_41364 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
var statearr_41527_41598 = state_41474__$1;
(statearr_41527_41598[(2)] = inst_41364);

(statearr_41527_41598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (2))){
var inst_41326 = (state_41474[(13)]);
var inst_41333 = cljs.core.seq.call(null,inst_41326);
var inst_41334 = inst_41333;
var inst_41335 = null;
var inst_41336 = (0);
var inst_41337 = (0);
var state_41474__$1 = (function (){var statearr_41528 = state_41474;
(statearr_41528[(7)] = inst_41336);

(statearr_41528[(8)] = inst_41335);

(statearr_41528[(9)] = inst_41337);

(statearr_41528[(10)] = inst_41334);

return statearr_41528;
})();
var statearr_41529_41599 = state_41474__$1;
(statearr_41529_41599[(2)] = null);

(statearr_41529_41599[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (23))){
var inst_41395 = (state_41474[(23)]);
var inst_41387 = (state_41474[(19)]);
var inst_41393 = (state_41474[(26)]);
var inst_41391 = (state_41474[(24)]);
var inst_41390 = (state_41474[(25)]);
var inst_41398 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41400 = (function (){var all_files = inst_41387;
var res_SINGLEQUOTE_ = inst_41390;
var res = inst_41391;
var files_not_loaded = inst_41393;
var dependencies_that_loaded = inst_41395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41395,inst_41387,inst_41393,inst_41391,inst_41390,inst_41398,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41399){
var map__41530 = p__41399;
var map__41530__$1 = ((((!((map__41530 == null)))?((((map__41530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41530):map__41530);
var request_url = cljs.core.get.call(null,map__41530__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41395,inst_41387,inst_41393,inst_41391,inst_41390,inst_41398,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41401 = cljs.core.reverse.call(null,inst_41395);
var inst_41402 = cljs.core.map.call(null,inst_41400,inst_41401);
var inst_41403 = cljs.core.pr_str.call(null,inst_41402);
var inst_41404 = figwheel.client.utils.log.call(null,inst_41403);
var state_41474__$1 = (function (){var statearr_41532 = state_41474;
(statearr_41532[(31)] = inst_41398);

return statearr_41532;
})();
var statearr_41533_41600 = state_41474__$1;
(statearr_41533_41600[(2)] = inst_41404);

(statearr_41533_41600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (35))){
var state_41474__$1 = state_41474;
var statearr_41534_41601 = state_41474__$1;
(statearr_41534_41601[(2)] = true);

(statearr_41534_41601[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (19))){
var inst_41377 = (state_41474[(12)]);
var inst_41383 = figwheel.client.file_reloading.expand_files.call(null,inst_41377);
var state_41474__$1 = state_41474;
var statearr_41535_41602 = state_41474__$1;
(statearr_41535_41602[(2)] = inst_41383);

(statearr_41535_41602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (11))){
var state_41474__$1 = state_41474;
var statearr_41536_41603 = state_41474__$1;
(statearr_41536_41603[(2)] = null);

(statearr_41536_41603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (9))){
var inst_41366 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
var statearr_41537_41604 = state_41474__$1;
(statearr_41537_41604[(2)] = inst_41366);

(statearr_41537_41604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (5))){
var inst_41336 = (state_41474[(7)]);
var inst_41337 = (state_41474[(9)]);
var inst_41339 = (inst_41337 < inst_41336);
var inst_41340 = inst_41339;
var state_41474__$1 = state_41474;
if(cljs.core.truth_(inst_41340)){
var statearr_41538_41605 = state_41474__$1;
(statearr_41538_41605[(1)] = (7));

} else {
var statearr_41539_41606 = state_41474__$1;
(statearr_41539_41606[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (14))){
var inst_41347 = (state_41474[(22)]);
var inst_41356 = cljs.core.first.call(null,inst_41347);
var inst_41357 = figwheel.client.file_reloading.eval_body.call(null,inst_41356,opts);
var inst_41358 = cljs.core.next.call(null,inst_41347);
var inst_41334 = inst_41358;
var inst_41335 = null;
var inst_41336 = (0);
var inst_41337 = (0);
var state_41474__$1 = (function (){var statearr_41540 = state_41474;
(statearr_41540[(7)] = inst_41336);

(statearr_41540[(8)] = inst_41335);

(statearr_41540[(32)] = inst_41357);

(statearr_41540[(9)] = inst_41337);

(statearr_41540[(10)] = inst_41334);

return statearr_41540;
})();
var statearr_41541_41607 = state_41474__$1;
(statearr_41541_41607[(2)] = null);

(statearr_41541_41607[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (45))){
var state_41474__$1 = state_41474;
var statearr_41542_41608 = state_41474__$1;
(statearr_41542_41608[(2)] = null);

(statearr_41542_41608[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (26))){
var inst_41395 = (state_41474[(23)]);
var inst_41387 = (state_41474[(19)]);
var inst_41393 = (state_41474[(26)]);
var inst_41391 = (state_41474[(24)]);
var inst_41390 = (state_41474[(25)]);
var inst_41410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41412 = (function (){var all_files = inst_41387;
var res_SINGLEQUOTE_ = inst_41390;
var res = inst_41391;
var files_not_loaded = inst_41393;
var dependencies_that_loaded = inst_41395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41395,inst_41387,inst_41393,inst_41391,inst_41390,inst_41410,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41411){
var map__41543 = p__41411;
var map__41543__$1 = ((((!((map__41543 == null)))?((((map__41543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41543):map__41543);
var namespace = cljs.core.get.call(null,map__41543__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41395,inst_41387,inst_41393,inst_41391,inst_41390,inst_41410,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41413 = cljs.core.map.call(null,inst_41412,inst_41391);
var inst_41414 = cljs.core.pr_str.call(null,inst_41413);
var inst_41415 = figwheel.client.utils.log.call(null,inst_41414);
var inst_41416 = (function (){var all_files = inst_41387;
var res_SINGLEQUOTE_ = inst_41390;
var res = inst_41391;
var files_not_loaded = inst_41393;
var dependencies_that_loaded = inst_41395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41395,inst_41387,inst_41393,inst_41391,inst_41390,inst_41410,inst_41412,inst_41413,inst_41414,inst_41415,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41395,inst_41387,inst_41393,inst_41391,inst_41390,inst_41410,inst_41412,inst_41413,inst_41414,inst_41415,state_val_41475,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41417 = setTimeout(inst_41416,(10));
var state_41474__$1 = (function (){var statearr_41545 = state_41474;
(statearr_41545[(33)] = inst_41410);

(statearr_41545[(34)] = inst_41415);

return statearr_41545;
})();
var statearr_41546_41609 = state_41474__$1;
(statearr_41546_41609[(2)] = inst_41417);

(statearr_41546_41609[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (16))){
var state_41474__$1 = state_41474;
var statearr_41547_41610 = state_41474__$1;
(statearr_41547_41610[(2)] = reload_dependents);

(statearr_41547_41610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (38))){
var inst_41427 = (state_41474[(16)]);
var inst_41445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41427);
var state_41474__$1 = state_41474;
var statearr_41548_41611 = state_41474__$1;
(statearr_41548_41611[(2)] = inst_41445);

(statearr_41548_41611[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (30))){
var state_41474__$1 = state_41474;
var statearr_41549_41612 = state_41474__$1;
(statearr_41549_41612[(2)] = null);

(statearr_41549_41612[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (10))){
var inst_41347 = (state_41474[(22)]);
var inst_41349 = cljs.core.chunked_seq_QMARK_.call(null,inst_41347);
var state_41474__$1 = state_41474;
if(inst_41349){
var statearr_41550_41613 = state_41474__$1;
(statearr_41550_41613[(1)] = (13));

} else {
var statearr_41551_41614 = state_41474__$1;
(statearr_41551_41614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (18))){
var inst_41381 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
if(cljs.core.truth_(inst_41381)){
var statearr_41552_41615 = state_41474__$1;
(statearr_41552_41615[(1)] = (19));

} else {
var statearr_41553_41616 = state_41474__$1;
(statearr_41553_41616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (42))){
var state_41474__$1 = state_41474;
var statearr_41554_41617 = state_41474__$1;
(statearr_41554_41617[(2)] = null);

(statearr_41554_41617[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (37))){
var inst_41440 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
var statearr_41555_41618 = state_41474__$1;
(statearr_41555_41618[(2)] = inst_41440);

(statearr_41555_41618[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41475 === (8))){
var inst_41347 = (state_41474[(22)]);
var inst_41334 = (state_41474[(10)]);
var inst_41347__$1 = cljs.core.seq.call(null,inst_41334);
var state_41474__$1 = (function (){var statearr_41556 = state_41474;
(statearr_41556[(22)] = inst_41347__$1);

return statearr_41556;
})();
if(inst_41347__$1){
var statearr_41557_41619 = state_41474__$1;
(statearr_41557_41619[(1)] = (10));

} else {
var statearr_41558_41620 = state_41474__$1;
(statearr_41558_41620[(1)] = (11));

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
});})(c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37737__auto__,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____0 = (function (){
var statearr_41559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41559[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__);

(statearr_41559[(1)] = (1));

return statearr_41559;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____1 = (function (state_41474){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_41474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e41560){if((e41560 instanceof Object)){
var ex__37741__auto__ = e41560;
var statearr_41561_41621 = state_41474;
(statearr_41561_41621[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41622 = state_41474;
state_41474 = G__41622;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__ = function(state_41474){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____1.call(this,state_41474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37827__auto__ = (function (){var statearr_41562 = f__37826__auto__.call(null);
(statearr_41562[(6)] = c__37825__auto__);

return statearr_41562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__,map__41319,map__41319__$1,opts,before_jsload,on_jsload,reload_dependents,map__41320,map__41320__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37825__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41625,link){
var map__41626 = p__41625;
var map__41626__$1 = ((((!((map__41626 == null)))?((((map__41626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41626):map__41626);
var file = cljs.core.get.call(null,map__41626__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41626,map__41626__$1,file){
return (function (p1__41623_SHARP_,p2__41624_SHARP_){
if(cljs.core._EQ_.call(null,p1__41623_SHARP_,p2__41624_SHARP_)){
return p1__41623_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41626,map__41626__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41629){
var map__41630 = p__41629;
var map__41630__$1 = ((((!((map__41630 == null)))?((((map__41630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41630):map__41630);
var match_length = cljs.core.get.call(null,map__41630__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41630__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41628_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41628_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41632_SHARP_,p2__41633_SHARP_){
return cljs.core.assoc.call(null,p1__41632_SHARP_,cljs.core.get.call(null,p2__41633_SHARP_,key),p2__41633_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_41634 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41634);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41634);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41635,p__41636){
var map__41637 = p__41635;
var map__41637__$1 = ((((!((map__41637 == null)))?((((map__41637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41637):map__41637);
var on_cssload = cljs.core.get.call(null,map__41637__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41638 = p__41636;
var map__41638__$1 = ((((!((map__41638 == null)))?((((map__41638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41638):map__41638);
var files_msg = map__41638__$1;
var files = cljs.core.get.call(null,map__41638__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1514096001562