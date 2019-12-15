// Compiled by ClojureScript 1.10.339 {}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"decor","decor",-1730969431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),new cljs.core.Keyword(null,"safe-draw-fn","safe-draw-fn",1454900202),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set.call(null,features);
if(cljs.core.truth_(features__$1.call(null,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157)))){
cljs.core.println.call(null,"Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now.");
} else {
}

return cljs.core.disj.call(null,features__$1,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157));
});
/**
 * Checks if options map contains deprected options and removes them.
 *   Prints messages how to fix deprecated functions.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.call(null,options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336)], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__4324__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__7961(s__7962){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__7962__$1 = s__7962;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__7962__$1);
if(temp__5720__auto__){
var s__7962__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7962__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__7962__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__7964 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__7963 = (0);
while(true){
if((i__7963 < size__4323__auto__)){
var vec__7965 = cljs.core._nth.call(null,c__4322__auto__,i__7963);
var name = cljs.core.nth.call(null,vec__7965,(0),null);
var value = cljs.core.nth.call(null,vec__7965,(1),null);
cljs.core.chunk_append.call(null,b__7964,(function (){var temp__5718__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__7968 = temp__5718__auto__;
var version = cljs.core.nth.call(null,vec__7968,(0),null);
var message = cljs.core.nth.call(null,vec__7968,(1),null);
cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__7977 = (i__7963 + (1));
i__7963 = G__7977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7964),quil$middlewares$deprecated_options$deprecated_options_$_iter__7961.call(null,cljs.core.chunk_rest.call(null,s__7962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7964),null);
}
} else {
var vec__7971 = cljs.core.first.call(null,s__7962__$2);
var name = cljs.core.nth.call(null,vec__7971,(0),null);
var value = cljs.core.nth.call(null,vec__7971,(1),null);
return cljs.core.cons.call(null,(function (){var temp__5718__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__7974 = temp__5718__auto__;
var version = cljs.core.nth.call(null,vec__7974,(0),null);
var message = cljs.core.nth.call(null,vec__7974,(1),null);
cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__7961.call(null,cljs.core.rest.call(null,s__7962__$2)));
}
} else {
return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;
return iter__4324__auto__.call(null,options__$1);
})()));
});

//# sourceMappingURL=deprecated_options.js.map
