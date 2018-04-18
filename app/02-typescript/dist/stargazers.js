"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const GitHub = require("github-api");
console.log('start');
const gh = new GitHub({
    token: 'bd45521a2809ff942faeb3b9efab9411225f75ea'
});
console.log('gh', gh);
const jlguenego = gh.getUser('jlguenego');
(() => __awaiter(this, void 0, void 0, function* () {
    const repos = yield jlguenego.listStarredRepos();
    console.log('Here is the list of all the repos I have starred:');
    repos.data.forEach(r => console.log('name:', r.full_name));
}))();
