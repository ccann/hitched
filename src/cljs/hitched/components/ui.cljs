(ns hitched.components.ui
  (:require [com.stuartsierra.component :as component]
            [hitched.core :refer [mount-root]]))

(defrecord UIComponent []
  component/Lifecycle
  (start [component]
    (mount-root)
    component)
  (stop [component]
    component))

(defn new-ui-component []
  (map->UIComponent {}))
