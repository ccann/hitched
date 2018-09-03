(ns hitched.fun
  (:require [hitched.common :as com]))

(defn page []
  [:div.main
   [com/navbar]
   [:h2 {:class "center-text travel-header"} "Things to Do"]
   [:hr]
   [:p {:class "center-text"} "Check back soon for fun things to do in the area!"]])
