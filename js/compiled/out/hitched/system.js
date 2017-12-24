// Compiled by ClojureScript 1.9.671 {}
goog.provide('hitched.system');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('hitched.components.ui');
hitched.system.new_system = (function hitched$system$new_system(){
return com.stuartsierra.component.system_map.call(null,new cljs.core.Keyword(null,"app-root","app-root",1723856706),hitched.components.ui.new_ui_component.call(null));
});
hitched.system.init = (function hitched$system$init(){
return hitched.system.system = hitched.system.new_system.call(null);
});
hitched.system.start = (function hitched$system$start(){
return hitched.system.system = com.stuartsierra.component.start.call(null,hitched.system.system);
});
hitched.system.stop = (function hitched$system$stop(){
return hitched.system.system = com.stuartsierra.component.stop.call(null,hitched.system.system);
});
hitched.system.go = (function hitched$system$go(){
hitched.system.init.call(null);

return hitched.system.start.call(null);
});
goog.exportSymbol('hitched.system.go', hitched.system.go);
hitched.system.reset = (function hitched$system$reset(){
hitched.system.stop.call(null);

return hitched.system.go.call(null);
});

//# sourceMappingURL=system.js.map?rel=1514139044188