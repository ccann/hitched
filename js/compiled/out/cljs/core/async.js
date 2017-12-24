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
var G__46603 = arguments.length;
switch (G__46603) {
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
if(typeof cljs.core.async.t_cljs$core$async46604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46604 = (function (f,blockable,meta46605){
this.f = f;
this.blockable = blockable;
this.meta46605 = meta46605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46606,meta46605__$1){
var self__ = this;
var _46606__$1 = this;
return (new cljs.core.async.t_cljs$core$async46604(self__.f,self__.blockable,meta46605__$1));
});

cljs.core.async.t_cljs$core$async46604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46606){
var self__ = this;
var _46606__$1 = this;
return self__.meta46605;
});

cljs.core.async.t_cljs$core$async46604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46605","meta46605",-1863281485,null)], null);
});

cljs.core.async.t_cljs$core$async46604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46604";

cljs.core.async.t_cljs$core$async46604.cljs$lang$ctorPrWriter = (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async46604");
});

cljs.core.async.__GT_t_cljs$core$async46604 = (function cljs$core$async$__GT_t_cljs$core$async46604(f__$1,blockable__$1,meta46605){
return (new cljs.core.async.t_cljs$core$async46604(f__$1,blockable__$1,meta46605));
});

}

return (new cljs.core.async.t_cljs$core$async46604(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46610 = arguments.length;
switch (G__46610) {
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
var G__46613 = arguments.length;
switch (G__46613) {
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
var G__46616 = arguments.length;
switch (G__46616) {
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
var val_46618 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46618);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46618,ret){
return (function (){
return fn1.call(null,val_46618);
});})(val_46618,ret))
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
var G__46620 = arguments.length;
switch (G__46620) {
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
var n__34629__auto___46622 = n;
var x_46623 = (0);
while(true){
if((x_46623 < n__34629__auto___46622)){
(a[x_46623] = (0));

var G__46624 = (x_46623 + (1));
x_46623 = G__46624;
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

var G__46625 = (i + (1));
i = G__46625;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46626 = (function (flag,meta46627){
this.flag = flag;
this.meta46627 = meta46627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46628,meta46627__$1){
var self__ = this;
var _46628__$1 = this;
return (new cljs.core.async.t_cljs$core$async46626(self__.flag,meta46627__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46628){
var self__ = this;
var _46628__$1 = this;
return self__.meta46627;
});})(flag))
;

cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46626.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46627","meta46627",946656804,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46626";

cljs.core.async.t_cljs$core$async46626.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async46626");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46626 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46626(flag__$1,meta46627){
return (new cljs.core.async.t_cljs$core$async46626(flag__$1,meta46627));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46626(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46629 = (function (flag,cb,meta46630){
this.flag = flag;
this.cb = cb;
this.meta46630 = meta46630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46631,meta46630__$1){
var self__ = this;
var _46631__$1 = this;
return (new cljs.core.async.t_cljs$core$async46629(self__.flag,self__.cb,meta46630__$1));
});

cljs.core.async.t_cljs$core$async46629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46631){
var self__ = this;
var _46631__$1 = this;
return self__.meta46630;
});

cljs.core.async.t_cljs$core$async46629.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46629.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46629.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46629.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46630","meta46630",-1354300339,null)], null);
});

cljs.core.async.t_cljs$core$async46629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46629";

cljs.core.async.t_cljs$core$async46629.cljs$lang$ctorPrWriter = (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async46629");
});

cljs.core.async.__GT_t_cljs$core$async46629 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46629(flag__$1,cb__$1,meta46630){
return (new cljs.core.async.t_cljs$core$async46629(flag__$1,cb__$1,meta46630));
});

}

return (new cljs.core.async.t_cljs$core$async46629(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46632_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46632_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46633_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46633_SHARP_,port], null));
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
var G__46634 = (i + (1));
i = G__46634;
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
var len__34830__auto___46640 = arguments.length;
var i__34831__auto___46641 = (0);
while(true){
if((i__34831__auto___46641 < len__34830__auto___46640)){
args__34837__auto__.push((arguments[i__34831__auto___46641]));

var G__46642 = (i__34831__auto___46641 + (1));
i__34831__auto___46641 = G__46642;
continue;
} else {
}
break;
}

var argseq__34838__auto__ = ((((1) < args__34837__auto__.length))?(new cljs.core.IndexedSeq(args__34837__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34838__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46637){
var map__46638 = p__46637;
var map__46638__$1 = ((((!((map__46638 == null)))?((((map__46638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46638):map__46638);
var opts = map__46638__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46635){
var G__46636 = cljs.core.first.call(null,seq46635);
var seq46635__$1 = cljs.core.next.call(null,seq46635);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46636,seq46635__$1);
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
var G__46644 = arguments.length;
switch (G__46644) {
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
var c__37825__auto___46690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___46690){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___46690){
return (function (state_46668){
var state_val_46669 = (state_46668[(1)]);
if((state_val_46669 === (7))){
var inst_46664 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
var statearr_46670_46691 = state_46668__$1;
(statearr_46670_46691[(2)] = inst_46664);

(statearr_46670_46691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (1))){
var state_46668__$1 = state_46668;
var statearr_46671_46692 = state_46668__$1;
(statearr_46671_46692[(2)] = null);

(statearr_46671_46692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (4))){
var inst_46647 = (state_46668[(7)]);
var inst_46647__$1 = (state_46668[(2)]);
var inst_46648 = (inst_46647__$1 == null);
var state_46668__$1 = (function (){var statearr_46672 = state_46668;
(statearr_46672[(7)] = inst_46647__$1);

return statearr_46672;
})();
if(cljs.core.truth_(inst_46648)){
var statearr_46673_46693 = state_46668__$1;
(statearr_46673_46693[(1)] = (5));

} else {
var statearr_46674_46694 = state_46668__$1;
(statearr_46674_46694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (13))){
var state_46668__$1 = state_46668;
var statearr_46675_46695 = state_46668__$1;
(statearr_46675_46695[(2)] = null);

(statearr_46675_46695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (6))){
var inst_46647 = (state_46668[(7)]);
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46668__$1,(11),to,inst_46647);
} else {
if((state_val_46669 === (3))){
var inst_46666 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46668__$1,inst_46666);
} else {
if((state_val_46669 === (12))){
var state_46668__$1 = state_46668;
var statearr_46676_46696 = state_46668__$1;
(statearr_46676_46696[(2)] = null);

(statearr_46676_46696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (2))){
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46668__$1,(4),from);
} else {
if((state_val_46669 === (11))){
var inst_46657 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
if(cljs.core.truth_(inst_46657)){
var statearr_46677_46697 = state_46668__$1;
(statearr_46677_46697[(1)] = (12));

} else {
var statearr_46678_46698 = state_46668__$1;
(statearr_46678_46698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (9))){
var state_46668__$1 = state_46668;
var statearr_46679_46699 = state_46668__$1;
(statearr_46679_46699[(2)] = null);

(statearr_46679_46699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (5))){
var state_46668__$1 = state_46668;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46680_46700 = state_46668__$1;
(statearr_46680_46700[(1)] = (8));

} else {
var statearr_46681_46701 = state_46668__$1;
(statearr_46681_46701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (14))){
var inst_46662 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
var statearr_46682_46702 = state_46668__$1;
(statearr_46682_46702[(2)] = inst_46662);

(statearr_46682_46702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (10))){
var inst_46654 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
var statearr_46683_46703 = state_46668__$1;
(statearr_46683_46703[(2)] = inst_46654);

(statearr_46683_46703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (8))){
var inst_46651 = cljs.core.async.close_BANG_.call(null,to);
var state_46668__$1 = state_46668;
var statearr_46684_46704 = state_46668__$1;
(statearr_46684_46704[(2)] = inst_46651);

(statearr_46684_46704[(1)] = (10));


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
});})(c__37825__auto___46690))
;
return ((function (switch__37737__auto__,c__37825__auto___46690){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_46685 = [null,null,null,null,null,null,null,null];
(statearr_46685[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_46685[(1)] = (1));

return statearr_46685;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_46668){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_46668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e46686){if((e46686 instanceof Object)){
var ex__37741__auto__ = e46686;
var statearr_46687_46705 = state_46668;
(statearr_46687_46705[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46706 = state_46668;
state_46668 = G__46706;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_46668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_46668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___46690))
})();
var state__37827__auto__ = (function (){var statearr_46688 = f__37826__auto__.call(null);
(statearr_46688[(6)] = c__37825__auto___46690);

return statearr_46688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___46690))
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
return (function (p__46707){
var vec__46708 = p__46707;
var v = cljs.core.nth.call(null,vec__46708,(0),null);
var p = cljs.core.nth.call(null,vec__46708,(1),null);
var job = vec__46708;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37825__auto___46879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___46879,res,vec__46708,v,p,job,jobs,results){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___46879,res,vec__46708,v,p,job,jobs,results){
return (function (state_46715){
var state_val_46716 = (state_46715[(1)]);
if((state_val_46716 === (1))){
var state_46715__$1 = state_46715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46715__$1,(2),res,v);
} else {
if((state_val_46716 === (2))){
var inst_46712 = (state_46715[(2)]);
var inst_46713 = cljs.core.async.close_BANG_.call(null,res);
var state_46715__$1 = (function (){var statearr_46717 = state_46715;
(statearr_46717[(7)] = inst_46712);

return statearr_46717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46715__$1,inst_46713);
} else {
return null;
}
}
});})(c__37825__auto___46879,res,vec__46708,v,p,job,jobs,results))
;
return ((function (switch__37737__auto__,c__37825__auto___46879,res,vec__46708,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0 = (function (){
var statearr_46718 = [null,null,null,null,null,null,null,null];
(statearr_46718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__);

(statearr_46718[(1)] = (1));

return statearr_46718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1 = (function (state_46715){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_46715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e46719){if((e46719 instanceof Object)){
var ex__37741__auto__ = e46719;
var statearr_46720_46880 = state_46715;
(statearr_46720_46880[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46881 = state_46715;
state_46715 = G__46881;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = function(state_46715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1.call(this,state_46715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___46879,res,vec__46708,v,p,job,jobs,results))
})();
var state__37827__auto__ = (function (){var statearr_46721 = f__37826__auto__.call(null);
(statearr_46721[(6)] = c__37825__auto___46879);

return statearr_46721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___46879,res,vec__46708,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46722){
var vec__46723 = p__46722;
var v = cljs.core.nth.call(null,vec__46723,(0),null);
var p = cljs.core.nth.call(null,vec__46723,(1),null);
var job = vec__46723;
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
var n__34629__auto___46882 = n;
var __46883 = (0);
while(true){
if((__46883 < n__34629__auto___46882)){
var G__46726_46884 = type;
var G__46726_46885__$1 = (((G__46726_46884 instanceof cljs.core.Keyword))?G__46726_46884.fqn:null);
switch (G__46726_46885__$1) {
case "compute":
var c__37825__auto___46887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46883,c__37825__auto___46887,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (__46883,c__37825__auto___46887,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async){
return (function (state_46739){
var state_val_46740 = (state_46739[(1)]);
if((state_val_46740 === (1))){
var state_46739__$1 = state_46739;
var statearr_46741_46888 = state_46739__$1;
(statearr_46741_46888[(2)] = null);

(statearr_46741_46888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46740 === (2))){
var state_46739__$1 = state_46739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46739__$1,(4),jobs);
} else {
if((state_val_46740 === (3))){
var inst_46737 = (state_46739[(2)]);
var state_46739__$1 = state_46739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46739__$1,inst_46737);
} else {
if((state_val_46740 === (4))){
var inst_46729 = (state_46739[(2)]);
var inst_46730 = process.call(null,inst_46729);
var state_46739__$1 = state_46739;
if(cljs.core.truth_(inst_46730)){
var statearr_46742_46889 = state_46739__$1;
(statearr_46742_46889[(1)] = (5));

} else {
var statearr_46743_46890 = state_46739__$1;
(statearr_46743_46890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46740 === (5))){
var state_46739__$1 = state_46739;
var statearr_46744_46891 = state_46739__$1;
(statearr_46744_46891[(2)] = null);

(statearr_46744_46891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46740 === (6))){
var state_46739__$1 = state_46739;
var statearr_46745_46892 = state_46739__$1;
(statearr_46745_46892[(2)] = null);

(statearr_46745_46892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46740 === (7))){
var inst_46735 = (state_46739[(2)]);
var state_46739__$1 = state_46739;
var statearr_46746_46893 = state_46739__$1;
(statearr_46746_46893[(2)] = inst_46735);

(statearr_46746_46893[(1)] = (3));


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
});})(__46883,c__37825__auto___46887,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async))
;
return ((function (__46883,switch__37737__auto__,c__37825__auto___46887,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0 = (function (){
var statearr_46747 = [null,null,null,null,null,null,null];
(statearr_46747[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__);

(statearr_46747[(1)] = (1));

return statearr_46747;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1 = (function (state_46739){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_46739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e46748){if((e46748 instanceof Object)){
var ex__37741__auto__ = e46748;
var statearr_46749_46894 = state_46739;
(statearr_46749_46894[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46895 = state_46739;
state_46739 = G__46895;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = function(state_46739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1.call(this,state_46739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__;
})()
;})(__46883,switch__37737__auto__,c__37825__auto___46887,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async))
})();
var state__37827__auto__ = (function (){var statearr_46750 = f__37826__auto__.call(null);
(statearr_46750[(6)] = c__37825__auto___46887);

return statearr_46750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(__46883,c__37825__auto___46887,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async))
);


break;
case "async":
var c__37825__auto___46896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46883,c__37825__auto___46896,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (__46883,c__37825__auto___46896,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async){
return (function (state_46763){
var state_val_46764 = (state_46763[(1)]);
if((state_val_46764 === (1))){
var state_46763__$1 = state_46763;
var statearr_46765_46897 = state_46763__$1;
(statearr_46765_46897[(2)] = null);

(statearr_46765_46897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46764 === (2))){
var state_46763__$1 = state_46763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46763__$1,(4),jobs);
} else {
if((state_val_46764 === (3))){
var inst_46761 = (state_46763[(2)]);
var state_46763__$1 = state_46763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46763__$1,inst_46761);
} else {
if((state_val_46764 === (4))){
var inst_46753 = (state_46763[(2)]);
var inst_46754 = async.call(null,inst_46753);
var state_46763__$1 = state_46763;
if(cljs.core.truth_(inst_46754)){
var statearr_46766_46898 = state_46763__$1;
(statearr_46766_46898[(1)] = (5));

} else {
var statearr_46767_46899 = state_46763__$1;
(statearr_46767_46899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46764 === (5))){
var state_46763__$1 = state_46763;
var statearr_46768_46900 = state_46763__$1;
(statearr_46768_46900[(2)] = null);

(statearr_46768_46900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46764 === (6))){
var state_46763__$1 = state_46763;
var statearr_46769_46901 = state_46763__$1;
(statearr_46769_46901[(2)] = null);

(statearr_46769_46901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46764 === (7))){
var inst_46759 = (state_46763[(2)]);
var state_46763__$1 = state_46763;
var statearr_46770_46902 = state_46763__$1;
(statearr_46770_46902[(2)] = inst_46759);

(statearr_46770_46902[(1)] = (3));


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
});})(__46883,c__37825__auto___46896,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async))
;
return ((function (__46883,switch__37737__auto__,c__37825__auto___46896,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0 = (function (){
var statearr_46771 = [null,null,null,null,null,null,null];
(statearr_46771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__);

(statearr_46771[(1)] = (1));

return statearr_46771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1 = (function (state_46763){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_46763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e46772){if((e46772 instanceof Object)){
var ex__37741__auto__ = e46772;
var statearr_46773_46903 = state_46763;
(statearr_46773_46903[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46904 = state_46763;
state_46763 = G__46904;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = function(state_46763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1.call(this,state_46763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__;
})()
;})(__46883,switch__37737__auto__,c__37825__auto___46896,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async))
})();
var state__37827__auto__ = (function (){var statearr_46774 = f__37826__auto__.call(null);
(statearr_46774[(6)] = c__37825__auto___46896);

return statearr_46774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(__46883,c__37825__auto___46896,G__46726_46884,G__46726_46885__$1,n__34629__auto___46882,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46726_46885__$1)].join('')));

}

var G__46905 = (__46883 + (1));
__46883 = G__46905;
continue;
} else {
}
break;
}

var c__37825__auto___46906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___46906,jobs,results,process,async){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___46906,jobs,results,process,async){
return (function (state_46796){
var state_val_46797 = (state_46796[(1)]);
if((state_val_46797 === (1))){
var state_46796__$1 = state_46796;
var statearr_46798_46907 = state_46796__$1;
(statearr_46798_46907[(2)] = null);

(statearr_46798_46907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (2))){
var state_46796__$1 = state_46796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46796__$1,(4),from);
} else {
if((state_val_46797 === (3))){
var inst_46794 = (state_46796[(2)]);
var state_46796__$1 = state_46796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46796__$1,inst_46794);
} else {
if((state_val_46797 === (4))){
var inst_46777 = (state_46796[(7)]);
var inst_46777__$1 = (state_46796[(2)]);
var inst_46778 = (inst_46777__$1 == null);
var state_46796__$1 = (function (){var statearr_46799 = state_46796;
(statearr_46799[(7)] = inst_46777__$1);

return statearr_46799;
})();
if(cljs.core.truth_(inst_46778)){
var statearr_46800_46908 = state_46796__$1;
(statearr_46800_46908[(1)] = (5));

} else {
var statearr_46801_46909 = state_46796__$1;
(statearr_46801_46909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (5))){
var inst_46780 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46796__$1 = state_46796;
var statearr_46802_46910 = state_46796__$1;
(statearr_46802_46910[(2)] = inst_46780);

(statearr_46802_46910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (6))){
var inst_46782 = (state_46796[(8)]);
var inst_46777 = (state_46796[(7)]);
var inst_46782__$1 = cljs.core.async.chan.call(null,(1));
var inst_46783 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46784 = [inst_46777,inst_46782__$1];
var inst_46785 = (new cljs.core.PersistentVector(null,2,(5),inst_46783,inst_46784,null));
var state_46796__$1 = (function (){var statearr_46803 = state_46796;
(statearr_46803[(8)] = inst_46782__$1);

return statearr_46803;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46796__$1,(8),jobs,inst_46785);
} else {
if((state_val_46797 === (7))){
var inst_46792 = (state_46796[(2)]);
var state_46796__$1 = state_46796;
var statearr_46804_46911 = state_46796__$1;
(statearr_46804_46911[(2)] = inst_46792);

(statearr_46804_46911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (8))){
var inst_46782 = (state_46796[(8)]);
var inst_46787 = (state_46796[(2)]);
var state_46796__$1 = (function (){var statearr_46805 = state_46796;
(statearr_46805[(9)] = inst_46787);

return statearr_46805;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46796__$1,(9),results,inst_46782);
} else {
if((state_val_46797 === (9))){
var inst_46789 = (state_46796[(2)]);
var state_46796__$1 = (function (){var statearr_46806 = state_46796;
(statearr_46806[(10)] = inst_46789);

return statearr_46806;
})();
var statearr_46807_46912 = state_46796__$1;
(statearr_46807_46912[(2)] = null);

(statearr_46807_46912[(1)] = (2));


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
});})(c__37825__auto___46906,jobs,results,process,async))
;
return ((function (switch__37737__auto__,c__37825__auto___46906,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0 = (function (){
var statearr_46808 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__);

(statearr_46808[(1)] = (1));

return statearr_46808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1 = (function (state_46796){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_46796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e46809){if((e46809 instanceof Object)){
var ex__37741__auto__ = e46809;
var statearr_46810_46913 = state_46796;
(statearr_46810_46913[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46914 = state_46796;
state_46796 = G__46914;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = function(state_46796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1.call(this,state_46796);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___46906,jobs,results,process,async))
})();
var state__37827__auto__ = (function (){var statearr_46811 = f__37826__auto__.call(null);
(statearr_46811[(6)] = c__37825__auto___46906);

return statearr_46811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___46906,jobs,results,process,async))
);


var c__37825__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto__,jobs,results,process,async){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto__,jobs,results,process,async){
return (function (state_46849){
var state_val_46850 = (state_46849[(1)]);
if((state_val_46850 === (7))){
var inst_46845 = (state_46849[(2)]);
var state_46849__$1 = state_46849;
var statearr_46851_46915 = state_46849__$1;
(statearr_46851_46915[(2)] = inst_46845);

(statearr_46851_46915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (20))){
var state_46849__$1 = state_46849;
var statearr_46852_46916 = state_46849__$1;
(statearr_46852_46916[(2)] = null);

(statearr_46852_46916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (1))){
var state_46849__$1 = state_46849;
var statearr_46853_46917 = state_46849__$1;
(statearr_46853_46917[(2)] = null);

(statearr_46853_46917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (4))){
var inst_46814 = (state_46849[(7)]);
var inst_46814__$1 = (state_46849[(2)]);
var inst_46815 = (inst_46814__$1 == null);
var state_46849__$1 = (function (){var statearr_46854 = state_46849;
(statearr_46854[(7)] = inst_46814__$1);

return statearr_46854;
})();
if(cljs.core.truth_(inst_46815)){
var statearr_46855_46918 = state_46849__$1;
(statearr_46855_46918[(1)] = (5));

} else {
var statearr_46856_46919 = state_46849__$1;
(statearr_46856_46919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (15))){
var inst_46827 = (state_46849[(8)]);
var state_46849__$1 = state_46849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46849__$1,(18),to,inst_46827);
} else {
if((state_val_46850 === (21))){
var inst_46840 = (state_46849[(2)]);
var state_46849__$1 = state_46849;
var statearr_46857_46920 = state_46849__$1;
(statearr_46857_46920[(2)] = inst_46840);

(statearr_46857_46920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (13))){
var inst_46842 = (state_46849[(2)]);
var state_46849__$1 = (function (){var statearr_46858 = state_46849;
(statearr_46858[(9)] = inst_46842);

return statearr_46858;
})();
var statearr_46859_46921 = state_46849__$1;
(statearr_46859_46921[(2)] = null);

(statearr_46859_46921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (6))){
var inst_46814 = (state_46849[(7)]);
var state_46849__$1 = state_46849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46849__$1,(11),inst_46814);
} else {
if((state_val_46850 === (17))){
var inst_46835 = (state_46849[(2)]);
var state_46849__$1 = state_46849;
if(cljs.core.truth_(inst_46835)){
var statearr_46860_46922 = state_46849__$1;
(statearr_46860_46922[(1)] = (19));

} else {
var statearr_46861_46923 = state_46849__$1;
(statearr_46861_46923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (3))){
var inst_46847 = (state_46849[(2)]);
var state_46849__$1 = state_46849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46849__$1,inst_46847);
} else {
if((state_val_46850 === (12))){
var inst_46824 = (state_46849[(10)]);
var state_46849__$1 = state_46849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46849__$1,(14),inst_46824);
} else {
if((state_val_46850 === (2))){
var state_46849__$1 = state_46849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46849__$1,(4),results);
} else {
if((state_val_46850 === (19))){
var state_46849__$1 = state_46849;
var statearr_46862_46924 = state_46849__$1;
(statearr_46862_46924[(2)] = null);

(statearr_46862_46924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (11))){
var inst_46824 = (state_46849[(2)]);
var state_46849__$1 = (function (){var statearr_46863 = state_46849;
(statearr_46863[(10)] = inst_46824);

return statearr_46863;
})();
var statearr_46864_46925 = state_46849__$1;
(statearr_46864_46925[(2)] = null);

(statearr_46864_46925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (9))){
var state_46849__$1 = state_46849;
var statearr_46865_46926 = state_46849__$1;
(statearr_46865_46926[(2)] = null);

(statearr_46865_46926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (5))){
var state_46849__$1 = state_46849;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46866_46927 = state_46849__$1;
(statearr_46866_46927[(1)] = (8));

} else {
var statearr_46867_46928 = state_46849__$1;
(statearr_46867_46928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (14))){
var inst_46829 = (state_46849[(11)]);
var inst_46827 = (state_46849[(8)]);
var inst_46827__$1 = (state_46849[(2)]);
var inst_46828 = (inst_46827__$1 == null);
var inst_46829__$1 = cljs.core.not.call(null,inst_46828);
var state_46849__$1 = (function (){var statearr_46868 = state_46849;
(statearr_46868[(11)] = inst_46829__$1);

(statearr_46868[(8)] = inst_46827__$1);

return statearr_46868;
})();
if(inst_46829__$1){
var statearr_46869_46929 = state_46849__$1;
(statearr_46869_46929[(1)] = (15));

} else {
var statearr_46870_46930 = state_46849__$1;
(statearr_46870_46930[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (16))){
var inst_46829 = (state_46849[(11)]);
var state_46849__$1 = state_46849;
var statearr_46871_46931 = state_46849__$1;
(statearr_46871_46931[(2)] = inst_46829);

(statearr_46871_46931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (10))){
var inst_46821 = (state_46849[(2)]);
var state_46849__$1 = state_46849;
var statearr_46872_46932 = state_46849__$1;
(statearr_46872_46932[(2)] = inst_46821);

(statearr_46872_46932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (18))){
var inst_46832 = (state_46849[(2)]);
var state_46849__$1 = state_46849;
var statearr_46873_46933 = state_46849__$1;
(statearr_46873_46933[(2)] = inst_46832);

(statearr_46873_46933[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46850 === (8))){
var inst_46818 = cljs.core.async.close_BANG_.call(null,to);
var state_46849__$1 = state_46849;
var statearr_46874_46934 = state_46849__$1;
(statearr_46874_46934[(2)] = inst_46818);

(statearr_46874_46934[(1)] = (10));


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
var statearr_46875 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__);

(statearr_46875[(1)] = (1));

return statearr_46875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1 = (function (state_46849){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_46849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e46876){if((e46876 instanceof Object)){
var ex__37741__auto__ = e46876;
var statearr_46877_46935 = state_46849;
(statearr_46877_46935[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46936 = state_46849;
state_46849 = G__46936;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__ = function(state_46849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1.call(this,state_46849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__,jobs,results,process,async))
})();
var state__37827__auto__ = (function (){var statearr_46878 = f__37826__auto__.call(null);
(statearr_46878[(6)] = c__37825__auto__);

return statearr_46878;
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
var G__46938 = arguments.length;
switch (G__46938) {
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
var G__46941 = arguments.length;
switch (G__46941) {
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
var G__46944 = arguments.length;
switch (G__46944) {
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
var c__37825__auto___46993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___46993,tc,fc){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___46993,tc,fc){
return (function (state_46970){
var state_val_46971 = (state_46970[(1)]);
if((state_val_46971 === (7))){
var inst_46966 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
var statearr_46972_46994 = state_46970__$1;
(statearr_46972_46994[(2)] = inst_46966);

(statearr_46972_46994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (1))){
var state_46970__$1 = state_46970;
var statearr_46973_46995 = state_46970__$1;
(statearr_46973_46995[(2)] = null);

(statearr_46973_46995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (4))){
var inst_46947 = (state_46970[(7)]);
var inst_46947__$1 = (state_46970[(2)]);
var inst_46948 = (inst_46947__$1 == null);
var state_46970__$1 = (function (){var statearr_46974 = state_46970;
(statearr_46974[(7)] = inst_46947__$1);

return statearr_46974;
})();
if(cljs.core.truth_(inst_46948)){
var statearr_46975_46996 = state_46970__$1;
(statearr_46975_46996[(1)] = (5));

} else {
var statearr_46976_46997 = state_46970__$1;
(statearr_46976_46997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (13))){
var state_46970__$1 = state_46970;
var statearr_46977_46998 = state_46970__$1;
(statearr_46977_46998[(2)] = null);

(statearr_46977_46998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (6))){
var inst_46947 = (state_46970[(7)]);
var inst_46953 = p.call(null,inst_46947);
var state_46970__$1 = state_46970;
if(cljs.core.truth_(inst_46953)){
var statearr_46978_46999 = state_46970__$1;
(statearr_46978_46999[(1)] = (9));

} else {
var statearr_46979_47000 = state_46970__$1;
(statearr_46979_47000[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (3))){
var inst_46968 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46970__$1,inst_46968);
} else {
if((state_val_46971 === (12))){
var state_46970__$1 = state_46970;
var statearr_46980_47001 = state_46970__$1;
(statearr_46980_47001[(2)] = null);

(statearr_46980_47001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (2))){
var state_46970__$1 = state_46970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46970__$1,(4),ch);
} else {
if((state_val_46971 === (11))){
var inst_46947 = (state_46970[(7)]);
var inst_46957 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46970__$1,(8),inst_46957,inst_46947);
} else {
if((state_val_46971 === (9))){
var state_46970__$1 = state_46970;
var statearr_46981_47002 = state_46970__$1;
(statearr_46981_47002[(2)] = tc);

(statearr_46981_47002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (5))){
var inst_46950 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46951 = cljs.core.async.close_BANG_.call(null,fc);
var state_46970__$1 = (function (){var statearr_46982 = state_46970;
(statearr_46982[(8)] = inst_46950);

return statearr_46982;
})();
var statearr_46983_47003 = state_46970__$1;
(statearr_46983_47003[(2)] = inst_46951);

(statearr_46983_47003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (14))){
var inst_46964 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
var statearr_46984_47004 = state_46970__$1;
(statearr_46984_47004[(2)] = inst_46964);

(statearr_46984_47004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (10))){
var state_46970__$1 = state_46970;
var statearr_46985_47005 = state_46970__$1;
(statearr_46985_47005[(2)] = fc);

(statearr_46985_47005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (8))){
var inst_46959 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
if(cljs.core.truth_(inst_46959)){
var statearr_46986_47006 = state_46970__$1;
(statearr_46986_47006[(1)] = (12));

} else {
var statearr_46987_47007 = state_46970__$1;
(statearr_46987_47007[(1)] = (13));

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
});})(c__37825__auto___46993,tc,fc))
;
return ((function (switch__37737__auto__,c__37825__auto___46993,tc,fc){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_46988 = [null,null,null,null,null,null,null,null,null];
(statearr_46988[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_46988[(1)] = (1));

return statearr_46988;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_46970){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_46970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e46989){if((e46989 instanceof Object)){
var ex__37741__auto__ = e46989;
var statearr_46990_47008 = state_46970;
(statearr_46990_47008[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47009 = state_46970;
state_46970 = G__47009;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_46970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_46970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___46993,tc,fc))
})();
var state__37827__auto__ = (function (){var statearr_46991 = f__37826__auto__.call(null);
(statearr_46991[(6)] = c__37825__auto___46993);

return statearr_46991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___46993,tc,fc))
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
return (function (state_47030){
var state_val_47031 = (state_47030[(1)]);
if((state_val_47031 === (7))){
var inst_47026 = (state_47030[(2)]);
var state_47030__$1 = state_47030;
var statearr_47032_47050 = state_47030__$1;
(statearr_47032_47050[(2)] = inst_47026);

(statearr_47032_47050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (1))){
var inst_47010 = init;
var state_47030__$1 = (function (){var statearr_47033 = state_47030;
(statearr_47033[(7)] = inst_47010);

return statearr_47033;
})();
var statearr_47034_47051 = state_47030__$1;
(statearr_47034_47051[(2)] = null);

(statearr_47034_47051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (4))){
var inst_47013 = (state_47030[(8)]);
var inst_47013__$1 = (state_47030[(2)]);
var inst_47014 = (inst_47013__$1 == null);
var state_47030__$1 = (function (){var statearr_47035 = state_47030;
(statearr_47035[(8)] = inst_47013__$1);

return statearr_47035;
})();
if(cljs.core.truth_(inst_47014)){
var statearr_47036_47052 = state_47030__$1;
(statearr_47036_47052[(1)] = (5));

} else {
var statearr_47037_47053 = state_47030__$1;
(statearr_47037_47053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (6))){
var inst_47013 = (state_47030[(8)]);
var inst_47017 = (state_47030[(9)]);
var inst_47010 = (state_47030[(7)]);
var inst_47017__$1 = f.call(null,inst_47010,inst_47013);
var inst_47018 = cljs.core.reduced_QMARK_.call(null,inst_47017__$1);
var state_47030__$1 = (function (){var statearr_47038 = state_47030;
(statearr_47038[(9)] = inst_47017__$1);

return statearr_47038;
})();
if(inst_47018){
var statearr_47039_47054 = state_47030__$1;
(statearr_47039_47054[(1)] = (8));

} else {
var statearr_47040_47055 = state_47030__$1;
(statearr_47040_47055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (3))){
var inst_47028 = (state_47030[(2)]);
var state_47030__$1 = state_47030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47030__$1,inst_47028);
} else {
if((state_val_47031 === (2))){
var state_47030__$1 = state_47030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47030__$1,(4),ch);
} else {
if((state_val_47031 === (9))){
var inst_47017 = (state_47030[(9)]);
var inst_47010 = inst_47017;
var state_47030__$1 = (function (){var statearr_47041 = state_47030;
(statearr_47041[(7)] = inst_47010);

return statearr_47041;
})();
var statearr_47042_47056 = state_47030__$1;
(statearr_47042_47056[(2)] = null);

(statearr_47042_47056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (5))){
var inst_47010 = (state_47030[(7)]);
var state_47030__$1 = state_47030;
var statearr_47043_47057 = state_47030__$1;
(statearr_47043_47057[(2)] = inst_47010);

(statearr_47043_47057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (10))){
var inst_47024 = (state_47030[(2)]);
var state_47030__$1 = state_47030;
var statearr_47044_47058 = state_47030__$1;
(statearr_47044_47058[(2)] = inst_47024);

(statearr_47044_47058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (8))){
var inst_47017 = (state_47030[(9)]);
var inst_47020 = cljs.core.deref.call(null,inst_47017);
var state_47030__$1 = state_47030;
var statearr_47045_47059 = state_47030__$1;
(statearr_47045_47059[(2)] = inst_47020);

(statearr_47045_47059[(1)] = (10));


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
var statearr_47046 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47046[(0)] = cljs$core$async$reduce_$_state_machine__37738__auto__);

(statearr_47046[(1)] = (1));

return statearr_47046;
});
var cljs$core$async$reduce_$_state_machine__37738__auto____1 = (function (state_47030){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_47030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e47047){if((e47047 instanceof Object)){
var ex__37741__auto__ = e47047;
var statearr_47048_47060 = state_47030;
(statearr_47048_47060[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47061 = state_47030;
state_47030 = G__47061;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37738__auto__ = function(state_47030){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37738__auto____1.call(this,state_47030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37738__auto____0;
cljs$core$async$reduce_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37738__auto____1;
return cljs$core$async$reduce_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__))
})();
var state__37827__auto__ = (function (){var statearr_47049 = f__37826__auto__.call(null);
(statearr_47049[(6)] = c__37825__auto__);

return statearr_47049;
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
return (function (state_47067){
var state_val_47068 = (state_47067[(1)]);
if((state_val_47068 === (1))){
var inst_47062 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47067__$1 = state_47067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47067__$1,(2),inst_47062);
} else {
if((state_val_47068 === (2))){
var inst_47064 = (state_47067[(2)]);
var inst_47065 = f__$1.call(null,inst_47064);
var state_47067__$1 = state_47067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47067__$1,inst_47065);
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
var statearr_47069 = [null,null,null,null,null,null,null];
(statearr_47069[(0)] = cljs$core$async$transduce_$_state_machine__37738__auto__);

(statearr_47069[(1)] = (1));

return statearr_47069;
});
var cljs$core$async$transduce_$_state_machine__37738__auto____1 = (function (state_47067){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_47067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e47070){if((e47070 instanceof Object)){
var ex__37741__auto__ = e47070;
var statearr_47071_47073 = state_47067;
(statearr_47071_47073[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47074 = state_47067;
state_47067 = G__47074;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37738__auto__ = function(state_47067){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37738__auto____1.call(this,state_47067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37738__auto____0;
cljs$core$async$transduce_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37738__auto____1;
return cljs$core$async$transduce_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__,f__$1))
})();
var state__37827__auto__ = (function (){var statearr_47072 = f__37826__auto__.call(null);
(statearr_47072[(6)] = c__37825__auto__);

return statearr_47072;
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
var G__47076 = arguments.length;
switch (G__47076) {
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
return (function (state_47101){
var state_val_47102 = (state_47101[(1)]);
if((state_val_47102 === (7))){
var inst_47083 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
var statearr_47103_47124 = state_47101__$1;
(statearr_47103_47124[(2)] = inst_47083);

(statearr_47103_47124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (1))){
var inst_47077 = cljs.core.seq.call(null,coll);
var inst_47078 = inst_47077;
var state_47101__$1 = (function (){var statearr_47104 = state_47101;
(statearr_47104[(7)] = inst_47078);

return statearr_47104;
})();
var statearr_47105_47125 = state_47101__$1;
(statearr_47105_47125[(2)] = null);

(statearr_47105_47125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (4))){
var inst_47078 = (state_47101[(7)]);
var inst_47081 = cljs.core.first.call(null,inst_47078);
var state_47101__$1 = state_47101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47101__$1,(7),ch,inst_47081);
} else {
if((state_val_47102 === (13))){
var inst_47095 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
var statearr_47106_47126 = state_47101__$1;
(statearr_47106_47126[(2)] = inst_47095);

(statearr_47106_47126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (6))){
var inst_47086 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
if(cljs.core.truth_(inst_47086)){
var statearr_47107_47127 = state_47101__$1;
(statearr_47107_47127[(1)] = (8));

} else {
var statearr_47108_47128 = state_47101__$1;
(statearr_47108_47128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (3))){
var inst_47099 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47101__$1,inst_47099);
} else {
if((state_val_47102 === (12))){
var state_47101__$1 = state_47101;
var statearr_47109_47129 = state_47101__$1;
(statearr_47109_47129[(2)] = null);

(statearr_47109_47129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (2))){
var inst_47078 = (state_47101[(7)]);
var state_47101__$1 = state_47101;
if(cljs.core.truth_(inst_47078)){
var statearr_47110_47130 = state_47101__$1;
(statearr_47110_47130[(1)] = (4));

} else {
var statearr_47111_47131 = state_47101__$1;
(statearr_47111_47131[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (11))){
var inst_47092 = cljs.core.async.close_BANG_.call(null,ch);
var state_47101__$1 = state_47101;
var statearr_47112_47132 = state_47101__$1;
(statearr_47112_47132[(2)] = inst_47092);

(statearr_47112_47132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (9))){
var state_47101__$1 = state_47101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47113_47133 = state_47101__$1;
(statearr_47113_47133[(1)] = (11));

} else {
var statearr_47114_47134 = state_47101__$1;
(statearr_47114_47134[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (5))){
var inst_47078 = (state_47101[(7)]);
var state_47101__$1 = state_47101;
var statearr_47115_47135 = state_47101__$1;
(statearr_47115_47135[(2)] = inst_47078);

(statearr_47115_47135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (10))){
var inst_47097 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
var statearr_47116_47136 = state_47101__$1;
(statearr_47116_47136[(2)] = inst_47097);

(statearr_47116_47136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (8))){
var inst_47078 = (state_47101[(7)]);
var inst_47088 = cljs.core.next.call(null,inst_47078);
var inst_47078__$1 = inst_47088;
var state_47101__$1 = (function (){var statearr_47117 = state_47101;
(statearr_47117[(7)] = inst_47078__$1);

return statearr_47117;
})();
var statearr_47118_47137 = state_47101__$1;
(statearr_47118_47137[(2)] = null);

(statearr_47118_47137[(1)] = (2));


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
var statearr_47119 = [null,null,null,null,null,null,null,null];
(statearr_47119[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_47119[(1)] = (1));

return statearr_47119;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_47101){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_47101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e47120){if((e47120 instanceof Object)){
var ex__37741__auto__ = e47120;
var statearr_47121_47138 = state_47101;
(statearr_47121_47138[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47139 = state_47101;
state_47101 = G__47139;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_47101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_47101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__))
})();
var state__37827__auto__ = (function (){var statearr_47122 = f__37826__auto__.call(null);
(statearr_47122[(6)] = c__37825__auto__);

return statearr_47122;
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
if(typeof cljs.core.async.t_cljs$core$async47140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47140 = (function (ch,cs,meta47141){
this.ch = ch;
this.cs = cs;
this.meta47141 = meta47141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47142,meta47141__$1){
var self__ = this;
var _47142__$1 = this;
return (new cljs.core.async.t_cljs$core$async47140(self__.ch,self__.cs,meta47141__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47142){
var self__ = this;
var _47142__$1 = this;
return self__.meta47141;
});})(cs))
;

cljs.core.async.t_cljs$core$async47140.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47140.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47140.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47140.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47140.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47140.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47141","meta47141",-436825489,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47140";

cljs.core.async.t_cljs$core$async47140.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async47140");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47140 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47140(ch__$1,cs__$1,meta47141){
return (new cljs.core.async.t_cljs$core$async47140(ch__$1,cs__$1,meta47141));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47140(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37825__auto___47362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___47362,cs,m,dchan,dctr,done){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___47362,cs,m,dchan,dctr,done){
return (function (state_47277){
var state_val_47278 = (state_47277[(1)]);
if((state_val_47278 === (7))){
var inst_47273 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47279_47363 = state_47277__$1;
(statearr_47279_47363[(2)] = inst_47273);

(statearr_47279_47363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (20))){
var inst_47176 = (state_47277[(7)]);
var inst_47188 = cljs.core.first.call(null,inst_47176);
var inst_47189 = cljs.core.nth.call(null,inst_47188,(0),null);
var inst_47190 = cljs.core.nth.call(null,inst_47188,(1),null);
var state_47277__$1 = (function (){var statearr_47280 = state_47277;
(statearr_47280[(8)] = inst_47189);

return statearr_47280;
})();
if(cljs.core.truth_(inst_47190)){
var statearr_47281_47364 = state_47277__$1;
(statearr_47281_47364[(1)] = (22));

} else {
var statearr_47282_47365 = state_47277__$1;
(statearr_47282_47365[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (27))){
var inst_47218 = (state_47277[(9)]);
var inst_47145 = (state_47277[(10)]);
var inst_47225 = (state_47277[(11)]);
var inst_47220 = (state_47277[(12)]);
var inst_47225__$1 = cljs.core._nth.call(null,inst_47218,inst_47220);
var inst_47226 = cljs.core.async.put_BANG_.call(null,inst_47225__$1,inst_47145,done);
var state_47277__$1 = (function (){var statearr_47283 = state_47277;
(statearr_47283[(11)] = inst_47225__$1);

return statearr_47283;
})();
if(cljs.core.truth_(inst_47226)){
var statearr_47284_47366 = state_47277__$1;
(statearr_47284_47366[(1)] = (30));

} else {
var statearr_47285_47367 = state_47277__$1;
(statearr_47285_47367[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (1))){
var state_47277__$1 = state_47277;
var statearr_47286_47368 = state_47277__$1;
(statearr_47286_47368[(2)] = null);

(statearr_47286_47368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (24))){
var inst_47176 = (state_47277[(7)]);
var inst_47195 = (state_47277[(2)]);
var inst_47196 = cljs.core.next.call(null,inst_47176);
var inst_47154 = inst_47196;
var inst_47155 = null;
var inst_47156 = (0);
var inst_47157 = (0);
var state_47277__$1 = (function (){var statearr_47287 = state_47277;
(statearr_47287[(13)] = inst_47157);

(statearr_47287[(14)] = inst_47154);

(statearr_47287[(15)] = inst_47155);

(statearr_47287[(16)] = inst_47156);

(statearr_47287[(17)] = inst_47195);

return statearr_47287;
})();
var statearr_47288_47369 = state_47277__$1;
(statearr_47288_47369[(2)] = null);

(statearr_47288_47369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (39))){
var state_47277__$1 = state_47277;
var statearr_47292_47370 = state_47277__$1;
(statearr_47292_47370[(2)] = null);

(statearr_47292_47370[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (4))){
var inst_47145 = (state_47277[(10)]);
var inst_47145__$1 = (state_47277[(2)]);
var inst_47146 = (inst_47145__$1 == null);
var state_47277__$1 = (function (){var statearr_47293 = state_47277;
(statearr_47293[(10)] = inst_47145__$1);

return statearr_47293;
})();
if(cljs.core.truth_(inst_47146)){
var statearr_47294_47371 = state_47277__$1;
(statearr_47294_47371[(1)] = (5));

} else {
var statearr_47295_47372 = state_47277__$1;
(statearr_47295_47372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (15))){
var inst_47157 = (state_47277[(13)]);
var inst_47154 = (state_47277[(14)]);
var inst_47155 = (state_47277[(15)]);
var inst_47156 = (state_47277[(16)]);
var inst_47172 = (state_47277[(2)]);
var inst_47173 = (inst_47157 + (1));
var tmp47289 = inst_47154;
var tmp47290 = inst_47155;
var tmp47291 = inst_47156;
var inst_47154__$1 = tmp47289;
var inst_47155__$1 = tmp47290;
var inst_47156__$1 = tmp47291;
var inst_47157__$1 = inst_47173;
var state_47277__$1 = (function (){var statearr_47296 = state_47277;
(statearr_47296[(18)] = inst_47172);

(statearr_47296[(13)] = inst_47157__$1);

(statearr_47296[(14)] = inst_47154__$1);

(statearr_47296[(15)] = inst_47155__$1);

(statearr_47296[(16)] = inst_47156__$1);

return statearr_47296;
})();
var statearr_47297_47373 = state_47277__$1;
(statearr_47297_47373[(2)] = null);

(statearr_47297_47373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (21))){
var inst_47199 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47301_47374 = state_47277__$1;
(statearr_47301_47374[(2)] = inst_47199);

(statearr_47301_47374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (31))){
var inst_47225 = (state_47277[(11)]);
var inst_47229 = done.call(null,null);
var inst_47230 = cljs.core.async.untap_STAR_.call(null,m,inst_47225);
var state_47277__$1 = (function (){var statearr_47302 = state_47277;
(statearr_47302[(19)] = inst_47229);

return statearr_47302;
})();
var statearr_47303_47375 = state_47277__$1;
(statearr_47303_47375[(2)] = inst_47230);

(statearr_47303_47375[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (32))){
var inst_47217 = (state_47277[(20)]);
var inst_47218 = (state_47277[(9)]);
var inst_47219 = (state_47277[(21)]);
var inst_47220 = (state_47277[(12)]);
var inst_47232 = (state_47277[(2)]);
var inst_47233 = (inst_47220 + (1));
var tmp47298 = inst_47217;
var tmp47299 = inst_47218;
var tmp47300 = inst_47219;
var inst_47217__$1 = tmp47298;
var inst_47218__$1 = tmp47299;
var inst_47219__$1 = tmp47300;
var inst_47220__$1 = inst_47233;
var state_47277__$1 = (function (){var statearr_47304 = state_47277;
(statearr_47304[(20)] = inst_47217__$1);

(statearr_47304[(9)] = inst_47218__$1);

(statearr_47304[(21)] = inst_47219__$1);

(statearr_47304[(12)] = inst_47220__$1);

(statearr_47304[(22)] = inst_47232);

return statearr_47304;
})();
var statearr_47305_47376 = state_47277__$1;
(statearr_47305_47376[(2)] = null);

(statearr_47305_47376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (40))){
var inst_47245 = (state_47277[(23)]);
var inst_47249 = done.call(null,null);
var inst_47250 = cljs.core.async.untap_STAR_.call(null,m,inst_47245);
var state_47277__$1 = (function (){var statearr_47306 = state_47277;
(statearr_47306[(24)] = inst_47249);

return statearr_47306;
})();
var statearr_47307_47377 = state_47277__$1;
(statearr_47307_47377[(2)] = inst_47250);

(statearr_47307_47377[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (33))){
var inst_47236 = (state_47277[(25)]);
var inst_47238 = cljs.core.chunked_seq_QMARK_.call(null,inst_47236);
var state_47277__$1 = state_47277;
if(inst_47238){
var statearr_47308_47378 = state_47277__$1;
(statearr_47308_47378[(1)] = (36));

} else {
var statearr_47309_47379 = state_47277__$1;
(statearr_47309_47379[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (13))){
var inst_47166 = (state_47277[(26)]);
var inst_47169 = cljs.core.async.close_BANG_.call(null,inst_47166);
var state_47277__$1 = state_47277;
var statearr_47310_47380 = state_47277__$1;
(statearr_47310_47380[(2)] = inst_47169);

(statearr_47310_47380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (22))){
var inst_47189 = (state_47277[(8)]);
var inst_47192 = cljs.core.async.close_BANG_.call(null,inst_47189);
var state_47277__$1 = state_47277;
var statearr_47311_47381 = state_47277__$1;
(statearr_47311_47381[(2)] = inst_47192);

(statearr_47311_47381[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (36))){
var inst_47236 = (state_47277[(25)]);
var inst_47240 = cljs.core.chunk_first.call(null,inst_47236);
var inst_47241 = cljs.core.chunk_rest.call(null,inst_47236);
var inst_47242 = cljs.core.count.call(null,inst_47240);
var inst_47217 = inst_47241;
var inst_47218 = inst_47240;
var inst_47219 = inst_47242;
var inst_47220 = (0);
var state_47277__$1 = (function (){var statearr_47312 = state_47277;
(statearr_47312[(20)] = inst_47217);

(statearr_47312[(9)] = inst_47218);

(statearr_47312[(21)] = inst_47219);

(statearr_47312[(12)] = inst_47220);

return statearr_47312;
})();
var statearr_47313_47382 = state_47277__$1;
(statearr_47313_47382[(2)] = null);

(statearr_47313_47382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (41))){
var inst_47236 = (state_47277[(25)]);
var inst_47252 = (state_47277[(2)]);
var inst_47253 = cljs.core.next.call(null,inst_47236);
var inst_47217 = inst_47253;
var inst_47218 = null;
var inst_47219 = (0);
var inst_47220 = (0);
var state_47277__$1 = (function (){var statearr_47314 = state_47277;
(statearr_47314[(20)] = inst_47217);

(statearr_47314[(9)] = inst_47218);

(statearr_47314[(27)] = inst_47252);

(statearr_47314[(21)] = inst_47219);

(statearr_47314[(12)] = inst_47220);

return statearr_47314;
})();
var statearr_47315_47383 = state_47277__$1;
(statearr_47315_47383[(2)] = null);

(statearr_47315_47383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (43))){
var state_47277__$1 = state_47277;
var statearr_47316_47384 = state_47277__$1;
(statearr_47316_47384[(2)] = null);

(statearr_47316_47384[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (29))){
var inst_47261 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47317_47385 = state_47277__$1;
(statearr_47317_47385[(2)] = inst_47261);

(statearr_47317_47385[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (44))){
var inst_47270 = (state_47277[(2)]);
var state_47277__$1 = (function (){var statearr_47318 = state_47277;
(statearr_47318[(28)] = inst_47270);

return statearr_47318;
})();
var statearr_47319_47386 = state_47277__$1;
(statearr_47319_47386[(2)] = null);

(statearr_47319_47386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (6))){
var inst_47209 = (state_47277[(29)]);
var inst_47208 = cljs.core.deref.call(null,cs);
var inst_47209__$1 = cljs.core.keys.call(null,inst_47208);
var inst_47210 = cljs.core.count.call(null,inst_47209__$1);
var inst_47211 = cljs.core.reset_BANG_.call(null,dctr,inst_47210);
var inst_47216 = cljs.core.seq.call(null,inst_47209__$1);
var inst_47217 = inst_47216;
var inst_47218 = null;
var inst_47219 = (0);
var inst_47220 = (0);
var state_47277__$1 = (function (){var statearr_47320 = state_47277;
(statearr_47320[(20)] = inst_47217);

(statearr_47320[(9)] = inst_47218);

(statearr_47320[(30)] = inst_47211);

(statearr_47320[(21)] = inst_47219);

(statearr_47320[(29)] = inst_47209__$1);

(statearr_47320[(12)] = inst_47220);

return statearr_47320;
})();
var statearr_47321_47387 = state_47277__$1;
(statearr_47321_47387[(2)] = null);

(statearr_47321_47387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (28))){
var inst_47217 = (state_47277[(20)]);
var inst_47236 = (state_47277[(25)]);
var inst_47236__$1 = cljs.core.seq.call(null,inst_47217);
var state_47277__$1 = (function (){var statearr_47322 = state_47277;
(statearr_47322[(25)] = inst_47236__$1);

return statearr_47322;
})();
if(inst_47236__$1){
var statearr_47323_47388 = state_47277__$1;
(statearr_47323_47388[(1)] = (33));

} else {
var statearr_47324_47389 = state_47277__$1;
(statearr_47324_47389[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (25))){
var inst_47219 = (state_47277[(21)]);
var inst_47220 = (state_47277[(12)]);
var inst_47222 = (inst_47220 < inst_47219);
var inst_47223 = inst_47222;
var state_47277__$1 = state_47277;
if(cljs.core.truth_(inst_47223)){
var statearr_47325_47390 = state_47277__$1;
(statearr_47325_47390[(1)] = (27));

} else {
var statearr_47326_47391 = state_47277__$1;
(statearr_47326_47391[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (34))){
var state_47277__$1 = state_47277;
var statearr_47327_47392 = state_47277__$1;
(statearr_47327_47392[(2)] = null);

(statearr_47327_47392[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (17))){
var state_47277__$1 = state_47277;
var statearr_47328_47393 = state_47277__$1;
(statearr_47328_47393[(2)] = null);

(statearr_47328_47393[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (3))){
var inst_47275 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47277__$1,inst_47275);
} else {
if((state_val_47278 === (12))){
var inst_47204 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47329_47394 = state_47277__$1;
(statearr_47329_47394[(2)] = inst_47204);

(statearr_47329_47394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (2))){
var state_47277__$1 = state_47277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47277__$1,(4),ch);
} else {
if((state_val_47278 === (23))){
var state_47277__$1 = state_47277;
var statearr_47330_47395 = state_47277__$1;
(statearr_47330_47395[(2)] = null);

(statearr_47330_47395[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (35))){
var inst_47259 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47331_47396 = state_47277__$1;
(statearr_47331_47396[(2)] = inst_47259);

(statearr_47331_47396[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (19))){
var inst_47176 = (state_47277[(7)]);
var inst_47180 = cljs.core.chunk_first.call(null,inst_47176);
var inst_47181 = cljs.core.chunk_rest.call(null,inst_47176);
var inst_47182 = cljs.core.count.call(null,inst_47180);
var inst_47154 = inst_47181;
var inst_47155 = inst_47180;
var inst_47156 = inst_47182;
var inst_47157 = (0);
var state_47277__$1 = (function (){var statearr_47332 = state_47277;
(statearr_47332[(13)] = inst_47157);

(statearr_47332[(14)] = inst_47154);

(statearr_47332[(15)] = inst_47155);

(statearr_47332[(16)] = inst_47156);

return statearr_47332;
})();
var statearr_47333_47397 = state_47277__$1;
(statearr_47333_47397[(2)] = null);

(statearr_47333_47397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (11))){
var inst_47176 = (state_47277[(7)]);
var inst_47154 = (state_47277[(14)]);
var inst_47176__$1 = cljs.core.seq.call(null,inst_47154);
var state_47277__$1 = (function (){var statearr_47334 = state_47277;
(statearr_47334[(7)] = inst_47176__$1);

return statearr_47334;
})();
if(inst_47176__$1){
var statearr_47335_47398 = state_47277__$1;
(statearr_47335_47398[(1)] = (16));

} else {
var statearr_47336_47399 = state_47277__$1;
(statearr_47336_47399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (9))){
var inst_47206 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47337_47400 = state_47277__$1;
(statearr_47337_47400[(2)] = inst_47206);

(statearr_47337_47400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (5))){
var inst_47152 = cljs.core.deref.call(null,cs);
var inst_47153 = cljs.core.seq.call(null,inst_47152);
var inst_47154 = inst_47153;
var inst_47155 = null;
var inst_47156 = (0);
var inst_47157 = (0);
var state_47277__$1 = (function (){var statearr_47338 = state_47277;
(statearr_47338[(13)] = inst_47157);

(statearr_47338[(14)] = inst_47154);

(statearr_47338[(15)] = inst_47155);

(statearr_47338[(16)] = inst_47156);

return statearr_47338;
})();
var statearr_47339_47401 = state_47277__$1;
(statearr_47339_47401[(2)] = null);

(statearr_47339_47401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (14))){
var state_47277__$1 = state_47277;
var statearr_47340_47402 = state_47277__$1;
(statearr_47340_47402[(2)] = null);

(statearr_47340_47402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (45))){
var inst_47267 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47341_47403 = state_47277__$1;
(statearr_47341_47403[(2)] = inst_47267);

(statearr_47341_47403[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (26))){
var inst_47209 = (state_47277[(29)]);
var inst_47263 = (state_47277[(2)]);
var inst_47264 = cljs.core.seq.call(null,inst_47209);
var state_47277__$1 = (function (){var statearr_47342 = state_47277;
(statearr_47342[(31)] = inst_47263);

return statearr_47342;
})();
if(inst_47264){
var statearr_47343_47404 = state_47277__$1;
(statearr_47343_47404[(1)] = (42));

} else {
var statearr_47344_47405 = state_47277__$1;
(statearr_47344_47405[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (16))){
var inst_47176 = (state_47277[(7)]);
var inst_47178 = cljs.core.chunked_seq_QMARK_.call(null,inst_47176);
var state_47277__$1 = state_47277;
if(inst_47178){
var statearr_47345_47406 = state_47277__$1;
(statearr_47345_47406[(1)] = (19));

} else {
var statearr_47346_47407 = state_47277__$1;
(statearr_47346_47407[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (38))){
var inst_47256 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47347_47408 = state_47277__$1;
(statearr_47347_47408[(2)] = inst_47256);

(statearr_47347_47408[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (30))){
var state_47277__$1 = state_47277;
var statearr_47348_47409 = state_47277__$1;
(statearr_47348_47409[(2)] = null);

(statearr_47348_47409[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (10))){
var inst_47157 = (state_47277[(13)]);
var inst_47155 = (state_47277[(15)]);
var inst_47165 = cljs.core._nth.call(null,inst_47155,inst_47157);
var inst_47166 = cljs.core.nth.call(null,inst_47165,(0),null);
var inst_47167 = cljs.core.nth.call(null,inst_47165,(1),null);
var state_47277__$1 = (function (){var statearr_47349 = state_47277;
(statearr_47349[(26)] = inst_47166);

return statearr_47349;
})();
if(cljs.core.truth_(inst_47167)){
var statearr_47350_47410 = state_47277__$1;
(statearr_47350_47410[(1)] = (13));

} else {
var statearr_47351_47411 = state_47277__$1;
(statearr_47351_47411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (18))){
var inst_47202 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47352_47412 = state_47277__$1;
(statearr_47352_47412[(2)] = inst_47202);

(statearr_47352_47412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (42))){
var state_47277__$1 = state_47277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47277__$1,(45),dchan);
} else {
if((state_val_47278 === (37))){
var inst_47145 = (state_47277[(10)]);
var inst_47245 = (state_47277[(23)]);
var inst_47236 = (state_47277[(25)]);
var inst_47245__$1 = cljs.core.first.call(null,inst_47236);
var inst_47246 = cljs.core.async.put_BANG_.call(null,inst_47245__$1,inst_47145,done);
var state_47277__$1 = (function (){var statearr_47353 = state_47277;
(statearr_47353[(23)] = inst_47245__$1);

return statearr_47353;
})();
if(cljs.core.truth_(inst_47246)){
var statearr_47354_47413 = state_47277__$1;
(statearr_47354_47413[(1)] = (39));

} else {
var statearr_47355_47414 = state_47277__$1;
(statearr_47355_47414[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (8))){
var inst_47157 = (state_47277[(13)]);
var inst_47156 = (state_47277[(16)]);
var inst_47159 = (inst_47157 < inst_47156);
var inst_47160 = inst_47159;
var state_47277__$1 = state_47277;
if(cljs.core.truth_(inst_47160)){
var statearr_47356_47415 = state_47277__$1;
(statearr_47356_47415[(1)] = (10));

} else {
var statearr_47357_47416 = state_47277__$1;
(statearr_47357_47416[(1)] = (11));

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
});})(c__37825__auto___47362,cs,m,dchan,dctr,done))
;
return ((function (switch__37737__auto__,c__37825__auto___47362,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37738__auto__ = null;
var cljs$core$async$mult_$_state_machine__37738__auto____0 = (function (){
var statearr_47358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47358[(0)] = cljs$core$async$mult_$_state_machine__37738__auto__);

(statearr_47358[(1)] = (1));

return statearr_47358;
});
var cljs$core$async$mult_$_state_machine__37738__auto____1 = (function (state_47277){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_47277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e47359){if((e47359 instanceof Object)){
var ex__37741__auto__ = e47359;
var statearr_47360_47417 = state_47277;
(statearr_47360_47417[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47418 = state_47277;
state_47277 = G__47418;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37738__auto__ = function(state_47277){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37738__auto____1.call(this,state_47277);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37738__auto____0;
cljs$core$async$mult_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37738__auto____1;
return cljs$core$async$mult_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___47362,cs,m,dchan,dctr,done))
})();
var state__37827__auto__ = (function (){var statearr_47361 = f__37826__auto__.call(null);
(statearr_47361[(6)] = c__37825__auto___47362);

return statearr_47361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___47362,cs,m,dchan,dctr,done))
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
var G__47420 = arguments.length;
switch (G__47420) {
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
var len__34830__auto___47432 = arguments.length;
var i__34831__auto___47433 = (0);
while(true){
if((i__34831__auto___47433 < len__34830__auto___47432)){
args__34837__auto__.push((arguments[i__34831__auto___47433]));

var G__47434 = (i__34831__auto___47433 + (1));
i__34831__auto___47433 = G__47434;
continue;
} else {
}
break;
}

var argseq__34838__auto__ = ((((3) < args__34837__auto__.length))?(new cljs.core.IndexedSeq(args__34837__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__34838__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47426){
var map__47427 = p__47426;
var map__47427__$1 = ((((!((map__47427 == null)))?((((map__47427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47427):map__47427);
var opts = map__47427__$1;
var statearr_47429_47435 = state;
(statearr_47429_47435[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__47427,map__47427__$1,opts){
return (function (val){
var statearr_47430_47436 = state;
(statearr_47430_47436[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47427,map__47427__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_47431_47437 = state;
(statearr_47431_47437[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47422){
var G__47423 = cljs.core.first.call(null,seq47422);
var seq47422__$1 = cljs.core.next.call(null,seq47422);
var G__47424 = cljs.core.first.call(null,seq47422__$1);
var seq47422__$2 = cljs.core.next.call(null,seq47422__$1);
var G__47425 = cljs.core.first.call(null,seq47422__$2);
var seq47422__$3 = cljs.core.next.call(null,seq47422__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47423,G__47424,G__47425,seq47422__$3);
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
if(typeof cljs.core.async.t_cljs$core$async47438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47438 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta47439){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta47439 = meta47439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47440,meta47439__$1){
var self__ = this;
var _47440__$1 = this;
return (new cljs.core.async.t_cljs$core$async47438(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta47439__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47440){
var self__ = this;
var _47440__$1 = this;
return self__.meta47439;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47438.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta47439","meta47439",252598439,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47438";

cljs.core.async.t_cljs$core$async47438.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async47438");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47438 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47438(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47439){
return (new cljs.core.async.t_cljs$core$async47438(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47439));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47438(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37825__auto___47602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___47602,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___47602,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47542){
var state_val_47543 = (state_47542[(1)]);
if((state_val_47543 === (7))){
var inst_47457 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
var statearr_47544_47603 = state_47542__$1;
(statearr_47544_47603[(2)] = inst_47457);

(statearr_47544_47603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (20))){
var inst_47469 = (state_47542[(7)]);
var state_47542__$1 = state_47542;
var statearr_47545_47604 = state_47542__$1;
(statearr_47545_47604[(2)] = inst_47469);

(statearr_47545_47604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (27))){
var state_47542__$1 = state_47542;
var statearr_47546_47605 = state_47542__$1;
(statearr_47546_47605[(2)] = null);

(statearr_47546_47605[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (1))){
var inst_47444 = (state_47542[(8)]);
var inst_47444__$1 = calc_state.call(null);
var inst_47446 = (inst_47444__$1 == null);
var inst_47447 = cljs.core.not.call(null,inst_47446);
var state_47542__$1 = (function (){var statearr_47547 = state_47542;
(statearr_47547[(8)] = inst_47444__$1);

return statearr_47547;
})();
if(inst_47447){
var statearr_47548_47606 = state_47542__$1;
(statearr_47548_47606[(1)] = (2));

} else {
var statearr_47549_47607 = state_47542__$1;
(statearr_47549_47607[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (24))){
var inst_47493 = (state_47542[(9)]);
var inst_47502 = (state_47542[(10)]);
var inst_47516 = (state_47542[(11)]);
var inst_47516__$1 = inst_47493.call(null,inst_47502);
var state_47542__$1 = (function (){var statearr_47550 = state_47542;
(statearr_47550[(11)] = inst_47516__$1);

return statearr_47550;
})();
if(cljs.core.truth_(inst_47516__$1)){
var statearr_47551_47608 = state_47542__$1;
(statearr_47551_47608[(1)] = (29));

} else {
var statearr_47552_47609 = state_47542__$1;
(statearr_47552_47609[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (4))){
var inst_47460 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
if(cljs.core.truth_(inst_47460)){
var statearr_47553_47610 = state_47542__$1;
(statearr_47553_47610[(1)] = (8));

} else {
var statearr_47554_47611 = state_47542__$1;
(statearr_47554_47611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (15))){
var inst_47487 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
if(cljs.core.truth_(inst_47487)){
var statearr_47555_47612 = state_47542__$1;
(statearr_47555_47612[(1)] = (19));

} else {
var statearr_47556_47613 = state_47542__$1;
(statearr_47556_47613[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (21))){
var inst_47492 = (state_47542[(12)]);
var inst_47492__$1 = (state_47542[(2)]);
var inst_47493 = cljs.core.get.call(null,inst_47492__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47494 = cljs.core.get.call(null,inst_47492__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47495 = cljs.core.get.call(null,inst_47492__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47542__$1 = (function (){var statearr_47557 = state_47542;
(statearr_47557[(12)] = inst_47492__$1);

(statearr_47557[(9)] = inst_47493);

(statearr_47557[(13)] = inst_47494);

return statearr_47557;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47542__$1,(22),inst_47495);
} else {
if((state_val_47543 === (31))){
var inst_47524 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
if(cljs.core.truth_(inst_47524)){
var statearr_47558_47614 = state_47542__$1;
(statearr_47558_47614[(1)] = (32));

} else {
var statearr_47559_47615 = state_47542__$1;
(statearr_47559_47615[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (32))){
var inst_47501 = (state_47542[(14)]);
var state_47542__$1 = state_47542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47542__$1,(35),out,inst_47501);
} else {
if((state_val_47543 === (33))){
var inst_47492 = (state_47542[(12)]);
var inst_47469 = inst_47492;
var state_47542__$1 = (function (){var statearr_47560 = state_47542;
(statearr_47560[(7)] = inst_47469);

return statearr_47560;
})();
var statearr_47561_47616 = state_47542__$1;
(statearr_47561_47616[(2)] = null);

(statearr_47561_47616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (13))){
var inst_47469 = (state_47542[(7)]);
var inst_47476 = inst_47469.cljs$lang$protocol_mask$partition0$;
var inst_47477 = (inst_47476 & (64));
var inst_47478 = inst_47469.cljs$core$ISeq$;
var inst_47479 = (cljs.core.PROTOCOL_SENTINEL === inst_47478);
var inst_47480 = (inst_47477) || (inst_47479);
var state_47542__$1 = state_47542;
if(cljs.core.truth_(inst_47480)){
var statearr_47562_47617 = state_47542__$1;
(statearr_47562_47617[(1)] = (16));

} else {
var statearr_47563_47618 = state_47542__$1;
(statearr_47563_47618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (22))){
var inst_47502 = (state_47542[(10)]);
var inst_47501 = (state_47542[(14)]);
var inst_47500 = (state_47542[(2)]);
var inst_47501__$1 = cljs.core.nth.call(null,inst_47500,(0),null);
var inst_47502__$1 = cljs.core.nth.call(null,inst_47500,(1),null);
var inst_47503 = (inst_47501__$1 == null);
var inst_47504 = cljs.core._EQ_.call(null,inst_47502__$1,change);
var inst_47505 = (inst_47503) || (inst_47504);
var state_47542__$1 = (function (){var statearr_47564 = state_47542;
(statearr_47564[(10)] = inst_47502__$1);

(statearr_47564[(14)] = inst_47501__$1);

return statearr_47564;
})();
if(cljs.core.truth_(inst_47505)){
var statearr_47565_47619 = state_47542__$1;
(statearr_47565_47619[(1)] = (23));

} else {
var statearr_47566_47620 = state_47542__$1;
(statearr_47566_47620[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (36))){
var inst_47492 = (state_47542[(12)]);
var inst_47469 = inst_47492;
var state_47542__$1 = (function (){var statearr_47567 = state_47542;
(statearr_47567[(7)] = inst_47469);

return statearr_47567;
})();
var statearr_47568_47621 = state_47542__$1;
(statearr_47568_47621[(2)] = null);

(statearr_47568_47621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (29))){
var inst_47516 = (state_47542[(11)]);
var state_47542__$1 = state_47542;
var statearr_47569_47622 = state_47542__$1;
(statearr_47569_47622[(2)] = inst_47516);

(statearr_47569_47622[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (6))){
var state_47542__$1 = state_47542;
var statearr_47570_47623 = state_47542__$1;
(statearr_47570_47623[(2)] = false);

(statearr_47570_47623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (28))){
var inst_47512 = (state_47542[(2)]);
var inst_47513 = calc_state.call(null);
var inst_47469 = inst_47513;
var state_47542__$1 = (function (){var statearr_47571 = state_47542;
(statearr_47571[(15)] = inst_47512);

(statearr_47571[(7)] = inst_47469);

return statearr_47571;
})();
var statearr_47572_47624 = state_47542__$1;
(statearr_47572_47624[(2)] = null);

(statearr_47572_47624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (25))){
var inst_47538 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
var statearr_47573_47625 = state_47542__$1;
(statearr_47573_47625[(2)] = inst_47538);

(statearr_47573_47625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (34))){
var inst_47536 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
var statearr_47574_47626 = state_47542__$1;
(statearr_47574_47626[(2)] = inst_47536);

(statearr_47574_47626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (17))){
var state_47542__$1 = state_47542;
var statearr_47575_47627 = state_47542__$1;
(statearr_47575_47627[(2)] = false);

(statearr_47575_47627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (3))){
var state_47542__$1 = state_47542;
var statearr_47576_47628 = state_47542__$1;
(statearr_47576_47628[(2)] = false);

(statearr_47576_47628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (12))){
var inst_47540 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47542__$1,inst_47540);
} else {
if((state_val_47543 === (2))){
var inst_47444 = (state_47542[(8)]);
var inst_47449 = inst_47444.cljs$lang$protocol_mask$partition0$;
var inst_47450 = (inst_47449 & (64));
var inst_47451 = inst_47444.cljs$core$ISeq$;
var inst_47452 = (cljs.core.PROTOCOL_SENTINEL === inst_47451);
var inst_47453 = (inst_47450) || (inst_47452);
var state_47542__$1 = state_47542;
if(cljs.core.truth_(inst_47453)){
var statearr_47577_47629 = state_47542__$1;
(statearr_47577_47629[(1)] = (5));

} else {
var statearr_47578_47630 = state_47542__$1;
(statearr_47578_47630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (23))){
var inst_47501 = (state_47542[(14)]);
var inst_47507 = (inst_47501 == null);
var state_47542__$1 = state_47542;
if(cljs.core.truth_(inst_47507)){
var statearr_47579_47631 = state_47542__$1;
(statearr_47579_47631[(1)] = (26));

} else {
var statearr_47580_47632 = state_47542__$1;
(statearr_47580_47632[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (35))){
var inst_47527 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
if(cljs.core.truth_(inst_47527)){
var statearr_47581_47633 = state_47542__$1;
(statearr_47581_47633[(1)] = (36));

} else {
var statearr_47582_47634 = state_47542__$1;
(statearr_47582_47634[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (19))){
var inst_47469 = (state_47542[(7)]);
var inst_47489 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47469);
var state_47542__$1 = state_47542;
var statearr_47583_47635 = state_47542__$1;
(statearr_47583_47635[(2)] = inst_47489);

(statearr_47583_47635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (11))){
var inst_47469 = (state_47542[(7)]);
var inst_47473 = (inst_47469 == null);
var inst_47474 = cljs.core.not.call(null,inst_47473);
var state_47542__$1 = state_47542;
if(inst_47474){
var statearr_47584_47636 = state_47542__$1;
(statearr_47584_47636[(1)] = (13));

} else {
var statearr_47585_47637 = state_47542__$1;
(statearr_47585_47637[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (9))){
var inst_47444 = (state_47542[(8)]);
var state_47542__$1 = state_47542;
var statearr_47586_47638 = state_47542__$1;
(statearr_47586_47638[(2)] = inst_47444);

(statearr_47586_47638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (5))){
var state_47542__$1 = state_47542;
var statearr_47587_47639 = state_47542__$1;
(statearr_47587_47639[(2)] = true);

(statearr_47587_47639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (14))){
var state_47542__$1 = state_47542;
var statearr_47588_47640 = state_47542__$1;
(statearr_47588_47640[(2)] = false);

(statearr_47588_47640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (26))){
var inst_47502 = (state_47542[(10)]);
var inst_47509 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47502);
var state_47542__$1 = state_47542;
var statearr_47589_47641 = state_47542__$1;
(statearr_47589_47641[(2)] = inst_47509);

(statearr_47589_47641[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (16))){
var state_47542__$1 = state_47542;
var statearr_47590_47642 = state_47542__$1;
(statearr_47590_47642[(2)] = true);

(statearr_47590_47642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (38))){
var inst_47532 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
var statearr_47591_47643 = state_47542__$1;
(statearr_47591_47643[(2)] = inst_47532);

(statearr_47591_47643[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (30))){
var inst_47493 = (state_47542[(9)]);
var inst_47502 = (state_47542[(10)]);
var inst_47494 = (state_47542[(13)]);
var inst_47519 = cljs.core.empty_QMARK_.call(null,inst_47493);
var inst_47520 = inst_47494.call(null,inst_47502);
var inst_47521 = cljs.core.not.call(null,inst_47520);
var inst_47522 = (inst_47519) && (inst_47521);
var state_47542__$1 = state_47542;
var statearr_47592_47644 = state_47542__$1;
(statearr_47592_47644[(2)] = inst_47522);

(statearr_47592_47644[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (10))){
var inst_47444 = (state_47542[(8)]);
var inst_47465 = (state_47542[(2)]);
var inst_47466 = cljs.core.get.call(null,inst_47465,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47467 = cljs.core.get.call(null,inst_47465,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47468 = cljs.core.get.call(null,inst_47465,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47469 = inst_47444;
var state_47542__$1 = (function (){var statearr_47593 = state_47542;
(statearr_47593[(16)] = inst_47467);

(statearr_47593[(7)] = inst_47469);

(statearr_47593[(17)] = inst_47466);

(statearr_47593[(18)] = inst_47468);

return statearr_47593;
})();
var statearr_47594_47645 = state_47542__$1;
(statearr_47594_47645[(2)] = null);

(statearr_47594_47645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (18))){
var inst_47484 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
var statearr_47595_47646 = state_47542__$1;
(statearr_47595_47646[(2)] = inst_47484);

(statearr_47595_47646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (37))){
var state_47542__$1 = state_47542;
var statearr_47596_47647 = state_47542__$1;
(statearr_47596_47647[(2)] = null);

(statearr_47596_47647[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (8))){
var inst_47444 = (state_47542[(8)]);
var inst_47462 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47444);
var state_47542__$1 = state_47542;
var statearr_47597_47648 = state_47542__$1;
(statearr_47597_47648[(2)] = inst_47462);

(statearr_47597_47648[(1)] = (10));


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
});})(c__37825__auto___47602,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37737__auto__,c__37825__auto___47602,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37738__auto__ = null;
var cljs$core$async$mix_$_state_machine__37738__auto____0 = (function (){
var statearr_47598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47598[(0)] = cljs$core$async$mix_$_state_machine__37738__auto__);

(statearr_47598[(1)] = (1));

return statearr_47598;
});
var cljs$core$async$mix_$_state_machine__37738__auto____1 = (function (state_47542){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_47542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e47599){if((e47599 instanceof Object)){
var ex__37741__auto__ = e47599;
var statearr_47600_47649 = state_47542;
(statearr_47600_47649[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47650 = state_47542;
state_47542 = G__47650;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37738__auto__ = function(state_47542){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37738__auto____1.call(this,state_47542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37738__auto____0;
cljs$core$async$mix_$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37738__auto____1;
return cljs$core$async$mix_$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___47602,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37827__auto__ = (function (){var statearr_47601 = f__37826__auto__.call(null);
(statearr_47601[(6)] = c__37825__auto___47602);

return statearr_47601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___47602,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__47652 = arguments.length;
switch (G__47652) {
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
var G__47656 = arguments.length;
switch (G__47656) {
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
return (function (p1__47654_SHARP_){
if(cljs.core.truth_(p1__47654_SHARP_.call(null,topic))){
return p1__47654_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47654_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__33705__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async47657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47657 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47658){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47658 = meta47658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47659,meta47658__$1){
var self__ = this;
var _47659__$1 = this;
return (new cljs.core.async.t_cljs$core$async47657(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47658__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47659){
var self__ = this;
var _47659__$1 = this;
return self__.meta47658;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47657.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47657.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47657.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47657.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47657.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async47657.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47657.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47657.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47658","meta47658",890763986,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47657";

cljs.core.async.t_cljs$core$async47657.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async47657");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async47657 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47657(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47658){
return (new cljs.core.async.t_cljs$core$async47657(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47658));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47657(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37825__auto___47777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___47777,mults,ensure_mult,p){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___47777,mults,ensure_mult,p){
return (function (state_47731){
var state_val_47732 = (state_47731[(1)]);
if((state_val_47732 === (7))){
var inst_47727 = (state_47731[(2)]);
var state_47731__$1 = state_47731;
var statearr_47733_47778 = state_47731__$1;
(statearr_47733_47778[(2)] = inst_47727);

(statearr_47733_47778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (20))){
var state_47731__$1 = state_47731;
var statearr_47734_47779 = state_47731__$1;
(statearr_47734_47779[(2)] = null);

(statearr_47734_47779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (1))){
var state_47731__$1 = state_47731;
var statearr_47735_47780 = state_47731__$1;
(statearr_47735_47780[(2)] = null);

(statearr_47735_47780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (24))){
var inst_47710 = (state_47731[(7)]);
var inst_47719 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_47710);
var state_47731__$1 = state_47731;
var statearr_47736_47781 = state_47731__$1;
(statearr_47736_47781[(2)] = inst_47719);

(statearr_47736_47781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (4))){
var inst_47662 = (state_47731[(8)]);
var inst_47662__$1 = (state_47731[(2)]);
var inst_47663 = (inst_47662__$1 == null);
var state_47731__$1 = (function (){var statearr_47737 = state_47731;
(statearr_47737[(8)] = inst_47662__$1);

return statearr_47737;
})();
if(cljs.core.truth_(inst_47663)){
var statearr_47738_47782 = state_47731__$1;
(statearr_47738_47782[(1)] = (5));

} else {
var statearr_47739_47783 = state_47731__$1;
(statearr_47739_47783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (15))){
var inst_47704 = (state_47731[(2)]);
var state_47731__$1 = state_47731;
var statearr_47740_47784 = state_47731__$1;
(statearr_47740_47784[(2)] = inst_47704);

(statearr_47740_47784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (21))){
var inst_47724 = (state_47731[(2)]);
var state_47731__$1 = (function (){var statearr_47741 = state_47731;
(statearr_47741[(9)] = inst_47724);

return statearr_47741;
})();
var statearr_47742_47785 = state_47731__$1;
(statearr_47742_47785[(2)] = null);

(statearr_47742_47785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (13))){
var inst_47686 = (state_47731[(10)]);
var inst_47688 = cljs.core.chunked_seq_QMARK_.call(null,inst_47686);
var state_47731__$1 = state_47731;
if(inst_47688){
var statearr_47743_47786 = state_47731__$1;
(statearr_47743_47786[(1)] = (16));

} else {
var statearr_47744_47787 = state_47731__$1;
(statearr_47744_47787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (22))){
var inst_47716 = (state_47731[(2)]);
var state_47731__$1 = state_47731;
if(cljs.core.truth_(inst_47716)){
var statearr_47745_47788 = state_47731__$1;
(statearr_47745_47788[(1)] = (23));

} else {
var statearr_47746_47789 = state_47731__$1;
(statearr_47746_47789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (6))){
var inst_47710 = (state_47731[(7)]);
var inst_47712 = (state_47731[(11)]);
var inst_47662 = (state_47731[(8)]);
var inst_47710__$1 = topic_fn.call(null,inst_47662);
var inst_47711 = cljs.core.deref.call(null,mults);
var inst_47712__$1 = cljs.core.get.call(null,inst_47711,inst_47710__$1);
var state_47731__$1 = (function (){var statearr_47747 = state_47731;
(statearr_47747[(7)] = inst_47710__$1);

(statearr_47747[(11)] = inst_47712__$1);

return statearr_47747;
})();
if(cljs.core.truth_(inst_47712__$1)){
var statearr_47748_47790 = state_47731__$1;
(statearr_47748_47790[(1)] = (19));

} else {
var statearr_47749_47791 = state_47731__$1;
(statearr_47749_47791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (25))){
var inst_47721 = (state_47731[(2)]);
var state_47731__$1 = state_47731;
var statearr_47750_47792 = state_47731__$1;
(statearr_47750_47792[(2)] = inst_47721);

(statearr_47750_47792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (17))){
var inst_47686 = (state_47731[(10)]);
var inst_47695 = cljs.core.first.call(null,inst_47686);
var inst_47696 = cljs.core.async.muxch_STAR_.call(null,inst_47695);
var inst_47697 = cljs.core.async.close_BANG_.call(null,inst_47696);
var inst_47698 = cljs.core.next.call(null,inst_47686);
var inst_47672 = inst_47698;
var inst_47673 = null;
var inst_47674 = (0);
var inst_47675 = (0);
var state_47731__$1 = (function (){var statearr_47751 = state_47731;
(statearr_47751[(12)] = inst_47674);

(statearr_47751[(13)] = inst_47675);

(statearr_47751[(14)] = inst_47697);

(statearr_47751[(15)] = inst_47672);

(statearr_47751[(16)] = inst_47673);

return statearr_47751;
})();
var statearr_47752_47793 = state_47731__$1;
(statearr_47752_47793[(2)] = null);

(statearr_47752_47793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (3))){
var inst_47729 = (state_47731[(2)]);
var state_47731__$1 = state_47731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47731__$1,inst_47729);
} else {
if((state_val_47732 === (12))){
var inst_47706 = (state_47731[(2)]);
var state_47731__$1 = state_47731;
var statearr_47753_47794 = state_47731__$1;
(statearr_47753_47794[(2)] = inst_47706);

(statearr_47753_47794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (2))){
var state_47731__$1 = state_47731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47731__$1,(4),ch);
} else {
if((state_val_47732 === (23))){
var state_47731__$1 = state_47731;
var statearr_47754_47795 = state_47731__$1;
(statearr_47754_47795[(2)] = null);

(statearr_47754_47795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (19))){
var inst_47712 = (state_47731[(11)]);
var inst_47662 = (state_47731[(8)]);
var inst_47714 = cljs.core.async.muxch_STAR_.call(null,inst_47712);
var state_47731__$1 = state_47731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47731__$1,(22),inst_47714,inst_47662);
} else {
if((state_val_47732 === (11))){
var inst_47686 = (state_47731[(10)]);
var inst_47672 = (state_47731[(15)]);
var inst_47686__$1 = cljs.core.seq.call(null,inst_47672);
var state_47731__$1 = (function (){var statearr_47755 = state_47731;
(statearr_47755[(10)] = inst_47686__$1);

return statearr_47755;
})();
if(inst_47686__$1){
var statearr_47756_47796 = state_47731__$1;
(statearr_47756_47796[(1)] = (13));

} else {
var statearr_47757_47797 = state_47731__$1;
(statearr_47757_47797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (9))){
var inst_47708 = (state_47731[(2)]);
var state_47731__$1 = state_47731;
var statearr_47758_47798 = state_47731__$1;
(statearr_47758_47798[(2)] = inst_47708);

(statearr_47758_47798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (5))){
var inst_47669 = cljs.core.deref.call(null,mults);
var inst_47670 = cljs.core.vals.call(null,inst_47669);
var inst_47671 = cljs.core.seq.call(null,inst_47670);
var inst_47672 = inst_47671;
var inst_47673 = null;
var inst_47674 = (0);
var inst_47675 = (0);
var state_47731__$1 = (function (){var statearr_47759 = state_47731;
(statearr_47759[(12)] = inst_47674);

(statearr_47759[(13)] = inst_47675);

(statearr_47759[(15)] = inst_47672);

(statearr_47759[(16)] = inst_47673);

return statearr_47759;
})();
var statearr_47760_47799 = state_47731__$1;
(statearr_47760_47799[(2)] = null);

(statearr_47760_47799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (14))){
var state_47731__$1 = state_47731;
var statearr_47764_47800 = state_47731__$1;
(statearr_47764_47800[(2)] = null);

(statearr_47764_47800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (16))){
var inst_47686 = (state_47731[(10)]);
var inst_47690 = cljs.core.chunk_first.call(null,inst_47686);
var inst_47691 = cljs.core.chunk_rest.call(null,inst_47686);
var inst_47692 = cljs.core.count.call(null,inst_47690);
var inst_47672 = inst_47691;
var inst_47673 = inst_47690;
var inst_47674 = inst_47692;
var inst_47675 = (0);
var state_47731__$1 = (function (){var statearr_47765 = state_47731;
(statearr_47765[(12)] = inst_47674);

(statearr_47765[(13)] = inst_47675);

(statearr_47765[(15)] = inst_47672);

(statearr_47765[(16)] = inst_47673);

return statearr_47765;
})();
var statearr_47766_47801 = state_47731__$1;
(statearr_47766_47801[(2)] = null);

(statearr_47766_47801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (10))){
var inst_47674 = (state_47731[(12)]);
var inst_47675 = (state_47731[(13)]);
var inst_47672 = (state_47731[(15)]);
var inst_47673 = (state_47731[(16)]);
var inst_47680 = cljs.core._nth.call(null,inst_47673,inst_47675);
var inst_47681 = cljs.core.async.muxch_STAR_.call(null,inst_47680);
var inst_47682 = cljs.core.async.close_BANG_.call(null,inst_47681);
var inst_47683 = (inst_47675 + (1));
var tmp47761 = inst_47674;
var tmp47762 = inst_47672;
var tmp47763 = inst_47673;
var inst_47672__$1 = tmp47762;
var inst_47673__$1 = tmp47763;
var inst_47674__$1 = tmp47761;
var inst_47675__$1 = inst_47683;
var state_47731__$1 = (function (){var statearr_47767 = state_47731;
(statearr_47767[(12)] = inst_47674__$1);

(statearr_47767[(13)] = inst_47675__$1);

(statearr_47767[(15)] = inst_47672__$1);

(statearr_47767[(17)] = inst_47682);

(statearr_47767[(16)] = inst_47673__$1);

return statearr_47767;
})();
var statearr_47768_47802 = state_47731__$1;
(statearr_47768_47802[(2)] = null);

(statearr_47768_47802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (18))){
var inst_47701 = (state_47731[(2)]);
var state_47731__$1 = state_47731;
var statearr_47769_47803 = state_47731__$1;
(statearr_47769_47803[(2)] = inst_47701);

(statearr_47769_47803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (8))){
var inst_47674 = (state_47731[(12)]);
var inst_47675 = (state_47731[(13)]);
var inst_47677 = (inst_47675 < inst_47674);
var inst_47678 = inst_47677;
var state_47731__$1 = state_47731;
if(cljs.core.truth_(inst_47678)){
var statearr_47770_47804 = state_47731__$1;
(statearr_47770_47804[(1)] = (10));

} else {
var statearr_47771_47805 = state_47731__$1;
(statearr_47771_47805[(1)] = (11));

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
});})(c__37825__auto___47777,mults,ensure_mult,p))
;
return ((function (switch__37737__auto__,c__37825__auto___47777,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_47772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47772[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_47772[(1)] = (1));

return statearr_47772;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_47731){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_47731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e47773){if((e47773 instanceof Object)){
var ex__37741__auto__ = e47773;
var statearr_47774_47806 = state_47731;
(statearr_47774_47806[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47807 = state_47731;
state_47731 = G__47807;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_47731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_47731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___47777,mults,ensure_mult,p))
})();
var state__37827__auto__ = (function (){var statearr_47775 = f__37826__auto__.call(null);
(statearr_47775[(6)] = c__37825__auto___47777);

return statearr_47775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___47777,mults,ensure_mult,p))
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
var G__47809 = arguments.length;
switch (G__47809) {
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
var G__47812 = arguments.length;
switch (G__47812) {
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
var G__47815 = arguments.length;
switch (G__47815) {
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
var c__37825__auto___47882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___47882,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___47882,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47854){
var state_val_47855 = (state_47854[(1)]);
if((state_val_47855 === (7))){
var state_47854__$1 = state_47854;
var statearr_47856_47883 = state_47854__$1;
(statearr_47856_47883[(2)] = null);

(statearr_47856_47883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (1))){
var state_47854__$1 = state_47854;
var statearr_47857_47884 = state_47854__$1;
(statearr_47857_47884[(2)] = null);

(statearr_47857_47884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (4))){
var inst_47818 = (state_47854[(7)]);
var inst_47820 = (inst_47818 < cnt);
var state_47854__$1 = state_47854;
if(cljs.core.truth_(inst_47820)){
var statearr_47858_47885 = state_47854__$1;
(statearr_47858_47885[(1)] = (6));

} else {
var statearr_47859_47886 = state_47854__$1;
(statearr_47859_47886[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (15))){
var inst_47850 = (state_47854[(2)]);
var state_47854__$1 = state_47854;
var statearr_47860_47887 = state_47854__$1;
(statearr_47860_47887[(2)] = inst_47850);

(statearr_47860_47887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (13))){
var inst_47843 = cljs.core.async.close_BANG_.call(null,out);
var state_47854__$1 = state_47854;
var statearr_47861_47888 = state_47854__$1;
(statearr_47861_47888[(2)] = inst_47843);

(statearr_47861_47888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (6))){
var state_47854__$1 = state_47854;
var statearr_47862_47889 = state_47854__$1;
(statearr_47862_47889[(2)] = null);

(statearr_47862_47889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (3))){
var inst_47852 = (state_47854[(2)]);
var state_47854__$1 = state_47854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47854__$1,inst_47852);
} else {
if((state_val_47855 === (12))){
var inst_47840 = (state_47854[(8)]);
var inst_47840__$1 = (state_47854[(2)]);
var inst_47841 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_47840__$1);
var state_47854__$1 = (function (){var statearr_47863 = state_47854;
(statearr_47863[(8)] = inst_47840__$1);

return statearr_47863;
})();
if(cljs.core.truth_(inst_47841)){
var statearr_47864_47890 = state_47854__$1;
(statearr_47864_47890[(1)] = (13));

} else {
var statearr_47865_47891 = state_47854__$1;
(statearr_47865_47891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (2))){
var inst_47817 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_47818 = (0);
var state_47854__$1 = (function (){var statearr_47866 = state_47854;
(statearr_47866[(9)] = inst_47817);

(statearr_47866[(7)] = inst_47818);

return statearr_47866;
})();
var statearr_47867_47892 = state_47854__$1;
(statearr_47867_47892[(2)] = null);

(statearr_47867_47892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (11))){
var inst_47818 = (state_47854[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47854,(10),Object,null,(9));
var inst_47827 = chs__$1.call(null,inst_47818);
var inst_47828 = done.call(null,inst_47818);
var inst_47829 = cljs.core.async.take_BANG_.call(null,inst_47827,inst_47828);
var state_47854__$1 = state_47854;
var statearr_47868_47893 = state_47854__$1;
(statearr_47868_47893[(2)] = inst_47829);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47854__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (9))){
var inst_47818 = (state_47854[(7)]);
var inst_47831 = (state_47854[(2)]);
var inst_47832 = (inst_47818 + (1));
var inst_47818__$1 = inst_47832;
var state_47854__$1 = (function (){var statearr_47869 = state_47854;
(statearr_47869[(10)] = inst_47831);

(statearr_47869[(7)] = inst_47818__$1);

return statearr_47869;
})();
var statearr_47870_47894 = state_47854__$1;
(statearr_47870_47894[(2)] = null);

(statearr_47870_47894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (5))){
var inst_47838 = (state_47854[(2)]);
var state_47854__$1 = (function (){var statearr_47871 = state_47854;
(statearr_47871[(11)] = inst_47838);

return statearr_47871;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47854__$1,(12),dchan);
} else {
if((state_val_47855 === (14))){
var inst_47840 = (state_47854[(8)]);
var inst_47845 = cljs.core.apply.call(null,f,inst_47840);
var state_47854__$1 = state_47854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47854__$1,(16),out,inst_47845);
} else {
if((state_val_47855 === (16))){
var inst_47847 = (state_47854[(2)]);
var state_47854__$1 = (function (){var statearr_47872 = state_47854;
(statearr_47872[(12)] = inst_47847);

return statearr_47872;
})();
var statearr_47873_47895 = state_47854__$1;
(statearr_47873_47895[(2)] = null);

(statearr_47873_47895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (10))){
var inst_47822 = (state_47854[(2)]);
var inst_47823 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_47854__$1 = (function (){var statearr_47874 = state_47854;
(statearr_47874[(13)] = inst_47822);

return statearr_47874;
})();
var statearr_47875_47896 = state_47854__$1;
(statearr_47875_47896[(2)] = inst_47823);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47854__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (8))){
var inst_47836 = (state_47854[(2)]);
var state_47854__$1 = state_47854;
var statearr_47876_47897 = state_47854__$1;
(statearr_47876_47897[(2)] = inst_47836);

(statearr_47876_47897[(1)] = (5));


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
});})(c__37825__auto___47882,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37737__auto__,c__37825__auto___47882,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_47877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47877[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_47877[(1)] = (1));

return statearr_47877;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_47854){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_47854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e47878){if((e47878 instanceof Object)){
var ex__37741__auto__ = e47878;
var statearr_47879_47898 = state_47854;
(statearr_47879_47898[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47899 = state_47854;
state_47854 = G__47899;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_47854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_47854);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___47882,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37827__auto__ = (function (){var statearr_47880 = f__37826__auto__.call(null);
(statearr_47880[(6)] = c__37825__auto___47882);

return statearr_47880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___47882,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__47902 = arguments.length;
switch (G__47902) {
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
var c__37825__auto___47956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___47956,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___47956,out){
return (function (state_47934){
var state_val_47935 = (state_47934[(1)]);
if((state_val_47935 === (7))){
var inst_47914 = (state_47934[(7)]);
var inst_47913 = (state_47934[(8)]);
var inst_47913__$1 = (state_47934[(2)]);
var inst_47914__$1 = cljs.core.nth.call(null,inst_47913__$1,(0),null);
var inst_47915 = cljs.core.nth.call(null,inst_47913__$1,(1),null);
var inst_47916 = (inst_47914__$1 == null);
var state_47934__$1 = (function (){var statearr_47936 = state_47934;
(statearr_47936[(7)] = inst_47914__$1);

(statearr_47936[(8)] = inst_47913__$1);

(statearr_47936[(9)] = inst_47915);

return statearr_47936;
})();
if(cljs.core.truth_(inst_47916)){
var statearr_47937_47957 = state_47934__$1;
(statearr_47937_47957[(1)] = (8));

} else {
var statearr_47938_47958 = state_47934__$1;
(statearr_47938_47958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (1))){
var inst_47903 = cljs.core.vec.call(null,chs);
var inst_47904 = inst_47903;
var state_47934__$1 = (function (){var statearr_47939 = state_47934;
(statearr_47939[(10)] = inst_47904);

return statearr_47939;
})();
var statearr_47940_47959 = state_47934__$1;
(statearr_47940_47959[(2)] = null);

(statearr_47940_47959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (4))){
var inst_47904 = (state_47934[(10)]);
var state_47934__$1 = state_47934;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47934__$1,(7),inst_47904);
} else {
if((state_val_47935 === (6))){
var inst_47930 = (state_47934[(2)]);
var state_47934__$1 = state_47934;
var statearr_47941_47960 = state_47934__$1;
(statearr_47941_47960[(2)] = inst_47930);

(statearr_47941_47960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (3))){
var inst_47932 = (state_47934[(2)]);
var state_47934__$1 = state_47934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47934__$1,inst_47932);
} else {
if((state_val_47935 === (2))){
var inst_47904 = (state_47934[(10)]);
var inst_47906 = cljs.core.count.call(null,inst_47904);
var inst_47907 = (inst_47906 > (0));
var state_47934__$1 = state_47934;
if(cljs.core.truth_(inst_47907)){
var statearr_47943_47961 = state_47934__$1;
(statearr_47943_47961[(1)] = (4));

} else {
var statearr_47944_47962 = state_47934__$1;
(statearr_47944_47962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (11))){
var inst_47904 = (state_47934[(10)]);
var inst_47923 = (state_47934[(2)]);
var tmp47942 = inst_47904;
var inst_47904__$1 = tmp47942;
var state_47934__$1 = (function (){var statearr_47945 = state_47934;
(statearr_47945[(10)] = inst_47904__$1);

(statearr_47945[(11)] = inst_47923);

return statearr_47945;
})();
var statearr_47946_47963 = state_47934__$1;
(statearr_47946_47963[(2)] = null);

(statearr_47946_47963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (9))){
var inst_47914 = (state_47934[(7)]);
var state_47934__$1 = state_47934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47934__$1,(11),out,inst_47914);
} else {
if((state_val_47935 === (5))){
var inst_47928 = cljs.core.async.close_BANG_.call(null,out);
var state_47934__$1 = state_47934;
var statearr_47947_47964 = state_47934__$1;
(statearr_47947_47964[(2)] = inst_47928);

(statearr_47947_47964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (10))){
var inst_47926 = (state_47934[(2)]);
var state_47934__$1 = state_47934;
var statearr_47948_47965 = state_47934__$1;
(statearr_47948_47965[(2)] = inst_47926);

(statearr_47948_47965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (8))){
var inst_47904 = (state_47934[(10)]);
var inst_47914 = (state_47934[(7)]);
var inst_47913 = (state_47934[(8)]);
var inst_47915 = (state_47934[(9)]);
var inst_47918 = (function (){var cs = inst_47904;
var vec__47909 = inst_47913;
var v = inst_47914;
var c = inst_47915;
return ((function (cs,vec__47909,v,c,inst_47904,inst_47914,inst_47913,inst_47915,state_val_47935,c__37825__auto___47956,out){
return (function (p1__47900_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__47900_SHARP_);
});
;})(cs,vec__47909,v,c,inst_47904,inst_47914,inst_47913,inst_47915,state_val_47935,c__37825__auto___47956,out))
})();
var inst_47919 = cljs.core.filterv.call(null,inst_47918,inst_47904);
var inst_47904__$1 = inst_47919;
var state_47934__$1 = (function (){var statearr_47949 = state_47934;
(statearr_47949[(10)] = inst_47904__$1);

return statearr_47949;
})();
var statearr_47950_47966 = state_47934__$1;
(statearr_47950_47966[(2)] = null);

(statearr_47950_47966[(1)] = (2));


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
});})(c__37825__auto___47956,out))
;
return ((function (switch__37737__auto__,c__37825__auto___47956,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_47951 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47951[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_47951[(1)] = (1));

return statearr_47951;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_47934){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_47934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e47952){if((e47952 instanceof Object)){
var ex__37741__auto__ = e47952;
var statearr_47953_47967 = state_47934;
(statearr_47953_47967[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47968 = state_47934;
state_47934 = G__47968;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_47934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_47934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___47956,out))
})();
var state__37827__auto__ = (function (){var statearr_47954 = f__37826__auto__.call(null);
(statearr_47954[(6)] = c__37825__auto___47956);

return statearr_47954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___47956,out))
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
var G__47970 = arguments.length;
switch (G__47970) {
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
var c__37825__auto___48015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___48015,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___48015,out){
return (function (state_47994){
var state_val_47995 = (state_47994[(1)]);
if((state_val_47995 === (7))){
var inst_47976 = (state_47994[(7)]);
var inst_47976__$1 = (state_47994[(2)]);
var inst_47977 = (inst_47976__$1 == null);
var inst_47978 = cljs.core.not.call(null,inst_47977);
var state_47994__$1 = (function (){var statearr_47996 = state_47994;
(statearr_47996[(7)] = inst_47976__$1);

return statearr_47996;
})();
if(inst_47978){
var statearr_47997_48016 = state_47994__$1;
(statearr_47997_48016[(1)] = (8));

} else {
var statearr_47998_48017 = state_47994__$1;
(statearr_47998_48017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (1))){
var inst_47971 = (0);
var state_47994__$1 = (function (){var statearr_47999 = state_47994;
(statearr_47999[(8)] = inst_47971);

return statearr_47999;
})();
var statearr_48000_48018 = state_47994__$1;
(statearr_48000_48018[(2)] = null);

(statearr_48000_48018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (4))){
var state_47994__$1 = state_47994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47994__$1,(7),ch);
} else {
if((state_val_47995 === (6))){
var inst_47989 = (state_47994[(2)]);
var state_47994__$1 = state_47994;
var statearr_48001_48019 = state_47994__$1;
(statearr_48001_48019[(2)] = inst_47989);

(statearr_48001_48019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (3))){
var inst_47991 = (state_47994[(2)]);
var inst_47992 = cljs.core.async.close_BANG_.call(null,out);
var state_47994__$1 = (function (){var statearr_48002 = state_47994;
(statearr_48002[(9)] = inst_47991);

return statearr_48002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47994__$1,inst_47992);
} else {
if((state_val_47995 === (2))){
var inst_47971 = (state_47994[(8)]);
var inst_47973 = (inst_47971 < n);
var state_47994__$1 = state_47994;
if(cljs.core.truth_(inst_47973)){
var statearr_48003_48020 = state_47994__$1;
(statearr_48003_48020[(1)] = (4));

} else {
var statearr_48004_48021 = state_47994__$1;
(statearr_48004_48021[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (11))){
var inst_47971 = (state_47994[(8)]);
var inst_47981 = (state_47994[(2)]);
var inst_47982 = (inst_47971 + (1));
var inst_47971__$1 = inst_47982;
var state_47994__$1 = (function (){var statearr_48005 = state_47994;
(statearr_48005[(10)] = inst_47981);

(statearr_48005[(8)] = inst_47971__$1);

return statearr_48005;
})();
var statearr_48006_48022 = state_47994__$1;
(statearr_48006_48022[(2)] = null);

(statearr_48006_48022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (9))){
var state_47994__$1 = state_47994;
var statearr_48007_48023 = state_47994__$1;
(statearr_48007_48023[(2)] = null);

(statearr_48007_48023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (5))){
var state_47994__$1 = state_47994;
var statearr_48008_48024 = state_47994__$1;
(statearr_48008_48024[(2)] = null);

(statearr_48008_48024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (10))){
var inst_47986 = (state_47994[(2)]);
var state_47994__$1 = state_47994;
var statearr_48009_48025 = state_47994__$1;
(statearr_48009_48025[(2)] = inst_47986);

(statearr_48009_48025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (8))){
var inst_47976 = (state_47994[(7)]);
var state_47994__$1 = state_47994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47994__$1,(11),out,inst_47976);
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
});})(c__37825__auto___48015,out))
;
return ((function (switch__37737__auto__,c__37825__auto___48015,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_48010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48010[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_48010[(1)] = (1));

return statearr_48010;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_47994){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_47994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e48011){if((e48011 instanceof Object)){
var ex__37741__auto__ = e48011;
var statearr_48012_48026 = state_47994;
(statearr_48012_48026[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48027 = state_47994;
state_47994 = G__48027;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_47994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_47994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___48015,out))
})();
var state__37827__auto__ = (function (){var statearr_48013 = f__37826__auto__.call(null);
(statearr_48013[(6)] = c__37825__auto___48015);

return statearr_48013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___48015,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48029 = (function (f,ch,meta48030){
this.f = f;
this.ch = ch;
this.meta48030 = meta48030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48031,meta48030__$1){
var self__ = this;
var _48031__$1 = this;
return (new cljs.core.async.t_cljs$core$async48029(self__.f,self__.ch,meta48030__$1));
});

cljs.core.async.t_cljs$core$async48029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48031){
var self__ = this;
var _48031__$1 = this;
return self__.meta48030;
});

cljs.core.async.t_cljs$core$async48029.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48029.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48029.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48029.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48029.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48032 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48032 = (function (f,ch,meta48030,_,fn1,meta48033){
this.f = f;
this.ch = ch;
this.meta48030 = meta48030;
this._ = _;
this.fn1 = fn1;
this.meta48033 = meta48033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48034,meta48033__$1){
var self__ = this;
var _48034__$1 = this;
return (new cljs.core.async.t_cljs$core$async48032(self__.f,self__.ch,self__.meta48030,self__._,self__.fn1,meta48033__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48034){
var self__ = this;
var _48034__$1 = this;
return self__.meta48033;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48032.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48032.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48028_SHARP_){
return f1.call(null,(((p1__48028_SHARP_ == null))?null:self__.f.call(null,p1__48028_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48032.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48030","meta48030",-11681607,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48029","cljs.core.async/t_cljs$core$async48029",908488254,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48033","meta48033",-634980198,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48032.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48032";

cljs.core.async.t_cljs$core$async48032.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async48032");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48032 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48032(f__$1,ch__$1,meta48030__$1,___$2,fn1__$1,meta48033){
return (new cljs.core.async.t_cljs$core$async48032(f__$1,ch__$1,meta48030__$1,___$2,fn1__$1,meta48033));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48032(self__.f,self__.ch,self__.meta48030,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async48029.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48029.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48030","meta48030",-11681607,null)], null);
});

cljs.core.async.t_cljs$core$async48029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48029";

cljs.core.async.t_cljs$core$async48029.cljs$lang$ctorPrWriter = (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async48029");
});

cljs.core.async.__GT_t_cljs$core$async48029 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48029(f__$1,ch__$1,meta48030){
return (new cljs.core.async.t_cljs$core$async48029(f__$1,ch__$1,meta48030));
});

}

return (new cljs.core.async.t_cljs$core$async48029(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48035 = (function (f,ch,meta48036){
this.f = f;
this.ch = ch;
this.meta48036 = meta48036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48037,meta48036__$1){
var self__ = this;
var _48037__$1 = this;
return (new cljs.core.async.t_cljs$core$async48035(self__.f,self__.ch,meta48036__$1));
});

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48037){
var self__ = this;
var _48037__$1 = this;
return self__.meta48036;
});

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48036","meta48036",984892390,null)], null);
});

cljs.core.async.t_cljs$core$async48035.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48035";

cljs.core.async.t_cljs$core$async48035.cljs$lang$ctorPrWriter = (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async48035");
});

cljs.core.async.__GT_t_cljs$core$async48035 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48035(f__$1,ch__$1,meta48036){
return (new cljs.core.async.t_cljs$core$async48035(f__$1,ch__$1,meta48036));
});

}

return (new cljs.core.async.t_cljs$core$async48035(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48038 = (function (p,ch,meta48039){
this.p = p;
this.ch = ch;
this.meta48039 = meta48039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48040,meta48039__$1){
var self__ = this;
var _48040__$1 = this;
return (new cljs.core.async.t_cljs$core$async48038(self__.p,self__.ch,meta48039__$1));
});

cljs.core.async.t_cljs$core$async48038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48040){
var self__ = this;
var _48040__$1 = this;
return self__.meta48039;
});

cljs.core.async.t_cljs$core$async48038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48038.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48039","meta48039",-1293339585,null)], null);
});

cljs.core.async.t_cljs$core$async48038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48038";

cljs.core.async.t_cljs$core$async48038.cljs$lang$ctorPrWriter = (function (this__34316__auto__,writer__34317__auto__,opt__34318__auto__){
return cljs.core._write.call(null,writer__34317__auto__,"cljs.core.async/t_cljs$core$async48038");
});

cljs.core.async.__GT_t_cljs$core$async48038 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48038(p__$1,ch__$1,meta48039){
return (new cljs.core.async.t_cljs$core$async48038(p__$1,ch__$1,meta48039));
});

}

return (new cljs.core.async.t_cljs$core$async48038(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48042 = arguments.length;
switch (G__48042) {
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
var c__37825__auto___48082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___48082,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___48082,out){
return (function (state_48063){
var state_val_48064 = (state_48063[(1)]);
if((state_val_48064 === (7))){
var inst_48059 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48065_48083 = state_48063__$1;
(statearr_48065_48083[(2)] = inst_48059);

(statearr_48065_48083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (1))){
var state_48063__$1 = state_48063;
var statearr_48066_48084 = state_48063__$1;
(statearr_48066_48084[(2)] = null);

(statearr_48066_48084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (4))){
var inst_48045 = (state_48063[(7)]);
var inst_48045__$1 = (state_48063[(2)]);
var inst_48046 = (inst_48045__$1 == null);
var state_48063__$1 = (function (){var statearr_48067 = state_48063;
(statearr_48067[(7)] = inst_48045__$1);

return statearr_48067;
})();
if(cljs.core.truth_(inst_48046)){
var statearr_48068_48085 = state_48063__$1;
(statearr_48068_48085[(1)] = (5));

} else {
var statearr_48069_48086 = state_48063__$1;
(statearr_48069_48086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (6))){
var inst_48045 = (state_48063[(7)]);
var inst_48050 = p.call(null,inst_48045);
var state_48063__$1 = state_48063;
if(cljs.core.truth_(inst_48050)){
var statearr_48070_48087 = state_48063__$1;
(statearr_48070_48087[(1)] = (8));

} else {
var statearr_48071_48088 = state_48063__$1;
(statearr_48071_48088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (3))){
var inst_48061 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48063__$1,inst_48061);
} else {
if((state_val_48064 === (2))){
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(4),ch);
} else {
if((state_val_48064 === (11))){
var inst_48053 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48072_48089 = state_48063__$1;
(statearr_48072_48089[(2)] = inst_48053);

(statearr_48072_48089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (9))){
var state_48063__$1 = state_48063;
var statearr_48073_48090 = state_48063__$1;
(statearr_48073_48090[(2)] = null);

(statearr_48073_48090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (5))){
var inst_48048 = cljs.core.async.close_BANG_.call(null,out);
var state_48063__$1 = state_48063;
var statearr_48074_48091 = state_48063__$1;
(statearr_48074_48091[(2)] = inst_48048);

(statearr_48074_48091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (10))){
var inst_48056 = (state_48063[(2)]);
var state_48063__$1 = (function (){var statearr_48075 = state_48063;
(statearr_48075[(8)] = inst_48056);

return statearr_48075;
})();
var statearr_48076_48092 = state_48063__$1;
(statearr_48076_48092[(2)] = null);

(statearr_48076_48092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (8))){
var inst_48045 = (state_48063[(7)]);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48063__$1,(11),out,inst_48045);
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
});})(c__37825__auto___48082,out))
;
return ((function (switch__37737__auto__,c__37825__auto___48082,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_48077 = [null,null,null,null,null,null,null,null,null];
(statearr_48077[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_48077[(1)] = (1));

return statearr_48077;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_48063){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_48063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e48078){if((e48078 instanceof Object)){
var ex__37741__auto__ = e48078;
var statearr_48079_48093 = state_48063;
(statearr_48079_48093[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48094 = state_48063;
state_48063 = G__48094;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_48063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_48063);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___48082,out))
})();
var state__37827__auto__ = (function (){var statearr_48080 = f__37826__auto__.call(null);
(statearr_48080[(6)] = c__37825__auto___48082);

return statearr_48080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___48082,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48096 = arguments.length;
switch (G__48096) {
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
return (function (state_48159){
var state_val_48160 = (state_48159[(1)]);
if((state_val_48160 === (7))){
var inst_48155 = (state_48159[(2)]);
var state_48159__$1 = state_48159;
var statearr_48161_48199 = state_48159__$1;
(statearr_48161_48199[(2)] = inst_48155);

(statearr_48161_48199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (20))){
var inst_48125 = (state_48159[(7)]);
var inst_48136 = (state_48159[(2)]);
var inst_48137 = cljs.core.next.call(null,inst_48125);
var inst_48111 = inst_48137;
var inst_48112 = null;
var inst_48113 = (0);
var inst_48114 = (0);
var state_48159__$1 = (function (){var statearr_48162 = state_48159;
(statearr_48162[(8)] = inst_48111);

(statearr_48162[(9)] = inst_48136);

(statearr_48162[(10)] = inst_48112);

(statearr_48162[(11)] = inst_48114);

(statearr_48162[(12)] = inst_48113);

return statearr_48162;
})();
var statearr_48163_48200 = state_48159__$1;
(statearr_48163_48200[(2)] = null);

(statearr_48163_48200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (1))){
var state_48159__$1 = state_48159;
var statearr_48164_48201 = state_48159__$1;
(statearr_48164_48201[(2)] = null);

(statearr_48164_48201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (4))){
var inst_48100 = (state_48159[(13)]);
var inst_48100__$1 = (state_48159[(2)]);
var inst_48101 = (inst_48100__$1 == null);
var state_48159__$1 = (function (){var statearr_48165 = state_48159;
(statearr_48165[(13)] = inst_48100__$1);

return statearr_48165;
})();
if(cljs.core.truth_(inst_48101)){
var statearr_48166_48202 = state_48159__$1;
(statearr_48166_48202[(1)] = (5));

} else {
var statearr_48167_48203 = state_48159__$1;
(statearr_48167_48203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (15))){
var state_48159__$1 = state_48159;
var statearr_48171_48204 = state_48159__$1;
(statearr_48171_48204[(2)] = null);

(statearr_48171_48204[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (21))){
var state_48159__$1 = state_48159;
var statearr_48172_48205 = state_48159__$1;
(statearr_48172_48205[(2)] = null);

(statearr_48172_48205[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (13))){
var inst_48111 = (state_48159[(8)]);
var inst_48112 = (state_48159[(10)]);
var inst_48114 = (state_48159[(11)]);
var inst_48113 = (state_48159[(12)]);
var inst_48121 = (state_48159[(2)]);
var inst_48122 = (inst_48114 + (1));
var tmp48168 = inst_48111;
var tmp48169 = inst_48112;
var tmp48170 = inst_48113;
var inst_48111__$1 = tmp48168;
var inst_48112__$1 = tmp48169;
var inst_48113__$1 = tmp48170;
var inst_48114__$1 = inst_48122;
var state_48159__$1 = (function (){var statearr_48173 = state_48159;
(statearr_48173[(14)] = inst_48121);

(statearr_48173[(8)] = inst_48111__$1);

(statearr_48173[(10)] = inst_48112__$1);

(statearr_48173[(11)] = inst_48114__$1);

(statearr_48173[(12)] = inst_48113__$1);

return statearr_48173;
})();
var statearr_48174_48206 = state_48159__$1;
(statearr_48174_48206[(2)] = null);

(statearr_48174_48206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (22))){
var state_48159__$1 = state_48159;
var statearr_48175_48207 = state_48159__$1;
(statearr_48175_48207[(2)] = null);

(statearr_48175_48207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (6))){
var inst_48100 = (state_48159[(13)]);
var inst_48109 = f.call(null,inst_48100);
var inst_48110 = cljs.core.seq.call(null,inst_48109);
var inst_48111 = inst_48110;
var inst_48112 = null;
var inst_48113 = (0);
var inst_48114 = (0);
var state_48159__$1 = (function (){var statearr_48176 = state_48159;
(statearr_48176[(8)] = inst_48111);

(statearr_48176[(10)] = inst_48112);

(statearr_48176[(11)] = inst_48114);

(statearr_48176[(12)] = inst_48113);

return statearr_48176;
})();
var statearr_48177_48208 = state_48159__$1;
(statearr_48177_48208[(2)] = null);

(statearr_48177_48208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (17))){
var inst_48125 = (state_48159[(7)]);
var inst_48129 = cljs.core.chunk_first.call(null,inst_48125);
var inst_48130 = cljs.core.chunk_rest.call(null,inst_48125);
var inst_48131 = cljs.core.count.call(null,inst_48129);
var inst_48111 = inst_48130;
var inst_48112 = inst_48129;
var inst_48113 = inst_48131;
var inst_48114 = (0);
var state_48159__$1 = (function (){var statearr_48178 = state_48159;
(statearr_48178[(8)] = inst_48111);

(statearr_48178[(10)] = inst_48112);

(statearr_48178[(11)] = inst_48114);

(statearr_48178[(12)] = inst_48113);

return statearr_48178;
})();
var statearr_48179_48209 = state_48159__$1;
(statearr_48179_48209[(2)] = null);

(statearr_48179_48209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (3))){
var inst_48157 = (state_48159[(2)]);
var state_48159__$1 = state_48159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48159__$1,inst_48157);
} else {
if((state_val_48160 === (12))){
var inst_48145 = (state_48159[(2)]);
var state_48159__$1 = state_48159;
var statearr_48180_48210 = state_48159__$1;
(statearr_48180_48210[(2)] = inst_48145);

(statearr_48180_48210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (2))){
var state_48159__$1 = state_48159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48159__$1,(4),in$);
} else {
if((state_val_48160 === (23))){
var inst_48153 = (state_48159[(2)]);
var state_48159__$1 = state_48159;
var statearr_48181_48211 = state_48159__$1;
(statearr_48181_48211[(2)] = inst_48153);

(statearr_48181_48211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (19))){
var inst_48140 = (state_48159[(2)]);
var state_48159__$1 = state_48159;
var statearr_48182_48212 = state_48159__$1;
(statearr_48182_48212[(2)] = inst_48140);

(statearr_48182_48212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (11))){
var inst_48111 = (state_48159[(8)]);
var inst_48125 = (state_48159[(7)]);
var inst_48125__$1 = cljs.core.seq.call(null,inst_48111);
var state_48159__$1 = (function (){var statearr_48183 = state_48159;
(statearr_48183[(7)] = inst_48125__$1);

return statearr_48183;
})();
if(inst_48125__$1){
var statearr_48184_48213 = state_48159__$1;
(statearr_48184_48213[(1)] = (14));

} else {
var statearr_48185_48214 = state_48159__$1;
(statearr_48185_48214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (9))){
var inst_48147 = (state_48159[(2)]);
var inst_48148 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48159__$1 = (function (){var statearr_48186 = state_48159;
(statearr_48186[(15)] = inst_48147);

return statearr_48186;
})();
if(cljs.core.truth_(inst_48148)){
var statearr_48187_48215 = state_48159__$1;
(statearr_48187_48215[(1)] = (21));

} else {
var statearr_48188_48216 = state_48159__$1;
(statearr_48188_48216[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (5))){
var inst_48103 = cljs.core.async.close_BANG_.call(null,out);
var state_48159__$1 = state_48159;
var statearr_48189_48217 = state_48159__$1;
(statearr_48189_48217[(2)] = inst_48103);

(statearr_48189_48217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (14))){
var inst_48125 = (state_48159[(7)]);
var inst_48127 = cljs.core.chunked_seq_QMARK_.call(null,inst_48125);
var state_48159__$1 = state_48159;
if(inst_48127){
var statearr_48190_48218 = state_48159__$1;
(statearr_48190_48218[(1)] = (17));

} else {
var statearr_48191_48219 = state_48159__$1;
(statearr_48191_48219[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (16))){
var inst_48143 = (state_48159[(2)]);
var state_48159__$1 = state_48159;
var statearr_48192_48220 = state_48159__$1;
(statearr_48192_48220[(2)] = inst_48143);

(statearr_48192_48220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48160 === (10))){
var inst_48112 = (state_48159[(10)]);
var inst_48114 = (state_48159[(11)]);
var inst_48119 = cljs.core._nth.call(null,inst_48112,inst_48114);
var state_48159__$1 = state_48159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48159__$1,(13),out,inst_48119);
} else {
if((state_val_48160 === (18))){
var inst_48125 = (state_48159[(7)]);
var inst_48134 = cljs.core.first.call(null,inst_48125);
var state_48159__$1 = state_48159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48159__$1,(20),out,inst_48134);
} else {
if((state_val_48160 === (8))){
var inst_48114 = (state_48159[(11)]);
var inst_48113 = (state_48159[(12)]);
var inst_48116 = (inst_48114 < inst_48113);
var inst_48117 = inst_48116;
var state_48159__$1 = state_48159;
if(cljs.core.truth_(inst_48117)){
var statearr_48193_48221 = state_48159__$1;
(statearr_48193_48221[(1)] = (10));

} else {
var statearr_48194_48222 = state_48159__$1;
(statearr_48194_48222[(1)] = (11));

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
var statearr_48195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48195[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__);

(statearr_48195[(1)] = (1));

return statearr_48195;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____1 = (function (state_48159){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_48159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e48196){if((e48196 instanceof Object)){
var ex__37741__auto__ = e48196;
var statearr_48197_48223 = state_48159;
(statearr_48197_48223[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48224 = state_48159;
state_48159 = G__48224;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__ = function(state_48159){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____1.call(this,state_48159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37738__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto__))
})();
var state__37827__auto__ = (function (){var statearr_48198 = f__37826__auto__.call(null);
(statearr_48198[(6)] = c__37825__auto__);

return statearr_48198;
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
var G__48226 = arguments.length;
switch (G__48226) {
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
var G__48229 = arguments.length;
switch (G__48229) {
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
var G__48232 = arguments.length;
switch (G__48232) {
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
var c__37825__auto___48279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___48279,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___48279,out){
return (function (state_48256){
var state_val_48257 = (state_48256[(1)]);
if((state_val_48257 === (7))){
var inst_48251 = (state_48256[(2)]);
var state_48256__$1 = state_48256;
var statearr_48258_48280 = state_48256__$1;
(statearr_48258_48280[(2)] = inst_48251);

(statearr_48258_48280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48257 === (1))){
var inst_48233 = null;
var state_48256__$1 = (function (){var statearr_48259 = state_48256;
(statearr_48259[(7)] = inst_48233);

return statearr_48259;
})();
var statearr_48260_48281 = state_48256__$1;
(statearr_48260_48281[(2)] = null);

(statearr_48260_48281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48257 === (4))){
var inst_48236 = (state_48256[(8)]);
var inst_48236__$1 = (state_48256[(2)]);
var inst_48237 = (inst_48236__$1 == null);
var inst_48238 = cljs.core.not.call(null,inst_48237);
var state_48256__$1 = (function (){var statearr_48261 = state_48256;
(statearr_48261[(8)] = inst_48236__$1);

return statearr_48261;
})();
if(inst_48238){
var statearr_48262_48282 = state_48256__$1;
(statearr_48262_48282[(1)] = (5));

} else {
var statearr_48263_48283 = state_48256__$1;
(statearr_48263_48283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48257 === (6))){
var state_48256__$1 = state_48256;
var statearr_48264_48284 = state_48256__$1;
(statearr_48264_48284[(2)] = null);

(statearr_48264_48284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48257 === (3))){
var inst_48253 = (state_48256[(2)]);
var inst_48254 = cljs.core.async.close_BANG_.call(null,out);
var state_48256__$1 = (function (){var statearr_48265 = state_48256;
(statearr_48265[(9)] = inst_48253);

return statearr_48265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48256__$1,inst_48254);
} else {
if((state_val_48257 === (2))){
var state_48256__$1 = state_48256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48256__$1,(4),ch);
} else {
if((state_val_48257 === (11))){
var inst_48236 = (state_48256[(8)]);
var inst_48245 = (state_48256[(2)]);
var inst_48233 = inst_48236;
var state_48256__$1 = (function (){var statearr_48266 = state_48256;
(statearr_48266[(7)] = inst_48233);

(statearr_48266[(10)] = inst_48245);

return statearr_48266;
})();
var statearr_48267_48285 = state_48256__$1;
(statearr_48267_48285[(2)] = null);

(statearr_48267_48285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48257 === (9))){
var inst_48236 = (state_48256[(8)]);
var state_48256__$1 = state_48256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48256__$1,(11),out,inst_48236);
} else {
if((state_val_48257 === (5))){
var inst_48233 = (state_48256[(7)]);
var inst_48236 = (state_48256[(8)]);
var inst_48240 = cljs.core._EQ_.call(null,inst_48236,inst_48233);
var state_48256__$1 = state_48256;
if(inst_48240){
var statearr_48269_48286 = state_48256__$1;
(statearr_48269_48286[(1)] = (8));

} else {
var statearr_48270_48287 = state_48256__$1;
(statearr_48270_48287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48257 === (10))){
var inst_48248 = (state_48256[(2)]);
var state_48256__$1 = state_48256;
var statearr_48271_48288 = state_48256__$1;
(statearr_48271_48288[(2)] = inst_48248);

(statearr_48271_48288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48257 === (8))){
var inst_48233 = (state_48256[(7)]);
var tmp48268 = inst_48233;
var inst_48233__$1 = tmp48268;
var state_48256__$1 = (function (){var statearr_48272 = state_48256;
(statearr_48272[(7)] = inst_48233__$1);

return statearr_48272;
})();
var statearr_48273_48289 = state_48256__$1;
(statearr_48273_48289[(2)] = null);

(statearr_48273_48289[(1)] = (2));


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
});})(c__37825__auto___48279,out))
;
return ((function (switch__37737__auto__,c__37825__auto___48279,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_48274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48274[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_48274[(1)] = (1));

return statearr_48274;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_48256){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_48256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e48275){if((e48275 instanceof Object)){
var ex__37741__auto__ = e48275;
var statearr_48276_48290 = state_48256;
(statearr_48276_48290[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48291 = state_48256;
state_48256 = G__48291;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_48256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_48256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___48279,out))
})();
var state__37827__auto__ = (function (){var statearr_48277 = f__37826__auto__.call(null);
(statearr_48277[(6)] = c__37825__auto___48279);

return statearr_48277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___48279,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48293 = arguments.length;
switch (G__48293) {
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
var c__37825__auto___48359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___48359,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___48359,out){
return (function (state_48331){
var state_val_48332 = (state_48331[(1)]);
if((state_val_48332 === (7))){
var inst_48327 = (state_48331[(2)]);
var state_48331__$1 = state_48331;
var statearr_48333_48360 = state_48331__$1;
(statearr_48333_48360[(2)] = inst_48327);

(statearr_48333_48360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (1))){
var inst_48294 = (new Array(n));
var inst_48295 = inst_48294;
var inst_48296 = (0);
var state_48331__$1 = (function (){var statearr_48334 = state_48331;
(statearr_48334[(7)] = inst_48296);

(statearr_48334[(8)] = inst_48295);

return statearr_48334;
})();
var statearr_48335_48361 = state_48331__$1;
(statearr_48335_48361[(2)] = null);

(statearr_48335_48361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (4))){
var inst_48299 = (state_48331[(9)]);
var inst_48299__$1 = (state_48331[(2)]);
var inst_48300 = (inst_48299__$1 == null);
var inst_48301 = cljs.core.not.call(null,inst_48300);
var state_48331__$1 = (function (){var statearr_48336 = state_48331;
(statearr_48336[(9)] = inst_48299__$1);

return statearr_48336;
})();
if(inst_48301){
var statearr_48337_48362 = state_48331__$1;
(statearr_48337_48362[(1)] = (5));

} else {
var statearr_48338_48363 = state_48331__$1;
(statearr_48338_48363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (15))){
var inst_48321 = (state_48331[(2)]);
var state_48331__$1 = state_48331;
var statearr_48339_48364 = state_48331__$1;
(statearr_48339_48364[(2)] = inst_48321);

(statearr_48339_48364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (13))){
var state_48331__$1 = state_48331;
var statearr_48340_48365 = state_48331__$1;
(statearr_48340_48365[(2)] = null);

(statearr_48340_48365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (6))){
var inst_48296 = (state_48331[(7)]);
var inst_48317 = (inst_48296 > (0));
var state_48331__$1 = state_48331;
if(cljs.core.truth_(inst_48317)){
var statearr_48341_48366 = state_48331__$1;
(statearr_48341_48366[(1)] = (12));

} else {
var statearr_48342_48367 = state_48331__$1;
(statearr_48342_48367[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (3))){
var inst_48329 = (state_48331[(2)]);
var state_48331__$1 = state_48331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48331__$1,inst_48329);
} else {
if((state_val_48332 === (12))){
var inst_48295 = (state_48331[(8)]);
var inst_48319 = cljs.core.vec.call(null,inst_48295);
var state_48331__$1 = state_48331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48331__$1,(15),out,inst_48319);
} else {
if((state_val_48332 === (2))){
var state_48331__$1 = state_48331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48331__$1,(4),ch);
} else {
if((state_val_48332 === (11))){
var inst_48311 = (state_48331[(2)]);
var inst_48312 = (new Array(n));
var inst_48295 = inst_48312;
var inst_48296 = (0);
var state_48331__$1 = (function (){var statearr_48343 = state_48331;
(statearr_48343[(7)] = inst_48296);

(statearr_48343[(10)] = inst_48311);

(statearr_48343[(8)] = inst_48295);

return statearr_48343;
})();
var statearr_48344_48368 = state_48331__$1;
(statearr_48344_48368[(2)] = null);

(statearr_48344_48368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (9))){
var inst_48295 = (state_48331[(8)]);
var inst_48309 = cljs.core.vec.call(null,inst_48295);
var state_48331__$1 = state_48331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48331__$1,(11),out,inst_48309);
} else {
if((state_val_48332 === (5))){
var inst_48296 = (state_48331[(7)]);
var inst_48304 = (state_48331[(11)]);
var inst_48295 = (state_48331[(8)]);
var inst_48299 = (state_48331[(9)]);
var inst_48303 = (inst_48295[inst_48296] = inst_48299);
var inst_48304__$1 = (inst_48296 + (1));
var inst_48305 = (inst_48304__$1 < n);
var state_48331__$1 = (function (){var statearr_48345 = state_48331;
(statearr_48345[(12)] = inst_48303);

(statearr_48345[(11)] = inst_48304__$1);

return statearr_48345;
})();
if(cljs.core.truth_(inst_48305)){
var statearr_48346_48369 = state_48331__$1;
(statearr_48346_48369[(1)] = (8));

} else {
var statearr_48347_48370 = state_48331__$1;
(statearr_48347_48370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (14))){
var inst_48324 = (state_48331[(2)]);
var inst_48325 = cljs.core.async.close_BANG_.call(null,out);
var state_48331__$1 = (function (){var statearr_48349 = state_48331;
(statearr_48349[(13)] = inst_48324);

return statearr_48349;
})();
var statearr_48350_48371 = state_48331__$1;
(statearr_48350_48371[(2)] = inst_48325);

(statearr_48350_48371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (10))){
var inst_48315 = (state_48331[(2)]);
var state_48331__$1 = state_48331;
var statearr_48351_48372 = state_48331__$1;
(statearr_48351_48372[(2)] = inst_48315);

(statearr_48351_48372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (8))){
var inst_48304 = (state_48331[(11)]);
var inst_48295 = (state_48331[(8)]);
var tmp48348 = inst_48295;
var inst_48295__$1 = tmp48348;
var inst_48296 = inst_48304;
var state_48331__$1 = (function (){var statearr_48352 = state_48331;
(statearr_48352[(7)] = inst_48296);

(statearr_48352[(8)] = inst_48295__$1);

return statearr_48352;
})();
var statearr_48353_48373 = state_48331__$1;
(statearr_48353_48373[(2)] = null);

(statearr_48353_48373[(1)] = (2));


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
});})(c__37825__auto___48359,out))
;
return ((function (switch__37737__auto__,c__37825__auto___48359,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_48354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48354[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_48354[(1)] = (1));

return statearr_48354;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_48331){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_48331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e48355){if((e48355 instanceof Object)){
var ex__37741__auto__ = e48355;
var statearr_48356_48374 = state_48331;
(statearr_48356_48374[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48375 = state_48331;
state_48331 = G__48375;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_48331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_48331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___48359,out))
})();
var state__37827__auto__ = (function (){var statearr_48357 = f__37826__auto__.call(null);
(statearr_48357[(6)] = c__37825__auto___48359);

return statearr_48357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___48359,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48377 = arguments.length;
switch (G__48377) {
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
var c__37825__auto___48447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37825__auto___48447,out){
return (function (){
var f__37826__auto__ = (function (){var switch__37737__auto__ = ((function (c__37825__auto___48447,out){
return (function (state_48419){
var state_val_48420 = (state_48419[(1)]);
if((state_val_48420 === (7))){
var inst_48415 = (state_48419[(2)]);
var state_48419__$1 = state_48419;
var statearr_48421_48448 = state_48419__$1;
(statearr_48421_48448[(2)] = inst_48415);

(statearr_48421_48448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (1))){
var inst_48378 = [];
var inst_48379 = inst_48378;
var inst_48380 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48419__$1 = (function (){var statearr_48422 = state_48419;
(statearr_48422[(7)] = inst_48380);

(statearr_48422[(8)] = inst_48379);

return statearr_48422;
})();
var statearr_48423_48449 = state_48419__$1;
(statearr_48423_48449[(2)] = null);

(statearr_48423_48449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (4))){
var inst_48383 = (state_48419[(9)]);
var inst_48383__$1 = (state_48419[(2)]);
var inst_48384 = (inst_48383__$1 == null);
var inst_48385 = cljs.core.not.call(null,inst_48384);
var state_48419__$1 = (function (){var statearr_48424 = state_48419;
(statearr_48424[(9)] = inst_48383__$1);

return statearr_48424;
})();
if(inst_48385){
var statearr_48425_48450 = state_48419__$1;
(statearr_48425_48450[(1)] = (5));

} else {
var statearr_48426_48451 = state_48419__$1;
(statearr_48426_48451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (15))){
var inst_48409 = (state_48419[(2)]);
var state_48419__$1 = state_48419;
var statearr_48427_48452 = state_48419__$1;
(statearr_48427_48452[(2)] = inst_48409);

(statearr_48427_48452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (13))){
var state_48419__$1 = state_48419;
var statearr_48428_48453 = state_48419__$1;
(statearr_48428_48453[(2)] = null);

(statearr_48428_48453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (6))){
var inst_48379 = (state_48419[(8)]);
var inst_48404 = inst_48379.length;
var inst_48405 = (inst_48404 > (0));
var state_48419__$1 = state_48419;
if(cljs.core.truth_(inst_48405)){
var statearr_48429_48454 = state_48419__$1;
(statearr_48429_48454[(1)] = (12));

} else {
var statearr_48430_48455 = state_48419__$1;
(statearr_48430_48455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (3))){
var inst_48417 = (state_48419[(2)]);
var state_48419__$1 = state_48419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48419__$1,inst_48417);
} else {
if((state_val_48420 === (12))){
var inst_48379 = (state_48419[(8)]);
var inst_48407 = cljs.core.vec.call(null,inst_48379);
var state_48419__$1 = state_48419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48419__$1,(15),out,inst_48407);
} else {
if((state_val_48420 === (2))){
var state_48419__$1 = state_48419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48419__$1,(4),ch);
} else {
if((state_val_48420 === (11))){
var inst_48387 = (state_48419[(10)]);
var inst_48383 = (state_48419[(9)]);
var inst_48397 = (state_48419[(2)]);
var inst_48398 = [];
var inst_48399 = inst_48398.push(inst_48383);
var inst_48379 = inst_48398;
var inst_48380 = inst_48387;
var state_48419__$1 = (function (){var statearr_48431 = state_48419;
(statearr_48431[(7)] = inst_48380);

(statearr_48431[(11)] = inst_48399);

(statearr_48431[(8)] = inst_48379);

(statearr_48431[(12)] = inst_48397);

return statearr_48431;
})();
var statearr_48432_48456 = state_48419__$1;
(statearr_48432_48456[(2)] = null);

(statearr_48432_48456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (9))){
var inst_48379 = (state_48419[(8)]);
var inst_48395 = cljs.core.vec.call(null,inst_48379);
var state_48419__$1 = state_48419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48419__$1,(11),out,inst_48395);
} else {
if((state_val_48420 === (5))){
var inst_48380 = (state_48419[(7)]);
var inst_48387 = (state_48419[(10)]);
var inst_48383 = (state_48419[(9)]);
var inst_48387__$1 = f.call(null,inst_48383);
var inst_48388 = cljs.core._EQ_.call(null,inst_48387__$1,inst_48380);
var inst_48389 = cljs.core.keyword_identical_QMARK_.call(null,inst_48380,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48390 = (inst_48388) || (inst_48389);
var state_48419__$1 = (function (){var statearr_48433 = state_48419;
(statearr_48433[(10)] = inst_48387__$1);

return statearr_48433;
})();
if(cljs.core.truth_(inst_48390)){
var statearr_48434_48457 = state_48419__$1;
(statearr_48434_48457[(1)] = (8));

} else {
var statearr_48435_48458 = state_48419__$1;
(statearr_48435_48458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (14))){
var inst_48412 = (state_48419[(2)]);
var inst_48413 = cljs.core.async.close_BANG_.call(null,out);
var state_48419__$1 = (function (){var statearr_48437 = state_48419;
(statearr_48437[(13)] = inst_48412);

return statearr_48437;
})();
var statearr_48438_48459 = state_48419__$1;
(statearr_48438_48459[(2)] = inst_48413);

(statearr_48438_48459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (10))){
var inst_48402 = (state_48419[(2)]);
var state_48419__$1 = state_48419;
var statearr_48439_48460 = state_48419__$1;
(statearr_48439_48460[(2)] = inst_48402);

(statearr_48439_48460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (8))){
var inst_48387 = (state_48419[(10)]);
var inst_48383 = (state_48419[(9)]);
var inst_48379 = (state_48419[(8)]);
var inst_48392 = inst_48379.push(inst_48383);
var tmp48436 = inst_48379;
var inst_48379__$1 = tmp48436;
var inst_48380 = inst_48387;
var state_48419__$1 = (function (){var statearr_48440 = state_48419;
(statearr_48440[(7)] = inst_48380);

(statearr_48440[(14)] = inst_48392);

(statearr_48440[(8)] = inst_48379__$1);

return statearr_48440;
})();
var statearr_48441_48461 = state_48419__$1;
(statearr_48441_48461[(2)] = null);

(statearr_48441_48461[(1)] = (2));


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
});})(c__37825__auto___48447,out))
;
return ((function (switch__37737__auto__,c__37825__auto___48447,out){
return (function() {
var cljs$core$async$state_machine__37738__auto__ = null;
var cljs$core$async$state_machine__37738__auto____0 = (function (){
var statearr_48442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48442[(0)] = cljs$core$async$state_machine__37738__auto__);

(statearr_48442[(1)] = (1));

return statearr_48442;
});
var cljs$core$async$state_machine__37738__auto____1 = (function (state_48419){
while(true){
var ret_value__37739__auto__ = (function (){try{while(true){
var result__37740__auto__ = switch__37737__auto__.call(null,state_48419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37740__auto__;
}
break;
}
}catch (e48443){if((e48443 instanceof Object)){
var ex__37741__auto__ = e48443;
var statearr_48444_48462 = state_48419;
(statearr_48444_48462[(5)] = ex__37741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48463 = state_48419;
state_48419 = G__48463;
continue;
} else {
return ret_value__37739__auto__;
}
break;
}
});
cljs$core$async$state_machine__37738__auto__ = function(state_48419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37738__auto____1.call(this,state_48419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37738__auto____0;
cljs$core$async$state_machine__37738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37738__auto____1;
return cljs$core$async$state_machine__37738__auto__;
})()
;})(switch__37737__auto__,c__37825__auto___48447,out))
})();
var state__37827__auto__ = (function (){var statearr_48445 = f__37826__auto__.call(null);
(statearr_48445[(6)] = c__37825__auto___48447);

return statearr_48445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37827__auto__);
});})(c__37825__auto___48447,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514142715418