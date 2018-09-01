(ns hitched.rsvp
  (:require [hitched.common :as com]))

(defn page []
  [:div.main
   [com/navbar]
   [:h2 {:class "center-text travel-header"} "RSVP"]
   [:hr]
   [:p {:class "center-text"} "Coming Soon"]])
