(ns hitched.common
  (:require [secretary.core :as sec :refer-macros [defroute]
             :refer [dispatch!]]
            [accountant.core :as accountant]))

(defn- menu-item
  [label & [page]]
  [:li
   {:key page}
   [:a {:href     ""
        :on-click #(do (js/console.log "navigate to" page)
                       (accountant/navigate! page)
                       (accountant/dispatch-current!)
                       )
        ;; :data-trigger true
        :class    "menu-font"}
    label]])


(defn navbar []
  [:div {:id "nav" :class "fourteen columns"}
   [:ul
    (reverse
     [(menu-item "home" "/")
      (menu-item "when + where" "/event")
      (menu-item "travel + accomodations" "/travel")
      (menu-item "things to do" "/fun")
      (menu-item "registry" "/registry")
      (menu-item "RSVP" "/rsvp")])]])



(defn spacer []
  [:div {:class "spacer"}])
