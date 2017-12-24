// Compiled by ClojureScript 1.9.671 {}
goog.provide('hitched.components.ui');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('hitched.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
hitched.components.ui.UIComponent = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
hitched.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__34331__auto__,k__34332__auto__){
var self__ = this;
var this__34331__auto____$1 = this;
return this__34331__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__34332__auto__,null);
});

hitched.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__34333__auto__,k46433,else__34334__auto__){
var self__ = this;
var this__34333__auto____$1 = this;
var G__46437 = k46433;
switch (G__46437) {
default:
return cljs.core.get.call(null,self__.__extmap,k46433,else__34334__auto__);

}
});

hitched.components.ui.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__34345__auto__,writer__34346__auto__,opts__34347__auto__){
var self__ = this;
var this__34345__auto____$1 = this;
var pr_pair__34348__auto__ = ((function (this__34345__auto____$1){
return (function (keyval__34349__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__34346__auto__,cljs.core.pr_writer,""," ","",opts__34347__auto__,keyval__34349__auto__);
});})(this__34345__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__34346__auto__,pr_pair__34348__auto__,"#hitched.components.ui.UIComponent{",", ","}",opts__34347__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

hitched.components.ui.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46432){
var self__ = this;
var G__46432__$1 = this;
return (new cljs.core.RecordIter((0),G__46432__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitched.components.ui.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__34329__auto__){
var self__ = this;
var this__34329__auto____$1 = this;
return self__.__meta;
});

hitched.components.ui.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__34326__auto__){
var self__ = this;
var this__34326__auto____$1 = this;
return (new hitched.components.ui.UIComponent(self__.__meta,self__.__extmap,self__.__hash));
});

hitched.components.ui.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__34335__auto__){
var self__ = this;
var this__34335__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

hitched.components.ui.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__34327__auto__){
var self__ = this;
var this__34327__auto____$1 = this;
var h__34145__auto__ = self__.__hash;
if(!((h__34145__auto__ == null))){
return h__34145__auto__;
} else {
var h__34145__auto____$1 = ((function (h__34145__auto__,this__34327__auto____$1){
return (function (coll__34328__auto__){
return (107922272 ^ cljs.core.hash_unordered_coll.call(null,coll__34328__auto__));
});})(h__34145__auto__,this__34327__auto____$1))
.call(null,this__34327__auto____$1);
self__.__hash = h__34145__auto____$1;

return h__34145__auto____$1;
}
});

hitched.components.ui.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46434,other46435){
var self__ = this;
var this46434__$1 = this;
return (!((other46435 == null))) && ((this46434__$1.constructor === other46435.constructor)) && (cljs.core._EQ_.call(null,this46434__$1.__extmap,other46435.__extmap));
});

hitched.components.ui.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__34340__auto__,k__34341__auto__){
var self__ = this;
var this__34340__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__34341__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__34340__auto____$1),self__.__meta),k__34341__auto__);
} else {
return (new hitched.components.ui.UIComponent(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__34341__auto__)),null));
}
});

hitched.components.ui.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__34338__auto__,k__34339__auto__,G__46432){
var self__ = this;
var this__34338__auto____$1 = this;
var pred__46438 = cljs.core.keyword_identical_QMARK_;
var expr__46439 = k__34339__auto__;
return (new hitched.components.ui.UIComponent(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__34339__auto__,G__46432),null));
});

hitched.components.ui.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__34343__auto__){
var self__ = this;
var this__34343__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

hitched.components.ui.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__34330__auto__,G__46432){
var self__ = this;
var this__34330__auto____$1 = this;
return (new hitched.components.ui.UIComponent(G__46432,self__.__extmap,self__.__hash));
});

hitched.components.ui.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__34336__auto__,entry__34337__auto__){
var self__ = this;
var this__34336__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__34337__auto__)){
return this__34336__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__34337__auto__,(0)),cljs.core._nth.call(null,entry__34337__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__34336__auto____$1,entry__34337__auto__);
}
});

hitched.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

hitched.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
hitched.core.render.call(null);

return component__$1;
});

hitched.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

hitched.components.ui.UIComponent.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

hitched.components.ui.UIComponent.cljs$lang$type = true;

hitched.components.ui.UIComponent.cljs$lang$ctorPrSeq = (function (this__34367__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitched.components.ui/UIComponent");
});

hitched.components.ui.UIComponent.cljs$lang$ctorPrWriter = (function (this__34367__auto__,writer__34368__auto__){
return cljs.core._write.call(null,writer__34368__auto__,"hitched.components.ui/UIComponent");
});

hitched.components.ui.__GT_UIComponent = (function hitched$components$ui$__GT_UIComponent(){
return (new hitched.components.ui.UIComponent(null,null,null));
});

hitched.components.ui.map__GT_UIComponent = (function hitched$components$ui$map__GT_UIComponent(G__46436){
return (new hitched.components.ui.UIComponent(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__46436)),null));
});

hitched.components.ui.new_ui_component = (function hitched$components$ui$new_ui_component(){
return hitched.components.ui.map__GT_UIComponent.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=ui.js.map?rel=1514142713910