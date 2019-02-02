(ns hitched.home
  (:require [hitched.common :refer [link navbar spacer]]))


(def photograph
  [:div {:class "img-container"}
   [:img {:src "images/couple.jpg"
          :class "lander-img"}]])

(def text
  [:div {:class "lander-text"}
   [:h1 {:class "lander-names names-font"}
    "Caroline & Cody"]
   [:h2 {:class "lander-date date-font"}
    "June 29th, 2019"]])

(def flowers-br
  [:div
   [:img {:src "images/flowers-br.jpg"
          :class "flowers-img-br"}]])

(defn page []
  [:div.main
   photograph
   [navbar]
   text
   spacer
   flowers-br
   [:div {:class "photo-credit"}
    "photo by "
    (link "Hannah Cohen" "https://www.hclovestories.com/")]])
