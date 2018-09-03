(ns hitched.home
  (:require [hitched.common :as com]))


(defn photograph []
  [:div {:class "img-container"}
   [:img {:src "images/lander.jpg"
          :class "lander-img"}]])

(defn names []
  [:div
   [:h1 {:class "center-text names-font"}
    "Caroline & Cody"]])

(defn date []
  [:div
   [:h2 {:class "center-text date-font"}
    "June 29th, 2019"]])


(defn flowers-br []
  [:div
   [:img {:src "images/flowers-br.jpg"
          :class "flowers-img-br"}]])


(defn page []
  [:div.main
   [com/navbar]
   [names]
   [date]
   [photograph]
   [com/spacer]
   [flowers-br]])
