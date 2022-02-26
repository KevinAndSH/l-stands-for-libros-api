"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users_controller_1 = require("../controller/users.controller");
router.get("/", users_controller_1.getUsers);
router.get("/:id", users_controller_1.getUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy91c2Vycy5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBNkI7QUFDN0IsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUUvQixxRUFBa0U7QUFFbEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsMkJBQVEsQ0FBQyxDQUFBO0FBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDBCQUFPLENBQUMsQ0FBQTtBQUUzQixrQkFBZSxNQUFNLENBQUEifQ==