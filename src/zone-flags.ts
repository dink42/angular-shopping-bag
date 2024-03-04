import { patchCallbacks } from "zone.js/lib/browser/browser-util";
import "./zone-flags";

(window as any).__Zone_disable_requestAnimationFrame = true;
requestAnimationFrame;
(window as any).__Zone_disable_on_property = true;
(window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove'];
(window as any).__Zone_enable_cross_context_check = true;