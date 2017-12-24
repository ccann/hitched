(ns figwheel.connect.build-app (:require [hitched.system] [figwheel.client] [figwheel.client.utils] [cljs.user]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/hitched.system.reset (apply js/hitched.system.reset x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'hitched.system/reset' is missing"))), :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

