(ns hitched.rsvp
  (:require [hitched.common :refer [navbar]]))

(defn page []
  [:div.main
   [navbar]
   [:h2 {:class "center-text travel-header"} "RSVP"]
   [:hr]
   [:div.gform-container
    [:iframe.gform
     {:src "https://docs.google.com/forms/d/e/1FAIpQLSdH8p_lptBBSHqT6-pnQHZnzrzUE2jtrcwVdEiuymhv3fS4hg/viewform?embedded=true"
      :frameborder "0"
      :marginheight "0"
      :marginwidth="0"}]]])
