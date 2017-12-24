(ns hitched.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [hitched.core-test]
   [hitched.common-test]))

(enable-console-print!)

(doo-tests 'hitched.core-test
           'hitched.common-test)
