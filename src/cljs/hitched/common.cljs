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
        ;; :class    "menu-font"
        }
    label]])


(defn navbar []
  [:div.collapsible-menu
   [:input {:type "checkbox" :id "menu"}]
   [:label {:for "menu"}]
   [:div.menu-content
    [:ul
     (menu-item "home" "/")
     (menu-item "when + where" "/event")
     (menu-item "travel" "/travel")
     (menu-item "accommodations" "/accommodations")
     (menu-item "things to do" "/fun")
     (menu-item "registry" "/registry")
     (menu-item "RSVP" "/rsvp")]]])


(defn spacer []
  [:div {:class "spacer"}])
