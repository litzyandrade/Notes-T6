/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/resource_loader", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ResourceLoader = void 0;
    /**
     * An interface for retrieving documents by URL that the compiler uses to
     * load templates.
     *
     * This is an abstract class, rather than an interface, so that it can be used
     * as injection token.
     */
    var ResourceLoader = /** @class */ (function () {
        function ResourceLoader() {
        }
        return ResourceLoader;
    }());
    exports.ResourceLoader = ResourceLoader;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VfbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3Jlc291cmNlX2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSDs7Ozs7O09BTUc7SUFDSDtRQUFBO1FBRUEsQ0FBQztRQUFELHFCQUFDO0lBQUQsQ0FBQyxBQUZELElBRUM7SUFGcUIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgZm9yIHJldHJpZXZpbmcgZG9jdW1lbnRzIGJ5IFVSTCB0aGF0IHRoZSBjb21waWxlciB1c2VzIHRvXG4gKiBsb2FkIHRlbXBsYXRlcy5cbiAqXG4gKiBUaGlzIGlzIGFuIGFic3RyYWN0IGNsYXNzLCByYXRoZXIgdGhhbiBhbiBpbnRlcmZhY2UsIHNvIHRoYXQgaXQgY2FuIGJlIHVzZWRcbiAqIGFzIGluamVjdGlvbiB0b2tlbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc291cmNlTG9hZGVyIHtcbiAgYWJzdHJhY3QgZ2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+fHN0cmluZztcbn1cbiJdfQ==