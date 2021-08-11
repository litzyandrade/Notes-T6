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
        define("@angular/compiler-cli/src/ngtsc/transform/src/api", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HandlerFlags = exports.HandlerPrecedence = exports.CompilationMode = void 0;
    /**
     * Specifies the compilation mode that is used for the compilation.
     */
    var CompilationMode;
    (function (CompilationMode) {
        /**
         * Generates fully AOT compiled code using Ivy instructions.
         */
        CompilationMode[CompilationMode["FULL"] = 0] = "FULL";
        /**
         * Generates code using a stable, but intermediate format suitable to be published to NPM.
         */
        CompilationMode[CompilationMode["PARTIAL"] = 1] = "PARTIAL";
    })(CompilationMode = exports.CompilationMode || (exports.CompilationMode = {}));
    var HandlerPrecedence;
    (function (HandlerPrecedence) {
        /**
         * Handler with PRIMARY precedence cannot overlap - there can only be one on a given class.
         *
         * If more than one PRIMARY handler matches a class, an error is produced.
         */
        HandlerPrecedence[HandlerPrecedence["PRIMARY"] = 0] = "PRIMARY";
        /**
         * Handlers with SHARED precedence can match any class, possibly in addition to a single PRIMARY
         * handler.
         *
         * It is not an error for a class to have any number of SHARED handlers.
         */
        HandlerPrecedence[HandlerPrecedence["SHARED"] = 1] = "SHARED";
        /**
         * Handlers with WEAK precedence that match a class are ignored if any handlers with stronger
         * precedence match a class.
         */
        HandlerPrecedence[HandlerPrecedence["WEAK"] = 2] = "WEAK";
    })(HandlerPrecedence = exports.HandlerPrecedence || (exports.HandlerPrecedence = {}));
    /**
     * A set of options which can be passed to a `DecoratorHandler` by a consumer, to tailor the output
     * of compilation beyond the decorators themselves.
     */
    var HandlerFlags;
    (function (HandlerFlags) {
        /**
         * No flags set.
         */
        HandlerFlags[HandlerFlags["NONE"] = 0] = "NONE";
        /**
         * Indicates that this decorator is fully inherited from its parent at runtime. In addition to
         * normally inherited aspects such as inputs and queries, full inheritance applies to every aspect
         * of the component or directive, such as the template function itself.
         *
         * Its primary effect is to cause the `CopyDefinitionFeature` to be applied to the definition
         * being compiled. See that class for more information.
         */
        HandlerFlags[HandlerFlags["FULL_INHERITANCE"] = 1] = "FULL_INHERITANCE";
    })(HandlerFlags = exports.HandlerFlags || (exports.HandlerFlags = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy90cmFuc2Zvcm0vc3JjL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFhSDs7T0FFRztJQUNILElBQVksZUFVWDtJQVZELFdBQVksZUFBZTtRQUN6Qjs7V0FFRztRQUNILHFEQUFJLENBQUE7UUFFSjs7V0FFRztRQUNILDJEQUFPLENBQUE7SUFDVCxDQUFDLEVBVlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFVMUI7SUFFRCxJQUFZLGlCQXFCWDtJQXJCRCxXQUFZLGlCQUFpQjtRQUMzQjs7OztXQUlHO1FBQ0gsK0RBQU8sQ0FBQTtRQUVQOzs7OztXQUtHO1FBQ0gsNkRBQU0sQ0FBQTtRQUVOOzs7V0FHRztRQUNILHlEQUFJLENBQUE7SUFDTixDQUFDLEVBckJXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBcUI1QjtJQUVEOzs7T0FHRztJQUNILElBQVksWUFlWDtJQWZELFdBQVksWUFBWTtRQUN0Qjs7V0FFRztRQUNILCtDQUFVLENBQUE7UUFFVjs7Ozs7OztXQU9HO1FBQ0gsdUVBQTZCLENBQUE7SUFDL0IsQ0FBQyxFQWZXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBZXZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29uc3RhbnRQb29sLCBFeHByZXNzaW9uLCBTdGF0ZW1lbnQsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge1JlZXhwb3J0fSBmcm9tICcuLi8uLi9pbXBvcnRzJztcbmltcG9ydCB7U2VtYW50aWNTeW1ib2x9IGZyb20gJy4uLy4uL2luY3JlbWVudGFsL3NlbWFudGljX2dyYXBoJztcbmltcG9ydCB7SW5kZXhpbmdDb250ZXh0fSBmcm9tICcuLi8uLi9pbmRleGVyJztcbmltcG9ydCB7Q2xhc3NEZWNsYXJhdGlvbiwgRGVjb3JhdG9yfSBmcm9tICcuLi8uLi9yZWZsZWN0aW9uJztcbmltcG9ydCB7SW1wb3J0TWFuYWdlcn0gZnJvbSAnLi4vLi4vdHJhbnNsYXRvcic7XG5pbXBvcnQge1R5cGVDaGVja0NvbnRleHR9IGZyb20gJy4uLy4uL3R5cGVjaGVjay9hcGknO1xuaW1wb3J0IHtYaTE4bkNvbnRleHR9IGZyb20gJy4uLy4uL3hpMThuJztcblxuLyoqXG4gKiBTcGVjaWZpZXMgdGhlIGNvbXBpbGF0aW9uIG1vZGUgdGhhdCBpcyB1c2VkIGZvciB0aGUgY29tcGlsYXRpb24uXG4gKi9cbmV4cG9ydCBlbnVtIENvbXBpbGF0aW9uTW9kZSB7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgZnVsbHkgQU9UIGNvbXBpbGVkIGNvZGUgdXNpbmcgSXZ5IGluc3RydWN0aW9ucy5cbiAgICovXG4gIEZVTEwsXG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBjb2RlIHVzaW5nIGEgc3RhYmxlLCBidXQgaW50ZXJtZWRpYXRlIGZvcm1hdCBzdWl0YWJsZSB0byBiZSBwdWJsaXNoZWQgdG8gTlBNLlxuICAgKi9cbiAgUEFSVElBTCxcbn1cblxuZXhwb3J0IGVudW0gSGFuZGxlclByZWNlZGVuY2Uge1xuICAvKipcbiAgICogSGFuZGxlciB3aXRoIFBSSU1BUlkgcHJlY2VkZW5jZSBjYW5ub3Qgb3ZlcmxhcCAtIHRoZXJlIGNhbiBvbmx5IGJlIG9uZSBvbiBhIGdpdmVuIGNsYXNzLlxuICAgKlxuICAgKiBJZiBtb3JlIHRoYW4gb25lIFBSSU1BUlkgaGFuZGxlciBtYXRjaGVzIGEgY2xhc3MsIGFuIGVycm9yIGlzIHByb2R1Y2VkLlxuICAgKi9cbiAgUFJJTUFSWSxcblxuICAvKipcbiAgICogSGFuZGxlcnMgd2l0aCBTSEFSRUQgcHJlY2VkZW5jZSBjYW4gbWF0Y2ggYW55IGNsYXNzLCBwb3NzaWJseSBpbiBhZGRpdGlvbiB0byBhIHNpbmdsZSBQUklNQVJZXG4gICAqIGhhbmRsZXIuXG4gICAqXG4gICAqIEl0IGlzIG5vdCBhbiBlcnJvciBmb3IgYSBjbGFzcyB0byBoYXZlIGFueSBudW1iZXIgb2YgU0hBUkVEIGhhbmRsZXJzLlxuICAgKi9cbiAgU0hBUkVELFxuXG4gIC8qKlxuICAgKiBIYW5kbGVycyB3aXRoIFdFQUsgcHJlY2VkZW5jZSB0aGF0IG1hdGNoIGEgY2xhc3MgYXJlIGlnbm9yZWQgaWYgYW55IGhhbmRsZXJzIHdpdGggc3Ryb25nZXJcbiAgICogcHJlY2VkZW5jZSBtYXRjaCBhIGNsYXNzLlxuICAgKi9cbiAgV0VBSyxcbn1cblxuLyoqXG4gKiBBIHNldCBvZiBvcHRpb25zIHdoaWNoIGNhbiBiZSBwYXNzZWQgdG8gYSBgRGVjb3JhdG9ySGFuZGxlcmAgYnkgYSBjb25zdW1lciwgdG8gdGFpbG9yIHRoZSBvdXRwdXRcbiAqIG9mIGNvbXBpbGF0aW9uIGJleW9uZCB0aGUgZGVjb3JhdG9ycyB0aGVtc2VsdmVzLlxuICovXG5leHBvcnQgZW51bSBIYW5kbGVyRmxhZ3Mge1xuICAvKipcbiAgICogTm8gZmxhZ3Mgc2V0LlxuICAgKi9cbiAgTk9ORSA9IDB4MCxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhpcyBkZWNvcmF0b3IgaXMgZnVsbHkgaW5oZXJpdGVkIGZyb20gaXRzIHBhcmVudCBhdCBydW50aW1lLiBJbiBhZGRpdGlvbiB0b1xuICAgKiBub3JtYWxseSBpbmhlcml0ZWQgYXNwZWN0cyBzdWNoIGFzIGlucHV0cyBhbmQgcXVlcmllcywgZnVsbCBpbmhlcml0YW5jZSBhcHBsaWVzIHRvIGV2ZXJ5IGFzcGVjdFxuICAgKiBvZiB0aGUgY29tcG9uZW50IG9yIGRpcmVjdGl2ZSwgc3VjaCBhcyB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gaXRzZWxmLlxuICAgKlxuICAgKiBJdHMgcHJpbWFyeSBlZmZlY3QgaXMgdG8gY2F1c2UgdGhlIGBDb3B5RGVmaW5pdGlvbkZlYXR1cmVgIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGRlZmluaXRpb25cbiAgICogYmVpbmcgY29tcGlsZWQuIFNlZSB0aGF0IGNsYXNzIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgRlVMTF9JTkhFUklUQU5DRSA9IDB4MDAwMDAwMDEsXG59XG5cblxuLyoqXG4gKiBQcm92aWRlcyB0aGUgaW50ZXJmYWNlIGJldHdlZW4gYSBkZWNvcmF0b3IgY29tcGlsZXIgZnJvbSBAYW5ndWxhci9jb21waWxlciBhbmQgdGhlIFR5cGVzY3JpcHRcbiAqIGNvbXBpbGVyL3RyYW5zZm9ybS5cbiAqXG4gKiBUaGUgZGVjb3JhdG9yIGNvbXBpbGVycyBpbiBAYW5ndWxhci9jb21waWxlciBkbyBub3QgZGVwZW5kIG9uIFR5cGVzY3JpcHQuIFRoZSBoYW5kbGVyIGlzXG4gKiByZXNwb25zaWJsZSBmb3IgZXh0cmFjdGluZyB0aGUgaW5mb3JtYXRpb24gcmVxdWlyZWQgdG8gcGVyZm9ybSBjb21waWxhdGlvbiBmcm9tIHRoZSBkZWNvcmF0b3JzXG4gKiBhbmQgVHlwZXNjcmlwdCBzb3VyY2UsIGludm9raW5nIHRoZSBkZWNvcmF0b3IgY29tcGlsZXIsIGFuZCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gYERgIFRoZSB0eXBlIG9mIGRlY29yYXRvciBtZXRhZGF0YSBwcm9kdWNlZCBieSBgZGV0ZWN0YC5cbiAqIEBwYXJhbSBgQWAgVGhlIHR5cGUgb2YgYW5hbHlzaXMgbWV0YWRhdGEgcHJvZHVjZWQgYnkgYGFuYWx5emVgLlxuICogQHBhcmFtIGBSYCBUaGUgdHlwZSBvZiByZXNvbHV0aW9uIG1ldGFkYXRhIHByb2R1Y2VkIGJ5IGByZXNvbHZlYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZWNvcmF0b3JIYW5kbGVyPEQsIEEsIFMgZXh0ZW5kcyBTZW1hbnRpY1N5bWJvbHxudWxsLCBSPiB7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHByZWNlZGVuY2Ugb2YgYSBoYW5kbGVyIGNvbnRyb2xzIGhvdyBpdCBpbnRlcmFjdHMgd2l0aCBvdGhlciBoYW5kbGVycyB0aGF0IG1hdGNoIHRoZSBzYW1lXG4gICAqIGNsYXNzLlxuICAgKlxuICAgKiBTZWUgdGhlIGRlc2NyaXB0aW9ucyBvbiBgSGFuZGxlclByZWNlZGVuY2VgIGZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgYmVoYXZpb3JzIGludm9sdmVkLlxuICAgKi9cbiAgcmVhZG9ubHkgcHJlY2VkZW5jZTogSGFuZGxlclByZWNlZGVuY2U7XG5cbiAgLyoqXG4gICAqIFNjYW4gYSBzZXQgb2YgcmVmbGVjdGVkIGRlY29yYXRvcnMgYW5kIGRldGVybWluZSBpZiB0aGlzIGhhbmRsZXIgaXMgcmVzcG9uc2libGUgZm9yIGNvbXBpbGF0aW9uXG4gICAqIG9mIG9uZSBvZiB0aGVtLlxuICAgKi9cbiAgZGV0ZWN0KG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIGRlY29yYXRvcnM6IERlY29yYXRvcltdfG51bGwpOiBEZXRlY3RSZXN1bHQ8RD58dW5kZWZpbmVkO1xuXG5cbiAgLyoqXG4gICAqIEFzeW5jaHJvbm91c2x5IHBlcmZvcm0gcHJlLWFuYWx5c2lzIG9uIHRoZSBkZWNvcmF0b3IvY2xhc3MgY29tYmluYXRpb24uXG4gICAqXG4gICAqIGBwcmVhbmFseXplYCBpcyBvcHRpb25hbCBhbmQgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgY2FsbGVkIHRocm91Z2ggYWxsIGNvbXBpbGF0aW9uIGZsb3dzLiBJdFxuICAgKiB3aWxsIG9ubHkgYmUgY2FsbGVkIGlmIGFzeW5jaHJvbmljaXR5IGlzIHN1cHBvcnRlZCBpbiB0aGUgQ29tcGlsZXJIb3N0LlxuICAgKi9cbiAgcHJlYW5hbHl6ZT8obm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgbWV0YWRhdGE6IFJlYWRvbmx5PEQ+KTogUHJvbWlzZTx2b2lkPnx1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYW5hbHlzaXMgb24gdGhlIGRlY29yYXRvci9jbGFzcyBjb21iaW5hdGlvbiwgZXh0cmFjdGluZyBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjbGFzc1xuICAgKiByZXF1aXJlZCBmb3IgY29tcGlsYXRpb24uXG4gICAqXG4gICAqIFJldHVybnMgYW5hbHl6ZWQgbWV0YWRhdGEgaWYgc3VjY2Vzc2Z1bCwgb3IgYW4gYXJyYXkgb2YgZGlhZ25vc3RpYyBtZXNzYWdlcyBpZiB0aGUgYW5hbHlzaXNcbiAgICogZmFpbHMgb3IgdGhlIGRlY29yYXRvciBpc24ndCB2YWxpZC5cbiAgICpcbiAgICogQW5hbHlzaXMgc2hvdWxkIGFsd2F5cyBiZSBhIFwicHVyZVwiIG9wZXJhdGlvbiwgd2l0aCBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXMgYmVjYXVzZSB0aGVcbiAgICogZGV0ZWN0L2FuYWx5c2lzIHN0ZXBzIG1pZ2h0IGJlIHNraXBwZWQgZm9yIGZpbGVzIHdoaWNoIGhhdmUgbm90IGNoYW5nZWQgZHVyaW5nIGluY3JlbWVudGFsXG4gICAqIGJ1aWxkcy4gQW55IHNpZGUgZWZmZWN0cyByZXF1aXJlZCBmb3IgY29tcGlsYXRpb24gKGUuZy4gcmVnaXN0cmF0aW9uIG9mIG1ldGFkYXRhKSBzaG91bGQgaGFwcGVuXG4gICAqIGluIHRoZSBgcmVnaXN0ZXJgIHBoYXNlLCB3aGljaCBpcyBndWFyYW50ZWVkIHRvIHJ1biBldmVuIGZvciBpbmNyZW1lbnRhbCBidWlsZHMuXG4gICAqL1xuICBhbmFseXplKG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIG1ldGFkYXRhOiBSZWFkb25seTxEPiwgaGFuZGxlckZsYWdzPzogSGFuZGxlckZsYWdzKTpcbiAgICAgIEFuYWx5c2lzT3V0cHV0PEE+O1xuXG4gIC8qKlxuICAgKiBSZWFjdCB0byBhIGNoYW5nZSBpbiBhIHJlc291cmNlIGZpbGUgYnkgdXBkYXRpbmcgdGhlIGBhbmFseXNpc2Agb3IgYHJlc29sdXRpb25gLCB1bmRlciB0aGVcbiAgICogYXNzdW1wdGlvbiB0aGF0IG5vdGhpbmcgaW4gdGhlIFR5cGVTY3JpcHQgY29kZSBoYXMgY2hhbmdlZC5cbiAgICovXG4gIHVwZGF0ZVJlc291cmNlcz8obm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgYW5hbHlzaXM6IEEsIHJlc29sdXRpb246IFIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBQcm9kdWNlcyBhIGBTZW1hbnRpY1N5bWJvbGAgdGhhdCByZXByZXNlbnRzIHRoZSBjbGFzcywgd2hpY2ggaXMgcmVnaXN0ZXJlZCBpbnRvIHRoZSBzZW1hbnRpY1xuICAgKiBkZXBlbmRlbmN5IGdyYXBoLiBUaGUgc3ltYm9sIGlzIHVzZWQgaW4gaW5jcmVtZW50YWwgY29tcGlsYXRpb25zIHRvIGxldCB0aGUgY29tcGlsZXIgZGV0ZXJtaW5lXG4gICAqIGhvdyBhIGNoYW5nZSB0byB0aGUgY2xhc3MgYWZmZWN0cyBwcmlvciBlbWl0IHJlc3VsdHMuIFNlZSB0aGUgYGluY3JlbWVudGFsYCB0YXJnZXQncyBSRUFETUUgZm9yXG4gICAqIGRldGFpbHMgb24gaG93IHRoaXMgd29ya3MuXG4gICAqXG4gICAqIFRoZSBzeW1ib2wgaXMgcGFzc2VkIGluIHRvIGByZXNvbHZlYCwgd2hlcmUgaXQgY2FuIGJlIGV4dGVuZGVkIHdpdGggcmVmZXJlbmNlcyBpbnRvIG90aGVyIHBhcnRzXG4gICAqIG9mIHRoZSBjb21waWxhdGlvbiBhcyBuZWVkZWQuXG4gICAqXG4gICAqIE9ubHkgcHJpbWFyeSBoYW5kbGVycyBhcmUgYWxsb3dlZCB0byBoYXZlIHN5bWJvbHM7IGhhbmRsZXJzIHdpdGggYHByZWNlZGVuY2VgIG90aGVyIHRoYW5cbiAgICogYEhhbmRsZXJQcmVjZWRlbmNlLlBSSU1BUllgIG11c3QgcmV0dXJuIGEgYG51bGxgIHN5bWJvbC5cbiAgICovXG4gIHN5bWJvbChub2RlOiBDbGFzc0RlY2xhcmF0aW9uLCBhbmFseXNpczogUmVhZG9ubHk8QT4pOiBTO1xuXG4gIC8qKlxuICAgKiBQb3N0LXByb2Nlc3MgdGhlIGFuYWx5c2lzIG9mIGEgZGVjb3JhdG9yL2NsYXNzIGNvbWJpbmF0aW9uIGFuZCByZWNvcmQgYW55IG5lY2Vzc2FyeSBpbmZvcm1hdGlvblxuICAgKiBpbiB0aGUgbGFyZ2VyIGNvbXBpbGF0aW9uLlxuICAgKlxuICAgKiBSZWdpc3RyYXRpb24gYWx3YXlzIG9jY3VycyBmb3IgYSBnaXZlbiBkZWNvcmF0b3IvY2xhc3MsIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBhbmFseXNpcyB3YXNcbiAgICogcGVyZm9ybWVkIGRpcmVjdGx5IG9yIHdoZXRoZXIgdGhlIGFuYWx5c2lzIHJlc3VsdHMgd2VyZSByZXVzZWQgZnJvbSB0aGUgcHJldmlvdXMgcHJvZ3JhbS5cbiAgICovXG4gIHJlZ2lzdGVyPyhub2RlOiBDbGFzc0RlY2xhcmF0aW9uLCBhbmFseXNpczogQSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZGVjb3JhdG9yIGZvciB0aGUgaW5kZXhpbmcgcGhhc2UgaW4gYVxuICAgKiBgSW5kZXhpbmdDb250ZXh0YCwgd2hpY2ggc3RvcmVzIGluZm9ybWF0aW9uIGFib3V0IGNvbXBvbmVudHMgZGlzY292ZXJlZCBpbiB0aGVcbiAgICogcHJvZ3JhbS5cbiAgICovXG4gIGluZGV4P1xuICAgICAgKGNvbnRleHQ6IEluZGV4aW5nQ29udGV4dCwgbm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgYW5hbHlzaXM6IFJlYWRvbmx5PEE+LFxuICAgICAgIHJlc29sdXRpb246IFJlYWRvbmx5PFI+KTogdm9pZDtcblxuICAvKipcbiAgICogUGVyZm9ybSByZXNvbHV0aW9uIG9uIHRoZSBnaXZlbiBkZWNvcmF0b3IgYWxvbmcgd2l0aCB0aGUgcmVzdWx0IG9mIGFuYWx5c2lzLlxuICAgKlxuICAgKiBUaGUgcmVzb2x1dGlvbiBwaGFzZSBoYXBwZW5zIGFmdGVyIHRoZSBlbnRpcmUgYHRzLlByb2dyYW1gIGhhcyBiZWVuIGFuYWx5emVkLCBhbmQgZ2l2ZXMgdGhlXG4gICAqIGBEZWNvcmF0b3JIYW5kbGVyYCBhIGNoYW5jZSB0byBsZXZlcmFnZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSB3aG9sZSBjb21waWxhdGlvbiB1bml0IHRvIGVuaGFuY2VcbiAgICogdGhlIGBhbmFseXNpc2AgYmVmb3JlIHRoZSBlbWl0IHBoYXNlLlxuICAgKi9cbiAgcmVzb2x2ZT8obm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgYW5hbHlzaXM6IFJlYWRvbmx5PEE+LCBzeW1ib2w6IFMpOiBSZXNvbHZlUmVzdWx0PFI+O1xuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGkxOG4gbWVzc2FnZXMgaW50byB0aGUgYFhpMThuQ29udGV4dGAsIHdoaWNoIGlzIHVzZWZ1bCBmb3IgZ2VuZXJhdGluZyB2YXJpb3VzIGZvcm1hdHNcbiAgICogb2YgbWVzc2FnZSBmaWxlIG91dHB1dHMuXG4gICAqL1xuICB4aTE4bj8oYnVuZGxlOiBYaTE4bkNvbnRleHQsIG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIGFuYWx5c2lzOiBSZWFkb25seTxBPik6IHZvaWQ7XG5cbiAgdHlwZUNoZWNrP1xuICAgICAgKGN0eDogVHlwZUNoZWNrQ29udGV4dCwgbm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgYW5hbHlzaXM6IFJlYWRvbmx5PEE+LFxuICAgICAgIHJlc29sdXRpb246IFJlYWRvbmx5PFI+KTogdm9pZDtcblxuICAvKipcbiAgICogR2VuZXJhdGUgYSBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQgd2hpY2ggc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBjbGFzcywgaW5jbHVkaW5nIGFueVxuICAgKiBpbml0aWFsaXphdGlvbiBjb2RlIHRvIGJlIGdlbmVyYXRlZC5cbiAgICpcbiAgICogSWYgdGhlIGNvbXBpbGF0aW9uIG1vZGUgaXMgY29uZmlndXJlZCBhcyBwYXJ0aWFsLCBhbmQgYW4gaW1wbGVtZW50YXRpb24gb2YgYGNvbXBpbGVQYXJ0aWFsYCBpc1xuICAgKiBwcm92aWRlZCwgdGhlbiB0aGlzIG1ldGhvZCBpcyBub3QgY2FsbGVkLlxuICAgKi9cbiAgY29tcGlsZUZ1bGwoXG4gICAgICBub2RlOiBDbGFzc0RlY2xhcmF0aW9uLCBhbmFseXNpczogUmVhZG9ubHk8QT4sIHJlc29sdXRpb246IFJlYWRvbmx5PFI+LFxuICAgICAgY29uc3RhbnRQb29sOiBDb25zdGFudFBvb2wpOiBDb21waWxlUmVzdWx0fENvbXBpbGVSZXN1bHRbXTtcblxuICAvKipcbiAgICogR2VuZXJhdGVzIGNvZGUgZm9yIHRoZSBkZWNvcmF0b3IgdXNpbmcgYSBzdGFibGUsIGJ1dCBpbnRlcm1lZGlhdGUgZm9ybWF0IHN1aXRhYmxlIHRvIGJlXG4gICAqIHB1Ymxpc2hlZCB0byBOUE0uIFRoaXMgY29kZSBpcyBtZWFudCB0byBiZSBwcm9jZXNzZWQgYnkgdGhlIGxpbmtlciB0byBhY2hpZXZlIHRoZSBmaW5hbCBBT1RcbiAgICogY29tcGlsZWQgY29kZS5cbiAgICpcbiAgICogSWYgcHJlc2VudCwgdGhpcyBtZXRob2QgaXMgdXNlZCBpZiB0aGUgY29tcGlsYXRpb24gbW9kZSBpcyBjb25maWd1cmVkIGFzIHBhcnRpYWwsIG90aGVyd2lzZVxuICAgKiBgY29tcGlsZUZ1bGxgIGlzLlxuICAgKi9cbiAgY29tcGlsZVBhcnRpYWw/XG4gICAgICAobm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgYW5hbHlzaXM6IFJlYWRvbmx5PEE+LCByZXNvbHV0aW9uOiBSZWFkb25seTxSPik6IENvbXBpbGVSZXN1bHRcbiAgICAgIHxDb21waWxlUmVzdWx0W107XG59XG5cbi8qKlxuICogVGhlIG91dHB1dCBvZiBkZXRlY3RpbmcgYSB0cmFpdCBmb3IgYSBkZWNsYXJhdGlvbiBhcyB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdCBwaGFzZSBvZiB0aGVcbiAqIGNvbXBpbGF0aW9uIHBpcGVsaW5lLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERldGVjdFJlc3VsdDxNPiB7XG4gIC8qKlxuICAgKiBUaGUgbm9kZSB0aGF0IHRyaWdnZXJlZCB0aGUgbWF0Y2gsIHdoaWNoIGlzIHR5cGljYWxseSBhIGRlY29yYXRvci5cbiAgICovXG4gIHRyaWdnZXI6IHRzLk5vZGV8bnVsbDtcblxuICAvKipcbiAgICogUmVmZXJzIHRvIHRoZSBkZWNvcmF0b3IgdGhhdCB3YXMgcmVjb2duaXplZCBmb3IgdGhpcyBkZXRlY3Rpb24sIGlmIGFueS4gVGhpcyBjYW4gYmUgYSBjb25jcmV0ZVxuICAgKiBkZWNvcmF0b3IgdGhhdCBpcyBhY3R1YWxseSBwcmVzZW50IGluIGEgZmlsZSwgb3IgYSBzeW50aGV0aWMgZGVjb3JhdG9yIGFzIGluc2VydGVkXG4gICAqIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICBkZWNvcmF0b3I6IERlY29yYXRvcnxudWxsO1xuXG4gIC8qKlxuICAgKiBBbiBhcmJpdHJhcnkgb2JqZWN0IHRvIGNhcnJ5IG92ZXIgZnJvbSB0aGUgZGV0ZWN0aW9uIHBoYXNlIGludG8gdGhlIGFuYWx5c2lzIHBoYXNlLlxuICAgKi9cbiAgbWV0YWRhdGE6IFJlYWRvbmx5PE0+O1xufVxuXG4vKipcbiAqIFRoZSBvdXRwdXQgb2YgYW4gYW5hbHlzaXMgb3BlcmF0aW9uLCBjb25zaXN0aW5nIG9mIHBvc3NpYmx5IGFuIGFyYml0cmFyeSBhbmFseXNpcyBvYmplY3QgKHVzZWQgYXNcbiAqIHRoZSBpbnB1dCB0byBjb2RlIGdlbmVyYXRpb24pIGFuZCBwb3RlbnRpYWxseSBkaWFnbm9zdGljcyBpZiB0aGVyZSB3ZXJlIGVycm9ycyB1bmNvdmVyZWQgZHVyaW5nXG4gKiBhbmFseXNpcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmFseXNpc091dHB1dDxBPiB7XG4gIGFuYWx5c2lzPzogUmVhZG9ubHk8QT47XG4gIGRpYWdub3N0aWNzPzogdHMuRGlhZ25vc3RpY1tdO1xufVxuXG4vKipcbiAqIEEgZGVzY3JpcHRpb24gb2YgdGhlIHN0YXRpYyBmaWVsZCB0byBhZGQgdG8gYSBjbGFzcywgaW5jbHVkaW5nIGFuIGluaXRpYWxpemF0aW9uIGV4cHJlc3Npb25cbiAqIGFuZCBhIHR5cGUgZm9yIHRoZSAuZC50cyBmaWxlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVSZXN1bHQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGluaXRpYWxpemVyOiBFeHByZXNzaW9uO1xuICBzdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXTtcbiAgdHlwZTogVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlUmVzdWx0PFI+IHtcbiAgcmVleHBvcnRzPzogUmVleHBvcnRbXTtcbiAgZGlhZ25vc3RpY3M/OiB0cy5EaWFnbm9zdGljW107XG4gIGRhdGE/OiBSZWFkb25seTxSPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEdHNUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm1DbGFzc0VsZW1lbnQ/KGVsZW1lbnQ6IHRzLkNsYXNzRWxlbWVudCwgaW1wb3J0czogSW1wb3J0TWFuYWdlcik6IHRzLkNsYXNzRWxlbWVudDtcbiAgdHJhbnNmb3JtRnVuY3Rpb25EZWNsYXJhdGlvbj9cbiAgICAgIChlbGVtZW50OiB0cy5GdW5jdGlvbkRlY2xhcmF0aW9uLCBpbXBvcnRzOiBJbXBvcnRNYW5hZ2VyKTogdHMuRnVuY3Rpb25EZWNsYXJhdGlvbjtcbiAgdHJhbnNmb3JtQ2xhc3M/XG4gICAgICAoY2xheno6IHRzLkNsYXNzRGVjbGFyYXRpb24sIGVsZW1lbnRzOiBSZWFkb25seUFycmF5PHRzLkNsYXNzRWxlbWVudD4sXG4gICAgICAgaW1wb3J0czogSW1wb3J0TWFuYWdlcik6IHRzLkNsYXNzRGVjbGFyYXRpb247XG59XG4iXX0=