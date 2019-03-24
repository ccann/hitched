(ns hitched.common
  (:require [accountant.core :as accountant]))

(defn- menu-item
  [label & [page]]
  [:li
   {:key page :class "menu-li"}
   [:a {:class "menu-link"
        :href     ""
        :on-click #(do (js/console.log "navigate to" page)
                       (accountant/navigate! page))}
    label]])


(defn navbar []
  [:div.collapsible-menu
   [:input {:type "checkbox" :id "menu"}]
   [:label {:for "menu"}]
   [:div.menu-content
    [:ul {:class "no-list-style"}
     (menu-item "home" "/")
     (menu-item "when + where" "/#/event")
     (menu-item "travel" "/#/travel")
     (menu-item "accommodations" "/#/accommodations")
     (menu-item "things to do" "/#/fun")
     (menu-item "faq" "/#/faq")
     (menu-item "registry" "/#/registry")
     (menu-item "rsvp" "/#/rsvp")]]])


(def spacer
  [:div {:class "spacer"}])

(defn link [text link]
  [:a {:href link :target "_blank"} text])
