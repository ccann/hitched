(ns hitched.registry
  (:require [hitched.common :as com]))

(defn page []
  [:div.main
   [com/navbar]
   [:h2 {:class "center-text travel-header"} "Registry"]
   [:hr]
   [:p {:class "center-text"} "Coming Soon"]])
