"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const products_controller_1 = require("../controller/products.controller");
router.get("/", products_controller_1.getProducts);
router.get("/:id", products_controller_1.getProduct);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9wcm9kdWN0cy5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBNkI7QUFDN0IsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUUvQiwyRUFBMkU7QUFFM0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsaUNBQVcsQ0FBQyxDQUFBO0FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGdDQUFVLENBQUMsQ0FBQTtBQUc5QixrQkFBZSxNQUFNLENBQUEifQ==