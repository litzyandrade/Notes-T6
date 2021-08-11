"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const latest_versions_1 = require("../utility/latest-versions");
function default_1(options) {
    return schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files'), [
        options.minimal ? schematics_1.filter((path) => !path.endsWith('editorconfig.template')) : schematics_1.noop(),
        schematics_1.applyTemplates({
            utils: core_1.strings,
            ...options,
            'dot': '.',
            latestVersions: latest_versions_1.latestVersions,
        }),
    ]));
}
exports.default = default_1;
