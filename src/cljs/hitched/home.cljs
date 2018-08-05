(ns hitched.home
  (:require [hitched.common :as com]))


(defn photograph []
  [:div {:class "img-container"}
   [:img {:src "images/lander.jpg"
          :class "lander-img"}]
   #_[:img {:src "images/couple4.jpg"
          :class "lander-img"}]
   #_[:img {:src "images/couple1.jpg"
          :class "lander-img"}]])

(defn names []
  [:div
   [:h1 {:class "center-text names-font"}
    "Cody & Caroline"]])

(defn date []
  [:div
   [:h2 {:class "center-text script-font"}
    "June 29th, 2019"]])


(defn page []
  [:div.main
   [com/navbar]
   [names]
   [date]
   [photograph]
   [com/spacer]])
