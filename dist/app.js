"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const routes_1 = require("./routes");
app.use("/", routes_1.mainRoutes);
app.use("/api/users", routes_1.usersRoutes);
app.use("/api/products", routes_1.productsRoutes);
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE2QjtBQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQTtBQUVyQixxQ0FBa0U7QUFDbEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsbUJBQVUsQ0FBQyxDQUFBO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLG9CQUFXLENBQUMsQ0FBQTtBQUNsQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSx1QkFBYyxDQUFDLENBQUE7QUFHeEMsa0JBQWUsR0FBRyxDQUFBIn0=