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
exports.revalidarToken = void 0;
const jwt_1 = require("./jwt");
const revalidarToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uid = req.uid;
    const name = req.nombre;
    console.log('uid: ', uid);
    console.log('name: ', name);
    const token = yield (0, jwt_1.generateJWT)(uid, name);
    console.log('token: ', token);
    res.json({
        ok: true,
        uid: uid,
        name: name,
        token: token
    });
});
exports.revalidarToken = revalidarToken;
//# sourceMappingURL=revalidarToken.js.map