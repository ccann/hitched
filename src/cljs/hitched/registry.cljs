(ns hitched.registry
  (:require [hitched.common :as com]))


(defn bbb
  []
  [:a {:href   "https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547036666"
       :target "_blank"}
   [:span {:class "under"}
    "Bed Bath & Beyond"]])


(defn zola
  []
  [:a {:href   "https://www.zola.com/registry/caroline-cody-june29"
       :target "_blank"}
   [:span {:class "under"}
    "Zola"]])


(defn couple-img
  []
  [:div {:class "twelve columns" :key 1}
   [:img {:class "u-full-width centered-image fun-img reg-couple-img"
          :src "images/ccc-cdr.jpg"}]])

(defn page []
  [:div.main
   [com/navbar]
   [:h2 {:class "center-text travel-header"} "Registry"]
   [:hr]
   [:div {:class "row"}
    [:div {:class "twelve columns"}
     [:p {:class "center-text registry-text"}
      "We're so excited to have you join us on our special day and your company is the only gift we could hope for."]]
    [:div {:class "twelve columns"}
     [:p {:class "center-text registry-text"}
      "If your heart is set on something more we are registered at " [zola] " and " [bbb] "."]]
    [couple-img]]
   [com/spacer]
   [com/spacer]
   [com/spacer]])
