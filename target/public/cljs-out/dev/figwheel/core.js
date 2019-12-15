// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__8499_SHARP_){
var k = f.call(null,p1__8499_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8500){
var vec__8501 = p__8500;
var k = cljs.core.nth.call(null,vec__8501,(0),null);
var v = cljs.core.nth.call(null,vec__8501,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8505 = arguments.length;
var i__4532__auto___8506 = (0);
while(true){
if((i__4532__auto___8506 < len__4531__auto___8505)){
args__4534__auto__.push((arguments[i__4532__auto___8506]));

var G__8507 = (i__4532__auto___8506 + (1));
i__4532__auto___8506 = G__8507;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq8504){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8504));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__8510){
var map__8511 = p__8510;
var map__8511__$1 = ((((!((map__8511 == null)))?(((((map__8511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8511):map__8511);
var message = cljs.core.get.call(null,map__8511__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__8511__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__8511,map__8511__$1,message,column){
return (function (p1__8509_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8509_SHARP_], null)));
});})(map__8511,map__8511__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__8511,map__8511__$1,message,column){
return (function (p1__8508_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__8508_SHARP_);
});})(map__8511,map__8511__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__8514){
var map__8515 = p__8514;
var map__8515__$1 = ((((!((map__8515 == null)))?(((((map__8515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8515):map__8515);
var message_data = map__8515__$1;
var message = cljs.core.get.call(null,map__8515__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__8515__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__8515__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__8515__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__8517 = file_excerpt;
var map__8517__$1 = ((((!((map__8517 == null)))?(((((map__8517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8517):map__8517);
var start_line = cljs.core.get.call(null,map__8517__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__8517__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__8517__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__8517,map__8517__$1,start_line,path,excerpt,map__8515,map__8515__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__8517,map__8517__$1,start_line,path,excerpt,map__8515,map__8515__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__8518 = cljs.core.split_with.call(null,((function (map__8517,map__8517__$1,start_line,path,excerpt,lines,map__8515,map__8515__$1,message_data,message,line,column,file_excerpt){
return (function (p1__8513_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__8513_SHARP_));
});})(map__8517,map__8517__$1,start_line,path,excerpt,lines,map__8515,map__8515__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__8518,(0),null);
var end = cljs.core.nth.call(null,vec__8518,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__8522){
var map__8523 = p__8522;
var map__8523__$1 = ((((!((map__8523 == null)))?(((((map__8523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8523):map__8523);
var file = cljs.core.get.call(null,map__8523__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__8523__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__8523__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__8525 = "";
var G__8525__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8525),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__8525);
var G__8525__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8525__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__8525__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8525__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__8525__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_8572 = (new goog.debug.Console());
var G__8532_8573 = c_8572.getFormatter();
goog.object.set(G__8532_8573,"showAbsoluteTime",false);

goog.object.set(G__8532_8573,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_8572);

}

var temp__5720__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__8533 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__8533,"data",(function (){var or__3949__auto__ = data;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__8533;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5718__auto__ = e.event_;
if(cljs.core.truth_(temp__5718__auto__)){
var e__$1 = temp__5718__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && (!((goog.global.document == null))));
});

var last_reload_timestamp_8574 = cljs.core.atom.call(null,(0));
var promise_chain_8575 = (new goog.Promise(((function (last_reload_timestamp_8574){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_8574))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_8574,promise_chain_8575){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
var and__3938__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_8574) < ts);
if(and__3938__auto__){
return ts;
} else {
return and__3938__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_8574,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_8575.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_8574,promise_chain_8575){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR_8534 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR_8534,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_8574,promise_chain_8575){
return (function (){
var seq__8535 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__8536 = null;
var count__8537 = (0);
var i__8538 = (0);
while(true){
if((i__8538 < count__8537)){
var w = cljs.core._nth.call(null,chunk__8536,i__8538);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__8576 = seq__8535;
var G__8577 = chunk__8536;
var G__8578 = count__8537;
var G__8579 = (i__8538 + (1));
seq__8535 = G__8576;
chunk__8536 = G__8577;
count__8537 = G__8578;
i__8538 = G__8579;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__8535);
if(temp__5720__auto__){
var seq__8535__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8535__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__8535__$1);
var G__8580 = cljs.core.chunk_rest.call(null,seq__8535__$1);
var G__8581 = c__4351__auto__;
var G__8582 = cljs.core.count.call(null,c__4351__auto__);
var G__8583 = (0);
seq__8535 = G__8580;
chunk__8536 = G__8581;
count__8537 = G__8582;
i__8538 = G__8583;
continue;
} else {
var w = cljs.core.first.call(null,seq__8535__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__8584 = cljs.core.next.call(null,seq__8535__$1);
var G__8585 = null;
var G__8586 = (0);
var G__8587 = (0);
seq__8535 = G__8584;
chunk__8536 = G__8585;
count__8537 = G__8586;
i__8538 = G__8587;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR_8534,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_8574,promise_chain_8575))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_8534;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_8574,promise_chain_8575))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_8575.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_8574,promise_chain_8575){
return (function (){
var _STAR_inline_code_message_max_column_STAR_8539 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_8539;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_8574,promise_chain_8575))
);
} else {
return promise_chain_8575.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_8574,promise_chain_8575){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_8574,promise_chain_8575))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_8574,promise_chain_8575))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__3938__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__3938__auto____$1){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8588 = arguments.length;
var i__4532__auto___8589 = (0);
while(true){
if((i__4532__auto___8589 < len__4531__auto___8588)){
args__4534__auto__.push((arguments[i__4532__auto___8589]));

var G__8590 = (i__4532__auto___8589 + (1));
i__4532__auto___8589 = G__8590;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__8542){
var vec__8543 = p__8542;
var n = cljs.core.nth.call(null,vec__8543,(0),null);
var mdata = cljs.core.nth.call(null,vec__8543,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__8546 = cljs.core.seq.call(null,hooks);
var chunk__8547 = null;
var count__8548 = (0);
var i__8549 = (0);
while(true){
if((i__8549 < count__8548)){
var vec__8550 = cljs.core._nth.call(null,chunk__8547,i__8549);
var n = cljs.core.nth.call(null,vec__8550,(0),null);
var f = cljs.core.nth.call(null,vec__8550,(1),null);
var temp__5718__auto___8591 = cljs.core.reduce.call(null,((function (seq__8546,chunk__8547,count__8548,i__8549,vec__8550,n,f,hooks){
return (function (p1__8526_SHARP_,p2__8527_SHARP_){
if(cljs.core.truth_(p1__8526_SHARP_)){
return goog.object.get(p1__8526_SHARP_,p2__8527_SHARP_);
} else {
return null;
}
});})(seq__8546,chunk__8547,count__8548,i__8549,vec__8550,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___8591)){
var hook_8592 = temp__5718__auto___8591;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_8592,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__8593 = seq__8546;
var G__8594 = chunk__8547;
var G__8595 = count__8548;
var G__8596 = (i__8549 + (1));
seq__8546 = G__8593;
chunk__8547 = G__8594;
count__8548 = G__8595;
i__8549 = G__8596;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__8546);
if(temp__5720__auto__){
var seq__8546__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8546__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__8546__$1);
var G__8597 = cljs.core.chunk_rest.call(null,seq__8546__$1);
var G__8598 = c__4351__auto__;
var G__8599 = cljs.core.count.call(null,c__4351__auto__);
var G__8600 = (0);
seq__8546 = G__8597;
chunk__8547 = G__8598;
count__8548 = G__8599;
i__8549 = G__8600;
continue;
} else {
var vec__8553 = cljs.core.first.call(null,seq__8546__$1);
var n = cljs.core.nth.call(null,vec__8553,(0),null);
var f = cljs.core.nth.call(null,vec__8553,(1),null);
var temp__5718__auto___8601 = cljs.core.reduce.call(null,((function (seq__8546,chunk__8547,count__8548,i__8549,vec__8553,n,f,seq__8546__$1,temp__5720__auto__,hooks){
return (function (p1__8526_SHARP_,p2__8527_SHARP_){
if(cljs.core.truth_(p1__8526_SHARP_)){
return goog.object.get(p1__8526_SHARP_,p2__8527_SHARP_);
} else {
return null;
}
});})(seq__8546,chunk__8547,count__8548,i__8549,vec__8553,n,f,seq__8546__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___8601)){
var hook_8602 = temp__5718__auto___8601;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_8602,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__8603 = cljs.core.next.call(null,seq__8546__$1);
var G__8604 = null;
var G__8605 = (0);
var G__8606 = (0);
seq__8546 = G__8603;
chunk__8547 = G__8604;
count__8548 = G__8605;
i__8549 = G__8606;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq8540){
var G__8541 = cljs.core.first.call(null,seq8540);
var seq8540__$1 = cljs.core.next.call(null,seq8540);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8541,seq8540__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8556){
var vec__8557 = p__8556;
var k = cljs.core.nth.call(null,vec__8557,(0),null);
var v = cljs.core.nth.call(null,vec__8557,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__8528_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__8528_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__8528_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__8529_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__8529_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3938__auto__ = !(figwheel.core.load_warninged_code);
if(and__3938__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3938__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__8530_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__8530_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__8560_8607 = cljs.core.seq.call(null,to_reload);
var chunk__8561_8608 = null;
var count__8562_8609 = (0);
var i__8563_8610 = (0);
while(true){
if((i__8563_8610 < count__8562_8609)){
var ns_8611 = cljs.core._nth.call(null,chunk__8561_8608,i__8563_8610);
goog.require(cljs.core.name.call(null,ns_8611),true);


var G__8612 = seq__8560_8607;
var G__8613 = chunk__8561_8608;
var G__8614 = count__8562_8609;
var G__8615 = (i__8563_8610 + (1));
seq__8560_8607 = G__8612;
chunk__8561_8608 = G__8613;
count__8562_8609 = G__8614;
i__8563_8610 = G__8615;
continue;
} else {
var temp__5720__auto___8616 = cljs.core.seq.call(null,seq__8560_8607);
if(temp__5720__auto___8616){
var seq__8560_8617__$1 = temp__5720__auto___8616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8560_8617__$1)){
var c__4351__auto___8618 = cljs.core.chunk_first.call(null,seq__8560_8617__$1);
var G__8619 = cljs.core.chunk_rest.call(null,seq__8560_8617__$1);
var G__8620 = c__4351__auto___8618;
var G__8621 = cljs.core.count.call(null,c__4351__auto___8618);
var G__8622 = (0);
seq__8560_8607 = G__8619;
chunk__8561_8608 = G__8620;
count__8562_8609 = G__8621;
i__8563_8610 = G__8622;
continue;
} else {
var ns_8623 = cljs.core.first.call(null,seq__8560_8617__$1);
goog.require(cljs.core.name.call(null,ns_8623),true);


var G__8624 = cljs.core.next.call(null,seq__8560_8617__$1);
var G__8625 = null;
var G__8626 = (0);
var G__8627 = (0);
seq__8560_8607 = G__8624;
chunk__8561_8608 = G__8625;
count__8562_8609 = G__8626;
i__8563_8610 = G__8627;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_8628 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,to_reload))].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var not_loaded = temp__5720__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,not_loaded))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_8628);
} else {
setTimeout(after_reload_fn_8628,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__8564 = cljs.core.seq.call(null,warnings);
var chunk__8565 = null;
var count__8566 = (0);
var i__8567 = (0);
while(true){
if((i__8567 < count__8566)){
var warning = cljs.core._nth.call(null,chunk__8565,i__8567);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__8629 = seq__8564;
var G__8630 = chunk__8565;
var G__8631 = count__8566;
var G__8632 = (i__8567 + (1));
seq__8564 = G__8629;
chunk__8565 = G__8630;
count__8566 = G__8631;
i__8567 = G__8632;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__8564);
if(temp__5720__auto__){
var seq__8564__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8564__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__8564__$1);
var G__8633 = cljs.core.chunk_rest.call(null,seq__8564__$1);
var G__8634 = c__4351__auto__;
var G__8635 = cljs.core.count.call(null,c__4351__auto__);
var G__8636 = (0);
seq__8564 = G__8633;
chunk__8565 = G__8634;
count__8566 = G__8635;
i__8567 = G__8636;
continue;
} else {
var warning = cljs.core.first.call(null,seq__8564__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__8637 = cljs.core.next.call(null,seq__8564__$1);
var G__8638 = null;
var G__8639 = (0);
var G__8640 = (0);
seq__8564 = G__8637;
chunk__8565 = G__8638;
count__8566 = G__8639;
i__8567 = G__8640;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__8568){
var map__8569 = p__8568;
var map__8569__$1 = ((((!((map__8569 == null)))?(((((map__8569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8569):map__8569);
var exception_data = map__8569__$1;
var file = cljs.core.get.call(null,map__8569__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__8569__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__8569__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__8569,map__8569__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__8569,map__8569__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__8569,map__8569__$1,exception_data,file,type,message){
return (function (p1__8531_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__8531_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__8569,map__8569__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__8571 = "Compile Exception - ";
var G__8571__$1 = (cljs.core.truth_((function (){var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return message;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8571),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__8571);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8571__$1)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,exception_data))].join('');
} else {
return G__8571__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
