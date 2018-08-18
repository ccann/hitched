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
    "Caroline & Cody"]])

(defn date []
  [:div
   [:h2 {:class "center-text date-font"}
    "June 29th, 2019"]])


(defn flowers-br []
  [:div [:img {:src "images/flowers.jpg"
               :class "flowers-img"}]])

#_(defn flowers-left []
  [:div [:img {:src "images/flowers4.jpg"
               :class "flowers-left-img"}]])

(defn string-lights []
  [:div [:img {:src "images/lights-left.svg"
               :class "lights-left"}]])

(defn page []
  [:div.main
   ;; [com/navbar]
   ;; [string-lights]
   [names]
   [date]
   ;; [photograph]
   [com/spacer]
   [flowers-br]
   #_[flowers-left]])
