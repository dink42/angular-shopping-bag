import { patchCallbacks } from "zone.js/lib/browser/browser-util";
import "./zone-flags";

(window as any).__Zone_disable_requestAnimationFrame = true;
requestAnimationFrame;
