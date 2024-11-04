"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
class Settings {
    constructor(sdk) {
        this.sdk = sdk;
    }
    getAllSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            let settings = {};
            try {
                const resp = yield this.sdk.fetch(constants_1.ENDPOINTS.settings.all, {}, {
                    next: {
                        revalidate: process.env.NODE_ENV === "development" ? 0 : 3600,
                        tags: [constants_1.fetchTags.settings],
                    },
                });
                if (resp === null || resp === void 0 ? void 0 : resp.data) {
                    //make a settings object from array
                    (_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.map((item) => {
                        let val = item === null || item === void 0 ? void 0 : item.value;
                        if (val === "null") {
                            val = null; //convert string 'null' to actual null
                        }
                        settings[item === null || item === void 0 ? void 0 : item.key] = val;
                    });
                    return settings;
                }
            }
            catch (e) {
                console.log("failed to get settings", e);
                return {};
            }
        });
    }
}
exports.default = Settings;
