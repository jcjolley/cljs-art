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
sketches.perlin_flow.palette = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"purple haze",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.take.call(null,(10),cljs.core.repeatedly.call(null,(function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[quil.core.random.call(null,(0),(255)),quil.core.random.call(null,(0),(255)),quil.core.random.call(null,(0),(255))],null));
})))], null);
sketches.perlin_flow.brightness = (function sketches$perlin_flow$brightness(color){
var rand = quil.core.random.call(null,(0),(1000));
var alpha = ((((((0) < rand)) && ((rand < (1)))))?(255):((((((1) < rand)) && ((rand < (10)))))?(150):((((((10) < rand)) && ((rand < (50)))))?(125):((((((50) < rand)) && ((rand < (100)))))?(100):(70)
))));
return cljs.core.assoc.call(null,color,(3),alpha);
});
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
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"vx","vx",-1685168462),(1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(1),new cljs.core.Keyword(null,"size","size",1098693007),quil.core.random.call(null,(1),(4)),new cljs.core.Keyword(null,"direction","direction",-633359395),(0),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,sketches.perlin_flow.w),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,sketches.perlin_flow.h),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette))], null);
});
/**
 * Returns the initial state to use for the update-render loop.
 */
sketches.perlin_flow.sketch_setup = (function sketches$perlin_flow$sketch_setup(){
return cljs.core.map.call(null,sketches.perlin_flow.particle,cljs.core.range.call(null,(0),(4000)));
});
/**
 * Returns the next state to render. Receives the current state as a paramter.
 */
sketches.perlin_flow.sketch_update = (function sketches$perlin_flow$sketch_update(particles){
return cljs.core.map.call(null,(function (p){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"x","x",2099068185),sketches.perlin_flow.position.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow.w),new cljs.core.Keyword(null,"y","y",-1757859776),sketches.perlin_flow.position.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow.h),new cljs.core.Keyword(null,"color","color",1011675173),sketches.perlin_flow.brightness.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"direction","direction",-633359395),sketches.perlin_flow.direction.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"vx","vx",-1685168462),sketches.perlin_flow.velocity.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),Math.cos(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"vy","vy",-2018509997),sketches.perlin_flow.velocity.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),Math.sin(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))));
}),particles);
});
/**
 * Draws the current state to the canvas. Called on each iteration after sketch-update.
 */
sketches.perlin_flow.sketch_draw = (function sketches$perlin_flow$sketch_draw(particles){
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette));

quil.core.no_stroke.call(null);

var seq__8777 = cljs.core.seq.call(null,particles);
var chunk__8778 = null;
var count__8779 = (0);
var i__8780 = (0);
while(true){
if((i__8780 < count__8779)){
var p = cljs.core._nth.call(null,chunk__8778,i__8780);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__8781 = seq__8777;
var G__8782 = chunk__8778;
var G__8783 = count__8779;
var G__8784 = (i__8780 + (1));
seq__8777 = G__8781;
chunk__8778 = G__8782;
count__8779 = G__8783;
i__8780 = G__8784;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__8777);
if(temp__5720__auto__){
var seq__8777__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8777__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__8777__$1);
var G__8785 = cljs.core.chunk_rest.call(null,seq__8777__$1);
var G__8786 = c__4351__auto__;
var G__8787 = cljs.core.count.call(null,c__4351__auto__);
var G__8788 = (0);
seq__8777 = G__8785;
chunk__8778 = G__8786;
count__8779 = G__8787;
i__8780 = G__8788;
continue;
} else {
var p = cljs.core.first.call(null,seq__8777__$1);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__8789 = cljs.core.next.call(null,seq__8777__$1);
var G__8790 = null;
var G__8791 = (0);
var G__8792 = (0);
seq__8777 = G__8789;
chunk__8778 = G__8790;
count__8779 = G__8791;
i__8780 = G__8792;
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
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),canvas,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.perlin_flow.w,sketches.perlin_flow.h], null),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_draw;},new cljs.core.Symbol("sketches.perlin-flow","sketch-draw","sketches.perlin-flow/sketch-draw",-1861499172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow","sketches.perlin-flow",-1548302130,null),new cljs.core.Symbol(null,"sketch-draw","sketch-draw",1130795881,null),"C:\\Users\\jolle\\dev\\art\\perlin\\src\\sketches\\perlin_flow.cljs",18,1,73,73,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null)),"Draws the current state to the canvas. Called on each iteration after sketch-update.",(cljs.core.truth_(sketches.perlin_flow.sketch_draw)?sketches.perlin_flow.sketch_draw.cljs$lang$test:null)])),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_setup;},new cljs.core.Symbol("sketches.perlin-flow","sketch-setup","sketches.perlin-flow/sketch-setup",314602490,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow","sketches.perlin-flow",-1548302130,null),new cljs.core.Symbol(null,"sketch-setup","sketch-setup",-1605195929,null),"C:\\Users\\jolle\\dev\\art\\perlin\\src\\sketches\\perlin_flow.cljs",19,1,54,54,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns the initial state to use for the update-render loop.",(cljs.core.truth_(sketches.perlin_flow.sketch_setup)?sketches.perlin_flow.sketch_setup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_update;},new cljs.core.Symbol("sketches.perlin-flow","sketch-update","sketches.perlin-flow/sketch-update",-421996464,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow","sketches.perlin-flow",-1548302130,null),new cljs.core.Symbol(null,"sketch-update","sketch-update",877495773,null),"C:\\Users\\jolle\\dev\\art\\perlin\\src\\sketches\\perlin_flow.cljs",20,1,59,59,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null)),"Returns the next state to render. Receives the current state as a paramter.",(cljs.core.truth_(sketches.perlin_flow.sketch_update)?sketches.perlin_flow.sketch_update.cljs$lang$test:null)])),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
quil.core.random_seed.call(null,(6));

return quil.core.noise_seed.call(null,(66));
}));
});
if((typeof sketches !== 'undefined') && (typeof sketches.perlin_flow !== 'undefined') && (typeof sketches.perlin_flow.sketch !== 'undefined')){
} else {
sketches.perlin_flow.sketch = sketches.perlin_flow.create.call(null,"sketch");
}

//# sourceMappingURL=perlin_flow.js.map
