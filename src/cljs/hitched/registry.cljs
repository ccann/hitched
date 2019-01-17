(ns hitched.registry
  (:require [hitched.common :as com]))

(defn image [[img link]]
  [:div {:class "four columns" :key link}
   [:a {:href link :target "_blank"}
    [:img {:class "u-full-width centered-image fun-img"
           :src img}]]])

(defn three-cols [entries]
  [:div {:class "row"}
   [:div {:class "two columns" :key 1}]
   (image (first entries))
   (image (second entries))
   [:div {:class "two columns" :key 2}]])

(def reg
  [["images/bbb.png"
    "https://www.bedbathandbeyond.com/store/giftRegistry/viewRegistryOwner/home/547036666"]
   ["images/zola.png"
    "http://www.zola.com/registry/caroline-cody-june29"]])

(defn page []
  [:div.main
   [com/navbar]
   [:h2 {:class "center-text travel-header"} "Registry"]
   [:hr]
   [:div {:class "container wider"}
    [three-cols reg]]])
