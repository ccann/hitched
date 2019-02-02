(ns hitched.rsvp
  (:require [hitched.common :refer [navbar]]))

(defn page []
  [:div.main
   [navbar]
   [:h2 {:class "center-text travel-header"} "RSVP"]
   [:hr]
   [:p {:class "center-text"} "Coming Soon"]])
