(ns hitched.fun
  (:require [hitched.common :as com]))

(defn page []
  [:div.main
   [com/navbar]
   [:h2 {:class "center-text travel-header"} "Things to Do"]
   [:hr]
   [:p {:class "center-text"} "Coming Soon"]])
