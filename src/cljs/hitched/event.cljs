(ns hitched.event
  (:require [hitched.common :as com]))

(defn page []
  [:div
   [com/navbar]
   [:div {:class "event-logo"}
    [:a
     {:href "http://www.audreysfarmhouse.com/index.html"}
     [:img {:class "almost-full-width centered-image"
            :src "http://www.audreysfarmhouse.com/assets/images/monogram-with-logotype-1980x612.png"}]]

    [:p {:class "header center-text ceremony-header"}
     "CEREMONY + RECEPTION"]
    [:p {:class "center-text ceremony-1"}
     "Saturday, June 29th at 5pm"]
    [:p {:class "address-1 center-text"}
     "2187 Bruynswick Road"]
    [:p {:class "address-2 center-text"}
     "Wallkill, New York"]


    [:div.container
     [:h6 {:class "events-header header"} "Other Events"]

     [:div {:class "row"}
      [:h6 {:class "three columns header"}
       "WELCOME GATHERING"]
      [:div {:class "nine columns"}
       [:span "Friday, June 28, time and place TBD."]
       [:p "We’d love to welcome you to the Hudson Valley in person. If you’re in town, please stop by for a drink."]]]

     ;; [:div {:class "row"}
     ;;  [:h6 {:class "three columns header"}
     ;;   "CEREMONY + RECEPTION"]
     ;;  [:div {:class "nine columns"}
     ;;   [:p "Saturday, June 29th, at 5pm at Audrey's Farmhouse and The Greenhouses. Dinner and Celebration to follow."]]]

     [:div {:class "row"}
      [:h6 {:class "three columns header"}
       "FAREWELL BRUNCH "]
      [:div {:class "nine columns"}
       [:span "Sunday, June 30, brunch-time (specifics TBD)."]
       [:p "Come by for one last hug before you hit the road."]]]]



    ]])
