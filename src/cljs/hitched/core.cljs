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


(defonce page (atom #'home/page))

(defn current-page []
  [:div [@page]])

;; -------------------------
;; Routing

(defroute "/" []
  (reset! page #'home/page))

(defroute "/event" []
  (reset! page #'event/page))

(defroute "/travel" []
  (reset! page #'travel/page))

(defroute "/accommodations" []
  (reset! page #'accomm/page))

(defroute "/fun" []
  (reset! page #'fun/page))

(defroute "/registry" []
  (reset! page #'registry/page))

(defroute "/rsvp" []
  (reset! page #'rsvp/page))

(accountant/configure-navigation!
 {:nav-handler
  (fn [path]
    ;; back button will call nav-handler
    (secretary/dispatch! path))
  :path-exists?
  (fn [path]
    (secretary/locate-route path))})

#_(hook-browser-navigation!)
(accountant/dispatch-current!)

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))



;; TODO
;; style pages
;; navbar in mobile view
