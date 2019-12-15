(ns sketches.perlin_flow_lightning
  (:require [quil.core :as q]
            [quil.middleware :as middleware]))

(def body (.-body js/document))
(def w (.-clientWidth body))
(def h (.-clientHeight body))
(def noise-zoom "Noise zoom level." 0.9)
(def particle-id (atom 1))

(def palette
  {:name       "Random"
   :background [20 20 20]
   :colors     (take 100 (repeatedly #(vector (q/random 30 80) (q/random 50 100) (q/random 200 250) (q/random 5 25))))})

(defn position
  "Calculates the next position based on the current, the speed and a max."
  [current delta max]
  (mod (+ current delta) max))

(defn velocity
  "Calculates the next velocity by averaging the current velocity and the added delta."
  [current delta]
  (/ (+ current delta) 1.4))
(defn direction
  "Calculates the next direction based on the previous position and id of each particle."
  [x y z]
  (* 2
     Math/PI
     (+ (q/noise (* x noise-zoom) (* y noise-zoom))
        (* -0.7 (q/noise (* x noise-zoom) (* y noise-zoom) (* (mod z 100) noise-zoom))))))


(defn update-color [color]
  (if (< 8 (q/random 0 10))
    (assoc color 0 (min (inc (first color)) 255)
                 1 (min (+ 2 (second color)) 255)
                 3 (min 200 (inc (last color))))
    color))

(defn particle [n]
  "Creates a particle map."
  {:id        (swap! particle-id inc)
   :vx        1
   :vy        1
   :size      3
   :direction 0
   :x         (q/random w)
   :y         (q/random h)
   :color     (rand-nth (:colors palette))})

(defn sketch-setup
  "Returns the initial state to use for the update-render loop."
  []
  (q/clear)
  (apply q/background (:background palette))
  (map particle (range 0 00)))

(defn prune [particles]
  (if (< 498 (q/random 0 500))
    (do
      (apply q/background (:background palette))
      (->> (nthrest particles 10)
           (#(concat % (map particle (range 0 10))))))
    particles))

(defn sketch-update
  "Returns the next state to render. Receives the current state as a paramter."
  [particles]
  (->> (prune particles)
       (map (fn [p]
              (assoc p
                :x (position (:x p) (:vx p) w)
                :y (position (:y p) (:vy p) h)
                :size (+ .01 (:size p))
                :direction (direction (:x p) (:y p) (:id p))
                :vx (velocity (:vx p) (Math/cos (:direction p)))
                :vy (velocity (:vy p) (Math/sin (:direction p)))
                :color (update-color (:color p)))))))



(defn sketch-draw
  "Draws the current state to the canvas. Called on each iteration after sketch-update."
  [particles]
  (q/no-stroke)
  (doseq [p particles]
    (apply q/fill (:color p))
    (q/ellipse (:x p) (:y p) (:size p) (:size p))))


(defn create [canvas]
  (q/sketch
    :host canvas
    :size [w h]
    :draw #'sketch-draw
    :setup #'sketch-setup
    :update #'sketch-update
    :middleware [middleware/fun-mode]
    :settings (fn []
                (q/random-seed 200)
                (q/noise-seed 66))))


(def sketch (create "sketch"))

