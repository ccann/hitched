// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37871 = arguments.length;
switch (G__37871) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37872 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37872 = (function (f,blockable,meta37873){
this.f = f;
this.blockable = blockable;
this.meta37873 = meta37873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37874,meta37873__$1){
var self__ = this;
var _37874__$1 = this;
return (new cljs.core.async.t_cljs$core$async37872(self__.f,self__.blockable,meta37873__$1));
});

cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37874){
var self__ = this;
var _37874__$1 = this;
return self__.meta37873;
});

cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37873","meta37873",1239507985,null)], null);
});

cljs.core.async.t_cljs$core$async37872.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37872";

cljs.core.async.t_cljs$core$async37872.cljs$lang$ctorPrWriter = (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async37872");
});

cljs.core.async.__GT_t_cljs$core$async37872 = (function cljs$core$async$__GT_t_cljs$core$async37872(f__$1,blockable__$1,meta37873){
return (new cljs.core.async.t_cljs$core$async37872(f__$1,blockable__$1,meta37873));
});

}

return (new cljs.core.async.t_cljs$core$async37872(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37878 = arguments.length;
switch (G__37878) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37881 = arguments.length;
switch (G__37881) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37884 = arguments.length;
switch (G__37884) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37886 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37886);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37886,ret){
return (function (){
return fn1.call(null,val_37886);
});})(val_37886,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37888 = arguments.length;
switch (G__37888) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__34629__auto___37890 = n;
var x_37891 = (0);
while(true){
if((x_37891 < n__34629__auto___37890)){
(a[x_37891] = (0));

var G__37892 = (x_37891 + (1));
x_37891 = G__37892;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37893 = (i + (1));
i = G__37893;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37894 = (function (flag,meta37895){
this.flag = flag;
this.meta37895 = meta37895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37896,meta37895__$1){
var self__ = this;
var _37896__$1 = this;
return (new cljs.core.async.t_cljs$core$async37894(self__.flag,meta37895__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37896){
var self__ = this;
var _37896__$1 = this;
return self__.meta37895;
});})(flag))
;

cljs.core.async.t_cljs$core$async37894.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37894.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37895","meta37895",-1466027268,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37894";

cljs.core.async.t_cljs$core$async37894.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async37894");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37894 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37894(flag__$1,meta37895){
return (new cljs.core.async.t_cljs$core$async37894(flag__$1,meta37895));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37894(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37897 = (function (flag,cb,meta37898){
this.flag = flag;
this.cb = cb;
this.meta37898 = meta37898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37899,meta37898__$1){
var self__ = this;
var _37899__$1 = this;
return (new cljs.core.async.t_cljs$core$async37897(self__.flag,self__.cb,meta37898__$1));
});

cljs.core.async.t_cljs$core$async37897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37899){
var self__ = this;
var _37899__$1 = this;
return self__.meta37898;
});

cljs.core.async.t_cljs$core$async37897.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37897.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37898","meta37898",2099663850,null)], null);
});

cljs.core.async.t_cljs$core$async37897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37897";

cljs.core.async.t_cljs$core$async37897.cljs$lang$ctorPrWriter = (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async37897");
});

cljs.core.async.__GT_t_cljs$core$async37897 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37897(flag__$1,cb__$1,meta37898){
return (new cljs.core.async.t_cljs$core$async37897(flag__$1,cb__$1,meta37898));
});

}

return (new cljs.core.async.t_cljs$core$async37897(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37900_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37900_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37901_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37901_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__33705__auto__ = wport;
if(cljs.core.truth_(or__33705__auto__)){
return or__33705__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37902 = (i + (1));
i = G__37902;
continue;
}
} else {
return null;
}
break;
}
})();
var or__33705__auto__ = ret;
if(cljs.core.truth_(or__33705__auto__)){
return or__33705__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__33693__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__33693__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__33693__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__34837__auto__ = [];
var len__34830__auto___37908 = arguments.length;
var i__34831__auto___37909 = (0);
while(true){
if((i__34831__auto___37909 < len__34830__auto___37908)){
args__34837__auto__.push((arguments[i__34831__auto___37909]));

var G__37910 = (i__34831__auto___37909 + (1));
i__34831__auto___37909 = G__37910;
continue;
} else {
}
break;
}

var argseq__34838__auto__ = ((((1) < args__34837__auto__.length))?(new cljs.core.IndexedSeq(args__34837__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34838__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37905){
var map__37906 = p__37905;
var map__37906__$1 = ((((!((map__37906 == null)))?((((map__37906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37906):map__37906);
var opts = map__37906__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37903){
var G__37904 = cljs.core.first.call(null,seq37903);
var seq37903__$1 = cljs.core.next.call(null,seq37903);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37904,seq37903__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37912 = arguments.length;
switch (G__37912) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37825__auto___37958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___37958){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___37958){
return (function (state_37936){
var state_val_37937 = (state_37936[(1)]);
if((state_val_37937 === (7))){
var inst_37932 = (state_37936[(2)]);
var state_37936__$1 = state_37936;
var statearr_37938_37959 = state_37936__$1;
(statearr_37938_37959[(2)] = inst_37932);

(statearr_37938_37959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37937 === (1))){
var state_37936__$1 = state_37936;
var statearr_37939_37960 = state_37936__$1;
(statearr_37939_37960[(2)] = null);

(statearr_37939_37960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37937 === (4))){
var inst_37915 = (state_37936[(7)]);
var inst_37915__$1 = (state_37936[(2)]);
var inst_37916 = (inst_37915__$1 == null);
var state_37936__$1 = (function (){var statearr_37940 = state_37936;
(statearr_37940[(7)] = inst_37915__$1);

return statearr_37940;
})();
if(cljs.core.truth_(inst_37916)){
var statearr_37941_37961 = state_37936__$1;
(statearr_37941_37961[(1)] = (5));

} else {
var statearr_37942_37962 = state_37936__$1;
(statearr_37942_37962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37937 === (13))){
var state_37936__$1 = state_37936;
var statearr_37943_37963 = state_37936__$1;
(statearr_37943_37963[(2)] = null);

(statearr_37943_37963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37937 === (6))){
var inst_37915 = (state_37936[(7)]);
var state_37936__$1 = state_37936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37936__$1,(11),to,inst_37915);
} else {
if((state_val_37937 === (3))){
var inst_37934 = (state_37936[(2)]);
var state_37936__$1 = state_37936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37936__$1,inst_37934);
} else {
if((state_val_37937 === (12))){
var state_37936__$1 = state_37936;
var statearr_37944_37964 = state_37936__$1;
(statearr_37944_37964[(2)] = null);

(statearr_37944_37964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37937 === (2))){
var state_37936__$1 = state_37936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37936__$1,(4),from);
} else {
if((state_val_37937 === (11))){
var inst_37925 = (state_37936[(2)]);
var state_37936__$1 = state_37936;
if(cljs.core.truth_(inst_37925)){
var statearr_37945_37965 = state_37936__$1;
(statearr_37945_37965[(1)] = (12));

} else {
var statearr_37946_37966 = state_37936__$1;
(statearr_37946_37966[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37937 === (9))){
var state_37936__$1 = state_37936;
var statearr_37947_37967 = state_37936__$1;
(statearr_37947_37967[(2)] = null);

(statearr_37947_37967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37937 === (5))){
var state_37936__$1 = state_37936;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37948_37968 = state_37936__$1;
(statearr_37948_37968[(1)] = (8));

} else {
var statearr_37949_37969 = state_37936__$1;
(statearr_37949_37969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37937 === (14))){
var inst_37930 = (state_37936[(2)]);
var state_37936__$1 = state_37936;
var statearr_37950_37970 = state_37936__$1;
(statearr_37950_37970[(2)] = inst_37930);

(statearr_37950_37970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37937 === (10))){
var inst_37922 = (state_37936[(2)]);
var state_37936__$1 = state_37936;
var statearr_37951_37971 = state_37936__$1;
(statearr_37951_37971[(2)] = inst_37922);

(statearr_37951_37971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37937 === (8))){
var inst_37919 = cljs.core.async.close_BANG_.call(null,to);
var state_37936__$1 = state_37936;
var statearr_37952_37972 = state_37936__$1;
(statearr_37952_37972[(2)] = inst_37919);

(statearr_37952_37972[(1)] = (10));


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
});})(c__37825__auto___37958))
;
return ((function (switch__37737__auto__,c__37825__auto___37958){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_37953 = [null,null,null,null,null,null,null,null];
(statearr_37953[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_37953[(1)] = (1));

return statearr_37953;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_37936){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_37936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e37954){if((e37954 instanceof Object)){
var ex__37741__auto__ = e37954;
var statearr_37955_37973 = state_37936;
(statearr_37955_37973[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37974 = state_37936;
state_37936 = G__37974;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_37936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_37936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___37958))
})();
var state__37827__auto__ = (function (){var statearr_37956 = f__37826__auto__.call(null);
(statearr_37956[(6)] = c__37825__auto___37958);

return statearr_37956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___37958))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37975){
var vec__37976 = p__37975;
var v = cljs.core.nth.call(null,vec__37976,(0),null);
var p = cljs.core.nth.call(null,vec__37976,(1),null);
var job = vec__37976;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37825__auto___38147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___38147,res,vec__37976,v,p,job,jobs,results){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___38147,res,vec__37976,v,p,job,jobs,results){
return (function (state_37983){
var state_val_37984 = (state_37983[(1)]);
if((state_val_37984 === (1))){
var state_37983__$1 = state_37983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37983__$1,(2),res,v);
} else {
if((state_val_37984 === (2))){
var inst_37980 = (state_37983[(2)]);
var inst_37981 = cljs.core.async.close_BANG_.call(null,res);
var state_37983__$1 = (function (){var statearr_37985 = state_37983;
(statearr_37985[(7)] = inst_37980);

return statearr_37985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37983__$1,inst_37981);
} else {
return null;
}
}
});})(c__37825__auto___38147,res,vec__37976,v,p,job,jobs,results))
;
return ((function (switch__37737__auto__,c__37825__auto___38147,res,vec__37976,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0 = (function (){
var statearr_37986 = [null,null,null,null,null,null,null,null];
(statearr_37986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__);

(statearr_37986[(1)] = (1));

return statearr_37986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1 = (function (state_37983){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_37983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e37987){if((e37987 instanceof Object)){
var ex__37741__auto__ = e37987;
var statearr_37988_38148 = state_37983;
(statearr_37988_38148[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38149 = state_37983;
state_37983 = G__38149;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = function(state_37983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1.call(this,state_37983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___38147,res,vec__37976,v,p,job,jobs,results))
})();
var state__37827__auto__ = (function (){var statearr_37989 = f__37826__auto__.call(null);
(statearr_37989[(6)] = c__37825__auto___38147);

return statearr_37989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___38147,res,vec__37976,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37990){
var vec__37991 = p__37990;
var v = cljs.core.nth.call(null,vec__37991,(0),null);
var p = cljs.core.nth.call(null,vec__37991,(1),null);
var job = vec__37991;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__34629__auto___38150 = n;
var __38151 = (0);
while(true){
if((__38151 < n__34629__auto___38150)){
var G__37994_38152 = type;
var G__37994_38153__$1 = (((G__37994_38152 instanceof cljs.core.Keyword))?G__37994_38152.fqn:null);
switch (G__37994_38153__$1) {
case "compute":
var c__37825__auto___38155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38151,c__37825__auto___38155,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (__38151,c__37825__auto___38155,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async){
return (function (state_38007){
var state_val_38008 = (state_38007[(1)]);
if((state_val_38008 === (1))){
var state_38007__$1 = state_38007;
var statearr_38009_38156 = state_38007__$1;
(statearr_38009_38156[(2)] = null);

(statearr_38009_38156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38008 === (2))){
var state_38007__$1 = state_38007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38007__$1,(4),jobs);
} else {
if((state_val_38008 === (3))){
var inst_38005 = (state_38007[(2)]);
var state_38007__$1 = state_38007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38007__$1,inst_38005);
} else {
if((state_val_38008 === (4))){
var inst_37997 = (state_38007[(2)]);
var inst_37998 = process.call(null,inst_37997);
var state_38007__$1 = state_38007;
if(cljs.core.truth_(inst_37998)){
var statearr_38010_38157 = state_38007__$1;
(statearr_38010_38157[(1)] = (5));

} else {
var statearr_38011_38158 = state_38007__$1;
(statearr_38011_38158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38008 === (5))){
var state_38007__$1 = state_38007;
var statearr_38012_38159 = state_38007__$1;
(statearr_38012_38159[(2)] = null);

(statearr_38012_38159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38008 === (6))){
var state_38007__$1 = state_38007;
var statearr_38013_38160 = state_38007__$1;
(statearr_38013_38160[(2)] = null);

(statearr_38013_38160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38008 === (7))){
var inst_38003 = (state_38007[(2)]);
var state_38007__$1 = state_38007;
var statearr_38014_38161 = state_38007__$1;
(statearr_38014_38161[(2)] = inst_38003);

(statearr_38014_38161[(1)] = (3));


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
});})(__38151,c__37825__auto___38155,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async))
;
return ((function (__38151,switch__37737__auto__,c__37825__auto___38155,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0 = (function (){
var statearr_38015 = [null,null,null,null,null,null,null];
(statearr_38015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__);

(statearr_38015[(1)] = (1));

return statearr_38015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1 = (function (state_38007){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e38016){if((e38016 instanceof Object)){
var ex__37741__auto__ = e38016;
var statearr_38017_38162 = state_38007;
(statearr_38017_38162[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38163 = state_38007;
state_38007 = G__38163;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = function(state_38007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1.call(this,state_38007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__;
})()
;})(__38151,switch__37737__auto__,c__37825__auto___38155,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async))
})();
var state__37827__auto__ = (function (){var statearr_38018 = f__37826__auto__.call(null);
(statearr_38018[(6)] = c__37825__auto___38155);

return statearr_38018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(__38151,c__37825__auto___38155,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async))
);


break;
case "async":
var c__37825__auto___38164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38151,c__37825__auto___38164,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (__38151,c__37825__auto___38164,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async){
return (function (state_38031){
var state_val_38032 = (state_38031[(1)]);
if((state_val_38032 === (1))){
var state_38031__$1 = state_38031;
var statearr_38033_38165 = state_38031__$1;
(statearr_38033_38165[(2)] = null);

(statearr_38033_38165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38032 === (2))){
var state_38031__$1 = state_38031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38031__$1,(4),jobs);
} else {
if((state_val_38032 === (3))){
var inst_38029 = (state_38031[(2)]);
var state_38031__$1 = state_38031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38031__$1,inst_38029);
} else {
if((state_val_38032 === (4))){
var inst_38021 = (state_38031[(2)]);
var inst_38022 = async.call(null,inst_38021);
var state_38031__$1 = state_38031;
if(cljs.core.truth_(inst_38022)){
var statearr_38034_38166 = state_38031__$1;
(statearr_38034_38166[(1)] = (5));

} else {
var statearr_38035_38167 = state_38031__$1;
(statearr_38035_38167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38032 === (5))){
var state_38031__$1 = state_38031;
var statearr_38036_38168 = state_38031__$1;
(statearr_38036_38168[(2)] = null);

(statearr_38036_38168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38032 === (6))){
var state_38031__$1 = state_38031;
var statearr_38037_38169 = state_38031__$1;
(statearr_38037_38169[(2)] = null);

(statearr_38037_38169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38032 === (7))){
var inst_38027 = (state_38031[(2)]);
var state_38031__$1 = state_38031;
var statearr_38038_38170 = state_38031__$1;
(statearr_38038_38170[(2)] = inst_38027);

(statearr_38038_38170[(1)] = (3));


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
});})(__38151,c__37825__auto___38164,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async))
;
return ((function (__38151,switch__37737__auto__,c__37825__auto___38164,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0 = (function (){
var statearr_38039 = [null,null,null,null,null,null,null];
(statearr_38039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__);

(statearr_38039[(1)] = (1));

return statearr_38039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1 = (function (state_38031){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e38040){if((e38040 instanceof Object)){
var ex__37741__auto__ = e38040;
var statearr_38041_38171 = state_38031;
(statearr_38041_38171[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38172 = state_38031;
state_38031 = G__38172;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = function(state_38031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1.call(this,state_38031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__;
})()
;})(__38151,switch__37737__auto__,c__37825__auto___38164,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async))
})();
var state__37827__auto__ = (function (){var statearr_38042 = f__37826__auto__.call(null);
(statearr_38042[(6)] = c__37825__auto___38164);

return statearr_38042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(__38151,c__37825__auto___38164,G__37994_38152,G__37994_38153__$1,n__34629__auto___38150,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37994_38153__$1)].join('')));

}

var G__38173 = (__38151 + (1));
__38151 = G__38173;
continue;
} else {
}
break;
}

var c__37825__auto___38174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___38174,jobs,results,process,async){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___38174,jobs,results,process,async){
return (function (state_38064){
var state_val_38065 = (state_38064[(1)]);
if((state_val_38065 === (1))){
var state_38064__$1 = state_38064;
var statearr_38066_38175 = state_38064__$1;
(statearr_38066_38175[(2)] = null);

(statearr_38066_38175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (2))){
var state_38064__$1 = state_38064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38064__$1,(4),from);
} else {
if((state_val_38065 === (3))){
var inst_38062 = (state_38064[(2)]);
var state_38064__$1 = state_38064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38064__$1,inst_38062);
} else {
if((state_val_38065 === (4))){
var inst_38045 = (state_38064[(7)]);
var inst_38045__$1 = (state_38064[(2)]);
var inst_38046 = (inst_38045__$1 == null);
var state_38064__$1 = (function (){var statearr_38067 = state_38064;
(statearr_38067[(7)] = inst_38045__$1);

return statearr_38067;
})();
if(cljs.core.truth_(inst_38046)){
var statearr_38068_38176 = state_38064__$1;
(statearr_38068_38176[(1)] = (5));

} else {
var statearr_38069_38177 = state_38064__$1;
(statearr_38069_38177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (5))){
var inst_38048 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38064__$1 = state_38064;
var statearr_38070_38178 = state_38064__$1;
(statearr_38070_38178[(2)] = inst_38048);

(statearr_38070_38178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (6))){
var inst_38050 = (state_38064[(8)]);
var inst_38045 = (state_38064[(7)]);
var inst_38050__$1 = cljs.core.async.chan.call(null,(1));
var inst_38051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38052 = [inst_38045,inst_38050__$1];
var inst_38053 = (new cljs.core.PersistentVector(null,2,(5),inst_38051,inst_38052,null));
var state_38064__$1 = (function (){var statearr_38071 = state_38064;
(statearr_38071[(8)] = inst_38050__$1);

return statearr_38071;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38064__$1,(8),jobs,inst_38053);
} else {
if((state_val_38065 === (7))){
var inst_38060 = (state_38064[(2)]);
var state_38064__$1 = state_38064;
var statearr_38072_38179 = state_38064__$1;
(statearr_38072_38179[(2)] = inst_38060);

(statearr_38072_38179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (8))){
var inst_38050 = (state_38064[(8)]);
var inst_38055 = (state_38064[(2)]);
var state_38064__$1 = (function (){var statearr_38073 = state_38064;
(statearr_38073[(9)] = inst_38055);

return statearr_38073;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38064__$1,(9),results,inst_38050);
} else {
if((state_val_38065 === (9))){
var inst_38057 = (state_38064[(2)]);
var state_38064__$1 = (function (){var statearr_38074 = state_38064;
(statearr_38074[(10)] = inst_38057);

return statearr_38074;
})();
var statearr_38075_38180 = state_38064__$1;
(statearr_38075_38180[(2)] = null);

(statearr_38075_38180[(1)] = (2));


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
});})(c__37825__auto___38174,jobs,results,process,async))
;
return ((function (switch__37737__auto__,c__37825__auto___38174,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0 = (function (){
var statearr_38076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38076[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__);

(statearr_38076[(1)] = (1));

return statearr_38076;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1 = (function (state_38064){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e38077){if((e38077 instanceof Object)){
var ex__37741__auto__ = e38077;
var statearr_38078_38181 = state_38064;
(statearr_38078_38181[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38182 = state_38064;
state_38064 = G__38182;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = function(state_38064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1.call(this,state_38064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___38174,jobs,results,process,async))
})();
var state__37827__auto__ = (function (){var statearr_38079 = f__37826__auto__.call(null);
(statearr_38079[(6)] = c__37825__auto___38174);

return statearr_38079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___38174,jobs,results,process,async))
);


var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__,jobs,results,process,async){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__,jobs,results,process,async){
return (function (state_38117){
var state_val_38118 = (state_38117[(1)]);
if((state_val_38118 === (7))){
var inst_38113 = (state_38117[(2)]);
var state_38117__$1 = state_38117;
var statearr_38119_38183 = state_38117__$1;
(statearr_38119_38183[(2)] = inst_38113);

(statearr_38119_38183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (20))){
var state_38117__$1 = state_38117;
var statearr_38120_38184 = state_38117__$1;
(statearr_38120_38184[(2)] = null);

(statearr_38120_38184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (1))){
var state_38117__$1 = state_38117;
var statearr_38121_38185 = state_38117__$1;
(statearr_38121_38185[(2)] = null);

(statearr_38121_38185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (4))){
var inst_38082 = (state_38117[(7)]);
var inst_38082__$1 = (state_38117[(2)]);
var inst_38083 = (inst_38082__$1 == null);
var state_38117__$1 = (function (){var statearr_38122 = state_38117;
(statearr_38122[(7)] = inst_38082__$1);

return statearr_38122;
})();
if(cljs.core.truth_(inst_38083)){
var statearr_38123_38186 = state_38117__$1;
(statearr_38123_38186[(1)] = (5));

} else {
var statearr_38124_38187 = state_38117__$1;
(statearr_38124_38187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (15))){
var inst_38095 = (state_38117[(8)]);
var state_38117__$1 = state_38117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38117__$1,(18),to,inst_38095);
} else {
if((state_val_38118 === (21))){
var inst_38108 = (state_38117[(2)]);
var state_38117__$1 = state_38117;
var statearr_38125_38188 = state_38117__$1;
(statearr_38125_38188[(2)] = inst_38108);

(statearr_38125_38188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (13))){
var inst_38110 = (state_38117[(2)]);
var state_38117__$1 = (function (){var statearr_38126 = state_38117;
(statearr_38126[(9)] = inst_38110);

return statearr_38126;
})();
var statearr_38127_38189 = state_38117__$1;
(statearr_38127_38189[(2)] = null);

(statearr_38127_38189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (6))){
var inst_38082 = (state_38117[(7)]);
var state_38117__$1 = state_38117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38117__$1,(11),inst_38082);
} else {
if((state_val_38118 === (17))){
var inst_38103 = (state_38117[(2)]);
var state_38117__$1 = state_38117;
if(cljs.core.truth_(inst_38103)){
var statearr_38128_38190 = state_38117__$1;
(statearr_38128_38190[(1)] = (19));

} else {
var statearr_38129_38191 = state_38117__$1;
(statearr_38129_38191[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (3))){
var inst_38115 = (state_38117[(2)]);
var state_38117__$1 = state_38117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38117__$1,inst_38115);
} else {
if((state_val_38118 === (12))){
var inst_38092 = (state_38117[(10)]);
var state_38117__$1 = state_38117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38117__$1,(14),inst_38092);
} else {
if((state_val_38118 === (2))){
var state_38117__$1 = state_38117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38117__$1,(4),results);
} else {
if((state_val_38118 === (19))){
var state_38117__$1 = state_38117;
var statearr_38130_38192 = state_38117__$1;
(statearr_38130_38192[(2)] = null);

(statearr_38130_38192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (11))){
var inst_38092 = (state_38117[(2)]);
var state_38117__$1 = (function (){var statearr_38131 = state_38117;
(statearr_38131[(10)] = inst_38092);

return statearr_38131;
})();
var statearr_38132_38193 = state_38117__$1;
(statearr_38132_38193[(2)] = null);

(statearr_38132_38193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (9))){
var state_38117__$1 = state_38117;
var statearr_38133_38194 = state_38117__$1;
(statearr_38133_38194[(2)] = null);

(statearr_38133_38194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (5))){
var state_38117__$1 = state_38117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38134_38195 = state_38117__$1;
(statearr_38134_38195[(1)] = (8));

} else {
var statearr_38135_38196 = state_38117__$1;
(statearr_38135_38196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (14))){
var inst_38097 = (state_38117[(11)]);
var inst_38095 = (state_38117[(8)]);
var inst_38095__$1 = (state_38117[(2)]);
var inst_38096 = (inst_38095__$1 == null);
var inst_38097__$1 = cljs.core.not.call(null,inst_38096);
var state_38117__$1 = (function (){var statearr_38136 = state_38117;
(statearr_38136[(11)] = inst_38097__$1);

(statearr_38136[(8)] = inst_38095__$1);

return statearr_38136;
})();
if(inst_38097__$1){
var statearr_38137_38197 = state_38117__$1;
(statearr_38137_38197[(1)] = (15));

} else {
var statearr_38138_38198 = state_38117__$1;
(statearr_38138_38198[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (16))){
var inst_38097 = (state_38117[(11)]);
var state_38117__$1 = state_38117;
var statearr_38139_38199 = state_38117__$1;
(statearr_38139_38199[(2)] = inst_38097);

(statearr_38139_38199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (10))){
var inst_38089 = (state_38117[(2)]);
var state_38117__$1 = state_38117;
var statearr_38140_38200 = state_38117__$1;
(statearr_38140_38200[(2)] = inst_38089);

(statearr_38140_38200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (18))){
var inst_38100 = (state_38117[(2)]);
var state_38117__$1 = state_38117;
var statearr_38141_38201 = state_38117__$1;
(statearr_38141_38201[(2)] = inst_38100);

(statearr_38141_38201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38118 === (8))){
var inst_38086 = cljs.core.async.close_BANG_.call(null,to);
var state_38117__$1 = state_38117;
var statearr_38142_38202 = state_38117__$1;
(statearr_38142_38202[(2)] = inst_38086);

(statearr_38142_38202[(1)] = (10));


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
});})(c__37825__auto__,jobs,results,process,async))
;
return ((function (switch__37737__auto__,c__37825__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0 = (function (){
var statearr_38143 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__);

(statearr_38143[(1)] = (1));

return statearr_38143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1 = (function (state_38117){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e38144){if((e38144 instanceof Object)){
var ex__37741__auto__ = e38144;
var statearr_38145_38203 = state_38117;
(statearr_38145_38203[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38204 = state_38117;
state_38117 = G__38204;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = function(state_38117){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1.call(this,state_38117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__,jobs,results,process,async))
})();
var state__37827__auto__ = (function (){var statearr_38146 = f__37826__auto__.call(null);
(statearr_38146[(6)] = c__37825__auto__);

return statearr_38146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__,jobs,results,process,async))
);

return c__37825__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38206 = arguments.length;
switch (G__38206) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38209 = arguments.length;
switch (G__38209) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38212 = arguments.length;
switch (G__38212) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37825__auto___38261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___38261,tc,fc){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___38261,tc,fc){
return (function (state_38238){
var state_val_38239 = (state_38238[(1)]);
if((state_val_38239 === (7))){
var inst_38234 = (state_38238[(2)]);
var state_38238__$1 = state_38238;
var statearr_38240_38262 = state_38238__$1;
(statearr_38240_38262[(2)] = inst_38234);

(statearr_38240_38262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38239 === (1))){
var state_38238__$1 = state_38238;
var statearr_38241_38263 = state_38238__$1;
(statearr_38241_38263[(2)] = null);

(statearr_38241_38263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38239 === (4))){
var inst_38215 = (state_38238[(7)]);
var inst_38215__$1 = (state_38238[(2)]);
var inst_38216 = (inst_38215__$1 == null);
var state_38238__$1 = (function (){var statearr_38242 = state_38238;
(statearr_38242[(7)] = inst_38215__$1);

return statearr_38242;
})();
if(cljs.core.truth_(inst_38216)){
var statearr_38243_38264 = state_38238__$1;
(statearr_38243_38264[(1)] = (5));

} else {
var statearr_38244_38265 = state_38238__$1;
(statearr_38244_38265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38239 === (13))){
var state_38238__$1 = state_38238;
var statearr_38245_38266 = state_38238__$1;
(statearr_38245_38266[(2)] = null);

(statearr_38245_38266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38239 === (6))){
var inst_38215 = (state_38238[(7)]);
var inst_38221 = p.call(null,inst_38215);
var state_38238__$1 = state_38238;
if(cljs.core.truth_(inst_38221)){
var statearr_38246_38267 = state_38238__$1;
(statearr_38246_38267[(1)] = (9));

} else {
var statearr_38247_38268 = state_38238__$1;
(statearr_38247_38268[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38239 === (3))){
var inst_38236 = (state_38238[(2)]);
var state_38238__$1 = state_38238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38238__$1,inst_38236);
} else {
if((state_val_38239 === (12))){
var state_38238__$1 = state_38238;
var statearr_38248_38269 = state_38238__$1;
(statearr_38248_38269[(2)] = null);

(statearr_38248_38269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38239 === (2))){
var state_38238__$1 = state_38238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38238__$1,(4),ch);
} else {
if((state_val_38239 === (11))){
var inst_38215 = (state_38238[(7)]);
var inst_38225 = (state_38238[(2)]);
var state_38238__$1 = state_38238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38238__$1,(8),inst_38225,inst_38215);
} else {
if((state_val_38239 === (9))){
var state_38238__$1 = state_38238;
var statearr_38249_38270 = state_38238__$1;
(statearr_38249_38270[(2)] = tc);

(statearr_38249_38270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38239 === (5))){
var inst_38218 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38219 = cljs.core.async.close_BANG_.call(null,fc);
var state_38238__$1 = (function (){var statearr_38250 = state_38238;
(statearr_38250[(8)] = inst_38218);

return statearr_38250;
})();
var statearr_38251_38271 = state_38238__$1;
(statearr_38251_38271[(2)] = inst_38219);

(statearr_38251_38271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38239 === (14))){
var inst_38232 = (state_38238[(2)]);
var state_38238__$1 = state_38238;
var statearr_38252_38272 = state_38238__$1;
(statearr_38252_38272[(2)] = inst_38232);

(statearr_38252_38272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38239 === (10))){
var state_38238__$1 = state_38238;
var statearr_38253_38273 = state_38238__$1;
(statearr_38253_38273[(2)] = fc);

(statearr_38253_38273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38239 === (8))){
var inst_38227 = (state_38238[(2)]);
var state_38238__$1 = state_38238;
if(cljs.core.truth_(inst_38227)){
var statearr_38254_38274 = state_38238__$1;
(statearr_38254_38274[(1)] = (12));

} else {
var statearr_38255_38275 = state_38238__$1;
(statearr_38255_38275[(1)] = (13));

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
});})(c__37825__auto___38261,tc,fc))
;
return ((function (switch__37737__auto__,c__37825__auto___38261,tc,fc){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_38256 = [null,null,null,null,null,null,null,null,null];
(statearr_38256[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_38256[(1)] = (1));

return statearr_38256;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_38238){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e38257){if((e38257 instanceof Object)){
var ex__37741__auto__ = e38257;
var statearr_38258_38276 = state_38238;
(statearr_38258_38276[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38277 = state_38238;
state_38238 = G__38277;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_38238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_38238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___38261,tc,fc))
})();
var state__37827__auto__ = (function (){var statearr_38259 = f__37826__auto__.call(null);
(statearr_38259[(6)] = c__37825__auto___38261);

return statearr_38259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___38261,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__){
return (function (state_38298){
var state_val_38299 = (state_38298[(1)]);
if((state_val_38299 === (7))){
var inst_38294 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
var statearr_38300_38318 = state_38298__$1;
(statearr_38300_38318[(2)] = inst_38294);

(statearr_38300_38318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (1))){
var inst_38278 = init;
var state_38298__$1 = (function (){var statearr_38301 = state_38298;
(statearr_38301[(7)] = inst_38278);

return statearr_38301;
})();
var statearr_38302_38319 = state_38298__$1;
(statearr_38302_38319[(2)] = null);

(statearr_38302_38319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (4))){
var inst_38281 = (state_38298[(8)]);
var inst_38281__$1 = (state_38298[(2)]);
var inst_38282 = (inst_38281__$1 == null);
var state_38298__$1 = (function (){var statearr_38303 = state_38298;
(statearr_38303[(8)] = inst_38281__$1);

return statearr_38303;
})();
if(cljs.core.truth_(inst_38282)){
var statearr_38304_38320 = state_38298__$1;
(statearr_38304_38320[(1)] = (5));

} else {
var statearr_38305_38321 = state_38298__$1;
(statearr_38305_38321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (6))){
var inst_38281 = (state_38298[(8)]);
var inst_38285 = (state_38298[(9)]);
var inst_38278 = (state_38298[(7)]);
var inst_38285__$1 = f.call(null,inst_38278,inst_38281);
var inst_38286 = cljs.core.reduced_QMARK_.call(null,inst_38285__$1);
var state_38298__$1 = (function (){var statearr_38306 = state_38298;
(statearr_38306[(9)] = inst_38285__$1);

return statearr_38306;
})();
if(inst_38286){
var statearr_38307_38322 = state_38298__$1;
(statearr_38307_38322[(1)] = (8));

} else {
var statearr_38308_38323 = state_38298__$1;
(statearr_38308_38323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (3))){
var inst_38296 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38298__$1,inst_38296);
} else {
if((state_val_38299 === (2))){
var state_38298__$1 = state_38298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38298__$1,(4),ch);
} else {
if((state_val_38299 === (9))){
var inst_38285 = (state_38298[(9)]);
var inst_38278 = inst_38285;
var state_38298__$1 = (function (){var statearr_38309 = state_38298;
(statearr_38309[(7)] = inst_38278);

return statearr_38309;
})();
var statearr_38310_38324 = state_38298__$1;
(statearr_38310_38324[(2)] = null);

(statearr_38310_38324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (5))){
var inst_38278 = (state_38298[(7)]);
var state_38298__$1 = state_38298;
var statearr_38311_38325 = state_38298__$1;
(statearr_38311_38325[(2)] = inst_38278);

(statearr_38311_38325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (10))){
var inst_38292 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
var statearr_38312_38326 = state_38298__$1;
(statearr_38312_38326[(2)] = inst_38292);

(statearr_38312_38326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (8))){
var inst_38285 = (state_38298[(9)]);
var inst_38288 = cljs.core.deref.call(null,inst_38285);
var state_38298__$1 = state_38298;
var statearr_38313_38327 = state_38298__$1;
(statearr_38313_38327[(2)] = inst_38288);

(statearr_38313_38327[(1)] = (10));


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
});})(c__37825__auto__))
;
return ((function (switch__37737__auto__,c__37825__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37738__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37738__auto____0 = (function (){
var statearr_38314 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38314[(0)] = cljs$core$async$reduce_$_state_machine__37738__auto__);

(statearr_38314[(1)] = (1));

return statearr_38314;
});
var cljs$core$async$reduce_$_state_machine__37738__auto____1 = (function (state_38298){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e38315){if((e38315 instanceof Object)){
var ex__37741__auto__ = e38315;
var statearr_38316_38328 = state_38298;
(statearr_38316_38328[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38329 = state_38298;
state_38298 = G__38329;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37738__auto__ = function(state_38298){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37738__auto____1.call(this,state_38298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37738__auto____0;
cljs$core$async$reduce_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37738__auto____1;
return cljs$core$async$reduce_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__))
})();
var state__37827__auto__ = (function (){var statearr_38317 = f__37826__auto__.call(null);
(statearr_38317[(6)] = c__37825__auto__);

return statearr_38317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__))
);

return c__37825__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__,f__$1){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__,f__$1){
return (function (state_38335){
var state_val_38336 = (state_38335[(1)]);
if((state_val_38336 === (1))){
var inst_38330 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_38335__$1 = state_38335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38335__$1,(2),inst_38330);
} else {
if((state_val_38336 === (2))){
var inst_38332 = (state_38335[(2)]);
var inst_38333 = f__$1.call(null,inst_38332);
var state_38335__$1 = state_38335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38335__$1,inst_38333);
} else {
return null;
}
}
});})(c__37825__auto__,f__$1))
;
return ((function (switch__37737__auto__,c__37825__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__37738__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37738__auto____0 = (function (){
var statearr_38337 = [null,null,null,null,null,null,null];
(statearr_38337[(0)] = cljs$core$async$transduce_$_state_machine__37738__auto__);

(statearr_38337[(1)] = (1));

return statearr_38337;
});
var cljs$core$async$transduce_$_state_machine__37738__auto____1 = (function (state_38335){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e38338){if((e38338 instanceof Object)){
var ex__37741__auto__ = e38338;
var statearr_38339_38341 = state_38335;
(statearr_38339_38341[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38342 = state_38335;
state_38335 = G__38342;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37738__auto__ = function(state_38335){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37738__auto____1.call(this,state_38335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37738__auto____0;
cljs$core$async$transduce_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37738__auto____1;
return cljs$core$async$transduce_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__,f__$1))
})();
var state__37827__auto__ = (function (){var statearr_38340 = f__37826__auto__.call(null);
(statearr_38340[(6)] = c__37825__auto__);

return statearr_38340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__,f__$1))
);

return c__37825__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38344 = arguments.length;
switch (G__38344) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__){
return (function (state_38369){
var state_val_38370 = (state_38369[(1)]);
if((state_val_38370 === (7))){
var inst_38351 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
var statearr_38371_38392 = state_38369__$1;
(statearr_38371_38392[(2)] = inst_38351);

(statearr_38371_38392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (1))){
var inst_38345 = cljs.core.seq.call(null,coll);
var inst_38346 = inst_38345;
var state_38369__$1 = (function (){var statearr_38372 = state_38369;
(statearr_38372[(7)] = inst_38346);

return statearr_38372;
})();
var statearr_38373_38393 = state_38369__$1;
(statearr_38373_38393[(2)] = null);

(statearr_38373_38393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (4))){
var inst_38346 = (state_38369[(7)]);
var inst_38349 = cljs.core.first.call(null,inst_38346);
var state_38369__$1 = state_38369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38369__$1,(7),ch,inst_38349);
} else {
if((state_val_38370 === (13))){
var inst_38363 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
var statearr_38374_38394 = state_38369__$1;
(statearr_38374_38394[(2)] = inst_38363);

(statearr_38374_38394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (6))){
var inst_38354 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
if(cljs.core.truth_(inst_38354)){
var statearr_38375_38395 = state_38369__$1;
(statearr_38375_38395[(1)] = (8));

} else {
var statearr_38376_38396 = state_38369__$1;
(statearr_38376_38396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (3))){
var inst_38367 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38369__$1,inst_38367);
} else {
if((state_val_38370 === (12))){
var state_38369__$1 = state_38369;
var statearr_38377_38397 = state_38369__$1;
(statearr_38377_38397[(2)] = null);

(statearr_38377_38397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (2))){
var inst_38346 = (state_38369[(7)]);
var state_38369__$1 = state_38369;
if(cljs.core.truth_(inst_38346)){
var statearr_38378_38398 = state_38369__$1;
(statearr_38378_38398[(1)] = (4));

} else {
var statearr_38379_38399 = state_38369__$1;
(statearr_38379_38399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (11))){
var inst_38360 = cljs.core.async.close_BANG_.call(null,ch);
var state_38369__$1 = state_38369;
var statearr_38380_38400 = state_38369__$1;
(statearr_38380_38400[(2)] = inst_38360);

(statearr_38380_38400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (9))){
var state_38369__$1 = state_38369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38381_38401 = state_38369__$1;
(statearr_38381_38401[(1)] = (11));

} else {
var statearr_38382_38402 = state_38369__$1;
(statearr_38382_38402[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (5))){
var inst_38346 = (state_38369[(7)]);
var state_38369__$1 = state_38369;
var statearr_38383_38403 = state_38369__$1;
(statearr_38383_38403[(2)] = inst_38346);

(statearr_38383_38403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (10))){
var inst_38365 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
var statearr_38384_38404 = state_38369__$1;
(statearr_38384_38404[(2)] = inst_38365);

(statearr_38384_38404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (8))){
var inst_38346 = (state_38369[(7)]);
var inst_38356 = cljs.core.next.call(null,inst_38346);
var inst_38346__$1 = inst_38356;
var state_38369__$1 = (function (){var statearr_38385 = state_38369;
(statearr_38385[(7)] = inst_38346__$1);

return statearr_38385;
})();
var statearr_38386_38405 = state_38369__$1;
(statearr_38386_38405[(2)] = null);

(statearr_38386_38405[(1)] = (2));


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
});})(c__37825__auto__))
;
return ((function (switch__37737__auto__,c__37825__auto__){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_38387 = [null,null,null,null,null,null,null,null];
(statearr_38387[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_38387[(1)] = (1));

return statearr_38387;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_38369){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e38388){if((e38388 instanceof Object)){
var ex__37741__auto__ = e38388;
var statearr_38389_38406 = state_38369;
(statearr_38389_38406[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38407 = state_38369;
state_38369 = G__38407;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_38369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_38369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__))
})();
var state__37827__auto__ = (function (){var statearr_38390 = f__37826__auto__.call(null);
(statearr_38390[(6)] = c__37825__auto__);

return statearr_38390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__))
);

return c__37825__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__34374__auto__ = (((_ == null))?null:_);
var m__34375__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,_);
} else {
var m__34375__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__34374__auto__ = (((m == null))?null:m);
var m__34375__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__34375__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__34374__auto__ = (((m == null))?null:m);
var m__34375__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,m,ch);
} else {
var m__34375__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__34374__auto__ = (((m == null))?null:m);
var m__34375__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,m);
} else {
var m__34375__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38408 = (function (ch,cs,meta38409){
this.ch = ch;
this.cs = cs;
this.meta38409 = meta38409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38410,meta38409__$1){
var self__ = this;
var _38410__$1 = this;
return (new cljs.core.async.t_cljs$core$async38408(self__.ch,self__.cs,meta38409__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38410){
var self__ = this;
var _38410__$1 = this;
return self__.meta38409;
});})(cs))
;

cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38408.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38409","meta38409",-255139726,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38408";

cljs.core.async.t_cljs$core$async38408.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async38408");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38408 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38408(ch__$1,cs__$1,meta38409){
return (new cljs.core.async.t_cljs$core$async38408(ch__$1,cs__$1,meta38409));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38408(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37825__auto___38630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___38630,cs,m,dchan,dctr,done){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___38630,cs,m,dchan,dctr,done){
return (function (state_38545){
var state_val_38546 = (state_38545[(1)]);
if((state_val_38546 === (7))){
var inst_38541 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38547_38631 = state_38545__$1;
(statearr_38547_38631[(2)] = inst_38541);

(statearr_38547_38631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (20))){
var inst_38444 = (state_38545[(7)]);
var inst_38456 = cljs.core.first.call(null,inst_38444);
var inst_38457 = cljs.core.nth.call(null,inst_38456,(0),null);
var inst_38458 = cljs.core.nth.call(null,inst_38456,(1),null);
var state_38545__$1 = (function (){var statearr_38548 = state_38545;
(statearr_38548[(8)] = inst_38457);

return statearr_38548;
})();
if(cljs.core.truth_(inst_38458)){
var statearr_38549_38632 = state_38545__$1;
(statearr_38549_38632[(1)] = (22));

} else {
var statearr_38550_38633 = state_38545__$1;
(statearr_38550_38633[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (27))){
var inst_38413 = (state_38545[(9)]);
var inst_38493 = (state_38545[(10)]);
var inst_38488 = (state_38545[(11)]);
var inst_38486 = (state_38545[(12)]);
var inst_38493__$1 = cljs.core._nth.call(null,inst_38486,inst_38488);
var inst_38494 = cljs.core.async.put_BANG_.call(null,inst_38493__$1,inst_38413,done);
var state_38545__$1 = (function (){var statearr_38551 = state_38545;
(statearr_38551[(10)] = inst_38493__$1);

return statearr_38551;
})();
if(cljs.core.truth_(inst_38494)){
var statearr_38552_38634 = state_38545__$1;
(statearr_38552_38634[(1)] = (30));

} else {
var statearr_38553_38635 = state_38545__$1;
(statearr_38553_38635[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (1))){
var state_38545__$1 = state_38545;
var statearr_38554_38636 = state_38545__$1;
(statearr_38554_38636[(2)] = null);

(statearr_38554_38636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (24))){
var inst_38444 = (state_38545[(7)]);
var inst_38463 = (state_38545[(2)]);
var inst_38464 = cljs.core.next.call(null,inst_38444);
var inst_38422 = inst_38464;
var inst_38423 = null;
var inst_38424 = (0);
var inst_38425 = (0);
var state_38545__$1 = (function (){var statearr_38555 = state_38545;
(statearr_38555[(13)] = inst_38422);

(statearr_38555[(14)] = inst_38425);

(statearr_38555[(15)] = inst_38463);

(statearr_38555[(16)] = inst_38424);

(statearr_38555[(17)] = inst_38423);

return statearr_38555;
})();
var statearr_38556_38637 = state_38545__$1;
(statearr_38556_38637[(2)] = null);

(statearr_38556_38637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (39))){
var state_38545__$1 = state_38545;
var statearr_38560_38638 = state_38545__$1;
(statearr_38560_38638[(2)] = null);

(statearr_38560_38638[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (4))){
var inst_38413 = (state_38545[(9)]);
var inst_38413__$1 = (state_38545[(2)]);
var inst_38414 = (inst_38413__$1 == null);
var state_38545__$1 = (function (){var statearr_38561 = state_38545;
(statearr_38561[(9)] = inst_38413__$1);

return statearr_38561;
})();
if(cljs.core.truth_(inst_38414)){
var statearr_38562_38639 = state_38545__$1;
(statearr_38562_38639[(1)] = (5));

} else {
var statearr_38563_38640 = state_38545__$1;
(statearr_38563_38640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (15))){
var inst_38422 = (state_38545[(13)]);
var inst_38425 = (state_38545[(14)]);
var inst_38424 = (state_38545[(16)]);
var inst_38423 = (state_38545[(17)]);
var inst_38440 = (state_38545[(2)]);
var inst_38441 = (inst_38425 + (1));
var tmp38557 = inst_38422;
var tmp38558 = inst_38424;
var tmp38559 = inst_38423;
var inst_38422__$1 = tmp38557;
var inst_38423__$1 = tmp38559;
var inst_38424__$1 = tmp38558;
var inst_38425__$1 = inst_38441;
var state_38545__$1 = (function (){var statearr_38564 = state_38545;
(statearr_38564[(13)] = inst_38422__$1);

(statearr_38564[(14)] = inst_38425__$1);

(statearr_38564[(18)] = inst_38440);

(statearr_38564[(16)] = inst_38424__$1);

(statearr_38564[(17)] = inst_38423__$1);

return statearr_38564;
})();
var statearr_38565_38641 = state_38545__$1;
(statearr_38565_38641[(2)] = null);

(statearr_38565_38641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (21))){
var inst_38467 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38569_38642 = state_38545__$1;
(statearr_38569_38642[(2)] = inst_38467);

(statearr_38569_38642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (31))){
var inst_38493 = (state_38545[(10)]);
var inst_38497 = done.call(null,null);
var inst_38498 = cljs.core.async.untap_STAR_.call(null,m,inst_38493);
var state_38545__$1 = (function (){var statearr_38570 = state_38545;
(statearr_38570[(19)] = inst_38497);

return statearr_38570;
})();
var statearr_38571_38643 = state_38545__$1;
(statearr_38571_38643[(2)] = inst_38498);

(statearr_38571_38643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (32))){
var inst_38487 = (state_38545[(20)]);
var inst_38488 = (state_38545[(11)]);
var inst_38486 = (state_38545[(12)]);
var inst_38485 = (state_38545[(21)]);
var inst_38500 = (state_38545[(2)]);
var inst_38501 = (inst_38488 + (1));
var tmp38566 = inst_38487;
var tmp38567 = inst_38486;
var tmp38568 = inst_38485;
var inst_38485__$1 = tmp38568;
var inst_38486__$1 = tmp38567;
var inst_38487__$1 = tmp38566;
var inst_38488__$1 = inst_38501;
var state_38545__$1 = (function (){var statearr_38572 = state_38545;
(statearr_38572[(20)] = inst_38487__$1);

(statearr_38572[(11)] = inst_38488__$1);

(statearr_38572[(12)] = inst_38486__$1);

(statearr_38572[(21)] = inst_38485__$1);

(statearr_38572[(22)] = inst_38500);

return statearr_38572;
})();
var statearr_38573_38644 = state_38545__$1;
(statearr_38573_38644[(2)] = null);

(statearr_38573_38644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (40))){
var inst_38513 = (state_38545[(23)]);
var inst_38517 = done.call(null,null);
var inst_38518 = cljs.core.async.untap_STAR_.call(null,m,inst_38513);
var state_38545__$1 = (function (){var statearr_38574 = state_38545;
(statearr_38574[(24)] = inst_38517);

return statearr_38574;
})();
var statearr_38575_38645 = state_38545__$1;
(statearr_38575_38645[(2)] = inst_38518);

(statearr_38575_38645[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (33))){
var inst_38504 = (state_38545[(25)]);
var inst_38506 = cljs.core.chunked_seq_QMARK_.call(null,inst_38504);
var state_38545__$1 = state_38545;
if(inst_38506){
var statearr_38576_38646 = state_38545__$1;
(statearr_38576_38646[(1)] = (36));

} else {
var statearr_38577_38647 = state_38545__$1;
(statearr_38577_38647[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (13))){
var inst_38434 = (state_38545[(26)]);
var inst_38437 = cljs.core.async.close_BANG_.call(null,inst_38434);
var state_38545__$1 = state_38545;
var statearr_38578_38648 = state_38545__$1;
(statearr_38578_38648[(2)] = inst_38437);

(statearr_38578_38648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (22))){
var inst_38457 = (state_38545[(8)]);
var inst_38460 = cljs.core.async.close_BANG_.call(null,inst_38457);
var state_38545__$1 = state_38545;
var statearr_38579_38649 = state_38545__$1;
(statearr_38579_38649[(2)] = inst_38460);

(statearr_38579_38649[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (36))){
var inst_38504 = (state_38545[(25)]);
var inst_38508 = cljs.core.chunk_first.call(null,inst_38504);
var inst_38509 = cljs.core.chunk_rest.call(null,inst_38504);
var inst_38510 = cljs.core.count.call(null,inst_38508);
var inst_38485 = inst_38509;
var inst_38486 = inst_38508;
var inst_38487 = inst_38510;
var inst_38488 = (0);
var state_38545__$1 = (function (){var statearr_38580 = state_38545;
(statearr_38580[(20)] = inst_38487);

(statearr_38580[(11)] = inst_38488);

(statearr_38580[(12)] = inst_38486);

(statearr_38580[(21)] = inst_38485);

return statearr_38580;
})();
var statearr_38581_38650 = state_38545__$1;
(statearr_38581_38650[(2)] = null);

(statearr_38581_38650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (41))){
var inst_38504 = (state_38545[(25)]);
var inst_38520 = (state_38545[(2)]);
var inst_38521 = cljs.core.next.call(null,inst_38504);
var inst_38485 = inst_38521;
var inst_38486 = null;
var inst_38487 = (0);
var inst_38488 = (0);
var state_38545__$1 = (function (){var statearr_38582 = state_38545;
(statearr_38582[(20)] = inst_38487);

(statearr_38582[(27)] = inst_38520);

(statearr_38582[(11)] = inst_38488);

(statearr_38582[(12)] = inst_38486);

(statearr_38582[(21)] = inst_38485);

return statearr_38582;
})();
var statearr_38583_38651 = state_38545__$1;
(statearr_38583_38651[(2)] = null);

(statearr_38583_38651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (43))){
var state_38545__$1 = state_38545;
var statearr_38584_38652 = state_38545__$1;
(statearr_38584_38652[(2)] = null);

(statearr_38584_38652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (29))){
var inst_38529 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38585_38653 = state_38545__$1;
(statearr_38585_38653[(2)] = inst_38529);

(statearr_38585_38653[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (44))){
var inst_38538 = (state_38545[(2)]);
var state_38545__$1 = (function (){var statearr_38586 = state_38545;
(statearr_38586[(28)] = inst_38538);

return statearr_38586;
})();
var statearr_38587_38654 = state_38545__$1;
(statearr_38587_38654[(2)] = null);

(statearr_38587_38654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (6))){
var inst_38477 = (state_38545[(29)]);
var inst_38476 = cljs.core.deref.call(null,cs);
var inst_38477__$1 = cljs.core.keys.call(null,inst_38476);
var inst_38478 = cljs.core.count.call(null,inst_38477__$1);
var inst_38479 = cljs.core.reset_BANG_.call(null,dctr,inst_38478);
var inst_38484 = cljs.core.seq.call(null,inst_38477__$1);
var inst_38485 = inst_38484;
var inst_38486 = null;
var inst_38487 = (0);
var inst_38488 = (0);
var state_38545__$1 = (function (){var statearr_38588 = state_38545;
(statearr_38588[(29)] = inst_38477__$1);

(statearr_38588[(20)] = inst_38487);

(statearr_38588[(11)] = inst_38488);

(statearr_38588[(12)] = inst_38486);

(statearr_38588[(21)] = inst_38485);

(statearr_38588[(30)] = inst_38479);

return statearr_38588;
})();
var statearr_38589_38655 = state_38545__$1;
(statearr_38589_38655[(2)] = null);

(statearr_38589_38655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (28))){
var inst_38504 = (state_38545[(25)]);
var inst_38485 = (state_38545[(21)]);
var inst_38504__$1 = cljs.core.seq.call(null,inst_38485);
var state_38545__$1 = (function (){var statearr_38590 = state_38545;
(statearr_38590[(25)] = inst_38504__$1);

return statearr_38590;
})();
if(inst_38504__$1){
var statearr_38591_38656 = state_38545__$1;
(statearr_38591_38656[(1)] = (33));

} else {
var statearr_38592_38657 = state_38545__$1;
(statearr_38592_38657[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (25))){
var inst_38487 = (state_38545[(20)]);
var inst_38488 = (state_38545[(11)]);
var inst_38490 = (inst_38488 < inst_38487);
var inst_38491 = inst_38490;
var state_38545__$1 = state_38545;
if(cljs.core.truth_(inst_38491)){
var statearr_38593_38658 = state_38545__$1;
(statearr_38593_38658[(1)] = (27));

} else {
var statearr_38594_38659 = state_38545__$1;
(statearr_38594_38659[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (34))){
var state_38545__$1 = state_38545;
var statearr_38595_38660 = state_38545__$1;
(statearr_38595_38660[(2)] = null);

(statearr_38595_38660[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (17))){
var state_38545__$1 = state_38545;
var statearr_38596_38661 = state_38545__$1;
(statearr_38596_38661[(2)] = null);

(statearr_38596_38661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (3))){
var inst_38543 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38545__$1,inst_38543);
} else {
if((state_val_38546 === (12))){
var inst_38472 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38597_38662 = state_38545__$1;
(statearr_38597_38662[(2)] = inst_38472);

(statearr_38597_38662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (2))){
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38545__$1,(4),ch);
} else {
if((state_val_38546 === (23))){
var state_38545__$1 = state_38545;
var statearr_38598_38663 = state_38545__$1;
(statearr_38598_38663[(2)] = null);

(statearr_38598_38663[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (35))){
var inst_38527 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38599_38664 = state_38545__$1;
(statearr_38599_38664[(2)] = inst_38527);

(statearr_38599_38664[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (19))){
var inst_38444 = (state_38545[(7)]);
var inst_38448 = cljs.core.chunk_first.call(null,inst_38444);
var inst_38449 = cljs.core.chunk_rest.call(null,inst_38444);
var inst_38450 = cljs.core.count.call(null,inst_38448);
var inst_38422 = inst_38449;
var inst_38423 = inst_38448;
var inst_38424 = inst_38450;
var inst_38425 = (0);
var state_38545__$1 = (function (){var statearr_38600 = state_38545;
(statearr_38600[(13)] = inst_38422);

(statearr_38600[(14)] = inst_38425);

(statearr_38600[(16)] = inst_38424);

(statearr_38600[(17)] = inst_38423);

return statearr_38600;
})();
var statearr_38601_38665 = state_38545__$1;
(statearr_38601_38665[(2)] = null);

(statearr_38601_38665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (11))){
var inst_38422 = (state_38545[(13)]);
var inst_38444 = (state_38545[(7)]);
var inst_38444__$1 = cljs.core.seq.call(null,inst_38422);
var state_38545__$1 = (function (){var statearr_38602 = state_38545;
(statearr_38602[(7)] = inst_38444__$1);

return statearr_38602;
})();
if(inst_38444__$1){
var statearr_38603_38666 = state_38545__$1;
(statearr_38603_38666[(1)] = (16));

} else {
var statearr_38604_38667 = state_38545__$1;
(statearr_38604_38667[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (9))){
var inst_38474 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38605_38668 = state_38545__$1;
(statearr_38605_38668[(2)] = inst_38474);

(statearr_38605_38668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (5))){
var inst_38420 = cljs.core.deref.call(null,cs);
var inst_38421 = cljs.core.seq.call(null,inst_38420);
var inst_38422 = inst_38421;
var inst_38423 = null;
var inst_38424 = (0);
var inst_38425 = (0);
var state_38545__$1 = (function (){var statearr_38606 = state_38545;
(statearr_38606[(13)] = inst_38422);

(statearr_38606[(14)] = inst_38425);

(statearr_38606[(16)] = inst_38424);

(statearr_38606[(17)] = inst_38423);

return statearr_38606;
})();
var statearr_38607_38669 = state_38545__$1;
(statearr_38607_38669[(2)] = null);

(statearr_38607_38669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (14))){
var state_38545__$1 = state_38545;
var statearr_38608_38670 = state_38545__$1;
(statearr_38608_38670[(2)] = null);

(statearr_38608_38670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (45))){
var inst_38535 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38609_38671 = state_38545__$1;
(statearr_38609_38671[(2)] = inst_38535);

(statearr_38609_38671[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (26))){
var inst_38477 = (state_38545[(29)]);
var inst_38531 = (state_38545[(2)]);
var inst_38532 = cljs.core.seq.call(null,inst_38477);
var state_38545__$1 = (function (){var statearr_38610 = state_38545;
(statearr_38610[(31)] = inst_38531);

return statearr_38610;
})();
if(inst_38532){
var statearr_38611_38672 = state_38545__$1;
(statearr_38611_38672[(1)] = (42));

} else {
var statearr_38612_38673 = state_38545__$1;
(statearr_38612_38673[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (16))){
var inst_38444 = (state_38545[(7)]);
var inst_38446 = cljs.core.chunked_seq_QMARK_.call(null,inst_38444);
var state_38545__$1 = state_38545;
if(inst_38446){
var statearr_38613_38674 = state_38545__$1;
(statearr_38613_38674[(1)] = (19));

} else {
var statearr_38614_38675 = state_38545__$1;
(statearr_38614_38675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (38))){
var inst_38524 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38615_38676 = state_38545__$1;
(statearr_38615_38676[(2)] = inst_38524);

(statearr_38615_38676[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (30))){
var state_38545__$1 = state_38545;
var statearr_38616_38677 = state_38545__$1;
(statearr_38616_38677[(2)] = null);

(statearr_38616_38677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (10))){
var inst_38425 = (state_38545[(14)]);
var inst_38423 = (state_38545[(17)]);
var inst_38433 = cljs.core._nth.call(null,inst_38423,inst_38425);
var inst_38434 = cljs.core.nth.call(null,inst_38433,(0),null);
var inst_38435 = cljs.core.nth.call(null,inst_38433,(1),null);
var state_38545__$1 = (function (){var statearr_38617 = state_38545;
(statearr_38617[(26)] = inst_38434);

return statearr_38617;
})();
if(cljs.core.truth_(inst_38435)){
var statearr_38618_38678 = state_38545__$1;
(statearr_38618_38678[(1)] = (13));

} else {
var statearr_38619_38679 = state_38545__$1;
(statearr_38619_38679[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (18))){
var inst_38470 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38620_38680 = state_38545__$1;
(statearr_38620_38680[(2)] = inst_38470);

(statearr_38620_38680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (42))){
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38545__$1,(45),dchan);
} else {
if((state_val_38546 === (37))){
var inst_38413 = (state_38545[(9)]);
var inst_38504 = (state_38545[(25)]);
var inst_38513 = (state_38545[(23)]);
var inst_38513__$1 = cljs.core.first.call(null,inst_38504);
var inst_38514 = cljs.core.async.put_BANG_.call(null,inst_38513__$1,inst_38413,done);
var state_38545__$1 = (function (){var statearr_38621 = state_38545;
(statearr_38621[(23)] = inst_38513__$1);

return statearr_38621;
})();
if(cljs.core.truth_(inst_38514)){
var statearr_38622_38681 = state_38545__$1;
(statearr_38622_38681[(1)] = (39));

} else {
var statearr_38623_38682 = state_38545__$1;
(statearr_38623_38682[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (8))){
var inst_38425 = (state_38545[(14)]);
var inst_38424 = (state_38545[(16)]);
var inst_38427 = (inst_38425 < inst_38424);
var inst_38428 = inst_38427;
var state_38545__$1 = state_38545;
if(cljs.core.truth_(inst_38428)){
var statearr_38624_38683 = state_38545__$1;
(statearr_38624_38683[(1)] = (10));

} else {
var statearr_38625_38684 = state_38545__$1;
(statearr_38625_38684[(1)] = (11));

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
});})(c__37825__auto___38630,cs,m,dchan,dctr,done))
;
return ((function (switch__37737__auto__,c__37825__auto___38630,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37738__auto__ = null;
var cljs$core$async$mult_$_state_machine__37738__auto____0 = (function (){
var statearr_38626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38626[(0)] = cljs$core$async$mult_$_state_machine__37738__auto__);

(statearr_38626[(1)] = (1));

return statearr_38626;
});
var cljs$core$async$mult_$_state_machine__37738__auto____1 = (function (state_38545){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e38627){if((e38627 instanceof Object)){
var ex__37741__auto__ = e38627;
var statearr_38628_38685 = state_38545;
(statearr_38628_38685[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38686 = state_38545;
state_38545 = G__38686;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37738__auto__ = function(state_38545){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37738__auto____1.call(this,state_38545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37738__auto____0;
cljs$core$async$mult_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37738__auto____1;
return cljs$core$async$mult_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___38630,cs,m,dchan,dctr,done))
})();
var state__37827__auto__ = (function (){var statearr_38629 = f__37826__auto__.call(null);
(statearr_38629[(6)] = c__37825__auto___38630);

return statearr_38629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___38630,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38688 = arguments.length;
switch (G__38688) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__34374__auto__ = (((m == null))?null:m);
var m__34375__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,m,ch);
} else {
var m__34375__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__34374__auto__ = (((m == null))?null:m);
var m__34375__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,m,ch);
} else {
var m__34375__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__34374__auto__ = (((m == null))?null:m);
var m__34375__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,m);
} else {
var m__34375__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__34374__auto__ = (((m == null))?null:m);
var m__34375__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,m,state_map);
} else {
var m__34375__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__34374__auto__ = (((m == null))?null:m);
var m__34375__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,m,mode);
} else {
var m__34375__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__34837__auto__ = [];
var len__34830__auto___38700 = arguments.length;
var i__34831__auto___38701 = (0);
while(true){
if((i__34831__auto___38701 < len__34830__auto___38700)){
args__34837__auto__.push((arguments[i__34831__auto___38701]));

var G__38702 = (i__34831__auto___38701 + (1));
i__34831__auto___38701 = G__38702;
continue;
} else {
}
break;
}

var argseq__34838__auto__ = ((((3) < args__34837__auto__.length))?(new cljs.core.IndexedSeq(args__34837__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__34838__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38694){
var map__38695 = p__38694;
var map__38695__$1 = ((((!((map__38695 == null)))?((((map__38695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38695):map__38695);
var opts = map__38695__$1;
var statearr_38697_38703 = state;
(statearr_38697_38703[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38695,map__38695__$1,opts){
return (function (val){
var statearr_38698_38704 = state;
(statearr_38698_38704[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38695,map__38695__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38699_38705 = state;
(statearr_38699_38705[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38690){
var G__38691 = cljs.core.first.call(null,seq38690);
var seq38690__$1 = cljs.core.next.call(null,seq38690);
var G__38692 = cljs.core.first.call(null,seq38690__$1);
var seq38690__$2 = cljs.core.next.call(null,seq38690__$1);
var G__38693 = cljs.core.first.call(null,seq38690__$2);
var seq38690__$3 = cljs.core.next.call(null,seq38690__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38691,G__38692,G__38693,seq38690__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38706 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38707){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38707 = meta38707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38708,meta38707__$1){
var self__ = this;
var _38708__$1 = this;
return (new cljs.core.async.t_cljs$core$async38706(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38707__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38708){
var self__ = this;
var _38708__$1 = this;
return self__.meta38707;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38706.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38706.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38706.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38706.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38706.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38706.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38706.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38706.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38707","meta38707",602812589,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38706";

cljs.core.async.t_cljs$core$async38706.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async38706");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38706 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38706(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38707){
return (new cljs.core.async.t_cljs$core$async38706(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38707));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38706(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37825__auto___38870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___38870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___38870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38810){
var state_val_38811 = (state_38810[(1)]);
if((state_val_38811 === (7))){
var inst_38725 = (state_38810[(2)]);
var state_38810__$1 = state_38810;
var statearr_38812_38871 = state_38810__$1;
(statearr_38812_38871[(2)] = inst_38725);

(statearr_38812_38871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (20))){
var inst_38737 = (state_38810[(7)]);
var state_38810__$1 = state_38810;
var statearr_38813_38872 = state_38810__$1;
(statearr_38813_38872[(2)] = inst_38737);

(statearr_38813_38872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (27))){
var state_38810__$1 = state_38810;
var statearr_38814_38873 = state_38810__$1;
(statearr_38814_38873[(2)] = null);

(statearr_38814_38873[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (1))){
var inst_38712 = (state_38810[(8)]);
var inst_38712__$1 = calc_state.call(null);
var inst_38714 = (inst_38712__$1 == null);
var inst_38715 = cljs.core.not.call(null,inst_38714);
var state_38810__$1 = (function (){var statearr_38815 = state_38810;
(statearr_38815[(8)] = inst_38712__$1);

return statearr_38815;
})();
if(inst_38715){
var statearr_38816_38874 = state_38810__$1;
(statearr_38816_38874[(1)] = (2));

} else {
var statearr_38817_38875 = state_38810__$1;
(statearr_38817_38875[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (24))){
var inst_38784 = (state_38810[(9)]);
var inst_38770 = (state_38810[(10)]);
var inst_38761 = (state_38810[(11)]);
var inst_38784__$1 = inst_38761.call(null,inst_38770);
var state_38810__$1 = (function (){var statearr_38818 = state_38810;
(statearr_38818[(9)] = inst_38784__$1);

return statearr_38818;
})();
if(cljs.core.truth_(inst_38784__$1)){
var statearr_38819_38876 = state_38810__$1;
(statearr_38819_38876[(1)] = (29));

} else {
var statearr_38820_38877 = state_38810__$1;
(statearr_38820_38877[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (4))){
var inst_38728 = (state_38810[(2)]);
var state_38810__$1 = state_38810;
if(cljs.core.truth_(inst_38728)){
var statearr_38821_38878 = state_38810__$1;
(statearr_38821_38878[(1)] = (8));

} else {
var statearr_38822_38879 = state_38810__$1;
(statearr_38822_38879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (15))){
var inst_38755 = (state_38810[(2)]);
var state_38810__$1 = state_38810;
if(cljs.core.truth_(inst_38755)){
var statearr_38823_38880 = state_38810__$1;
(statearr_38823_38880[(1)] = (19));

} else {
var statearr_38824_38881 = state_38810__$1;
(statearr_38824_38881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (21))){
var inst_38760 = (state_38810[(12)]);
var inst_38760__$1 = (state_38810[(2)]);
var inst_38761 = cljs.core.get.call(null,inst_38760__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38762 = cljs.core.get.call(null,inst_38760__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38763 = cljs.core.get.call(null,inst_38760__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38810__$1 = (function (){var statearr_38825 = state_38810;
(statearr_38825[(12)] = inst_38760__$1);

(statearr_38825[(11)] = inst_38761);

(statearr_38825[(13)] = inst_38762);

return statearr_38825;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38810__$1,(22),inst_38763);
} else {
if((state_val_38811 === (31))){
var inst_38792 = (state_38810[(2)]);
var state_38810__$1 = state_38810;
if(cljs.core.truth_(inst_38792)){
var statearr_38826_38882 = state_38810__$1;
(statearr_38826_38882[(1)] = (32));

} else {
var statearr_38827_38883 = state_38810__$1;
(statearr_38827_38883[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (32))){
var inst_38769 = (state_38810[(14)]);
var state_38810__$1 = state_38810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38810__$1,(35),out,inst_38769);
} else {
if((state_val_38811 === (33))){
var inst_38760 = (state_38810[(12)]);
var inst_38737 = inst_38760;
var state_38810__$1 = (function (){var statearr_38828 = state_38810;
(statearr_38828[(7)] = inst_38737);

return statearr_38828;
})();
var statearr_38829_38884 = state_38810__$1;
(statearr_38829_38884[(2)] = null);

(statearr_38829_38884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (13))){
var inst_38737 = (state_38810[(7)]);
var inst_38744 = inst_38737.cljs$lang$protocol_mask$partition0$;
var inst_38745 = (inst_38744 & (64));
var inst_38746 = inst_38737.cljs$core$ISeq$;
var inst_38747 = (cljs.core.PROTOCOL_SENTINEL === inst_38746);
var inst_38748 = (inst_38745) || (inst_38747);
var state_38810__$1 = state_38810;
if(cljs.core.truth_(inst_38748)){
var statearr_38830_38885 = state_38810__$1;
(statearr_38830_38885[(1)] = (16));

} else {
var statearr_38831_38886 = state_38810__$1;
(statearr_38831_38886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (22))){
var inst_38769 = (state_38810[(14)]);
var inst_38770 = (state_38810[(10)]);
var inst_38768 = (state_38810[(2)]);
var inst_38769__$1 = cljs.core.nth.call(null,inst_38768,(0),null);
var inst_38770__$1 = cljs.core.nth.call(null,inst_38768,(1),null);
var inst_38771 = (inst_38769__$1 == null);
var inst_38772 = cljs.core._EQ_.call(null,inst_38770__$1,change);
var inst_38773 = (inst_38771) || (inst_38772);
var state_38810__$1 = (function (){var statearr_38832 = state_38810;
(statearr_38832[(14)] = inst_38769__$1);

(statearr_38832[(10)] = inst_38770__$1);

return statearr_38832;
})();
if(cljs.core.truth_(inst_38773)){
var statearr_38833_38887 = state_38810__$1;
(statearr_38833_38887[(1)] = (23));

} else {
var statearr_38834_38888 = state_38810__$1;
(statearr_38834_38888[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (36))){
var inst_38760 = (state_38810[(12)]);
var inst_38737 = inst_38760;
var state_38810__$1 = (function (){var statearr_38835 = state_38810;
(statearr_38835[(7)] = inst_38737);

return statearr_38835;
})();
var statearr_38836_38889 = state_38810__$1;
(statearr_38836_38889[(2)] = null);

(statearr_38836_38889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (29))){
var inst_38784 = (state_38810[(9)]);
var state_38810__$1 = state_38810;
var statearr_38837_38890 = state_38810__$1;
(statearr_38837_38890[(2)] = inst_38784);

(statearr_38837_38890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (6))){
var state_38810__$1 = state_38810;
var statearr_38838_38891 = state_38810__$1;
(statearr_38838_38891[(2)] = false);

(statearr_38838_38891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (28))){
var inst_38780 = (state_38810[(2)]);
var inst_38781 = calc_state.call(null);
var inst_38737 = inst_38781;
var state_38810__$1 = (function (){var statearr_38839 = state_38810;
(statearr_38839[(15)] = inst_38780);

(statearr_38839[(7)] = inst_38737);

return statearr_38839;
})();
var statearr_38840_38892 = state_38810__$1;
(statearr_38840_38892[(2)] = null);

(statearr_38840_38892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (25))){
var inst_38806 = (state_38810[(2)]);
var state_38810__$1 = state_38810;
var statearr_38841_38893 = state_38810__$1;
(statearr_38841_38893[(2)] = inst_38806);

(statearr_38841_38893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (34))){
var inst_38804 = (state_38810[(2)]);
var state_38810__$1 = state_38810;
var statearr_38842_38894 = state_38810__$1;
(statearr_38842_38894[(2)] = inst_38804);

(statearr_38842_38894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (17))){
var state_38810__$1 = state_38810;
var statearr_38843_38895 = state_38810__$1;
(statearr_38843_38895[(2)] = false);

(statearr_38843_38895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (3))){
var state_38810__$1 = state_38810;
var statearr_38844_38896 = state_38810__$1;
(statearr_38844_38896[(2)] = false);

(statearr_38844_38896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (12))){
var inst_38808 = (state_38810[(2)]);
var state_38810__$1 = state_38810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38810__$1,inst_38808);
} else {
if((state_val_38811 === (2))){
var inst_38712 = (state_38810[(8)]);
var inst_38717 = inst_38712.cljs$lang$protocol_mask$partition0$;
var inst_38718 = (inst_38717 & (64));
var inst_38719 = inst_38712.cljs$core$ISeq$;
var inst_38720 = (cljs.core.PROTOCOL_SENTINEL === inst_38719);
var inst_38721 = (inst_38718) || (inst_38720);
var state_38810__$1 = state_38810;
if(cljs.core.truth_(inst_38721)){
var statearr_38845_38897 = state_38810__$1;
(statearr_38845_38897[(1)] = (5));

} else {
var statearr_38846_38898 = state_38810__$1;
(statearr_38846_38898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (23))){
var inst_38769 = (state_38810[(14)]);
var inst_38775 = (inst_38769 == null);
var state_38810__$1 = state_38810;
if(cljs.core.truth_(inst_38775)){
var statearr_38847_38899 = state_38810__$1;
(statearr_38847_38899[(1)] = (26));

} else {
var statearr_38848_38900 = state_38810__$1;
(statearr_38848_38900[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (35))){
var inst_38795 = (state_38810[(2)]);
var state_38810__$1 = state_38810;
if(cljs.core.truth_(inst_38795)){
var statearr_38849_38901 = state_38810__$1;
(statearr_38849_38901[(1)] = (36));

} else {
var statearr_38850_38902 = state_38810__$1;
(statearr_38850_38902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (19))){
var inst_38737 = (state_38810[(7)]);
var inst_38757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38737);
var state_38810__$1 = state_38810;
var statearr_38851_38903 = state_38810__$1;
(statearr_38851_38903[(2)] = inst_38757);

(statearr_38851_38903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (11))){
var inst_38737 = (state_38810[(7)]);
var inst_38741 = (inst_38737 == null);
var inst_38742 = cljs.core.not.call(null,inst_38741);
var state_38810__$1 = state_38810;
if(inst_38742){
var statearr_38852_38904 = state_38810__$1;
(statearr_38852_38904[(1)] = (13));

} else {
var statearr_38853_38905 = state_38810__$1;
(statearr_38853_38905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (9))){
var inst_38712 = (state_38810[(8)]);
var state_38810__$1 = state_38810;
var statearr_38854_38906 = state_38810__$1;
(statearr_38854_38906[(2)] = inst_38712);

(statearr_38854_38906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (5))){
var state_38810__$1 = state_38810;
var statearr_38855_38907 = state_38810__$1;
(statearr_38855_38907[(2)] = true);

(statearr_38855_38907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (14))){
var state_38810__$1 = state_38810;
var statearr_38856_38908 = state_38810__$1;
(statearr_38856_38908[(2)] = false);

(statearr_38856_38908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (26))){
var inst_38770 = (state_38810[(10)]);
var inst_38777 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38770);
var state_38810__$1 = state_38810;
var statearr_38857_38909 = state_38810__$1;
(statearr_38857_38909[(2)] = inst_38777);

(statearr_38857_38909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (16))){
var state_38810__$1 = state_38810;
var statearr_38858_38910 = state_38810__$1;
(statearr_38858_38910[(2)] = true);

(statearr_38858_38910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (38))){
var inst_38800 = (state_38810[(2)]);
var state_38810__$1 = state_38810;
var statearr_38859_38911 = state_38810__$1;
(statearr_38859_38911[(2)] = inst_38800);

(statearr_38859_38911[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (30))){
var inst_38770 = (state_38810[(10)]);
var inst_38761 = (state_38810[(11)]);
var inst_38762 = (state_38810[(13)]);
var inst_38787 = cljs.core.empty_QMARK_.call(null,inst_38761);
var inst_38788 = inst_38762.call(null,inst_38770);
var inst_38789 = cljs.core.not.call(null,inst_38788);
var inst_38790 = (inst_38787) && (inst_38789);
var state_38810__$1 = state_38810;
var statearr_38860_38912 = state_38810__$1;
(statearr_38860_38912[(2)] = inst_38790);

(statearr_38860_38912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (10))){
var inst_38712 = (state_38810[(8)]);
var inst_38733 = (state_38810[(2)]);
var inst_38734 = cljs.core.get.call(null,inst_38733,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38735 = cljs.core.get.call(null,inst_38733,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38736 = cljs.core.get.call(null,inst_38733,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38737 = inst_38712;
var state_38810__$1 = (function (){var statearr_38861 = state_38810;
(statearr_38861[(16)] = inst_38735);

(statearr_38861[(7)] = inst_38737);

(statearr_38861[(17)] = inst_38736);

(statearr_38861[(18)] = inst_38734);

return statearr_38861;
})();
var statearr_38862_38913 = state_38810__$1;
(statearr_38862_38913[(2)] = null);

(statearr_38862_38913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (18))){
var inst_38752 = (state_38810[(2)]);
var state_38810__$1 = state_38810;
var statearr_38863_38914 = state_38810__$1;
(statearr_38863_38914[(2)] = inst_38752);

(statearr_38863_38914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (37))){
var state_38810__$1 = state_38810;
var statearr_38864_38915 = state_38810__$1;
(statearr_38864_38915[(2)] = null);

(statearr_38864_38915[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38811 === (8))){
var inst_38712 = (state_38810[(8)]);
var inst_38730 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38712);
var state_38810__$1 = state_38810;
var statearr_38865_38916 = state_38810__$1;
(statearr_38865_38916[(2)] = inst_38730);

(statearr_38865_38916[(1)] = (10));


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
});})(c__37825__auto___38870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37737__auto__,c__37825__auto___38870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37738__auto__ = null;
var cljs$core$async$mix_$_state_machine__37738__auto____0 = (function (){
var statearr_38866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38866[(0)] = cljs$core$async$mix_$_state_machine__37738__auto__);

(statearr_38866[(1)] = (1));

return statearr_38866;
});
var cljs$core$async$mix_$_state_machine__37738__auto____1 = (function (state_38810){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e38867){if((e38867 instanceof Object)){
var ex__37741__auto__ = e38867;
var statearr_38868_38917 = state_38810;
(statearr_38868_38917[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38918 = state_38810;
state_38810 = G__38918;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37738__auto__ = function(state_38810){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37738__auto____1.call(this,state_38810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37738__auto____0;
cljs$core$async$mix_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37738__auto____1;
return cljs$core$async$mix_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___38870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37827__auto__ = (function (){var statearr_38869 = f__37826__auto__.call(null);
(statearr_38869[(6)] = c__37825__auto___38870);

return statearr_38869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___38870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__34374__auto__ = (((p == null))?null:p);
var m__34375__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__34375__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__34374__auto__ = (((p == null))?null:p);
var m__34375__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,p,v,ch);
} else {
var m__34375__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38920 = arguments.length;
switch (G__38920) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__34374__auto__ = (((p == null))?null:p);
var m__34375__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,p);
} else {
var m__34375__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__34374__auto__ = (((p == null))?null:p);
var m__34375__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34374__auto__)]);
if(!((m__34375__auto__ == null))){
return m__34375__auto__.call(null,p,v);
} else {
var m__34375__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34375__auto____$1 == null))){
return m__34375__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38924 = arguments.length;
switch (G__38924) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__33705__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__33705__auto__)){
return or__33705__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__33705__auto__,mults){
return (function (p1__38922_SHARP_){
if(cljs.core.truth_(p1__38922_SHARP_.call(null,topic))){
return p1__38922_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38922_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__33705__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38925 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38926){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38926 = meta38926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38927,meta38926__$1){
var self__ = this;
var _38927__$1 = this;
return (new cljs.core.async.t_cljs$core$async38925(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38926__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38927){
var self__ = this;
var _38927__$1 = this;
return self__.meta38926;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38925.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38926","meta38926",1905822680,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38925";

cljs.core.async.t_cljs$core$async38925.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async38925");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38925 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38925(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38926){
return (new cljs.core.async.t_cljs$core$async38925(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38926));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38925(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37825__auto___39045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___39045,mults,ensure_mult,p){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___39045,mults,ensure_mult,p){
return (function (state_38999){
var state_val_39000 = (state_38999[(1)]);
if((state_val_39000 === (7))){
var inst_38995 = (state_38999[(2)]);
var state_38999__$1 = state_38999;
var statearr_39001_39046 = state_38999__$1;
(statearr_39001_39046[(2)] = inst_38995);

(statearr_39001_39046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (20))){
var state_38999__$1 = state_38999;
var statearr_39002_39047 = state_38999__$1;
(statearr_39002_39047[(2)] = null);

(statearr_39002_39047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (1))){
var state_38999__$1 = state_38999;
var statearr_39003_39048 = state_38999__$1;
(statearr_39003_39048[(2)] = null);

(statearr_39003_39048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (24))){
var inst_38978 = (state_38999[(7)]);
var inst_38987 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38978);
var state_38999__$1 = state_38999;
var statearr_39004_39049 = state_38999__$1;
(statearr_39004_39049[(2)] = inst_38987);

(statearr_39004_39049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (4))){
var inst_38930 = (state_38999[(8)]);
var inst_38930__$1 = (state_38999[(2)]);
var inst_38931 = (inst_38930__$1 == null);
var state_38999__$1 = (function (){var statearr_39005 = state_38999;
(statearr_39005[(8)] = inst_38930__$1);

return statearr_39005;
})();
if(cljs.core.truth_(inst_38931)){
var statearr_39006_39050 = state_38999__$1;
(statearr_39006_39050[(1)] = (5));

} else {
var statearr_39007_39051 = state_38999__$1;
(statearr_39007_39051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (15))){
var inst_38972 = (state_38999[(2)]);
var state_38999__$1 = state_38999;
var statearr_39008_39052 = state_38999__$1;
(statearr_39008_39052[(2)] = inst_38972);

(statearr_39008_39052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (21))){
var inst_38992 = (state_38999[(2)]);
var state_38999__$1 = (function (){var statearr_39009 = state_38999;
(statearr_39009[(9)] = inst_38992);

return statearr_39009;
})();
var statearr_39010_39053 = state_38999__$1;
(statearr_39010_39053[(2)] = null);

(statearr_39010_39053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (13))){
var inst_38954 = (state_38999[(10)]);
var inst_38956 = cljs.core.chunked_seq_QMARK_.call(null,inst_38954);
var state_38999__$1 = state_38999;
if(inst_38956){
var statearr_39011_39054 = state_38999__$1;
(statearr_39011_39054[(1)] = (16));

} else {
var statearr_39012_39055 = state_38999__$1;
(statearr_39012_39055[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (22))){
var inst_38984 = (state_38999[(2)]);
var state_38999__$1 = state_38999;
if(cljs.core.truth_(inst_38984)){
var statearr_39013_39056 = state_38999__$1;
(statearr_39013_39056[(1)] = (23));

} else {
var statearr_39014_39057 = state_38999__$1;
(statearr_39014_39057[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (6))){
var inst_38980 = (state_38999[(11)]);
var inst_38978 = (state_38999[(7)]);
var inst_38930 = (state_38999[(8)]);
var inst_38978__$1 = topic_fn.call(null,inst_38930);
var inst_38979 = cljs.core.deref.call(null,mults);
var inst_38980__$1 = cljs.core.get.call(null,inst_38979,inst_38978__$1);
var state_38999__$1 = (function (){var statearr_39015 = state_38999;
(statearr_39015[(11)] = inst_38980__$1);

(statearr_39015[(7)] = inst_38978__$1);

return statearr_39015;
})();
if(cljs.core.truth_(inst_38980__$1)){
var statearr_39016_39058 = state_38999__$1;
(statearr_39016_39058[(1)] = (19));

} else {
var statearr_39017_39059 = state_38999__$1;
(statearr_39017_39059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (25))){
var inst_38989 = (state_38999[(2)]);
var state_38999__$1 = state_38999;
var statearr_39018_39060 = state_38999__$1;
(statearr_39018_39060[(2)] = inst_38989);

(statearr_39018_39060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (17))){
var inst_38954 = (state_38999[(10)]);
var inst_38963 = cljs.core.first.call(null,inst_38954);
var inst_38964 = cljs.core.async.muxch_STAR_.call(null,inst_38963);
var inst_38965 = cljs.core.async.close_BANG_.call(null,inst_38964);
var inst_38966 = cljs.core.next.call(null,inst_38954);
var inst_38940 = inst_38966;
var inst_38941 = null;
var inst_38942 = (0);
var inst_38943 = (0);
var state_38999__$1 = (function (){var statearr_39019 = state_38999;
(statearr_39019[(12)] = inst_38941);

(statearr_39019[(13)] = inst_38940);

(statearr_39019[(14)] = inst_38942);

(statearr_39019[(15)] = inst_38965);

(statearr_39019[(16)] = inst_38943);

return statearr_39019;
})();
var statearr_39020_39061 = state_38999__$1;
(statearr_39020_39061[(2)] = null);

(statearr_39020_39061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (3))){
var inst_38997 = (state_38999[(2)]);
var state_38999__$1 = state_38999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38999__$1,inst_38997);
} else {
if((state_val_39000 === (12))){
var inst_38974 = (state_38999[(2)]);
var state_38999__$1 = state_38999;
var statearr_39021_39062 = state_38999__$1;
(statearr_39021_39062[(2)] = inst_38974);

(statearr_39021_39062[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (2))){
var state_38999__$1 = state_38999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38999__$1,(4),ch);
} else {
if((state_val_39000 === (23))){
var state_38999__$1 = state_38999;
var statearr_39022_39063 = state_38999__$1;
(statearr_39022_39063[(2)] = null);

(statearr_39022_39063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (19))){
var inst_38980 = (state_38999[(11)]);
var inst_38930 = (state_38999[(8)]);
var inst_38982 = cljs.core.async.muxch_STAR_.call(null,inst_38980);
var state_38999__$1 = state_38999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38999__$1,(22),inst_38982,inst_38930);
} else {
if((state_val_39000 === (11))){
var inst_38954 = (state_38999[(10)]);
var inst_38940 = (state_38999[(13)]);
var inst_38954__$1 = cljs.core.seq.call(null,inst_38940);
var state_38999__$1 = (function (){var statearr_39023 = state_38999;
(statearr_39023[(10)] = inst_38954__$1);

return statearr_39023;
})();
if(inst_38954__$1){
var statearr_39024_39064 = state_38999__$1;
(statearr_39024_39064[(1)] = (13));

} else {
var statearr_39025_39065 = state_38999__$1;
(statearr_39025_39065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (9))){
var inst_38976 = (state_38999[(2)]);
var state_38999__$1 = state_38999;
var statearr_39026_39066 = state_38999__$1;
(statearr_39026_39066[(2)] = inst_38976);

(statearr_39026_39066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (5))){
var inst_38937 = cljs.core.deref.call(null,mults);
var inst_38938 = cljs.core.vals.call(null,inst_38937);
var inst_38939 = cljs.core.seq.call(null,inst_38938);
var inst_38940 = inst_38939;
var inst_38941 = null;
var inst_38942 = (0);
var inst_38943 = (0);
var state_38999__$1 = (function (){var statearr_39027 = state_38999;
(statearr_39027[(12)] = inst_38941);

(statearr_39027[(13)] = inst_38940);

(statearr_39027[(14)] = inst_38942);

(statearr_39027[(16)] = inst_38943);

return statearr_39027;
})();
var statearr_39028_39067 = state_38999__$1;
(statearr_39028_39067[(2)] = null);

(statearr_39028_39067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (14))){
var state_38999__$1 = state_38999;
var statearr_39032_39068 = state_38999__$1;
(statearr_39032_39068[(2)] = null);

(statearr_39032_39068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (16))){
var inst_38954 = (state_38999[(10)]);
var inst_38958 = cljs.core.chunk_first.call(null,inst_38954);
var inst_38959 = cljs.core.chunk_rest.call(null,inst_38954);
var inst_38960 = cljs.core.count.call(null,inst_38958);
var inst_38940 = inst_38959;
var inst_38941 = inst_38958;
var inst_38942 = inst_38960;
var inst_38943 = (0);
var state_38999__$1 = (function (){var statearr_39033 = state_38999;
(statearr_39033[(12)] = inst_38941);

(statearr_39033[(13)] = inst_38940);

(statearr_39033[(14)] = inst_38942);

(statearr_39033[(16)] = inst_38943);

return statearr_39033;
})();
var statearr_39034_39069 = state_38999__$1;
(statearr_39034_39069[(2)] = null);

(statearr_39034_39069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (10))){
var inst_38941 = (state_38999[(12)]);
var inst_38940 = (state_38999[(13)]);
var inst_38942 = (state_38999[(14)]);
var inst_38943 = (state_38999[(16)]);
var inst_38948 = cljs.core._nth.call(null,inst_38941,inst_38943);
var inst_38949 = cljs.core.async.muxch_STAR_.call(null,inst_38948);
var inst_38950 = cljs.core.async.close_BANG_.call(null,inst_38949);
var inst_38951 = (inst_38943 + (1));
var tmp39029 = inst_38941;
var tmp39030 = inst_38940;
var tmp39031 = inst_38942;
var inst_38940__$1 = tmp39030;
var inst_38941__$1 = tmp39029;
var inst_38942__$1 = tmp39031;
var inst_38943__$1 = inst_38951;
var state_38999__$1 = (function (){var statearr_39035 = state_38999;
(statearr_39035[(17)] = inst_38950);

(statearr_39035[(12)] = inst_38941__$1);

(statearr_39035[(13)] = inst_38940__$1);

(statearr_39035[(14)] = inst_38942__$1);

(statearr_39035[(16)] = inst_38943__$1);

return statearr_39035;
})();
var statearr_39036_39070 = state_38999__$1;
(statearr_39036_39070[(2)] = null);

(statearr_39036_39070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (18))){
var inst_38969 = (state_38999[(2)]);
var state_38999__$1 = state_38999;
var statearr_39037_39071 = state_38999__$1;
(statearr_39037_39071[(2)] = inst_38969);

(statearr_39037_39071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39000 === (8))){
var inst_38942 = (state_38999[(14)]);
var inst_38943 = (state_38999[(16)]);
var inst_38945 = (inst_38943 < inst_38942);
var inst_38946 = inst_38945;
var state_38999__$1 = state_38999;
if(cljs.core.truth_(inst_38946)){
var statearr_39038_39072 = state_38999__$1;
(statearr_39038_39072[(1)] = (10));

} else {
var statearr_39039_39073 = state_38999__$1;
(statearr_39039_39073[(1)] = (11));

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
});})(c__37825__auto___39045,mults,ensure_mult,p))
;
return ((function (switch__37737__auto__,c__37825__auto___39045,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_39040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39040[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_39040[(1)] = (1));

return statearr_39040;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_38999){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_38999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e39041){if((e39041 instanceof Object)){
var ex__37741__auto__ = e39041;
var statearr_39042_39074 = state_38999;
(statearr_39042_39074[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39075 = state_38999;
state_38999 = G__39075;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_38999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_38999);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___39045,mults,ensure_mult,p))
})();
var state__37827__auto__ = (function (){var statearr_39043 = f__37826__auto__.call(null);
(statearr_39043[(6)] = c__37825__auto___39045);

return statearr_39043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___39045,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39077 = arguments.length;
switch (G__39077) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39080 = arguments.length;
switch (G__39080) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39083 = arguments.length;
switch (G__39083) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37825__auto___39150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___39150,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___39150,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39122){
var state_val_39123 = (state_39122[(1)]);
if((state_val_39123 === (7))){
var state_39122__$1 = state_39122;
var statearr_39124_39151 = state_39122__$1;
(statearr_39124_39151[(2)] = null);

(statearr_39124_39151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (1))){
var state_39122__$1 = state_39122;
var statearr_39125_39152 = state_39122__$1;
(statearr_39125_39152[(2)] = null);

(statearr_39125_39152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (4))){
var inst_39086 = (state_39122[(7)]);
var inst_39088 = (inst_39086 < cnt);
var state_39122__$1 = state_39122;
if(cljs.core.truth_(inst_39088)){
var statearr_39126_39153 = state_39122__$1;
(statearr_39126_39153[(1)] = (6));

} else {
var statearr_39127_39154 = state_39122__$1;
(statearr_39127_39154[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (15))){
var inst_39118 = (state_39122[(2)]);
var state_39122__$1 = state_39122;
var statearr_39128_39155 = state_39122__$1;
(statearr_39128_39155[(2)] = inst_39118);

(statearr_39128_39155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (13))){
var inst_39111 = cljs.core.async.close_BANG_.call(null,out);
var state_39122__$1 = state_39122;
var statearr_39129_39156 = state_39122__$1;
(statearr_39129_39156[(2)] = inst_39111);

(statearr_39129_39156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (6))){
var state_39122__$1 = state_39122;
var statearr_39130_39157 = state_39122__$1;
(statearr_39130_39157[(2)] = null);

(statearr_39130_39157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (3))){
var inst_39120 = (state_39122[(2)]);
var state_39122__$1 = state_39122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39122__$1,inst_39120);
} else {
if((state_val_39123 === (12))){
var inst_39108 = (state_39122[(8)]);
var inst_39108__$1 = (state_39122[(2)]);
var inst_39109 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39108__$1);
var state_39122__$1 = (function (){var statearr_39131 = state_39122;
(statearr_39131[(8)] = inst_39108__$1);

return statearr_39131;
})();
if(cljs.core.truth_(inst_39109)){
var statearr_39132_39158 = state_39122__$1;
(statearr_39132_39158[(1)] = (13));

} else {
var statearr_39133_39159 = state_39122__$1;
(statearr_39133_39159[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (2))){
var inst_39085 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39086 = (0);
var state_39122__$1 = (function (){var statearr_39134 = state_39122;
(statearr_39134[(9)] = inst_39085);

(statearr_39134[(7)] = inst_39086);

return statearr_39134;
})();
var statearr_39135_39160 = state_39122__$1;
(statearr_39135_39160[(2)] = null);

(statearr_39135_39160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (11))){
var inst_39086 = (state_39122[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39122,(10),Object,null,(9));
var inst_39095 = chs__$1.call(null,inst_39086);
var inst_39096 = done.call(null,inst_39086);
var inst_39097 = cljs.core.async.take_BANG_.call(null,inst_39095,inst_39096);
var state_39122__$1 = state_39122;
var statearr_39136_39161 = state_39122__$1;
(statearr_39136_39161[(2)] = inst_39097);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (9))){
var inst_39086 = (state_39122[(7)]);
var inst_39099 = (state_39122[(2)]);
var inst_39100 = (inst_39086 + (1));
var inst_39086__$1 = inst_39100;
var state_39122__$1 = (function (){var statearr_39137 = state_39122;
(statearr_39137[(10)] = inst_39099);

(statearr_39137[(7)] = inst_39086__$1);

return statearr_39137;
})();
var statearr_39138_39162 = state_39122__$1;
(statearr_39138_39162[(2)] = null);

(statearr_39138_39162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (5))){
var inst_39106 = (state_39122[(2)]);
var state_39122__$1 = (function (){var statearr_39139 = state_39122;
(statearr_39139[(11)] = inst_39106);

return statearr_39139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39122__$1,(12),dchan);
} else {
if((state_val_39123 === (14))){
var inst_39108 = (state_39122[(8)]);
var inst_39113 = cljs.core.apply.call(null,f,inst_39108);
var state_39122__$1 = state_39122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39122__$1,(16),out,inst_39113);
} else {
if((state_val_39123 === (16))){
var inst_39115 = (state_39122[(2)]);
var state_39122__$1 = (function (){var statearr_39140 = state_39122;
(statearr_39140[(12)] = inst_39115);

return statearr_39140;
})();
var statearr_39141_39163 = state_39122__$1;
(statearr_39141_39163[(2)] = null);

(statearr_39141_39163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (10))){
var inst_39090 = (state_39122[(2)]);
var inst_39091 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39122__$1 = (function (){var statearr_39142 = state_39122;
(statearr_39142[(13)] = inst_39090);

return statearr_39142;
})();
var statearr_39143_39164 = state_39122__$1;
(statearr_39143_39164[(2)] = inst_39091);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39123 === (8))){
var inst_39104 = (state_39122[(2)]);
var state_39122__$1 = state_39122;
var statearr_39144_39165 = state_39122__$1;
(statearr_39144_39165[(2)] = inst_39104);

(statearr_39144_39165[(1)] = (5));


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
});})(c__37825__auto___39150,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37737__auto__,c__37825__auto___39150,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_39145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39145[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_39145[(1)] = (1));

return statearr_39145;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_39122){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_39122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e39146){if((e39146 instanceof Object)){
var ex__37741__auto__ = e39146;
var statearr_39147_39166 = state_39122;
(statearr_39147_39166[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39167 = state_39122;
state_39122 = G__39167;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_39122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_39122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___39150,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37827__auto__ = (function (){var statearr_39148 = f__37826__auto__.call(null);
(statearr_39148[(6)] = c__37825__auto___39150);

return statearr_39148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___39150,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39170 = arguments.length;
switch (G__39170) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37825__auto___39224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___39224,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___39224,out){
return (function (state_39202){
var state_val_39203 = (state_39202[(1)]);
if((state_val_39203 === (7))){
var inst_39182 = (state_39202[(7)]);
var inst_39181 = (state_39202[(8)]);
var inst_39181__$1 = (state_39202[(2)]);
var inst_39182__$1 = cljs.core.nth.call(null,inst_39181__$1,(0),null);
var inst_39183 = cljs.core.nth.call(null,inst_39181__$1,(1),null);
var inst_39184 = (inst_39182__$1 == null);
var state_39202__$1 = (function (){var statearr_39204 = state_39202;
(statearr_39204[(9)] = inst_39183);

(statearr_39204[(7)] = inst_39182__$1);

(statearr_39204[(8)] = inst_39181__$1);

return statearr_39204;
})();
if(cljs.core.truth_(inst_39184)){
var statearr_39205_39225 = state_39202__$1;
(statearr_39205_39225[(1)] = (8));

} else {
var statearr_39206_39226 = state_39202__$1;
(statearr_39206_39226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (1))){
var inst_39171 = cljs.core.vec.call(null,chs);
var inst_39172 = inst_39171;
var state_39202__$1 = (function (){var statearr_39207 = state_39202;
(statearr_39207[(10)] = inst_39172);

return statearr_39207;
})();
var statearr_39208_39227 = state_39202__$1;
(statearr_39208_39227[(2)] = null);

(statearr_39208_39227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (4))){
var inst_39172 = (state_39202[(10)]);
var state_39202__$1 = state_39202;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39202__$1,(7),inst_39172);
} else {
if((state_val_39203 === (6))){
var inst_39198 = (state_39202[(2)]);
var state_39202__$1 = state_39202;
var statearr_39209_39228 = state_39202__$1;
(statearr_39209_39228[(2)] = inst_39198);

(statearr_39209_39228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (3))){
var inst_39200 = (state_39202[(2)]);
var state_39202__$1 = state_39202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39202__$1,inst_39200);
} else {
if((state_val_39203 === (2))){
var inst_39172 = (state_39202[(10)]);
var inst_39174 = cljs.core.count.call(null,inst_39172);
var inst_39175 = (inst_39174 > (0));
var state_39202__$1 = state_39202;
if(cljs.core.truth_(inst_39175)){
var statearr_39211_39229 = state_39202__$1;
(statearr_39211_39229[(1)] = (4));

} else {
var statearr_39212_39230 = state_39202__$1;
(statearr_39212_39230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (11))){
var inst_39172 = (state_39202[(10)]);
var inst_39191 = (state_39202[(2)]);
var tmp39210 = inst_39172;
var inst_39172__$1 = tmp39210;
var state_39202__$1 = (function (){var statearr_39213 = state_39202;
(statearr_39213[(11)] = inst_39191);

(statearr_39213[(10)] = inst_39172__$1);

return statearr_39213;
})();
var statearr_39214_39231 = state_39202__$1;
(statearr_39214_39231[(2)] = null);

(statearr_39214_39231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (9))){
var inst_39182 = (state_39202[(7)]);
var state_39202__$1 = state_39202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39202__$1,(11),out,inst_39182);
} else {
if((state_val_39203 === (5))){
var inst_39196 = cljs.core.async.close_BANG_.call(null,out);
var state_39202__$1 = state_39202;
var statearr_39215_39232 = state_39202__$1;
(statearr_39215_39232[(2)] = inst_39196);

(statearr_39215_39232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (10))){
var inst_39194 = (state_39202[(2)]);
var state_39202__$1 = state_39202;
var statearr_39216_39233 = state_39202__$1;
(statearr_39216_39233[(2)] = inst_39194);

(statearr_39216_39233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (8))){
var inst_39183 = (state_39202[(9)]);
var inst_39182 = (state_39202[(7)]);
var inst_39172 = (state_39202[(10)]);
var inst_39181 = (state_39202[(8)]);
var inst_39186 = (function (){var cs = inst_39172;
var vec__39177 = inst_39181;
var v = inst_39182;
var c = inst_39183;
return ((function (cs,vec__39177,v,c,inst_39183,inst_39182,inst_39172,inst_39181,state_val_39203,c__37825__auto___39224,out){
return (function (p1__39168_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39168_SHARP_);
});
;})(cs,vec__39177,v,c,inst_39183,inst_39182,inst_39172,inst_39181,state_val_39203,c__37825__auto___39224,out))
})();
var inst_39187 = cljs.core.filterv.call(null,inst_39186,inst_39172);
var inst_39172__$1 = inst_39187;
var state_39202__$1 = (function (){var statearr_39217 = state_39202;
(statearr_39217[(10)] = inst_39172__$1);

return statearr_39217;
})();
var statearr_39218_39234 = state_39202__$1;
(statearr_39218_39234[(2)] = null);

(statearr_39218_39234[(1)] = (2));


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
});})(c__37825__auto___39224,out))
;
return ((function (switch__37737__auto__,c__37825__auto___39224,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_39219 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39219[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_39219[(1)] = (1));

return statearr_39219;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_39202){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_39202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e39220){if((e39220 instanceof Object)){
var ex__37741__auto__ = e39220;
var statearr_39221_39235 = state_39202;
(statearr_39221_39235[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39236 = state_39202;
state_39202 = G__39236;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_39202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_39202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___39224,out))
})();
var state__37827__auto__ = (function (){var statearr_39222 = f__37826__auto__.call(null);
(statearr_39222[(6)] = c__37825__auto___39224);

return statearr_39222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___39224,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39238 = arguments.length;
switch (G__39238) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37825__auto___39283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___39283,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___39283,out){
return (function (state_39262){
var state_val_39263 = (state_39262[(1)]);
if((state_val_39263 === (7))){
var inst_39244 = (state_39262[(7)]);
var inst_39244__$1 = (state_39262[(2)]);
var inst_39245 = (inst_39244__$1 == null);
var inst_39246 = cljs.core.not.call(null,inst_39245);
var state_39262__$1 = (function (){var statearr_39264 = state_39262;
(statearr_39264[(7)] = inst_39244__$1);

return statearr_39264;
})();
if(inst_39246){
var statearr_39265_39284 = state_39262__$1;
(statearr_39265_39284[(1)] = (8));

} else {
var statearr_39266_39285 = state_39262__$1;
(statearr_39266_39285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (1))){
var inst_39239 = (0);
var state_39262__$1 = (function (){var statearr_39267 = state_39262;
(statearr_39267[(8)] = inst_39239);

return statearr_39267;
})();
var statearr_39268_39286 = state_39262__$1;
(statearr_39268_39286[(2)] = null);

(statearr_39268_39286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (4))){
var state_39262__$1 = state_39262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39262__$1,(7),ch);
} else {
if((state_val_39263 === (6))){
var inst_39257 = (state_39262[(2)]);
var state_39262__$1 = state_39262;
var statearr_39269_39287 = state_39262__$1;
(statearr_39269_39287[(2)] = inst_39257);

(statearr_39269_39287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (3))){
var inst_39259 = (state_39262[(2)]);
var inst_39260 = cljs.core.async.close_BANG_.call(null,out);
var state_39262__$1 = (function (){var statearr_39270 = state_39262;
(statearr_39270[(9)] = inst_39259);

return statearr_39270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39262__$1,inst_39260);
} else {
if((state_val_39263 === (2))){
var inst_39239 = (state_39262[(8)]);
var inst_39241 = (inst_39239 < n);
var state_39262__$1 = state_39262;
if(cljs.core.truth_(inst_39241)){
var statearr_39271_39288 = state_39262__$1;
(statearr_39271_39288[(1)] = (4));

} else {
var statearr_39272_39289 = state_39262__$1;
(statearr_39272_39289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (11))){
var inst_39239 = (state_39262[(8)]);
var inst_39249 = (state_39262[(2)]);
var inst_39250 = (inst_39239 + (1));
var inst_39239__$1 = inst_39250;
var state_39262__$1 = (function (){var statearr_39273 = state_39262;
(statearr_39273[(8)] = inst_39239__$1);

(statearr_39273[(10)] = inst_39249);

return statearr_39273;
})();
var statearr_39274_39290 = state_39262__$1;
(statearr_39274_39290[(2)] = null);

(statearr_39274_39290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (9))){
var state_39262__$1 = state_39262;
var statearr_39275_39291 = state_39262__$1;
(statearr_39275_39291[(2)] = null);

(statearr_39275_39291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (5))){
var state_39262__$1 = state_39262;
var statearr_39276_39292 = state_39262__$1;
(statearr_39276_39292[(2)] = null);

(statearr_39276_39292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (10))){
var inst_39254 = (state_39262[(2)]);
var state_39262__$1 = state_39262;
var statearr_39277_39293 = state_39262__$1;
(statearr_39277_39293[(2)] = inst_39254);

(statearr_39277_39293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (8))){
var inst_39244 = (state_39262[(7)]);
var state_39262__$1 = state_39262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39262__$1,(11),out,inst_39244);
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
});})(c__37825__auto___39283,out))
;
return ((function (switch__37737__auto__,c__37825__auto___39283,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_39278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39278[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_39278[(1)] = (1));

return statearr_39278;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_39262){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_39262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e39279){if((e39279 instanceof Object)){
var ex__37741__auto__ = e39279;
var statearr_39280_39294 = state_39262;
(statearr_39280_39294[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39295 = state_39262;
state_39262 = G__39295;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_39262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_39262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___39283,out))
})();
var state__37827__auto__ = (function (){var statearr_39281 = f__37826__auto__.call(null);
(statearr_39281[(6)] = c__37825__auto___39283);

return statearr_39281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___39283,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39297 = (function (f,ch,meta39298){
this.f = f;
this.ch = ch;
this.meta39298 = meta39298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39299,meta39298__$1){
var self__ = this;
var _39299__$1 = this;
return (new cljs.core.async.t_cljs$core$async39297(self__.f,self__.ch,meta39298__$1));
});

cljs.core.async.t_cljs$core$async39297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39299){
var self__ = this;
var _39299__$1 = this;
return self__.meta39298;
});

cljs.core.async.t_cljs$core$async39297.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39297.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39297.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39300 = (function (f,ch,meta39298,_,fn1,meta39301){
this.f = f;
this.ch = ch;
this.meta39298 = meta39298;
this._ = _;
this.fn1 = fn1;
this.meta39301 = meta39301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39302,meta39301__$1){
var self__ = this;
var _39302__$1 = this;
return (new cljs.core.async.t_cljs$core$async39300(self__.f,self__.ch,self__.meta39298,self__._,self__.fn1,meta39301__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39302){
var self__ = this;
var _39302__$1 = this;
return self__.meta39301;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39300.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39300.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39296_SHARP_){
return f1.call(null,(((p1__39296_SHARP_ == null))?null:self__.f.call(null,p1__39296_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39300.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39298","meta39298",-1284833015,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39297","cljs.core.async/t_cljs$core$async39297",112713336,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39301","meta39301",1336088247,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39300";

cljs.core.async.t_cljs$core$async39300.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async39300");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39300 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39300(f__$1,ch__$1,meta39298__$1,___$2,fn1__$1,meta39301){
return (new cljs.core.async.t_cljs$core$async39300(f__$1,ch__$1,meta39298__$1,___$2,fn1__$1,meta39301));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39300(self__.f,self__.ch,self__.meta39298,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__33693__auto__ = ret;
if(cljs.core.truth_(and__33693__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__33693__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39297.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39298","meta39298",-1284833015,null)], null);
});

cljs.core.async.t_cljs$core$async39297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39297";

cljs.core.async.t_cljs$core$async39297.cljs$lang$ctorPrWriter = (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async39297");
});

cljs.core.async.__GT_t_cljs$core$async39297 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39297(f__$1,ch__$1,meta39298){
return (new cljs.core.async.t_cljs$core$async39297(f__$1,ch__$1,meta39298));
});

}

return (new cljs.core.async.t_cljs$core$async39297(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39303 = (function (f,ch,meta39304){
this.f = f;
this.ch = ch;
this.meta39304 = meta39304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39305,meta39304__$1){
var self__ = this;
var _39305__$1 = this;
return (new cljs.core.async.t_cljs$core$async39303(self__.f,self__.ch,meta39304__$1));
});

cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39305){
var self__ = this;
var _39305__$1 = this;
return self__.meta39304;
});

cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39304","meta39304",78068754,null)], null);
});

cljs.core.async.t_cljs$core$async39303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39303";

cljs.core.async.t_cljs$core$async39303.cljs$lang$ctorPrWriter = (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async39303");
});

cljs.core.async.__GT_t_cljs$core$async39303 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39303(f__$1,ch__$1,meta39304){
return (new cljs.core.async.t_cljs$core$async39303(f__$1,ch__$1,meta39304));
});

}

return (new cljs.core.async.t_cljs$core$async39303(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39306 = (function (p,ch,meta39307){
this.p = p;
this.ch = ch;
this.meta39307 = meta39307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39308,meta39307__$1){
var self__ = this;
var _39308__$1 = this;
return (new cljs.core.async.t_cljs$core$async39306(self__.p,self__.ch,meta39307__$1));
});

cljs.core.async.t_cljs$core$async39306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39308){
var self__ = this;
var _39308__$1 = this;
return self__.meta39307;
});

cljs.core.async.t_cljs$core$async39306.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39306.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39306.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39306.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39307","meta39307",-1707543508,null)], null);
});

cljs.core.async.t_cljs$core$async39306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39306";

cljs.core.async.t_cljs$core$async39306.cljs$lang$ctorPrWriter = (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async39306");
});

cljs.core.async.__GT_t_cljs$core$async39306 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39306(p__$1,ch__$1,meta39307){
return (new cljs.core.async.t_cljs$core$async39306(p__$1,ch__$1,meta39307));
});

}

return (new cljs.core.async.t_cljs$core$async39306(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39310 = arguments.length;
switch (G__39310) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37825__auto___39350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___39350,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___39350,out){
return (function (state_39331){
var state_val_39332 = (state_39331[(1)]);
if((state_val_39332 === (7))){
var inst_39327 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39333_39351 = state_39331__$1;
(statearr_39333_39351[(2)] = inst_39327);

(statearr_39333_39351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (1))){
var state_39331__$1 = state_39331;
var statearr_39334_39352 = state_39331__$1;
(statearr_39334_39352[(2)] = null);

(statearr_39334_39352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (4))){
var inst_39313 = (state_39331[(7)]);
var inst_39313__$1 = (state_39331[(2)]);
var inst_39314 = (inst_39313__$1 == null);
var state_39331__$1 = (function (){var statearr_39335 = state_39331;
(statearr_39335[(7)] = inst_39313__$1);

return statearr_39335;
})();
if(cljs.core.truth_(inst_39314)){
var statearr_39336_39353 = state_39331__$1;
(statearr_39336_39353[(1)] = (5));

} else {
var statearr_39337_39354 = state_39331__$1;
(statearr_39337_39354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (6))){
var inst_39313 = (state_39331[(7)]);
var inst_39318 = p.call(null,inst_39313);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39318)){
var statearr_39338_39355 = state_39331__$1;
(statearr_39338_39355[(1)] = (8));

} else {
var statearr_39339_39356 = state_39331__$1;
(statearr_39339_39356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (3))){
var inst_39329 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39331__$1,inst_39329);
} else {
if((state_val_39332 === (2))){
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39331__$1,(4),ch);
} else {
if((state_val_39332 === (11))){
var inst_39321 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39340_39357 = state_39331__$1;
(statearr_39340_39357[(2)] = inst_39321);

(statearr_39340_39357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (9))){
var state_39331__$1 = state_39331;
var statearr_39341_39358 = state_39331__$1;
(statearr_39341_39358[(2)] = null);

(statearr_39341_39358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (5))){
var inst_39316 = cljs.core.async.close_BANG_.call(null,out);
var state_39331__$1 = state_39331;
var statearr_39342_39359 = state_39331__$1;
(statearr_39342_39359[(2)] = inst_39316);

(statearr_39342_39359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (10))){
var inst_39324 = (state_39331[(2)]);
var state_39331__$1 = (function (){var statearr_39343 = state_39331;
(statearr_39343[(8)] = inst_39324);

return statearr_39343;
})();
var statearr_39344_39360 = state_39331__$1;
(statearr_39344_39360[(2)] = null);

(statearr_39344_39360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (8))){
var inst_39313 = (state_39331[(7)]);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39331__$1,(11),out,inst_39313);
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
});})(c__37825__auto___39350,out))
;
return ((function (switch__37737__auto__,c__37825__auto___39350,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_39345 = [null,null,null,null,null,null,null,null,null];
(statearr_39345[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_39345[(1)] = (1));

return statearr_39345;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_39331){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_39331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e39346){if((e39346 instanceof Object)){
var ex__37741__auto__ = e39346;
var statearr_39347_39361 = state_39331;
(statearr_39347_39361[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39362 = state_39331;
state_39331 = G__39362;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_39331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_39331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___39350,out))
})();
var state__37827__auto__ = (function (){var statearr_39348 = f__37826__auto__.call(null);
(statearr_39348[(6)] = c__37825__auto___39350);

return statearr_39348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___39350,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39364 = arguments.length;
switch (G__39364) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__){
return (function (state_39427){
var state_val_39428 = (state_39427[(1)]);
if((state_val_39428 === (7))){
var inst_39423 = (state_39427[(2)]);
var state_39427__$1 = state_39427;
var statearr_39429_39467 = state_39427__$1;
(statearr_39429_39467[(2)] = inst_39423);

(statearr_39429_39467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (20))){
var inst_39393 = (state_39427[(7)]);
var inst_39404 = (state_39427[(2)]);
var inst_39405 = cljs.core.next.call(null,inst_39393);
var inst_39379 = inst_39405;
var inst_39380 = null;
var inst_39381 = (0);
var inst_39382 = (0);
var state_39427__$1 = (function (){var statearr_39430 = state_39427;
(statearr_39430[(8)] = inst_39381);

(statearr_39430[(9)] = inst_39404);

(statearr_39430[(10)] = inst_39382);

(statearr_39430[(11)] = inst_39379);

(statearr_39430[(12)] = inst_39380);

return statearr_39430;
})();
var statearr_39431_39468 = state_39427__$1;
(statearr_39431_39468[(2)] = null);

(statearr_39431_39468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (1))){
var state_39427__$1 = state_39427;
var statearr_39432_39469 = state_39427__$1;
(statearr_39432_39469[(2)] = null);

(statearr_39432_39469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (4))){
var inst_39368 = (state_39427[(13)]);
var inst_39368__$1 = (state_39427[(2)]);
var inst_39369 = (inst_39368__$1 == null);
var state_39427__$1 = (function (){var statearr_39433 = state_39427;
(statearr_39433[(13)] = inst_39368__$1);

return statearr_39433;
})();
if(cljs.core.truth_(inst_39369)){
var statearr_39434_39470 = state_39427__$1;
(statearr_39434_39470[(1)] = (5));

} else {
var statearr_39435_39471 = state_39427__$1;
(statearr_39435_39471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (15))){
var state_39427__$1 = state_39427;
var statearr_39439_39472 = state_39427__$1;
(statearr_39439_39472[(2)] = null);

(statearr_39439_39472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (21))){
var state_39427__$1 = state_39427;
var statearr_39440_39473 = state_39427__$1;
(statearr_39440_39473[(2)] = null);

(statearr_39440_39473[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (13))){
var inst_39381 = (state_39427[(8)]);
var inst_39382 = (state_39427[(10)]);
var inst_39379 = (state_39427[(11)]);
var inst_39380 = (state_39427[(12)]);
var inst_39389 = (state_39427[(2)]);
var inst_39390 = (inst_39382 + (1));
var tmp39436 = inst_39381;
var tmp39437 = inst_39379;
var tmp39438 = inst_39380;
var inst_39379__$1 = tmp39437;
var inst_39380__$1 = tmp39438;
var inst_39381__$1 = tmp39436;
var inst_39382__$1 = inst_39390;
var state_39427__$1 = (function (){var statearr_39441 = state_39427;
(statearr_39441[(8)] = inst_39381__$1);

(statearr_39441[(14)] = inst_39389);

(statearr_39441[(10)] = inst_39382__$1);

(statearr_39441[(11)] = inst_39379__$1);

(statearr_39441[(12)] = inst_39380__$1);

return statearr_39441;
})();
var statearr_39442_39474 = state_39427__$1;
(statearr_39442_39474[(2)] = null);

(statearr_39442_39474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (22))){
var state_39427__$1 = state_39427;
var statearr_39443_39475 = state_39427__$1;
(statearr_39443_39475[(2)] = null);

(statearr_39443_39475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (6))){
var inst_39368 = (state_39427[(13)]);
var inst_39377 = f.call(null,inst_39368);
var inst_39378 = cljs.core.seq.call(null,inst_39377);
var inst_39379 = inst_39378;
var inst_39380 = null;
var inst_39381 = (0);
var inst_39382 = (0);
var state_39427__$1 = (function (){var statearr_39444 = state_39427;
(statearr_39444[(8)] = inst_39381);

(statearr_39444[(10)] = inst_39382);

(statearr_39444[(11)] = inst_39379);

(statearr_39444[(12)] = inst_39380);

return statearr_39444;
})();
var statearr_39445_39476 = state_39427__$1;
(statearr_39445_39476[(2)] = null);

(statearr_39445_39476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (17))){
var inst_39393 = (state_39427[(7)]);
var inst_39397 = cljs.core.chunk_first.call(null,inst_39393);
var inst_39398 = cljs.core.chunk_rest.call(null,inst_39393);
var inst_39399 = cljs.core.count.call(null,inst_39397);
var inst_39379 = inst_39398;
var inst_39380 = inst_39397;
var inst_39381 = inst_39399;
var inst_39382 = (0);
var state_39427__$1 = (function (){var statearr_39446 = state_39427;
(statearr_39446[(8)] = inst_39381);

(statearr_39446[(10)] = inst_39382);

(statearr_39446[(11)] = inst_39379);

(statearr_39446[(12)] = inst_39380);

return statearr_39446;
})();
var statearr_39447_39477 = state_39427__$1;
(statearr_39447_39477[(2)] = null);

(statearr_39447_39477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (3))){
var inst_39425 = (state_39427[(2)]);
var state_39427__$1 = state_39427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39427__$1,inst_39425);
} else {
if((state_val_39428 === (12))){
var inst_39413 = (state_39427[(2)]);
var state_39427__$1 = state_39427;
var statearr_39448_39478 = state_39427__$1;
(statearr_39448_39478[(2)] = inst_39413);

(statearr_39448_39478[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (2))){
var state_39427__$1 = state_39427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39427__$1,(4),in$);
} else {
if((state_val_39428 === (23))){
var inst_39421 = (state_39427[(2)]);
var state_39427__$1 = state_39427;
var statearr_39449_39479 = state_39427__$1;
(statearr_39449_39479[(2)] = inst_39421);

(statearr_39449_39479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (19))){
var inst_39408 = (state_39427[(2)]);
var state_39427__$1 = state_39427;
var statearr_39450_39480 = state_39427__$1;
(statearr_39450_39480[(2)] = inst_39408);

(statearr_39450_39480[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (11))){
var inst_39379 = (state_39427[(11)]);
var inst_39393 = (state_39427[(7)]);
var inst_39393__$1 = cljs.core.seq.call(null,inst_39379);
var state_39427__$1 = (function (){var statearr_39451 = state_39427;
(statearr_39451[(7)] = inst_39393__$1);

return statearr_39451;
})();
if(inst_39393__$1){
var statearr_39452_39481 = state_39427__$1;
(statearr_39452_39481[(1)] = (14));

} else {
var statearr_39453_39482 = state_39427__$1;
(statearr_39453_39482[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (9))){
var inst_39415 = (state_39427[(2)]);
var inst_39416 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39427__$1 = (function (){var statearr_39454 = state_39427;
(statearr_39454[(15)] = inst_39415);

return statearr_39454;
})();
if(cljs.core.truth_(inst_39416)){
var statearr_39455_39483 = state_39427__$1;
(statearr_39455_39483[(1)] = (21));

} else {
var statearr_39456_39484 = state_39427__$1;
(statearr_39456_39484[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (5))){
var inst_39371 = cljs.core.async.close_BANG_.call(null,out);
var state_39427__$1 = state_39427;
var statearr_39457_39485 = state_39427__$1;
(statearr_39457_39485[(2)] = inst_39371);

(statearr_39457_39485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (14))){
var inst_39393 = (state_39427[(7)]);
var inst_39395 = cljs.core.chunked_seq_QMARK_.call(null,inst_39393);
var state_39427__$1 = state_39427;
if(inst_39395){
var statearr_39458_39486 = state_39427__$1;
(statearr_39458_39486[(1)] = (17));

} else {
var statearr_39459_39487 = state_39427__$1;
(statearr_39459_39487[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (16))){
var inst_39411 = (state_39427[(2)]);
var state_39427__$1 = state_39427;
var statearr_39460_39488 = state_39427__$1;
(statearr_39460_39488[(2)] = inst_39411);

(statearr_39460_39488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39428 === (10))){
var inst_39382 = (state_39427[(10)]);
var inst_39380 = (state_39427[(12)]);
var inst_39387 = cljs.core._nth.call(null,inst_39380,inst_39382);
var state_39427__$1 = state_39427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39427__$1,(13),out,inst_39387);
} else {
if((state_val_39428 === (18))){
var inst_39393 = (state_39427[(7)]);
var inst_39402 = cljs.core.first.call(null,inst_39393);
var state_39427__$1 = state_39427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39427__$1,(20),out,inst_39402);
} else {
if((state_val_39428 === (8))){
var inst_39381 = (state_39427[(8)]);
var inst_39382 = (state_39427[(10)]);
var inst_39384 = (inst_39382 < inst_39381);
var inst_39385 = inst_39384;
var state_39427__$1 = state_39427;
if(cljs.core.truth_(inst_39385)){
var statearr_39461_39489 = state_39427__$1;
(statearr_39461_39489[(1)] = (10));

} else {
var statearr_39462_39490 = state_39427__$1;
(statearr_39462_39490[(1)] = (11));

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
});})(c__37825__auto__))
;
return ((function (switch__37737__auto__,c__37825__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____0 = (function (){
var statearr_39463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39463[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__);

(statearr_39463[(1)] = (1));

return statearr_39463;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____1 = (function (state_39427){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_39427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e39464){if((e39464 instanceof Object)){
var ex__37741__auto__ = e39464;
var statearr_39465_39491 = state_39427;
(statearr_39465_39491[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39492 = state_39427;
state_39427 = G__39492;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__ = function(state_39427){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____1.call(this,state_39427);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__))
})();
var state__37827__auto__ = (function (){var statearr_39466 = f__37826__auto__.call(null);
(statearr_39466[(6)] = c__37825__auto__);

return statearr_39466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto__))
);

return c__37825__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39494 = arguments.length;
switch (G__39494) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39497 = arguments.length;
switch (G__39497) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39500 = arguments.length;
switch (G__39500) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37825__auto___39547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___39547,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___39547,out){
return (function (state_39524){
var state_val_39525 = (state_39524[(1)]);
if((state_val_39525 === (7))){
var inst_39519 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39526_39548 = state_39524__$1;
(statearr_39526_39548[(2)] = inst_39519);

(statearr_39526_39548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (1))){
var inst_39501 = null;
var state_39524__$1 = (function (){var statearr_39527 = state_39524;
(statearr_39527[(7)] = inst_39501);

return statearr_39527;
})();
var statearr_39528_39549 = state_39524__$1;
(statearr_39528_39549[(2)] = null);

(statearr_39528_39549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (4))){
var inst_39504 = (state_39524[(8)]);
var inst_39504__$1 = (state_39524[(2)]);
var inst_39505 = (inst_39504__$1 == null);
var inst_39506 = cljs.core.not.call(null,inst_39505);
var state_39524__$1 = (function (){var statearr_39529 = state_39524;
(statearr_39529[(8)] = inst_39504__$1);

return statearr_39529;
})();
if(inst_39506){
var statearr_39530_39550 = state_39524__$1;
(statearr_39530_39550[(1)] = (5));

} else {
var statearr_39531_39551 = state_39524__$1;
(statearr_39531_39551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (6))){
var state_39524__$1 = state_39524;
var statearr_39532_39552 = state_39524__$1;
(statearr_39532_39552[(2)] = null);

(statearr_39532_39552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (3))){
var inst_39521 = (state_39524[(2)]);
var inst_39522 = cljs.core.async.close_BANG_.call(null,out);
var state_39524__$1 = (function (){var statearr_39533 = state_39524;
(statearr_39533[(9)] = inst_39521);

return statearr_39533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39524__$1,inst_39522);
} else {
if((state_val_39525 === (2))){
var state_39524__$1 = state_39524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39524__$1,(4),ch);
} else {
if((state_val_39525 === (11))){
var inst_39504 = (state_39524[(8)]);
var inst_39513 = (state_39524[(2)]);
var inst_39501 = inst_39504;
var state_39524__$1 = (function (){var statearr_39534 = state_39524;
(statearr_39534[(7)] = inst_39501);

(statearr_39534[(10)] = inst_39513);

return statearr_39534;
})();
var statearr_39535_39553 = state_39524__$1;
(statearr_39535_39553[(2)] = null);

(statearr_39535_39553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (9))){
var inst_39504 = (state_39524[(8)]);
var state_39524__$1 = state_39524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39524__$1,(11),out,inst_39504);
} else {
if((state_val_39525 === (5))){
var inst_39501 = (state_39524[(7)]);
var inst_39504 = (state_39524[(8)]);
var inst_39508 = cljs.core._EQ_.call(null,inst_39504,inst_39501);
var state_39524__$1 = state_39524;
if(inst_39508){
var statearr_39537_39554 = state_39524__$1;
(statearr_39537_39554[(1)] = (8));

} else {
var statearr_39538_39555 = state_39524__$1;
(statearr_39538_39555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (10))){
var inst_39516 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39539_39556 = state_39524__$1;
(statearr_39539_39556[(2)] = inst_39516);

(statearr_39539_39556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (8))){
var inst_39501 = (state_39524[(7)]);
var tmp39536 = inst_39501;
var inst_39501__$1 = tmp39536;
var state_39524__$1 = (function (){var statearr_39540 = state_39524;
(statearr_39540[(7)] = inst_39501__$1);

return statearr_39540;
})();
var statearr_39541_39557 = state_39524__$1;
(statearr_39541_39557[(2)] = null);

(statearr_39541_39557[(1)] = (2));


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
});})(c__37825__auto___39547,out))
;
return ((function (switch__37737__auto__,c__37825__auto___39547,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_39542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39542[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_39542[(1)] = (1));

return statearr_39542;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_39524){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_39524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e39543){if((e39543 instanceof Object)){
var ex__37741__auto__ = e39543;
var statearr_39544_39558 = state_39524;
(statearr_39544_39558[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39559 = state_39524;
state_39524 = G__39559;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_39524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_39524);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___39547,out))
})();
var state__37827__auto__ = (function (){var statearr_39545 = f__37826__auto__.call(null);
(statearr_39545[(6)] = c__37825__auto___39547);

return statearr_39545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___39547,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39561 = arguments.length;
switch (G__39561) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37825__auto___39627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___39627,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___39627,out){
return (function (state_39599){
var state_val_39600 = (state_39599[(1)]);
if((state_val_39600 === (7))){
var inst_39595 = (state_39599[(2)]);
var state_39599__$1 = state_39599;
var statearr_39601_39628 = state_39599__$1;
(statearr_39601_39628[(2)] = inst_39595);

(statearr_39601_39628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39600 === (1))){
var inst_39562 = (new Array(n));
var inst_39563 = inst_39562;
var inst_39564 = (0);
var state_39599__$1 = (function (){var statearr_39602 = state_39599;
(statearr_39602[(7)] = inst_39563);

(statearr_39602[(8)] = inst_39564);

return statearr_39602;
})();
var statearr_39603_39629 = state_39599__$1;
(statearr_39603_39629[(2)] = null);

(statearr_39603_39629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39600 === (4))){
var inst_39567 = (state_39599[(9)]);
var inst_39567__$1 = (state_39599[(2)]);
var inst_39568 = (inst_39567__$1 == null);
var inst_39569 = cljs.core.not.call(null,inst_39568);
var state_39599__$1 = (function (){var statearr_39604 = state_39599;
(statearr_39604[(9)] = inst_39567__$1);

return statearr_39604;
})();
if(inst_39569){
var statearr_39605_39630 = state_39599__$1;
(statearr_39605_39630[(1)] = (5));

} else {
var statearr_39606_39631 = state_39599__$1;
(statearr_39606_39631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39600 === (15))){
var inst_39589 = (state_39599[(2)]);
var state_39599__$1 = state_39599;
var statearr_39607_39632 = state_39599__$1;
(statearr_39607_39632[(2)] = inst_39589);

(statearr_39607_39632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39600 === (13))){
var state_39599__$1 = state_39599;
var statearr_39608_39633 = state_39599__$1;
(statearr_39608_39633[(2)] = null);

(statearr_39608_39633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39600 === (6))){
var inst_39564 = (state_39599[(8)]);
var inst_39585 = (inst_39564 > (0));
var state_39599__$1 = state_39599;
if(cljs.core.truth_(inst_39585)){
var statearr_39609_39634 = state_39599__$1;
(statearr_39609_39634[(1)] = (12));

} else {
var statearr_39610_39635 = state_39599__$1;
(statearr_39610_39635[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39600 === (3))){
var inst_39597 = (state_39599[(2)]);
var state_39599__$1 = state_39599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39599__$1,inst_39597);
} else {
if((state_val_39600 === (12))){
var inst_39563 = (state_39599[(7)]);
var inst_39587 = cljs.core.vec.call(null,inst_39563);
var state_39599__$1 = state_39599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39599__$1,(15),out,inst_39587);
} else {
if((state_val_39600 === (2))){
var state_39599__$1 = state_39599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39599__$1,(4),ch);
} else {
if((state_val_39600 === (11))){
var inst_39579 = (state_39599[(2)]);
var inst_39580 = (new Array(n));
var inst_39563 = inst_39580;
var inst_39564 = (0);
var state_39599__$1 = (function (){var statearr_39611 = state_39599;
(statearr_39611[(7)] = inst_39563);

(statearr_39611[(10)] = inst_39579);

(statearr_39611[(8)] = inst_39564);

return statearr_39611;
})();
var statearr_39612_39636 = state_39599__$1;
(statearr_39612_39636[(2)] = null);

(statearr_39612_39636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39600 === (9))){
var inst_39563 = (state_39599[(7)]);
var inst_39577 = cljs.core.vec.call(null,inst_39563);
var state_39599__$1 = state_39599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39599__$1,(11),out,inst_39577);
} else {
if((state_val_39600 === (5))){
var inst_39563 = (state_39599[(7)]);
var inst_39567 = (state_39599[(9)]);
var inst_39572 = (state_39599[(11)]);
var inst_39564 = (state_39599[(8)]);
var inst_39571 = (inst_39563[inst_39564] = inst_39567);
var inst_39572__$1 = (inst_39564 + (1));
var inst_39573 = (inst_39572__$1 < n);
var state_39599__$1 = (function (){var statearr_39613 = state_39599;
(statearr_39613[(12)] = inst_39571);

(statearr_39613[(11)] = inst_39572__$1);

return statearr_39613;
})();
if(cljs.core.truth_(inst_39573)){
var statearr_39614_39637 = state_39599__$1;
(statearr_39614_39637[(1)] = (8));

} else {
var statearr_39615_39638 = state_39599__$1;
(statearr_39615_39638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39600 === (14))){
var inst_39592 = (state_39599[(2)]);
var inst_39593 = cljs.core.async.close_BANG_.call(null,out);
var state_39599__$1 = (function (){var statearr_39617 = state_39599;
(statearr_39617[(13)] = inst_39592);

return statearr_39617;
})();
var statearr_39618_39639 = state_39599__$1;
(statearr_39618_39639[(2)] = inst_39593);

(statearr_39618_39639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39600 === (10))){
var inst_39583 = (state_39599[(2)]);
var state_39599__$1 = state_39599;
var statearr_39619_39640 = state_39599__$1;
(statearr_39619_39640[(2)] = inst_39583);

(statearr_39619_39640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39600 === (8))){
var inst_39563 = (state_39599[(7)]);
var inst_39572 = (state_39599[(11)]);
var tmp39616 = inst_39563;
var inst_39563__$1 = tmp39616;
var inst_39564 = inst_39572;
var state_39599__$1 = (function (){var statearr_39620 = state_39599;
(statearr_39620[(7)] = inst_39563__$1);

(statearr_39620[(8)] = inst_39564);

return statearr_39620;
})();
var statearr_39621_39641 = state_39599__$1;
(statearr_39621_39641[(2)] = null);

(statearr_39621_39641[(1)] = (2));


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
});})(c__37825__auto___39627,out))
;
return ((function (switch__37737__auto__,c__37825__auto___39627,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_39622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39622[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_39622[(1)] = (1));

return statearr_39622;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_39599){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_39599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e39623){if((e39623 instanceof Object)){
var ex__37741__auto__ = e39623;
var statearr_39624_39642 = state_39599;
(statearr_39624_39642[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39643 = state_39599;
state_39599 = G__39643;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_39599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_39599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___39627,out))
})();
var state__37827__auto__ = (function (){var statearr_39625 = f__37826__auto__.call(null);
(statearr_39625[(6)] = c__37825__auto___39627);

return statearr_39625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___39627,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39645 = arguments.length;
switch (G__39645) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37825__auto___39715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___39715,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___39715,out){
return (function (state_39687){
var state_val_39688 = (state_39687[(1)]);
if((state_val_39688 === (7))){
var inst_39683 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39689_39716 = state_39687__$1;
(statearr_39689_39716[(2)] = inst_39683);

(statearr_39689_39716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (1))){
var inst_39646 = [];
var inst_39647 = inst_39646;
var inst_39648 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39687__$1 = (function (){var statearr_39690 = state_39687;
(statearr_39690[(7)] = inst_39648);

(statearr_39690[(8)] = inst_39647);

return statearr_39690;
})();
var statearr_39691_39717 = state_39687__$1;
(statearr_39691_39717[(2)] = null);

(statearr_39691_39717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (4))){
var inst_39651 = (state_39687[(9)]);
var inst_39651__$1 = (state_39687[(2)]);
var inst_39652 = (inst_39651__$1 == null);
var inst_39653 = cljs.core.not.call(null,inst_39652);
var state_39687__$1 = (function (){var statearr_39692 = state_39687;
(statearr_39692[(9)] = inst_39651__$1);

return statearr_39692;
})();
if(inst_39653){
var statearr_39693_39718 = state_39687__$1;
(statearr_39693_39718[(1)] = (5));

} else {
var statearr_39694_39719 = state_39687__$1;
(statearr_39694_39719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (15))){
var inst_39677 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39695_39720 = state_39687__$1;
(statearr_39695_39720[(2)] = inst_39677);

(statearr_39695_39720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (13))){
var state_39687__$1 = state_39687;
var statearr_39696_39721 = state_39687__$1;
(statearr_39696_39721[(2)] = null);

(statearr_39696_39721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (6))){
var inst_39647 = (state_39687[(8)]);
var inst_39672 = inst_39647.length;
var inst_39673 = (inst_39672 > (0));
var state_39687__$1 = state_39687;
if(cljs.core.truth_(inst_39673)){
var statearr_39697_39722 = state_39687__$1;
(statearr_39697_39722[(1)] = (12));

} else {
var statearr_39698_39723 = state_39687__$1;
(statearr_39698_39723[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (3))){
var inst_39685 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39687__$1,inst_39685);
} else {
if((state_val_39688 === (12))){
var inst_39647 = (state_39687[(8)]);
var inst_39675 = cljs.core.vec.call(null,inst_39647);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39687__$1,(15),out,inst_39675);
} else {
if((state_val_39688 === (2))){
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39687__$1,(4),ch);
} else {
if((state_val_39688 === (11))){
var inst_39651 = (state_39687[(9)]);
var inst_39655 = (state_39687[(10)]);
var inst_39665 = (state_39687[(2)]);
var inst_39666 = [];
var inst_39667 = inst_39666.push(inst_39651);
var inst_39647 = inst_39666;
var inst_39648 = inst_39655;
var state_39687__$1 = (function (){var statearr_39699 = state_39687;
(statearr_39699[(11)] = inst_39665);

(statearr_39699[(7)] = inst_39648);

(statearr_39699[(8)] = inst_39647);

(statearr_39699[(12)] = inst_39667);

return statearr_39699;
})();
var statearr_39700_39724 = state_39687__$1;
(statearr_39700_39724[(2)] = null);

(statearr_39700_39724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (9))){
var inst_39647 = (state_39687[(8)]);
var inst_39663 = cljs.core.vec.call(null,inst_39647);
var state_39687__$1 = state_39687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39687__$1,(11),out,inst_39663);
} else {
if((state_val_39688 === (5))){
var inst_39651 = (state_39687[(9)]);
var inst_39655 = (state_39687[(10)]);
var inst_39648 = (state_39687[(7)]);
var inst_39655__$1 = f.call(null,inst_39651);
var inst_39656 = cljs.core._EQ_.call(null,inst_39655__$1,inst_39648);
var inst_39657 = cljs.core.keyword_identical_QMARK_.call(null,inst_39648,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39658 = (inst_39656) || (inst_39657);
var state_39687__$1 = (function (){var statearr_39701 = state_39687;
(statearr_39701[(10)] = inst_39655__$1);

return statearr_39701;
})();
if(cljs.core.truth_(inst_39658)){
var statearr_39702_39725 = state_39687__$1;
(statearr_39702_39725[(1)] = (8));

} else {
var statearr_39703_39726 = state_39687__$1;
(statearr_39703_39726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (14))){
var inst_39680 = (state_39687[(2)]);
var inst_39681 = cljs.core.async.close_BANG_.call(null,out);
var state_39687__$1 = (function (){var statearr_39705 = state_39687;
(statearr_39705[(13)] = inst_39680);

return statearr_39705;
})();
var statearr_39706_39727 = state_39687__$1;
(statearr_39706_39727[(2)] = inst_39681);

(statearr_39706_39727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (10))){
var inst_39670 = (state_39687[(2)]);
var state_39687__$1 = state_39687;
var statearr_39707_39728 = state_39687__$1;
(statearr_39707_39728[(2)] = inst_39670);

(statearr_39707_39728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39688 === (8))){
var inst_39651 = (state_39687[(9)]);
var inst_39655 = (state_39687[(10)]);
var inst_39647 = (state_39687[(8)]);
var inst_39660 = inst_39647.push(inst_39651);
var tmp39704 = inst_39647;
var inst_39647__$1 = tmp39704;
var inst_39648 = inst_39655;
var state_39687__$1 = (function (){var statearr_39708 = state_39687;
(statearr_39708[(7)] = inst_39648);

(statearr_39708[(14)] = inst_39660);

(statearr_39708[(8)] = inst_39647__$1);

return statearr_39708;
})();
var statearr_39709_39729 = state_39687__$1;
(statearr_39709_39729[(2)] = null);

(statearr_39709_39729[(1)] = (2));


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
});})(c__37825__auto___39715,out))
;
return ((function (switch__37737__auto__,c__37825__auto___39715,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_39710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39710[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_39710[(1)] = (1));

return statearr_39710;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_39687){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_39687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e39711){if((e39711 instanceof Object)){
var ex__37741__auto__ = e39711;
var statearr_39712_39730 = state_39687;
(statearr_39712_39730[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39731 = state_39687;
state_39687 = G__39731;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_39687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_39687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___39715,out))
})();
var state__37827__auto__ = (function (){var statearr_39713 = f__37826__auto__.call(null);
(statearr_39713[(6)] = c__37825__auto___39715);

return statearr_39713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___39715,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514095999155