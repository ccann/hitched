(ns hitched.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as str]))

(enable-console-print!)

(defonce app-state (atom {:text "Hello Chestnut!"}))

(defn- menu-item
  [label & [link]]
  [:li {:class "pure-menu-item"}
   [:a {:href  (or link "#")
        :class "pure-menu-link menu-font"} (str/lower-case label)]])


(defn header-menu []
  [:div {:class "pure-menu-scrollable pure-menu-horizontal pure-menu center-text"}
   [:ul {:class "pure-menu-list"}
    (menu-item "Home")
    (menu-item "RSVP")
    (menu-item "Photos")
    (menu-item "Events")
    (menu-item "Wedding Party")
    (menu-item "Travel")
    (menu-item "Gift Registry")]])

(defn names []
  [:div [:h1 {:class "center-text script-font"} "Cody & Caroline"]])

(defn spacer []
  [:div {:class "spacer"}])

(defn page []
  [:div
   (names)
   (header-menu)
   (spacer)
   [:div {:class "img-container"}
    [:img {:src   "lander.jpg"
           :class "lander-img"}]]])



(defn render []
  (reagent/render [page] (js/document.getElementById "app")))
