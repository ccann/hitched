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
            [hitched.fun :as fun]
            [hitched.registry :as registry]
            [accountant.core :as accountant]
            [hitched.rsvp :as rsvp])
    (:import goog.history.Html5History))

(enable-console-print!)


(defonce page (atom #'home/page))

(defn current-page []
  [:div [@page]])

;; -------------------------
;; Routing


;; -------------------------
;; History
;; must be called after routes have been defined

;; (defn hook-browser-navigation! []
;;   (doto (Html5History.)
;;     (events/listen
;;      EventType/NAVIGATE
;;      (fn [event]
;;        (secretary/dispatch! (.-token event))))
;;     (.setEnabled true)))


(defroute "/" []
  (reset! page #'home/page))

(defroute "/event" []
  (reset! page #'event/page))

(defroute "/travel" []
  (reset! page #'travel/page))

(defroute "/fun" []
  (reset! page #'fun/page))

(defroute "/registry" []
  (reset! page #'registry/page))

(defroute "/rsvp" []
  (reset! page #'rsvp/page))

(accountant/configure-navigation!
 {:nav-handler
  (fn [path]
    (secretary/dispatch! path))
  :path-exists?
  (fn [path]
    (secretary/locate-route path))})

#_(hook-browser-navigation!)
(accountant/dispatch-current!)

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))



;; TODO
;; History isn't working! wtf
;; warnings in console about document writes
;; warnings in console about iterator ids
;; style pages
;; navbar in mobile view
