(ns hitched.home
  (:require [hitched.common :as com]))


(defn photograph []
  [:div {:class "img-container"}
   [:img {:src "images/couple.jpg"
          :class "lander-img"}]])

(defn text []
  [:div {:class "lander-text"}
   [:h1 {:class "lander-names names-font"}
    "Caroline & Cody"]
   [:h2 {:class "lander-date date-font"}
    "June 29th, 2019"]])

(defn flowers-br []
  [:div
   [:img {:src "images/flowers-br.jpg"
          :class "flowers-img-br"}]])


(defn page []
  [:div.main
   [photograph]
   [com/navbar]
   [text]
   [com/spacer]
   [flowers-br]])
