"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateRegister = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../middlewares/validate");
exports.validateRegister = [
    (0, express_validator_1.body)('nombre')
        .exists().withMessage('El nombre debe existir')
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .isString().withMessage('El nombre no es válido'),
    (0, express_validator_1.body)('apellido')
        .exists().withMessage('El apelludo debe existir')
        .notEmpty().withMessage('El apelludo no puede estar vacío')
        .isString().withMessage('El apelludo no es válido'),
    (0, express_validator_1.body)('email')
        .exists().withMessage('El email debe existir')
        .notEmpty().withMessage("El email no puede estar vacío")
        .isEmail().withMessage("El email no es válido"),
    (0, express_validator_1.body)('password')
        .exists().withMessage('La contraseña debe existir')
        .notEmpty().withMessage("La contraseña no puede estar vacío")
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
        .isString().withMessage('La contraseña no es válida'),
    validate_1.validarCampos
];
exports.validateLogin = [
    (0, express_validator_1.body)('email')
        .exists().withMessage('El email debe existir')
        .notEmpty().withMessage("El email no puede estar vacío")
        .isEmail().withMessage("El email no es válido"),
    (0, express_validator_1.body)('password')
        .exists().withMessage('La contraseña debe existir')
        .notEmpty().withMessage("La contraseña no puede estar vacío")
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
        .isString().withMessage('La contraseña no es válida'),
    validate_1.validarCampos
];
//# sourceMappingURL=userShema.js.map