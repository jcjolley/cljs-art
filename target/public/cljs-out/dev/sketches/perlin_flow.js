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
sketches.perlin_flow.noise_zoom = 0.9;
sketches.perlin_flow.particle_id = cljs.core.atom.call(null,(1));
sketches.perlin_flow.counter = cljs.core.atom.call(null,(1000));
sketches.perlin_flow.palette = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Random",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(20),(20)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.take.call(null,(100),cljs.core.repeatedly.call(null,(function (){
return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[quil.core.random.call(null,(30),(80)),quil.core.random.call(null,(50),(100)),quil.core.random.call(null,(200),(250)),quil.core.random.call(null,(5),(25))],null));
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
return ((current + delta) / 1.4);
});
/**
 * Calculates the next direction based on the previous position and id of each particle.
 */
sketches.perlin_flow.direction = (function sketches$perlin_flow$direction(x,y,z){
return (((2) * Math.PI) * (quil.core.noise.call(null,(x * sketches.perlin_flow.noise_zoom),(y * sketches.perlin_flow.noise_zoom)) + (-0.7 * quil.core.noise.call(null,(x * sketches.perlin_flow.noise_zoom),(y * sketches.perlin_flow.noise_zoom),(cljs.core.mod.call(null,z,(100)) * sketches.perlin_flow.noise_zoom)))));
});
sketches.perlin_flow.update_color = (function sketches$perlin_flow$update_color(color){
if(((8) < quil.core.random.call(null,(0),(10)))){
return cljs.core.assoc.call(null,color,(0),(function (){var x__4040__auto__ = (cljs.core.first.call(null,color) + (1));
var y__4041__auto__ = (255);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),(1),(function (){var x__4040__auto__ = ((2) + cljs.core.second.call(null,color));
var y__4041__auto__ = (255);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),(3),(function (){var x__4040__auto__ = (200);
var y__4041__auto__ = (cljs.core.last.call(null,color) + (1));
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})());
} else {
return color;
}
});
sketches.perlin_flow.particle = (function sketches$perlin_flow$particle(n){

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,sketches.perlin_flow.particle_id,cljs.core.inc),new cljs.core.Keyword(null,"vx","vx",-1685168462),(1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(1),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"direction","direction",-633359395),(0),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,sketches.perlin_flow.w),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,sketches.perlin_flow.h),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette))], null);
});
/**
 * Returns the initial state to use for the update-render loop.
 */
sketches.perlin_flow.sketch_setup = (function sketches$perlin_flow$sketch_setup(){
quil.core.clear.call(null);

cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette));

return cljs.core.map.call(null,sketches.perlin_flow.particle,cljs.core.range.call(null,(0),(0)));
});
sketches.perlin_flow.prune = (function sketches$perlin_flow$prune(particles){
cljs.core.swap_BANG_.call(null,sketches.perlin_flow.counter,cljs.core.inc);

cljs.core.print.call(null,"counter: ",cljs.core.deref.call(null,sketches.perlin_flow.counter));

if(((600) < cljs.core.deref.call(null,sketches.perlin_flow.counter))){
cljs.core.reset_BANG_.call(null,sketches.perlin_flow.counter,(0));

cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette));

return (function (p1__9540_SHARP_){
return cljs.core.concat.call(null,p1__9540_SHARP_,cljs.core.map.call(null,sketches.perlin_flow.particle,cljs.core.range.call(null,(0),(10))));
}).call(null,cljs.core.nthrest.call(null,particles,(10)));
} else {
return particles;
}
});
/**
 * Returns the next state to render. Receives the current state as a paramter.
 */
sketches.perlin_flow.sketch_update = (function sketches$perlin_flow$sketch_update(particles){
return cljs.core.map.call(null,(function (p){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"x","x",2099068185),sketches.perlin_flow.position.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow.w),new cljs.core.Keyword(null,"y","y",-1757859776),sketches.perlin_flow.position.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow.h),new cljs.core.Keyword(null,"size","size",1098693007),(.01 + new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"direction","direction",-633359395),sketches.perlin_flow.direction.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"vx","vx",-1685168462),sketches.perlin_flow.velocity.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),Math.cos(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"vy","vy",-2018509997),sketches.perlin_flow.velocity.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),Math.sin(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"color","color",1011675173),sketches.perlin_flow.update_color.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p)));
}),sketches.perlin_flow.prune.call(null,particles));
});
/**
 * Draws the current state to the canvas. Called on each iteration after sketch-update.
 */
sketches.perlin_flow.sketch_draw = (function sketches$perlin_flow$sketch_draw(particles){
quil.core.no_stroke.call(null);

var seq__9541 = cljs.core.seq.call(null,particles);
var chunk__9542 = null;
var count__9543 = (0);
var i__9544 = (0);
while(true){
if((i__9544 < count__9543)){
var p = cljs.core._nth.call(null,chunk__9542,i__9544);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__9545 = seq__9541;
var G__9546 = chunk__9542;
var G__9547 = count__9543;
var G__9548 = (i__9544 + (1));
seq__9541 = G__9545;
chunk__9542 = G__9546;
count__9543 = G__9547;
i__9544 = G__9548;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9541);
if(temp__5720__auto__){
var seq__9541__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9541__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9541__$1);
var G__9549 = cljs.core.chunk_rest.call(null,seq__9541__$1);
var G__9550 = c__4351__auto__;
var G__9551 = cljs.core.count.call(null,c__4351__auto__);
var G__9552 = (0);
seq__9541 = G__9549;
chunk__9542 = G__9550;
count__9543 = G__9551;
i__9544 = G__9552;
continue;
} else {
var p = cljs.core.first.call(null,seq__9541__$1);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__9553 = cljs.core.next.call(null,seq__9541__$1);
var G__9554 = null;
var G__9555 = (0);
var G__9556 = (0);
seq__9541 = G__9553;
chunk__9542 = G__9554;
count__9543 = G__9555;
i__9544 = G__9556;
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
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),canvas,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.perlin_flow.w,sketches.perlin_flow.h], null),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_draw;},new cljs.core.Symbol("sketches.perlin_flow","sketch-draw","sketches.perlin_flow/sketch-draw",-1815400562,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin_flow","sketches.perlin_flow",-590248430,null),new cljs.core.Symbol(null,"sketch-draw","sketch-draw",1130795881,null),"src\\sketches\\perlin_flow.cljs",18,1,87,87,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null)),"Draws the current state to the canvas. Called on each iteration after sketch-update.",(cljs.core.truth_(sketches.perlin_flow.sketch_draw)?sketches.perlin_flow.sketch_draw.cljs$lang$test:null)])),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_setup;},new cljs.core.Symbol("sketches.perlin_flow","sketch-setup","sketches.perlin_flow/sketch-setup",394382536,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin_flow","sketches.perlin_flow",-590248430,null),new cljs.core.Symbol(null,"sketch-setup","sketch-setup",-1605195929,null),"src\\sketches\\perlin_flow.cljs",19,1,53,53,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns the initial state to use for the update-render loop.",(cljs.core.truth_(sketches.perlin_flow.sketch_setup)?sketches.perlin_flow.sketch_setup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_update;},new cljs.core.Symbol("sketches.perlin_flow","sketch-update","sketches.perlin_flow/sketch-update",-468111006,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin_flow","sketches.perlin_flow",-590248430,null),new cljs.core.Symbol(null,"sketch-update","sketch-update",877495773,null),"src\\sketches\\perlin_flow.cljs",20,1,71,71,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null)),"Returns the next state to render. Receives the current state as a paramter.",(cljs.core.truth_(sketches.perlin_flow.sketch_update)?sketches.perlin_flow.sketch_update.cljs$lang$test:null)])),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
quil.core.random_seed.call(null,(200));

return quil.core.noise_seed.call(null,(66));
}));
});
sketches.perlin_flow.sketch = sketches.perlin_flow.create.call(null,"sketch");

//# sourceMappingURL=perlin_flow.js.map
