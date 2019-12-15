// Compiled by ClojureScript 1.10.339 {}
goog.provide('sketches.perlin_flow');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.perlin_flow.body = document.body;
sketches.perlin_flow.w = sketches.perlin_flow.body.clientWidth;
sketches.perlin_flow.h = sketches.perlin_flow.body.clientHeight;
/**
 * Noise zoom level.
 */
sketches.perlin_flow.noise_zoom = 0.005;
sketches.perlin_flow.palette = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Blues",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.take.call(null,(25),cljs.core.repeatedly.call(null,(function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[quil.core.random.call(null,(0),(25)),quil.core.random.call(null,(50),(100)),quil.core.random.call(null,(200),(255))],null));
})))], null);
/**
 * Calculates the next position based on the current, the speed and a max.
 */
sketches.perlin_flow.position = (function sketches$perlin_flow$position(current,delta,max){
return cljs.core.mod.call(null,(current + delta),max);
});
/**
 * Calculates the next velocity by averaging the current velocity and the added delta.
 */
sketches.perlin_flow.velocity = (function sketches$perlin_flow$velocity(current,delta){
return ((current + delta) / (2));
});
/**
 * Calculates the next direction based on the previous position and id of each particle.
 */
sketches.perlin_flow.direction = (function sketches$perlin_flow$direction(x,y,z){
return (((2) * Math.PI) * (quil.core.noise.call(null,(x * sketches.perlin_flow.noise_zoom),(y * sketches.perlin_flow.noise_zoom)) + (0.2 * quil.core.noise.call(null,(x * sketches.perlin_flow.noise_zoom),(y * sketches.perlin_flow.noise_zoom),(z * sketches.perlin_flow.noise_zoom)))));
});
/**
 * Creates a particle map.
 */
sketches.perlin_flow.particle = (function sketches$perlin_flow$particle(id){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"vx","vx",-1685168462),(1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(1),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"direction","direction",-633359395),(0),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,sketches.perlin_flow.w),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,sketches.perlin_flow.h),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette))], null);
});
/**
 * Returns the initial state to use for the update-render loop.
 */
sketches.perlin_flow.sketch_setup = (function sketches$perlin_flow$sketch_setup(){
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette));

return cljs.core.map.call(null,sketches.perlin_flow.particle,cljs.core.range.call(null,(0),(2000)));
});
sketches.perlin_flow.update_color = (function sketches$perlin_flow$update_color(color){
if(((((1) < quil.core.random.call(null,(0),(25)))) && ((quil.core.random.call(null,(0),(25)) < (2))))){
return cljs.core.assoc.call(null,color,(0),(function (){var x__4040__auto__ = (255);
var y__4041__auto__ = (cljs.core.first.call(null,color) + (1));
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})());
} else {
return color;
}
});
/**
 * Returns the next state to render. Receives the current state as a paramter.
 */
sketches.perlin_flow.sketch_update = (function sketches$perlin_flow$sketch_update(particles){
return cljs.core.map.call(null,(function (p){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"x","x",2099068185),sketches.perlin_flow.position.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow.w),new cljs.core.Keyword(null,"y","y",-1757859776),sketches.perlin_flow.position.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow.h),new cljs.core.Keyword(null,"direction","direction",-633359395),sketches.perlin_flow.direction.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"color","color",1011675173),sketches.perlin_flow.update_color.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"vx","vx",-1685168462),sketches.perlin_flow.velocity.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),Math.cos(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"vy","vy",-2018509997),sketches.perlin_flow.velocity.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),Math.sin(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))));
}),particles);
});
/**
 * Draws the current state to the canvas. Called on each iteration after sketch-update.
 */
sketches.perlin_flow.sketch_draw = (function sketches$perlin_flow$sketch_draw(particles){
quil.core.no_stroke.call(null);

var seq__9276 = cljs.core.seq.call(null,particles);
var chunk__9277 = null;
var count__9278 = (0);
var i__9279 = (0);
while(true){
if((i__9279 < count__9278)){
var p = cljs.core._nth.call(null,chunk__9277,i__9279);
cljs.core.apply.call(null,quil.core.fill,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),quil.core.random.call(null,(3),(5))));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__9280 = seq__9276;
var G__9281 = chunk__9277;
var G__9282 = count__9278;
var G__9283 = (i__9279 + (1));
seq__9276 = G__9280;
chunk__9277 = G__9281;
count__9278 = G__9282;
i__9279 = G__9283;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9276);
if(temp__5720__auto__){
var seq__9276__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9276__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9276__$1);
var G__9284 = cljs.core.chunk_rest.call(null,seq__9276__$1);
var G__9285 = c__4351__auto__;
var G__9286 = cljs.core.count.call(null,c__4351__auto__);
var G__9287 = (0);
seq__9276 = G__9284;
chunk__9277 = G__9285;
count__9278 = G__9286;
i__9279 = G__9287;
continue;
} else {
var p = cljs.core.first.call(null,seq__9276__$1);
cljs.core.apply.call(null,quil.core.fill,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),quil.core.random.call(null,(3),(5))));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__9288 = cljs.core.next.call(null,seq__9276__$1);
var G__9289 = null;
var G__9290 = (0);
var G__9291 = (0);
seq__9276 = G__9288;
chunk__9277 = G__9289;
count__9278 = G__9290;
i__9279 = G__9291;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.perlin_flow.create = (function sketches$perlin_flow$create(canvas){
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),canvas,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.perlin_flow.w,sketches.perlin_flow.h], null),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_draw;},new cljs.core.Symbol("sketches.perlin-flow","sketch-draw","sketches.perlin-flow/sketch-draw",-1861499172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow","sketches.perlin-flow",-1548302130,null),new cljs.core.Symbol(null,"sketch-draw","sketch-draw",1130795881,null),"src\\sketches\\perlin_flow.cljs",18,1,70,70,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null)),"Draws the current state to the canvas. Called on each iteration after sketch-update.",(cljs.core.truth_(sketches.perlin_flow.sketch_draw)?sketches.perlin_flow.sketch_draw.cljs$lang$test:null)])),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_setup;},new cljs.core.Symbol("sketches.perlin-flow","sketch-setup","sketches.perlin-flow/sketch-setup",314602490,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow","sketches.perlin-flow",-1548302130,null),new cljs.core.Symbol(null,"sketch-setup","sketch-setup",-1605195929,null),"src\\sketches\\perlin_flow.cljs",19,1,45,45,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns the initial state to use for the update-render loop.",(cljs.core.truth_(sketches.perlin_flow.sketch_setup)?sketches.perlin_flow.sketch_setup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_update;},new cljs.core.Symbol("sketches.perlin-flow","sketch-update","sketches.perlin-flow/sketch-update",-421996464,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow","sketches.perlin-flow",-1548302130,null),new cljs.core.Symbol(null,"sketch-update","sketch-update",877495773,null),"src\\sketches\\perlin_flow.cljs",20,1,56,56,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null)),"Returns the next state to render. Receives the current state as a paramter.",(cljs.core.truth_(sketches.perlin_flow.sketch_update)?sketches.perlin_flow.sketch_update.cljs$lang$test:null)])),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
quil.core.random_seed.call(null,(6));

return quil.core.noise_seed.call(null,(66));
}));
});
if((typeof sketches !== 'undefined') && (typeof sketches.perlin_flow !== 'undefined') && (typeof sketches.perlin_flow.sketch !== 'undefined')){
} else {
sketches.perlin_flow.sketch = sketches.perlin_flow.create.call(null,"sketch");
}

//# sourceMappingURL=perlin_flow.js.map
