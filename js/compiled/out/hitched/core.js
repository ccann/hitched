// Compiled by ClojureScript 1.9.671 {}
goog.provide('hitched.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof hitched.core.app_state !== 'undefined'){
} else {
hitched.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello Chestnut!"], null));
}
hitched.core.menu_item = (function hitched$core$menu_item(var_args){
var args__34837__auto__ = [];
var len__34830__auto___46336 = arguments.length;
var i__34831__auto___46337 = (0);
while(true){
if((i__34831__auto___46337 < len__34830__auto___46336)){
args__34837__auto__.push((arguments[i__34831__auto___46337]));

var G__46338 = (i__34831__auto___46337 + (1));
i__34831__auto___46337 = G__46338;
continue;
} else {
}
break;
}

var argseq__34838__auto__ = ((((1) < args__34837__auto__.length))?(new cljs.core.IndexedSeq(args__34837__auto__.slice((1)),(0),null)):null);
return hitched.core.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34838__auto__);
});

hitched.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (label,p__46332){
var vec__46333 = p__46332;
var link = cljs.core.nth.call(null,vec__46333,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pure-menu-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var or__33705__auto__ = link;
if(cljs.core.truth_(or__33705__auto__)){
return or__33705__auto__;
} else {
return "#";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"pure-menu-link menu-font"], null),clojure.string.lower_case.call(null,label)], null)], null);
});

hitched.core.menu_item.cljs$lang$maxFixedArity = (1);

hitched.core.menu_item.cljs$lang$applyTo = (function (seq46330){
var G__46331 = cljs.core.first.call(null,seq46330);
var seq46330__$1 = cljs.core.next.call(null,seq46330);
return hitched.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__46331,seq46330__$1);
});

hitched.core.header_menu = (function hitched$core$header_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pure-menu-scrollable pure-menu-horizontal pure-menu center-text"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pure-menu-list"], null),hitched.core.menu_item.call(null,"Home"),hitched.core.menu_item.call(null,"RSVP"),hitched.core.menu_item.call(null,"Photos"),hitched.core.menu_item.call(null,"Events"),hitched.core.menu_item.call(null,"Wedding Party"),hitched.core.menu_item.call(null,"Travel"),hitched.core.menu_item.call(null,"Gift Registry")], null)], null);
});
hitched.core.names = (function hitched$core$names(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"center-text script-font"], null),"Cody & Caroline"], null)], null);
});
hitched.core.spacer = (function hitched$core$spacer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"spacer"], null)], null);
});
hitched.core.page = (function hitched$core$page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),hitched.core.names.call(null),hitched.core.header_menu.call(null),hitched.core.spacer.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"img-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"lander.jpg",new cljs.core.Keyword(null,"class","class",-2030961996),"lander-img"], null)], null)], null)], null);
});
hitched.core.render = (function hitched$core$render(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hitched.core.page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map?rel=1514142713619