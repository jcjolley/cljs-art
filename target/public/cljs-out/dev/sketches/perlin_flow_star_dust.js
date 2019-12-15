// Compiled by ClojureScript 1.10.339 {}
goog.provide('sketches.perlin_flow_star_dust');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.perlin_flow_star_dust.body = document.body;
sketches.perlin_flow_star_dust.w = sketches.perlin_flow_star_dust.body.clientWidth;
sketches.perlin_flow_star_dust.h = sketches.perlin_flow_star_dust.body.clientHeight;
/**
 * Noise zoom level.
 */
sketches.perlin_flow_star_dust.noise_zoom = 0.005;
sketches.perlin_flow_star_dust.palette = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"purple haze",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.take.call(null,(10),cljs.core.repeatedly.call(null,(function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[quil.core.random.call(null,(0),(255)),quil.core.random.call(null,(0),(255)),quil.core.random.call(null,(100),(255))],null));
})))], null);
/**
 * Calculates the next position based on the current, the speed and a max.
 */
sketches.perlin_flow_star_dust.position = (function sketches$perlin_flow_star_dust$position(current,delta,max){
return cljs.core.mod.call(null,(current + delta),max);
});
/**
 * Calculates the next velocity by averaging the current velocity and the added delta.
 */
sketches.perlin_flow_star_dust.velocity = (function sketches$perlin_flow_star_dust$velocity(current,delta){
return ((current + delta) / (2));
});
/**
 * Calculates the next direction based on the previous position and id of each particle.
 */
sketches.perlin_flow_star_dust.direction = (function sketches$perlin_flow_star_dust$direction(x,y,z){
return (((2) * Math.PI) * (quil.core.noise.call(null,(x * sketches.perlin_flow_star_dust.noise_zoom),(y * sketches.perlin_flow_star_dust.noise_zoom)) + (0.2 * quil.core.noise.call(null,(x * sketches.perlin_flow_star_dust.noise_zoom),(y * sketches.perlin_flow_star_dust.noise_zoom),(z * sketches.perlin_flow_star_dust.noise_zoom)))));
});
/**
 * Creates a particle map.
 */
sketches.perlin_flow_star_dust.particle = (function sketches$perlin_flow_star_dust$particle(id){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"vx","vx",-1685168462),(1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(1),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"direction","direction",-633359395),(0),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,sketches.perlin_flow_star_dust.w),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,sketches.perlin_flow_star_dust.h),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow_star_dust.palette))], null);
});
/**
 * Returns the initial state to use for the update-render loop.
 */
sketches.perlin_flow_star_dust.sketch_setup = (function sketches$perlin_flow_star_dust$sketch_setup(){
return cljs.core.map.call(null,sketches.perlin_flow_star_dust.particle,cljs.core.range.call(null,(0),(2000)));
});
/**
 * Returns the next state to render. Receives the current state as a paramter.
 */
sketches.perlin_flow_star_dust.sketch_update = (function sketches$perlin_flow_star_dust$sketch_update(particles){
return cljs.core.map.call(null,(function (p){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"x","x",2099068185),sketches.perlin_flow_star_dust.position.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow_star_dust.w),new cljs.core.Keyword(null,"y","y",-1757859776),sketches.perlin_flow_star_dust.position.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow_star_dust.h),new cljs.core.Keyword(null,"direction","direction",-633359395),sketches.perlin_flow_star_dust.direction.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"vx","vx",-1685168462),sketches.perlin_flow_star_dust.velocity.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),Math.cos(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"vy","vy",-2018509997),sketches.perlin_flow_star_dust.velocity.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),Math.sin(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))));
}),particles);
});
/**
 * Draws the current state to the canvas. Called on each iteration after sketch-update.
 */
sketches.perlin_flow_star_dust.sketch_draw = (function sketches$perlin_flow_star_dust$sketch_draw(particles){
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow_star_dust.palette));

quil.core.no_stroke.call(null);

var seq__11560 = cljs.core.seq.call(null,particles);
var chunk__11561 = null;
var count__11562 = (0);
var i__11563 = (0);
while(true){
if((i__11563 < count__11562)){
var p = cljs.core._nth.call(null,chunk__11561,i__11563);
cljs.core.apply.call(null,quil.core.fill,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),quil.core.random.call(null,(100),(200))));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__11564 = seq__11560;
var G__11565 = chunk__11561;
var G__11566 = count__11562;
var G__11567 = (i__11563 + (1));
seq__11560 = G__11564;
chunk__11561 = G__11565;
count__11562 = G__11566;
i__11563 = G__11567;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11560);
if(temp__5720__auto__){
var seq__11560__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11560__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11560__$1);
var G__11568 = cljs.core.chunk_rest.call(null,seq__11560__$1);
var G__11569 = c__4351__auto__;
var G__11570 = cljs.core.count.call(null,c__4351__auto__);
var G__11571 = (0);
seq__11560 = G__11568;
chunk__11561 = G__11569;
count__11562 = G__11570;
i__11563 = G__11571;
continue;
} else {
var p = cljs.core.first.call(null,seq__11560__$1);
cljs.core.apply.call(null,quil.core.fill,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),quil.core.random.call(null,(100),(200))));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__11572 = cljs.core.next.call(null,seq__11560__$1);
var G__11573 = null;
var G__11574 = (0);
var G__11575 = (0);
seq__11560 = G__11572;
chunk__11561 = G__11573;
count__11562 = G__11574;
i__11563 = G__11575;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.perlin_flow_star_dust.create = (function sketches$perlin_flow_star_dust$create(canvas){
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),canvas,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.perlin_flow_star_dust.w,sketches.perlin_flow_star_dust.h], null),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return sketches.perlin_flow_star_dust.sketch_draw;},new cljs.core.Symbol("sketches.perlin-flow-star-dust","sketch-draw","sketches.perlin-flow-star-dust/sketch-draw",-9756964,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow-star-dust","sketches.perlin-flow-star-dust",-1890290097,null),new cljs.core.Symbol(null,"sketch-draw","sketch-draw",1130795881,null),"src\\sketches\\perlin_flow_star_dust.cljs",18,1,63,63,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null)),"Draws the current state to the canvas. Called on each iteration after sketch-update.",(cljs.core.truth_(sketches.perlin_flow_star_dust.sketch_draw)?sketches.perlin_flow_star_dust.sketch_draw.cljs$lang$test:null)])),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Var(function(){return sketches.perlin_flow_star_dust.sketch_setup;},new cljs.core.Symbol("sketches.perlin-flow-star-dust","sketch-setup","sketches.perlin-flow-star-dust/sketch-setup",-199107590,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow-star-dust","sketches.perlin-flow-star-dust",-1890290097,null),new cljs.core.Symbol(null,"sketch-setup","sketch-setup",-1605195929,null),"src\\sketches\\perlin_flow_star_dust.cljs",19,1,45,45,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns the initial state to use for the update-render loop.",(cljs.core.truth_(sketches.perlin_flow_star_dust.sketch_setup)?sketches.perlin_flow_star_dust.sketch_setup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Var(function(){return sketches.perlin_flow_star_dust.sketch_update;},new cljs.core.Symbol("sketches.perlin-flow-star-dust","sketch-update","sketches.perlin-flow-star-dust/sketch-update",1220083792,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow-star-dust","sketches.perlin-flow-star-dust",-1890290097,null),new cljs.core.Symbol(null,"sketch-update","sketch-update",877495773,null),"src\\sketches\\perlin_flow_star_dust.cljs",20,1,50,50,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null)),"Returns the next state to render. Receives the current state as a paramter.",(cljs.core.truth_(sketches.perlin_flow_star_dust.sketch_update)?sketches.perlin_flow_star_dust.sketch_update.cljs$lang$test:null)])),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
quil.core.random_seed.call(null,(6));

return quil.core.noise_seed.call(null,(66));
}));
});
if((typeof sketches !== 'undefined') && (typeof sketches.perlin_flow_star_dust !== 'undefined') && (typeof sketches.perlin_flow_star_dust.sketch !== 'undefined')){
} else {
sketches.perlin_flow_star_dust.sketch = sketches.perlin_flow_star_dust.create.call(null,"sketch");
}

//# sourceMappingURL=perlin_flow_star_dust.js.map
