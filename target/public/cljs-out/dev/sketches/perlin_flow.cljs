(ns sketches.perlin-flow
  (:require [quil.core :as q]
            [quil.middleware :as middleware]))

(def body (.-body js/document))
(def w (.-clientWidth body))
(def h (.-clientHeight body))
(def noise-zoom "Noise zoom level." 0.005)
(def palette
  {:name       "purple haze"
   :background [10 10 10]
   :colors     (take 10 (repeatedly #(vector (q/random 0 255) (q/random 0 255) (q/random 0 255))))})

(defn brightness [color]
  (let [rand (q/random 0 1000)
        alpha (cond (< 0 rand 1) 255
                    (< 1 rand 10) 150
                    (< 10 rand 50) 125
                    (< 50 rand 100) 100
                    :else 70)]
    (assoc color 3 alpha)))


(defn position
  "Calculates the next position based on the current, the speed and a max."
  [current delta max]
  (mod (+ current delta) max))

(defn velocity
  "Calculates the next velocity by averaging the current velocity and the added delta."
  [current delta]
  (/ (+ current delta) 2))

(defn direction
  "Calculates the next direction based on the previous position and id of each particle."
  [x y z]
  (* 2
     Math/PI
     (+ (q/noise (* x noise-zoom) (* y noise-zoom))
        (* 0.2 (q/noise (* x noise-zoom) (* y noise-zoom) (* z noise-zoom))))))

(defn particle
  "Creates a particle map."
  [id]
  {:id        id
   :vx        1
   :vy        1
   :size      (q/random 1 4)
   :direction 0
   :x         (q/random w)
   :y         (q/random h)
   :color     (rand-nth (:colors palette))})

(defn sketch-setup
  "Returns the initial state to use for the update-render loop."
  []
  (map particle (range 0 4000)))

(defn sketch-update
  "Returns the next state to render. Receives the current state as a paramter."
  [particles]
  (map (fn [p]
         (assoc p
           :x (position (:x p) (:vx p) w)
           :y (position (:y p) (:vy p) h)
           :color (brightness (:color p))
           :direction (direction (:x p) (:y p) (:id p))
           :vx (velocity (:vx p) (Math/cos (:direction p)))
           :vy (velocity (:vy p) (Math/sin (:direction p)))))
       particles))


(defn sketch-draw
  "Draws the current state to the canvas. Called on each iteration after sketch-update."
  [particles]
  (apply q/background (:background palette))
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
                (q/random-seed 6)
                (q/noise-seed 66))))

(defonce sketch (create "sketch"))

