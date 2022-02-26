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
exports.getUser = exports.getUsers = void 0;
const users_model_1 = require("../model/users.model");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const page = parseInt((req.query.page || "1").toString());
            const count = yield (0, users_model_1.countUsers)();
            const users = yield (0, users_model_1.getAllUsers)(page);
            const pageLinks = {};
            const totalPages = Math.ceil(count / 10);
            if (page < totalPages)
                pageLinks.next = `${req.protocol}://${req.hostname}/api/products?page=${page + 1}`;
            if (page > 1)
                pageLinks.previous = `${req.protocol}://${req.hostname}/api/products?page=${page - 1}`;
            res.json(Object.assign({ count, users: users.map(user => {
                    return Object.assign(Object.assign({}, user), { detail: `https://lstandsforlibros.herokuapp.com/users/detail/${user.id}` });
                }) }, pageLinks));
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getUsers = getUsers;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const user = yield (0, users_model_1.getUserByID)(id);
            res.json(Object.assign(Object.assign({}, user), { img_path: `https://lstandsforlibros.herokuapp.com/img/users/${user === null || user === void 0 ? void 0 : user.img_path}` }));
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getUser = getUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL3VzZXJzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0Esc0RBQTJFO0FBRzNFLFNBQXNCLFFBQVEsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7UUFDeEQsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDekQsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFBLHdCQUFVLEdBQUUsQ0FBQTtZQUNoQyxNQUFNLEtBQUssR0FBc0IsTUFBTSxJQUFBLHlCQUFXLEVBQUMsSUFBSSxDQUFDLENBQUE7WUFFeEQsTUFBTSxTQUFTLEdBQWMsRUFBRSxDQUFBO1lBQy9CLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3RDLElBQUksSUFBSSxHQUFHLFVBQVU7Z0JBQUUsU0FBUyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLE1BQU0sR0FBRyxDQUFDLFFBQVEsc0JBQXNCLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQTtZQUN6RyxJQUFJLElBQUksR0FBRyxDQUFDO2dCQUFFLFNBQVMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxNQUFNLEdBQUcsQ0FBQyxRQUFRLHNCQUFzQixJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUE7WUFFcEcsR0FBRyxDQUFDLElBQUksaUJBQ04sS0FBSyxFQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN0Qix1Q0FBVyxJQUFJLEtBQUUsTUFBTSxFQUFFLHVEQUF1RCxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUM7Z0JBQzVGLENBQUMsQ0FBQyxJQUNDLFNBQVMsRUFDWixDQUFBO1NBQ0g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDckI7SUFDSCxDQUFDO0NBQUE7QUFyQkQsNEJBcUJDO0FBRUQsU0FBc0IsT0FBTyxDQUFDLEdBQVksRUFBRSxHQUFhOztRQUN2RCxJQUFJO1lBQ0YsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDbEMsTUFBTSxJQUFJLEdBQTRCLE1BQU0sSUFBQSx5QkFBVyxFQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzNELEdBQUcsQ0FBQyxJQUFJLGlDQUFLLElBQUksS0FBRSxRQUFRLEVBQUUsb0RBQW9ELElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxRQUFRLEVBQUUsSUFBRSxDQUFBO1NBQ3BHO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3JCO0lBQ0gsQ0FBQztDQUFBO0FBUkQsMEJBUUMifQ==