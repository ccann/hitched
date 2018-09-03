(ns hitched.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :refer-macros [defroute]
             :refer [dispatch!]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [hitched.common :as com]
            [hitched.home :as home]
            [hitched.event :as event]
            [hitched.travel :as travel]
            [hitched.accommodations :as accomm]
            [hitched.fun :as fun]
            [hitched.registry :as registry]
            [accountant.core :as accountant]
            [hitched.rsvp :as rsvp]))

(enable-console-print!)


(defn current-page []
  [:div [(session/get :current-page)]])


;; -------------------------
;; Routing

(defroute "/" []
  (session/put! :current-page #'home/page))

(defroute "/event" []
  (session/put! :current-page #'event/page))

(defroute "/travel" []
  (session/put! :current-page #'travel/page))

(defroute "/accommodations" []
  (session/put! :current-page #'accomm/page))

(defroute "/fun" []
  (session/put! :current-page #'fun/page))

(defroute "/registry" []
  (session/put! :current-page #'registry/page))

(defroute "/rsvp" []
  (session/put! :current-page #'rsvp/page))

(accountant/configure-navigation!
 {:nav-handler
  (fn [path]
    ;; back button will call nav-handler
    (secretary/dispatch! path))
  :path-exists?
  (fn [path]
    (secretary/locate-route path))})

(accountant/dispatch-current!)

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))
