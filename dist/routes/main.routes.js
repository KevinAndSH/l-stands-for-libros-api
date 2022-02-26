"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const main_controller_1 = require("../controller/main.controller");
router.get("/", main_controller_1.greet);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL21haW4ucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQTZCO0FBQzdCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFL0IsbUVBQXFEO0FBRXJELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLHVCQUFLLENBQUMsQ0FBQTtBQUd0QixrQkFBZSxNQUFNLENBQUEifQ==