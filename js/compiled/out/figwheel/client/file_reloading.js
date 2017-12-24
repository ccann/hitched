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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49612_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49612_SHARP_));
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
var seq__49613 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49614 = null;
var count__49615 = (0);
var i__49616 = (0);
while(true){
if((i__49616 < count__49615)){
var n = cljs.core._nth.call(null,chunk__49614,i__49616);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49617 = seq__49613;
var G__49618 = chunk__49614;
var G__49619 = count__49615;
var G__49620 = (i__49616 + (1));
seq__49613 = G__49617;
chunk__49614 = G__49618;
count__49615 = G__49619;
i__49616 = G__49620;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49613);
if(temp__4657__auto__){
var seq__49613__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49613__$1)){
var c__34525__auto__ = cljs.core.chunk_first.call(null,seq__49613__$1);
var G__49621 = cljs.core.chunk_rest.call(null,seq__49613__$1);
var G__49622 = c__34525__auto__;
var G__49623 = cljs.core.count.call(null,c__34525__auto__);
var G__49624 = (0);
seq__49613 = G__49621;
chunk__49614 = G__49622;
count__49615 = G__49623;
i__49616 = G__49624;
continue;
} else {
var n = cljs.core.first.call(null,seq__49613__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49625 = cljs.core.next.call(null,seq__49613__$1);
var G__49626 = null;
var G__49627 = (0);
var G__49628 = (0);
seq__49613 = G__49625;
chunk__49614 = G__49626;
count__49615 = G__49627;
i__49616 = G__49628;
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

var seq__49638_49646 = cljs.core.seq.call(null,deps);
var chunk__49639_49647 = null;
var count__49640_49648 = (0);
var i__49641_49649 = (0);
while(true){
if((i__49641_49649 < count__49640_49648)){
var dep_49650 = cljs.core._nth.call(null,chunk__49639_49647,i__49641_49649);
topo_sort_helper_STAR_.call(null,dep_49650,(depth + (1)),state);

var G__49651 = seq__49638_49646;
var G__49652 = chunk__49639_49647;
var G__49653 = count__49640_49648;
var G__49654 = (i__49641_49649 + (1));
seq__49638_49646 = G__49651;
chunk__49639_49647 = G__49652;
count__49640_49648 = G__49653;
i__49641_49649 = G__49654;
continue;
} else {
var temp__4657__auto___49655 = cljs.core.seq.call(null,seq__49638_49646);
if(temp__4657__auto___49655){
var seq__49638_49656__$1 = temp__4657__auto___49655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49638_49656__$1)){
var c__34525__auto___49657 = cljs.core.chunk_first.call(null,seq__49638_49656__$1);
var G__49658 = cljs.core.chunk_rest.call(null,seq__49638_49656__$1);
var G__49659 = c__34525__auto___49657;
var G__49660 = cljs.core.count.call(null,c__34525__auto___49657);
var G__49661 = (0);
seq__49638_49646 = G__49658;
chunk__49639_49647 = G__49659;
count__49640_49648 = G__49660;
i__49641_49649 = G__49661;
continue;
} else {
var dep_49662 = cljs.core.first.call(null,seq__49638_49656__$1);
topo_sort_helper_STAR_.call(null,dep_49662,(depth + (1)),state);

var G__49663 = cljs.core.next.call(null,seq__49638_49656__$1);
var G__49664 = null;
var G__49665 = (0);
var G__49666 = (0);
seq__49638_49646 = G__49663;
chunk__49639_49647 = G__49664;
count__49640_49648 = G__49665;
i__49641_49649 = G__49666;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49642){
var vec__49643 = p__49642;
var seq__49644 = cljs.core.seq.call(null,vec__49643);
var first__49645 = cljs.core.first.call(null,seq__49644);
var seq__49644__$1 = cljs.core.next.call(null,seq__49644);
var x = first__49645;
var xs = seq__49644__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49643,seq__49644,first__49645,seq__49644__$1,x,xs,get_deps__$1){
return (function (p1__49629_SHARP_){
return clojure.set.difference.call(null,p1__49629_SHARP_,x);
});})(vec__49643,seq__49644,first__49645,seq__49644__$1,x,xs,get_deps__$1))
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
var seq__49667 = cljs.core.seq.call(null,provides);
var chunk__49668 = null;
var count__49669 = (0);
var i__49670 = (0);
while(true){
if((i__49670 < count__49669)){
var prov = cljs.core._nth.call(null,chunk__49668,i__49670);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49671_49679 = cljs.core.seq.call(null,requires);
var chunk__49672_49680 = null;
var count__49673_49681 = (0);
var i__49674_49682 = (0);
while(true){
if((i__49674_49682 < count__49673_49681)){
var req_49683 = cljs.core._nth.call(null,chunk__49672_49680,i__49674_49682);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49683,prov);

var G__49684 = seq__49671_49679;
var G__49685 = chunk__49672_49680;
var G__49686 = count__49673_49681;
var G__49687 = (i__49674_49682 + (1));
seq__49671_49679 = G__49684;
chunk__49672_49680 = G__49685;
count__49673_49681 = G__49686;
i__49674_49682 = G__49687;
continue;
} else {
var temp__4657__auto___49688 = cljs.core.seq.call(null,seq__49671_49679);
if(temp__4657__auto___49688){
var seq__49671_49689__$1 = temp__4657__auto___49688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49671_49689__$1)){
var c__34525__auto___49690 = cljs.core.chunk_first.call(null,seq__49671_49689__$1);
var G__49691 = cljs.core.chunk_rest.call(null,seq__49671_49689__$1);
var G__49692 = c__34525__auto___49690;
var G__49693 = cljs.core.count.call(null,c__34525__auto___49690);
var G__49694 = (0);
seq__49671_49679 = G__49691;
chunk__49672_49680 = G__49692;
count__49673_49681 = G__49693;
i__49674_49682 = G__49694;
continue;
} else {
var req_49695 = cljs.core.first.call(null,seq__49671_49689__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49695,prov);

var G__49696 = cljs.core.next.call(null,seq__49671_49689__$1);
var G__49697 = null;
var G__49698 = (0);
var G__49699 = (0);
seq__49671_49679 = G__49696;
chunk__49672_49680 = G__49697;
count__49673_49681 = G__49698;
i__49674_49682 = G__49699;
continue;
}
} else {
}
}
break;
}

var G__49700 = seq__49667;
var G__49701 = chunk__49668;
var G__49702 = count__49669;
var G__49703 = (i__49670 + (1));
seq__49667 = G__49700;
chunk__49668 = G__49701;
count__49669 = G__49702;
i__49670 = G__49703;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49667);
if(temp__4657__auto__){
var seq__49667__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49667__$1)){
var c__34525__auto__ = cljs.core.chunk_first.call(null,seq__49667__$1);
var G__49704 = cljs.core.chunk_rest.call(null,seq__49667__$1);
var G__49705 = c__34525__auto__;
var G__49706 = cljs.core.count.call(null,c__34525__auto__);
var G__49707 = (0);
seq__49667 = G__49704;
chunk__49668 = G__49705;
count__49669 = G__49706;
i__49670 = G__49707;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49667__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49675_49708 = cljs.core.seq.call(null,requires);
var chunk__49676_49709 = null;
var count__49677_49710 = (0);
var i__49678_49711 = (0);
while(true){
if((i__49678_49711 < count__49677_49710)){
var req_49712 = cljs.core._nth.call(null,chunk__49676_49709,i__49678_49711);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49712,prov);

var G__49713 = seq__49675_49708;
var G__49714 = chunk__49676_49709;
var G__49715 = count__49677_49710;
var G__49716 = (i__49678_49711 + (1));
seq__49675_49708 = G__49713;
chunk__49676_49709 = G__49714;
count__49677_49710 = G__49715;
i__49678_49711 = G__49716;
continue;
} else {
var temp__4657__auto___49717__$1 = cljs.core.seq.call(null,seq__49675_49708);
if(temp__4657__auto___49717__$1){
var seq__49675_49718__$1 = temp__4657__auto___49717__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49675_49718__$1)){
var c__34525__auto___49719 = cljs.core.chunk_first.call(null,seq__49675_49718__$1);
var G__49720 = cljs.core.chunk_rest.call(null,seq__49675_49718__$1);
var G__49721 = c__34525__auto___49719;
var G__49722 = cljs.core.count.call(null,c__34525__auto___49719);
var G__49723 = (0);
seq__49675_49708 = G__49720;
chunk__49676_49709 = G__49721;
count__49677_49710 = G__49722;
i__49678_49711 = G__49723;
continue;
} else {
var req_49724 = cljs.core.first.call(null,seq__49675_49718__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49724,prov);

var G__49725 = cljs.core.next.call(null,seq__49675_49718__$1);
var G__49726 = null;
var G__49727 = (0);
var G__49728 = (0);
seq__49675_49708 = G__49725;
chunk__49676_49709 = G__49726;
count__49677_49710 = G__49727;
i__49678_49711 = G__49728;
continue;
}
} else {
}
}
break;
}

var G__49729 = cljs.core.next.call(null,seq__49667__$1);
var G__49730 = null;
var G__49731 = (0);
var G__49732 = (0);
seq__49667 = G__49729;
chunk__49668 = G__49730;
count__49669 = G__49731;
i__49670 = G__49732;
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
var seq__49733_49737 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49734_49738 = null;
var count__49735_49739 = (0);
var i__49736_49740 = (0);
while(true){
if((i__49736_49740 < count__49735_49739)){
var ns_49741 = cljs.core._nth.call(null,chunk__49734_49738,i__49736_49740);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49741);

var G__49742 = seq__49733_49737;
var G__49743 = chunk__49734_49738;
var G__49744 = count__49735_49739;
var G__49745 = (i__49736_49740 + (1));
seq__49733_49737 = G__49742;
chunk__49734_49738 = G__49743;
count__49735_49739 = G__49744;
i__49736_49740 = G__49745;
continue;
} else {
var temp__4657__auto___49746 = cljs.core.seq.call(null,seq__49733_49737);
if(temp__4657__auto___49746){
var seq__49733_49747__$1 = temp__4657__auto___49746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49733_49747__$1)){
var c__34525__auto___49748 = cljs.core.chunk_first.call(null,seq__49733_49747__$1);
var G__49749 = cljs.core.chunk_rest.call(null,seq__49733_49747__$1);
var G__49750 = c__34525__auto___49748;
var G__49751 = cljs.core.count.call(null,c__34525__auto___49748);
var G__49752 = (0);
seq__49733_49737 = G__49749;
chunk__49734_49738 = G__49750;
count__49735_49739 = G__49751;
i__49736_49740 = G__49752;
continue;
} else {
var ns_49753 = cljs.core.first.call(null,seq__49733_49747__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49753);

var G__49754 = cljs.core.next.call(null,seq__49733_49747__$1);
var G__49755 = null;
var G__49756 = (0);
var G__49757 = (0);
seq__49733_49737 = G__49754;
chunk__49734_49738 = G__49755;
count__49735_49739 = G__49756;
i__49736_49740 = G__49757;
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
var G__49758__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49759__i = 0, G__49759__a = new Array(arguments.length -  0);
while (G__49759__i < G__49759__a.length) {G__49759__a[G__49759__i] = arguments[G__49759__i + 0]; ++G__49759__i;}
  args = new cljs.core.IndexedSeq(G__49759__a,0,null);
} 
return G__49758__delegate.call(this,args);};
G__49758.cljs$lang$maxFixedArity = 0;
G__49758.cljs$lang$applyTo = (function (arglist__49760){
var args = cljs.core.seq(arglist__49760);
return G__49758__delegate(args);
});
G__49758.cljs$core$IFn$_invoke$arity$variadic = G__49758__delegate;
return G__49758;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49761 = cljs.core._EQ_;
var expr__49762 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49761.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49762))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49761,expr__49762){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49761,expr__49762))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49761,expr__49762){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49764){if((e49764 instanceof Error)){
var e = e49764;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49764;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49761,expr__49762))
} else {
if(cljs.core.truth_(pred__49761.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49762))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49761.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49762))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49761.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49762))){
return ((function (pred__49761,expr__49762){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49765){if((e49765 instanceof Error)){
var e = e49765;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49765;

}
}})());
});
;})(pred__49761,expr__49762))
} else {
return ((function (pred__49761,expr__49762){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49761,expr__49762))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49766,callback){
var map__49767 = p__49766;
var map__49767__$1 = ((((!((map__49767 == null)))?((((map__49767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49767):map__49767);
var file_msg = map__49767__$1;
var request_url = cljs.core.get.call(null,map__49767__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49767,map__49767__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49767,map__49767__$1,file_msg,request_url))
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
return (function (state_49791){
var state_val_49792 = (state_49791[(1)]);
if((state_val_49792 === (7))){
var inst_49787 = (state_49791[(2)]);
var state_49791__$1 = state_49791;
var statearr_49793_49810 = state_49791__$1;
(statearr_49793_49810[(2)] = inst_49787);

(statearr_49793_49810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49792 === (1))){
var state_49791__$1 = state_49791;
var statearr_49794_49811 = state_49791__$1;
(statearr_49794_49811[(2)] = null);

(statearr_49794_49811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49792 === (4))){
var inst_49771 = (state_49791[(7)]);
var inst_49771__$1 = (state_49791[(2)]);
var state_49791__$1 = (function (){var statearr_49795 = state_49791;
(statearr_49795[(7)] = inst_49771__$1);

return statearr_49795;
})();
if(cljs.core.truth_(inst_49771__$1)){
var statearr_49796_49812 = state_49791__$1;
(statearr_49796_49812[(1)] = (5));

} else {
var statearr_49797_49813 = state_49791__$1;
(statearr_49797_49813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49792 === (6))){
var state_49791__$1 = state_49791;
var statearr_49798_49814 = state_49791__$1;
(statearr_49798_49814[(2)] = null);

(statearr_49798_49814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49792 === (3))){
var inst_49789 = (state_49791[(2)]);
var state_49791__$1 = state_49791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49791__$1,inst_49789);
} else {
if((state_val_49792 === (2))){
var state_49791__$1 = state_49791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49791__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49792 === (11))){
var inst_49783 = (state_49791[(2)]);
var state_49791__$1 = (function (){var statearr_49799 = state_49791;
(statearr_49799[(8)] = inst_49783);

return statearr_49799;
})();
var statearr_49800_49815 = state_49791__$1;
(statearr_49800_49815[(2)] = null);

(statearr_49800_49815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49792 === (9))){
var inst_49775 = (state_49791[(9)]);
var inst_49777 = (state_49791[(10)]);
var inst_49779 = inst_49777.call(null,inst_49775);
var state_49791__$1 = state_49791;
var statearr_49801_49816 = state_49791__$1;
(statearr_49801_49816[(2)] = inst_49779);

(statearr_49801_49816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49792 === (5))){
var inst_49771 = (state_49791[(7)]);
var inst_49773 = figwheel.client.file_reloading.blocking_load.call(null,inst_49771);
var state_49791__$1 = state_49791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49791__$1,(8),inst_49773);
} else {
if((state_val_49792 === (10))){
var inst_49775 = (state_49791[(9)]);
var inst_49781 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49775);
var state_49791__$1 = state_49791;
var statearr_49802_49817 = state_49791__$1;
(statearr_49802_49817[(2)] = inst_49781);

(statearr_49802_49817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49792 === (8))){
var inst_49777 = (state_49791[(10)]);
var inst_49771 = (state_49791[(7)]);
var inst_49775 = (state_49791[(2)]);
var inst_49776 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49777__$1 = cljs.core.get.call(null,inst_49776,inst_49771);
var state_49791__$1 = (function (){var statearr_49803 = state_49791;
(statearr_49803[(9)] = inst_49775);

(statearr_49803[(10)] = inst_49777__$1);

return statearr_49803;
})();
if(cljs.core.truth_(inst_49777__$1)){
var statearr_49804_49818 = state_49791__$1;
(statearr_49804_49818[(1)] = (9));

} else {
var statearr_49805_49819 = state_49791__$1;
(statearr_49805_49819[(1)] = (10));

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
var statearr_49806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49806[(0)] = figwheel$client$file_reloading$state_machine__37738__auto__);

(statearr_49806[(1)] = (1));

return statearr_49806;
});
var figwheel$client$file_reloading$state_machine__37738__auto____1 = (function (state_49791){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_49791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e49807){if((e49807 instanceof Object)){
var ex__37741__auto__ = e49807;
var statearr_49808_49820 = state_49791;
(statearr_49808_49820[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49821 = state_49791;
state_49791 = G__49821;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37738__auto__ = function(state_49791){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37738__auto____1.call(this,state_49791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37738__auto____0;
figwheel$client$file_reloading$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37738__auto____1;
return figwheel$client$file_reloading$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__))
})();
var state__37827__auto__ = (function (){var statearr_49809 = f__37826__auto__.call(null);
(statearr_49809[(6)] = c__37825__auto__);

return statearr_49809;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49822,callback){
var map__49823 = p__49822;
var map__49823__$1 = ((((!((map__49823 == null)))?((((map__49823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49823):map__49823);
var file_msg = map__49823__$1;
var namespace = cljs.core.get.call(null,map__49823__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49823,map__49823__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49823,map__49823__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49825){
var map__49826 = p__49825;
var map__49826__$1 = ((((!((map__49826 == null)))?((((map__49826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49826):map__49826);
var file_msg = map__49826__$1;
var namespace = cljs.core.get.call(null,map__49826__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49828){
var map__49829 = p__49828;
var map__49829__$1 = ((((!((map__49829 == null)))?((((map__49829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49829):map__49829);
var file_msg = map__49829__$1;
var namespace = cljs.core.get.call(null,map__49829__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49831,callback){
var map__49832 = p__49831;
var map__49832__$1 = ((((!((map__49832 == null)))?((((map__49832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49832):map__49832);
var file_msg = map__49832__$1;
var request_url = cljs.core.get.call(null,map__49832__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49832__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__37825__auto___49882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___49882,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___49882,out){
return (function (state_49867){
var state_val_49868 = (state_49867[(1)]);
if((state_val_49868 === (1))){
var inst_49841 = cljs.core.seq.call(null,files);
var inst_49842 = cljs.core.first.call(null,inst_49841);
var inst_49843 = cljs.core.next.call(null,inst_49841);
var inst_49844 = files;
var state_49867__$1 = (function (){var statearr_49869 = state_49867;
(statearr_49869[(7)] = inst_49843);

(statearr_49869[(8)] = inst_49842);

(statearr_49869[(9)] = inst_49844);

return statearr_49869;
})();
var statearr_49870_49883 = state_49867__$1;
(statearr_49870_49883[(2)] = null);

(statearr_49870_49883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49868 === (2))){
var inst_49850 = (state_49867[(10)]);
var inst_49844 = (state_49867[(9)]);
var inst_49849 = cljs.core.seq.call(null,inst_49844);
var inst_49850__$1 = cljs.core.first.call(null,inst_49849);
var inst_49851 = cljs.core.next.call(null,inst_49849);
var inst_49852 = (inst_49850__$1 == null);
var inst_49853 = cljs.core.not.call(null,inst_49852);
var state_49867__$1 = (function (){var statearr_49871 = state_49867;
(statearr_49871[(11)] = inst_49851);

(statearr_49871[(10)] = inst_49850__$1);

return statearr_49871;
})();
if(inst_49853){
var statearr_49872_49884 = state_49867__$1;
(statearr_49872_49884[(1)] = (4));

} else {
var statearr_49873_49885 = state_49867__$1;
(statearr_49873_49885[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49868 === (3))){
var inst_49865 = (state_49867[(2)]);
var state_49867__$1 = state_49867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49867__$1,inst_49865);
} else {
if((state_val_49868 === (4))){
var inst_49850 = (state_49867[(10)]);
var inst_49855 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49850);
var state_49867__$1 = state_49867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49867__$1,(7),inst_49855);
} else {
if((state_val_49868 === (5))){
var inst_49861 = cljs.core.async.close_BANG_.call(null,out);
var state_49867__$1 = state_49867;
var statearr_49874_49886 = state_49867__$1;
(statearr_49874_49886[(2)] = inst_49861);

(statearr_49874_49886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49868 === (6))){
var inst_49863 = (state_49867[(2)]);
var state_49867__$1 = state_49867;
var statearr_49875_49887 = state_49867__$1;
(statearr_49875_49887[(2)] = inst_49863);

(statearr_49875_49887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49868 === (7))){
var inst_49851 = (state_49867[(11)]);
var inst_49857 = (state_49867[(2)]);
var inst_49858 = cljs.core.async.put_BANG_.call(null,out,inst_49857);
var inst_49844 = inst_49851;
var state_49867__$1 = (function (){var statearr_49876 = state_49867;
(statearr_49876[(12)] = inst_49858);

(statearr_49876[(9)] = inst_49844);

return statearr_49876;
})();
var statearr_49877_49888 = state_49867__$1;
(statearr_49877_49888[(2)] = null);

(statearr_49877_49888[(1)] = (2));


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
});})(c__37825__auto___49882,out))
;
return ((function (switch__37737__auto__,c__37825__auto___49882,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____0 = (function (){
var statearr_49878 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49878[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__);

(statearr_49878[(1)] = (1));

return statearr_49878;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____1 = (function (state_49867){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_49867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e49879){if((e49879 instanceof Object)){
var ex__37741__auto__ = e49879;
var statearr_49880_49889 = state_49867;
(statearr_49880_49889[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49890 = state_49867;
state_49867 = G__49890;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__ = function(state_49867){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____1.call(this,state_49867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___49882,out))
})();
var state__37827__auto__ = (function (){var statearr_49881 = f__37826__auto__.call(null);
(statearr_49881[(6)] = c__37825__auto___49882);

return statearr_49881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___49882,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49891,opts){
var map__49892 = p__49891;
var map__49892__$1 = ((((!((map__49892 == null)))?((((map__49892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49892):map__49892);
var eval_body = cljs.core.get.call(null,map__49892__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49892__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e49894){var e = e49894;
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
return (function (p1__49895_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49895_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__49896){
var vec__49897 = p__49896;
var k = cljs.core.nth.call(null,vec__49897,(0),null);
var v = cljs.core.nth.call(null,vec__49897,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49900){
var vec__49901 = p__49900;
var k = cljs.core.nth.call(null,vec__49901,(0),null);
var v = cljs.core.nth.call(null,vec__49901,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49907,p__49908){
var map__49909 = p__49907;
var map__49909__$1 = ((((!((map__49909 == null)))?((((map__49909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49909):map__49909);
var opts = map__49909__$1;
var before_jsload = cljs.core.get.call(null,map__49909__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49909__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49909__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49910 = p__49908;
var map__49910__$1 = ((((!((map__49910 == null)))?((((map__49910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49910):map__49910);
var msg = map__49910__$1;
var files = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50064){
var state_val_50065 = (state_50064[(1)]);
if((state_val_50065 === (7))){
var inst_49925 = (state_50064[(7)]);
var inst_49924 = (state_50064[(8)]);
var inst_49926 = (state_50064[(9)]);
var inst_49927 = (state_50064[(10)]);
var inst_49932 = cljs.core._nth.call(null,inst_49925,inst_49927);
var inst_49933 = figwheel.client.file_reloading.eval_body.call(null,inst_49932,opts);
var inst_49934 = (inst_49927 + (1));
var tmp50066 = inst_49925;
var tmp50067 = inst_49924;
var tmp50068 = inst_49926;
var inst_49924__$1 = tmp50067;
var inst_49925__$1 = tmp50066;
var inst_49926__$1 = tmp50068;
var inst_49927__$1 = inst_49934;
var state_50064__$1 = (function (){var statearr_50069 = state_50064;
(statearr_50069[(11)] = inst_49933);

(statearr_50069[(7)] = inst_49925__$1);

(statearr_50069[(8)] = inst_49924__$1);

(statearr_50069[(9)] = inst_49926__$1);

(statearr_50069[(10)] = inst_49927__$1);

return statearr_50069;
})();
var statearr_50070_50153 = state_50064__$1;
(statearr_50070_50153[(2)] = null);

(statearr_50070_50153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (20))){
var inst_49967 = (state_50064[(12)]);
var inst_49975 = figwheel.client.file_reloading.sort_files.call(null,inst_49967);
var state_50064__$1 = state_50064;
var statearr_50071_50154 = state_50064__$1;
(statearr_50071_50154[(2)] = inst_49975);

(statearr_50071_50154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (27))){
var state_50064__$1 = state_50064;
var statearr_50072_50155 = state_50064__$1;
(statearr_50072_50155[(2)] = null);

(statearr_50072_50155[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (1))){
var inst_49916 = (state_50064[(13)]);
var inst_49913 = before_jsload.call(null,files);
var inst_49914 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49915 = (function (){return ((function (inst_49916,inst_49913,inst_49914,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49904_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49904_SHARP_);
});
;})(inst_49916,inst_49913,inst_49914,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49916__$1 = cljs.core.filter.call(null,inst_49915,files);
var inst_49917 = cljs.core.not_empty.call(null,inst_49916__$1);
var state_50064__$1 = (function (){var statearr_50073 = state_50064;
(statearr_50073[(14)] = inst_49914);

(statearr_50073[(13)] = inst_49916__$1);

(statearr_50073[(15)] = inst_49913);

return statearr_50073;
})();
if(cljs.core.truth_(inst_49917)){
var statearr_50074_50156 = state_50064__$1;
(statearr_50074_50156[(1)] = (2));

} else {
var statearr_50075_50157 = state_50064__$1;
(statearr_50075_50157[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (24))){
var state_50064__$1 = state_50064;
var statearr_50076_50158 = state_50064__$1;
(statearr_50076_50158[(2)] = null);

(statearr_50076_50158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (39))){
var inst_50017 = (state_50064[(16)]);
var state_50064__$1 = state_50064;
var statearr_50077_50159 = state_50064__$1;
(statearr_50077_50159[(2)] = inst_50017);

(statearr_50077_50159[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (46))){
var inst_50059 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50078_50160 = state_50064__$1;
(statearr_50078_50160[(2)] = inst_50059);

(statearr_50078_50160[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (4))){
var inst_49961 = (state_50064[(2)]);
var inst_49962 = cljs.core.List.EMPTY;
var inst_49963 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49962);
var inst_49964 = (function (){return ((function (inst_49961,inst_49962,inst_49963,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49905_SHARP_){
var and__33693__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49905_SHARP_);
if(cljs.core.truth_(and__33693__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49905_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49905_SHARP_)));
} else {
return and__33693__auto__;
}
});
;})(inst_49961,inst_49962,inst_49963,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49965 = cljs.core.filter.call(null,inst_49964,files);
var inst_49966 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49967 = cljs.core.concat.call(null,inst_49965,inst_49966);
var state_50064__$1 = (function (){var statearr_50079 = state_50064;
(statearr_50079[(17)] = inst_49961);

(statearr_50079[(18)] = inst_49963);

(statearr_50079[(12)] = inst_49967);

return statearr_50079;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50080_50161 = state_50064__$1;
(statearr_50080_50161[(1)] = (16));

} else {
var statearr_50081_50162 = state_50064__$1;
(statearr_50081_50162[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (15))){
var inst_49951 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50082_50163 = state_50064__$1;
(statearr_50082_50163[(2)] = inst_49951);

(statearr_50082_50163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (21))){
var inst_49977 = (state_50064[(19)]);
var inst_49977__$1 = (state_50064[(2)]);
var inst_49978 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49977__$1);
var state_50064__$1 = (function (){var statearr_50083 = state_50064;
(statearr_50083[(19)] = inst_49977__$1);

return statearr_50083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50064__$1,(22),inst_49978);
} else {
if((state_val_50065 === (31))){
var inst_50062 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50064__$1,inst_50062);
} else {
if((state_val_50065 === (32))){
var inst_50017 = (state_50064[(16)]);
var inst_50022 = inst_50017.cljs$lang$protocol_mask$partition0$;
var inst_50023 = (inst_50022 & (64));
var inst_50024 = inst_50017.cljs$core$ISeq$;
var inst_50025 = (cljs.core.PROTOCOL_SENTINEL === inst_50024);
var inst_50026 = (inst_50023) || (inst_50025);
var state_50064__$1 = state_50064;
if(cljs.core.truth_(inst_50026)){
var statearr_50084_50164 = state_50064__$1;
(statearr_50084_50164[(1)] = (35));

} else {
var statearr_50085_50165 = state_50064__$1;
(statearr_50085_50165[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (40))){
var inst_50039 = (state_50064[(20)]);
var inst_50038 = (state_50064[(2)]);
var inst_50039__$1 = cljs.core.get.call(null,inst_50038,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50040 = cljs.core.get.call(null,inst_50038,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50041 = cljs.core.not_empty.call(null,inst_50039__$1);
var state_50064__$1 = (function (){var statearr_50086 = state_50064;
(statearr_50086[(20)] = inst_50039__$1);

(statearr_50086[(21)] = inst_50040);

return statearr_50086;
})();
if(cljs.core.truth_(inst_50041)){
var statearr_50087_50166 = state_50064__$1;
(statearr_50087_50166[(1)] = (41));

} else {
var statearr_50088_50167 = state_50064__$1;
(statearr_50088_50167[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (33))){
var state_50064__$1 = state_50064;
var statearr_50089_50168 = state_50064__$1;
(statearr_50089_50168[(2)] = false);

(statearr_50089_50168[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (13))){
var inst_49937 = (state_50064[(22)]);
var inst_49941 = cljs.core.chunk_first.call(null,inst_49937);
var inst_49942 = cljs.core.chunk_rest.call(null,inst_49937);
var inst_49943 = cljs.core.count.call(null,inst_49941);
var inst_49924 = inst_49942;
var inst_49925 = inst_49941;
var inst_49926 = inst_49943;
var inst_49927 = (0);
var state_50064__$1 = (function (){var statearr_50090 = state_50064;
(statearr_50090[(7)] = inst_49925);

(statearr_50090[(8)] = inst_49924);

(statearr_50090[(9)] = inst_49926);

(statearr_50090[(10)] = inst_49927);

return statearr_50090;
})();
var statearr_50091_50169 = state_50064__$1;
(statearr_50091_50169[(2)] = null);

(statearr_50091_50169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (22))){
var inst_49981 = (state_50064[(23)]);
var inst_49985 = (state_50064[(24)]);
var inst_49977 = (state_50064[(19)]);
var inst_49980 = (state_50064[(25)]);
var inst_49980__$1 = (state_50064[(2)]);
var inst_49981__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49980__$1);
var inst_49982 = (function (){var all_files = inst_49977;
var res_SINGLEQUOTE_ = inst_49980__$1;
var res = inst_49981__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49981,inst_49985,inst_49977,inst_49980,inst_49980__$1,inst_49981__$1,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49906_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49906_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49981,inst_49985,inst_49977,inst_49980,inst_49980__$1,inst_49981__$1,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49983 = cljs.core.filter.call(null,inst_49982,inst_49980__$1);
var inst_49984 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49985__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49984);
var inst_49986 = cljs.core.not_empty.call(null,inst_49985__$1);
var state_50064__$1 = (function (){var statearr_50092 = state_50064;
(statearr_50092[(23)] = inst_49981__$1);

(statearr_50092[(26)] = inst_49983);

(statearr_50092[(24)] = inst_49985__$1);

(statearr_50092[(25)] = inst_49980__$1);

return statearr_50092;
})();
if(cljs.core.truth_(inst_49986)){
var statearr_50093_50170 = state_50064__$1;
(statearr_50093_50170[(1)] = (23));

} else {
var statearr_50094_50171 = state_50064__$1;
(statearr_50094_50171[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (36))){
var state_50064__$1 = state_50064;
var statearr_50095_50172 = state_50064__$1;
(statearr_50095_50172[(2)] = false);

(statearr_50095_50172[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (41))){
var inst_50039 = (state_50064[(20)]);
var inst_50043 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50044 = cljs.core.map.call(null,inst_50043,inst_50039);
var inst_50045 = cljs.core.pr_str.call(null,inst_50044);
var inst_50046 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50045)].join('');
var inst_50047 = figwheel.client.utils.log.call(null,inst_50046);
var state_50064__$1 = state_50064;
var statearr_50096_50173 = state_50064__$1;
(statearr_50096_50173[(2)] = inst_50047);

(statearr_50096_50173[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (43))){
var inst_50040 = (state_50064[(21)]);
var inst_50050 = (state_50064[(2)]);
var inst_50051 = cljs.core.not_empty.call(null,inst_50040);
var state_50064__$1 = (function (){var statearr_50097 = state_50064;
(statearr_50097[(27)] = inst_50050);

return statearr_50097;
})();
if(cljs.core.truth_(inst_50051)){
var statearr_50098_50174 = state_50064__$1;
(statearr_50098_50174[(1)] = (44));

} else {
var statearr_50099_50175 = state_50064__$1;
(statearr_50099_50175[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (29))){
var inst_49981 = (state_50064[(23)]);
var inst_49983 = (state_50064[(26)]);
var inst_49985 = (state_50064[(24)]);
var inst_49977 = (state_50064[(19)]);
var inst_50017 = (state_50064[(16)]);
var inst_49980 = (state_50064[(25)]);
var inst_50013 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50016 = (function (){var all_files = inst_49977;
var res_SINGLEQUOTE_ = inst_49980;
var res = inst_49981;
var files_not_loaded = inst_49983;
var dependencies_that_loaded = inst_49985;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49981,inst_49983,inst_49985,inst_49977,inst_50017,inst_49980,inst_50013,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50015){
var map__50100 = p__50015;
var map__50100__$1 = ((((!((map__50100 == null)))?((((map__50100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50100):map__50100);
var namespace = cljs.core.get.call(null,map__50100__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49981,inst_49983,inst_49985,inst_49977,inst_50017,inst_49980,inst_50013,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50017__$1 = cljs.core.group_by.call(null,inst_50016,inst_49983);
var inst_50019 = (inst_50017__$1 == null);
var inst_50020 = cljs.core.not.call(null,inst_50019);
var state_50064__$1 = (function (){var statearr_50102 = state_50064;
(statearr_50102[(28)] = inst_50013);

(statearr_50102[(16)] = inst_50017__$1);

return statearr_50102;
})();
if(inst_50020){
var statearr_50103_50176 = state_50064__$1;
(statearr_50103_50176[(1)] = (32));

} else {
var statearr_50104_50177 = state_50064__$1;
(statearr_50104_50177[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (44))){
var inst_50040 = (state_50064[(21)]);
var inst_50053 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50040);
var inst_50054 = cljs.core.pr_str.call(null,inst_50053);
var inst_50055 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50054)].join('');
var inst_50056 = figwheel.client.utils.log.call(null,inst_50055);
var state_50064__$1 = state_50064;
var statearr_50105_50178 = state_50064__$1;
(statearr_50105_50178[(2)] = inst_50056);

(statearr_50105_50178[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (6))){
var inst_49958 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50106_50179 = state_50064__$1;
(statearr_50106_50179[(2)] = inst_49958);

(statearr_50106_50179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (28))){
var inst_49983 = (state_50064[(26)]);
var inst_50010 = (state_50064[(2)]);
var inst_50011 = cljs.core.not_empty.call(null,inst_49983);
var state_50064__$1 = (function (){var statearr_50107 = state_50064;
(statearr_50107[(29)] = inst_50010);

return statearr_50107;
})();
if(cljs.core.truth_(inst_50011)){
var statearr_50108_50180 = state_50064__$1;
(statearr_50108_50180[(1)] = (29));

} else {
var statearr_50109_50181 = state_50064__$1;
(statearr_50109_50181[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (25))){
var inst_49981 = (state_50064[(23)]);
var inst_49997 = (state_50064[(2)]);
var inst_49998 = cljs.core.not_empty.call(null,inst_49981);
var state_50064__$1 = (function (){var statearr_50110 = state_50064;
(statearr_50110[(30)] = inst_49997);

return statearr_50110;
})();
if(cljs.core.truth_(inst_49998)){
var statearr_50111_50182 = state_50064__$1;
(statearr_50111_50182[(1)] = (26));

} else {
var statearr_50112_50183 = state_50064__$1;
(statearr_50112_50183[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (34))){
var inst_50033 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
if(cljs.core.truth_(inst_50033)){
var statearr_50113_50184 = state_50064__$1;
(statearr_50113_50184[(1)] = (38));

} else {
var statearr_50114_50185 = state_50064__$1;
(statearr_50114_50185[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (17))){
var state_50064__$1 = state_50064;
var statearr_50115_50186 = state_50064__$1;
(statearr_50115_50186[(2)] = recompile_dependents);

(statearr_50115_50186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (3))){
var state_50064__$1 = state_50064;
var statearr_50116_50187 = state_50064__$1;
(statearr_50116_50187[(2)] = null);

(statearr_50116_50187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (12))){
var inst_49954 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50117_50188 = state_50064__$1;
(statearr_50117_50188[(2)] = inst_49954);

(statearr_50117_50188[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (2))){
var inst_49916 = (state_50064[(13)]);
var inst_49923 = cljs.core.seq.call(null,inst_49916);
var inst_49924 = inst_49923;
var inst_49925 = null;
var inst_49926 = (0);
var inst_49927 = (0);
var state_50064__$1 = (function (){var statearr_50118 = state_50064;
(statearr_50118[(7)] = inst_49925);

(statearr_50118[(8)] = inst_49924);

(statearr_50118[(9)] = inst_49926);

(statearr_50118[(10)] = inst_49927);

return statearr_50118;
})();
var statearr_50119_50189 = state_50064__$1;
(statearr_50119_50189[(2)] = null);

(statearr_50119_50189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (23))){
var inst_49981 = (state_50064[(23)]);
var inst_49983 = (state_50064[(26)]);
var inst_49985 = (state_50064[(24)]);
var inst_49977 = (state_50064[(19)]);
var inst_49980 = (state_50064[(25)]);
var inst_49988 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49990 = (function (){var all_files = inst_49977;
var res_SINGLEQUOTE_ = inst_49980;
var res = inst_49981;
var files_not_loaded = inst_49983;
var dependencies_that_loaded = inst_49985;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49981,inst_49983,inst_49985,inst_49977,inst_49980,inst_49988,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49989){
var map__50120 = p__49989;
var map__50120__$1 = ((((!((map__50120 == null)))?((((map__50120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50120):map__50120);
var request_url = cljs.core.get.call(null,map__50120__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49981,inst_49983,inst_49985,inst_49977,inst_49980,inst_49988,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49991 = cljs.core.reverse.call(null,inst_49985);
var inst_49992 = cljs.core.map.call(null,inst_49990,inst_49991);
var inst_49993 = cljs.core.pr_str.call(null,inst_49992);
var inst_49994 = figwheel.client.utils.log.call(null,inst_49993);
var state_50064__$1 = (function (){var statearr_50122 = state_50064;
(statearr_50122[(31)] = inst_49988);

return statearr_50122;
})();
var statearr_50123_50190 = state_50064__$1;
(statearr_50123_50190[(2)] = inst_49994);

(statearr_50123_50190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (35))){
var state_50064__$1 = state_50064;
var statearr_50124_50191 = state_50064__$1;
(statearr_50124_50191[(2)] = true);

(statearr_50124_50191[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (19))){
var inst_49967 = (state_50064[(12)]);
var inst_49973 = figwheel.client.file_reloading.expand_files.call(null,inst_49967);
var state_50064__$1 = state_50064;
var statearr_50125_50192 = state_50064__$1;
(statearr_50125_50192[(2)] = inst_49973);

(statearr_50125_50192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (11))){
var state_50064__$1 = state_50064;
var statearr_50126_50193 = state_50064__$1;
(statearr_50126_50193[(2)] = null);

(statearr_50126_50193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (9))){
var inst_49956 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50127_50194 = state_50064__$1;
(statearr_50127_50194[(2)] = inst_49956);

(statearr_50127_50194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (5))){
var inst_49926 = (state_50064[(9)]);
var inst_49927 = (state_50064[(10)]);
var inst_49929 = (inst_49927 < inst_49926);
var inst_49930 = inst_49929;
var state_50064__$1 = state_50064;
if(cljs.core.truth_(inst_49930)){
var statearr_50128_50195 = state_50064__$1;
(statearr_50128_50195[(1)] = (7));

} else {
var statearr_50129_50196 = state_50064__$1;
(statearr_50129_50196[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (14))){
var inst_49937 = (state_50064[(22)]);
var inst_49946 = cljs.core.first.call(null,inst_49937);
var inst_49947 = figwheel.client.file_reloading.eval_body.call(null,inst_49946,opts);
var inst_49948 = cljs.core.next.call(null,inst_49937);
var inst_49924 = inst_49948;
var inst_49925 = null;
var inst_49926 = (0);
var inst_49927 = (0);
var state_50064__$1 = (function (){var statearr_50130 = state_50064;
(statearr_50130[(7)] = inst_49925);

(statearr_50130[(8)] = inst_49924);

(statearr_50130[(9)] = inst_49926);

(statearr_50130[(10)] = inst_49927);

(statearr_50130[(32)] = inst_49947);

return statearr_50130;
})();
var statearr_50131_50197 = state_50064__$1;
(statearr_50131_50197[(2)] = null);

(statearr_50131_50197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (45))){
var state_50064__$1 = state_50064;
var statearr_50132_50198 = state_50064__$1;
(statearr_50132_50198[(2)] = null);

(statearr_50132_50198[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (26))){
var inst_49981 = (state_50064[(23)]);
var inst_49983 = (state_50064[(26)]);
var inst_49985 = (state_50064[(24)]);
var inst_49977 = (state_50064[(19)]);
var inst_49980 = (state_50064[(25)]);
var inst_50000 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50002 = (function (){var all_files = inst_49977;
var res_SINGLEQUOTE_ = inst_49980;
var res = inst_49981;
var files_not_loaded = inst_49983;
var dependencies_that_loaded = inst_49985;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49981,inst_49983,inst_49985,inst_49977,inst_49980,inst_50000,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50001){
var map__50133 = p__50001;
var map__50133__$1 = ((((!((map__50133 == null)))?((((map__50133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50133):map__50133);
var namespace = cljs.core.get.call(null,map__50133__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50133__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49981,inst_49983,inst_49985,inst_49977,inst_49980,inst_50000,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50003 = cljs.core.map.call(null,inst_50002,inst_49981);
var inst_50004 = cljs.core.pr_str.call(null,inst_50003);
var inst_50005 = figwheel.client.utils.log.call(null,inst_50004);
var inst_50006 = (function (){var all_files = inst_49977;
var res_SINGLEQUOTE_ = inst_49980;
var res = inst_49981;
var files_not_loaded = inst_49983;
var dependencies_that_loaded = inst_49985;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49981,inst_49983,inst_49985,inst_49977,inst_49980,inst_50000,inst_50002,inst_50003,inst_50004,inst_50005,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49981,inst_49983,inst_49985,inst_49977,inst_49980,inst_50000,inst_50002,inst_50003,inst_50004,inst_50005,state_val_50065,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50007 = setTimeout(inst_50006,(10));
var state_50064__$1 = (function (){var statearr_50135 = state_50064;
(statearr_50135[(33)] = inst_50005);

(statearr_50135[(34)] = inst_50000);

return statearr_50135;
})();
var statearr_50136_50199 = state_50064__$1;
(statearr_50136_50199[(2)] = inst_50007);

(statearr_50136_50199[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (16))){
var state_50064__$1 = state_50064;
var statearr_50137_50200 = state_50064__$1;
(statearr_50137_50200[(2)] = reload_dependents);

(statearr_50137_50200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (38))){
var inst_50017 = (state_50064[(16)]);
var inst_50035 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50017);
var state_50064__$1 = state_50064;
var statearr_50138_50201 = state_50064__$1;
(statearr_50138_50201[(2)] = inst_50035);

(statearr_50138_50201[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (30))){
var state_50064__$1 = state_50064;
var statearr_50139_50202 = state_50064__$1;
(statearr_50139_50202[(2)] = null);

(statearr_50139_50202[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (10))){
var inst_49937 = (state_50064[(22)]);
var inst_49939 = cljs.core.chunked_seq_QMARK_.call(null,inst_49937);
var state_50064__$1 = state_50064;
if(inst_49939){
var statearr_50140_50203 = state_50064__$1;
(statearr_50140_50203[(1)] = (13));

} else {
var statearr_50141_50204 = state_50064__$1;
(statearr_50141_50204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (18))){
var inst_49971 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
if(cljs.core.truth_(inst_49971)){
var statearr_50142_50205 = state_50064__$1;
(statearr_50142_50205[(1)] = (19));

} else {
var statearr_50143_50206 = state_50064__$1;
(statearr_50143_50206[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (42))){
var state_50064__$1 = state_50064;
var statearr_50144_50207 = state_50064__$1;
(statearr_50144_50207[(2)] = null);

(statearr_50144_50207[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (37))){
var inst_50030 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50145_50208 = state_50064__$1;
(statearr_50145_50208[(2)] = inst_50030);

(statearr_50145_50208[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (8))){
var inst_49937 = (state_50064[(22)]);
var inst_49924 = (state_50064[(8)]);
var inst_49937__$1 = cljs.core.seq.call(null,inst_49924);
var state_50064__$1 = (function (){var statearr_50146 = state_50064;
(statearr_50146[(22)] = inst_49937__$1);

return statearr_50146;
})();
if(inst_49937__$1){
var statearr_50147_50209 = state_50064__$1;
(statearr_50147_50209[(1)] = (10));

} else {
var statearr_50148_50210 = state_50064__$1;
(statearr_50148_50210[(1)] = (11));

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
});})(c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37737__auto__,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____0 = (function (){
var statearr_50149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50149[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__);

(statearr_50149[(1)] = (1));

return statearr_50149;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____1 = (function (state_50064){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_50064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e50150){if((e50150 instanceof Object)){
var ex__37741__auto__ = e50150;
var statearr_50151_50211 = state_50064;
(statearr_50151_50211[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50212 = state_50064;
state_50064 = G__50212;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__ = function(state_50064){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____1.call(this,state_50064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37827__auto__ = (function (){var statearr_50152 = f__37826__auto__.call(null);
(statearr_50152[(6)] = c__37825__auto__);

return statearr_50152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__,map__49909,map__49909__$1,opts,before_jsload,on_jsload,reload_dependents,map__49910,map__49910__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37825__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50215,link){
var map__50216 = p__50215;
var map__50216__$1 = ((((!((map__50216 == null)))?((((map__50216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50216):map__50216);
var file = cljs.core.get.call(null,map__50216__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__50216,map__50216__$1,file){
return (function (p1__50213_SHARP_,p2__50214_SHARP_){
if(cljs.core._EQ_.call(null,p1__50213_SHARP_,p2__50214_SHARP_)){
return p1__50213_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__50216,map__50216__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50219){
var map__50220 = p__50219;
var map__50220__$1 = ((((!((map__50220 == null)))?((((map__50220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50220):map__50220);
var match_length = cljs.core.get.call(null,map__50220__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50220__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50218_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50218_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50222_SHARP_,p2__50223_SHARP_){
return cljs.core.assoc.call(null,p1__50222_SHARP_,cljs.core.get.call(null,p2__50223_SHARP_,key),p2__50223_SHARP_);
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
var loaded_f_datas_50224 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50224);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50224);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50225,p__50226){
var map__50227 = p__50225;
var map__50227__$1 = ((((!((map__50227 == null)))?((((map__50227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50227):map__50227);
var on_cssload = cljs.core.get.call(null,map__50227__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50228 = p__50226;
var map__50228__$1 = ((((!((map__50228 == null)))?((((map__50228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50228):map__50228);
var files_msg = map__50228__$1;
var files = cljs.core.get.call(null,map__50228__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1514142717858