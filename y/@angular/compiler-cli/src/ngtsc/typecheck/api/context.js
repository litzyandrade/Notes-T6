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
        define("@angular/compiler-cli/src/ngtsc/typecheck/api/context", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHlwZWNoZWNrL2FwaS9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BhcnNlRXJyb3IsIFBhcnNlU291cmNlRmlsZSwgUjNUYXJnZXRCaW5kZXIsIFNjaGVtYU1ldGFkYXRhLCBUbXBsQXN0Tm9kZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICcuLi8uLi9pbXBvcnRzJztcbmltcG9ydCB7Q2xhc3NEZWNsYXJhdGlvbn0gZnJvbSAnLi4vLi4vcmVmbGVjdGlvbic7XG5cbmltcG9ydCB7VGVtcGxhdGVTb3VyY2VNYXBwaW5nLCBUeXBlQ2hlY2thYmxlRGlyZWN0aXZlTWV0YX0gZnJvbSAnLi9hcGknO1xuXG4vKipcbiAqIEEgY3VycmVudGx5IHBlbmRpbmcgdHlwZSBjaGVja2luZyBvcGVyYXRpb24sIGludG8gd2hpY2ggdGVtcGxhdGVzIGZvciB0eXBlLWNoZWNraW5nIGNhbiBiZVxuICogcmVnaXN0ZXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUeXBlQ2hlY2tDb250ZXh0IHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgdGVtcGxhdGUgdG8gcG90ZW50aWFsbHkgYmUgdHlwZS1jaGVja2VkLlxuICAgKlxuICAgKiBUZW1wbGF0ZXMgcmVnaXN0ZXJlZCB2aWEgYGFkZFRlbXBsYXRlYCBhcmUgYXZhaWxhYmxlIGZvciBjaGVja2luZywgYnV0IG1pZ2h0IGJlIHNraXBwZWQgaWZcbiAgICogY2hlY2tpbmcgb2YgdGhhdCBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLiBUaGlzIGNhbiBoYXBwZW4gZm9yIGEgZmV3IHJlYXNvbnMsIGluY2x1ZGluZyBpZlxuICAgKiB0aGUgY29tcG9uZW50IHdhcyBwcmV2aW91c2x5IGNoZWNrZWQgYW5kIHRoZSBwcmlvciByZXN1bHRzIGFyZSBzdGlsbCB2YWxpZC5cbiAgICpcbiAgICogQHBhcmFtIHJlZiBhIGBSZWZlcmVuY2VgIHRvIHRoZSBjb21wb25lbnQgY2xhc3Mgd2hpY2ggeWllbGRlZCB0aGlzIHRlbXBsYXRlLlxuICAgKiBAcGFyYW0gYmluZGVyIGFuIGBSM1RhcmdldEJpbmRlcmAgd2hpY2ggZW5jYXBzdWxhdGVzIHRoZSBzY29wZSBvZiB0aGlzIHRlbXBsYXRlLCBpbmNsdWRpbmcgYWxsXG4gICAqIGF2YWlsYWJsZSBkaXJlY3RpdmVzLlxuICAgKiBAcGFyYW0gdGVtcGxhdGUgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIEFTVCBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIHBpcGVzIGEgYE1hcGAgb2YgcGlwZXMgYXZhaWxhYmxlIHdpdGhpbiB0aGUgc2NvcGUgb2YgdGhpcyB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIHNjaGVtYXMgYW55IHNjaGVtYXMgd2hpY2ggYXBwbHkgdG8gdGhpcyB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIHNvdXJjZU1hcHBpbmcgYSBgVGVtcGxhdGVTb3VyY2VNYXBwaW5nYCBpbnN0YW5jZSB3aGljaCBkZXNjcmliZXMgdGhlIG9yaWdpbiBvZiB0aGVcbiAgICogdGVtcGxhdGUgdGV4dCBkZXNjcmliZWQgYnkgdGhlIEFTVC5cbiAgICogQHBhcmFtIGZpbGUgdGhlIGBQYXJzZVNvdXJjZUZpbGVgIGFzc29jaWF0ZWQgd2l0aCB0aGUgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSBwYXJzZUVycm9ycyB0aGUgYFBhcnNlRXJyb3JgJ3MgYXNzb2NpYXRlZCB3aXRoIHRoZSB0ZW1wbGF0ZS5cbiAgICovXG4gIGFkZFRlbXBsYXRlKFxuICAgICAgcmVmOiBSZWZlcmVuY2U8Q2xhc3NEZWNsYXJhdGlvbjx0cy5DbGFzc0RlY2xhcmF0aW9uPj4sXG4gICAgICBiaW5kZXI6IFIzVGFyZ2V0QmluZGVyPFR5cGVDaGVja2FibGVEaXJlY3RpdmVNZXRhPiwgdGVtcGxhdGU6IFRtcGxBc3ROb2RlW10sXG4gICAgICBwaXBlczogTWFwPHN0cmluZywgUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb248dHMuQ2xhc3NEZWNsYXJhdGlvbj4+PixcbiAgICAgIHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW10sIHNvdXJjZU1hcHBpbmc6IFRlbXBsYXRlU291cmNlTWFwcGluZywgZmlsZTogUGFyc2VTb3VyY2VGaWxlLFxuICAgICAgcGFyc2VFcnJvcnM6IFBhcnNlRXJyb3JbXXxudWxsKTogdm9pZDtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgdG8gdHJpZ2dlciBnZW5lcmF0aW9uIG9mIHR5cGUtY2hlY2tpbmcgY29kZSBmb3IgYSBwcm9ncmFtIGdpdmVuIGEgbmV3XG4gKiBgVHlwZUNoZWNrQ29udGV4dGAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3JhbVR5cGVDaGVja0FkYXB0ZXIge1xuICB0eXBlQ2hlY2soc2Y6IHRzLlNvdXJjZUZpbGUsIGN0eDogVHlwZUNoZWNrQ29udGV4dCk6IHZvaWQ7XG59XG4iXX0=