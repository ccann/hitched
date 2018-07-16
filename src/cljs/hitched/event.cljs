(ns hitched.event
  (:require [hitched.common :as com]))

(defn page []
  [:div
   [com/navbar]
   #_[:div {:class "event center-text"}
      [:a
       {:href "http://www.audreysfarmhouse.com/weddings.html"
        :class "names-font"}
       "Audrey's Farmhouse + The Greenhouses"]
      [:p {:class "event-subheader script-font"}
       "2188 Bruynswick Road Wallkill, NY 12589"]]
   [:div {:class "event center-text"}
    [:a
     {:href "http://www.audreysfarmhouse.com/index.html"}
     [:img {:style {:width "35%"}
            :src "http://www.audreysfarmhouse.com/assets/images/monogram-with-logotype-1980x612.png"}]]]])
