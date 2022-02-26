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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countUsers = exports.getUserByID = exports.getAllUsers = void 0;
const prisma_client_1 = __importDefault(require("./prisma_client"));
function getAllUsers(page) {
    return __awaiter(this, void 0, void 0, function* () {
        const entriesPerPage = 10;
        try {
            return yield prisma_client_1.default.users.findMany({
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                },
                take: entriesPerPage,
                skip: entriesPerPage * (page - 1)
            });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getAllUsers = getAllUsers;
function getUserByID(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield prisma_client_1.default.users.findUnique({
                where: { id },
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                    img_path: true
                }
            });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getUserByID = getUserByID;
function countUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield prisma_client_1.default.users.count();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.countUsers = countUsers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWwvdXNlcnMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW9DO0FBRXBDLFNBQXNCLFdBQVcsQ0FBQyxJQUFZOztRQUM1QyxNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUE7UUFDekIsSUFBSTtZQUNGLE9BQU8sTUFBTSx1QkFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBQ2pDLE1BQU0sRUFBRTtvQkFDTixFQUFFLEVBQUUsSUFBSTtvQkFDUixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0QsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSxjQUFjLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDLENBQUMsQ0FBQTtTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLEtBQUssQ0FBQTtTQUNaO0lBQ0gsQ0FBQztDQUFBO0FBaEJELGtDQWdCQztBQUVELFNBQXNCLFdBQVcsQ0FBQyxFQUFVOztRQUMxQyxJQUFJO1lBQ0YsT0FBTyxNQUFNLHVCQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFDbkMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUNiLE1BQU0sRUFBRTtvQkFDTixFQUFFLEVBQUUsSUFBSTtvQkFDUixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRixDQUFDLENBQUE7U0FDSDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUE7U0FDWjtJQUNILENBQUM7Q0FBQTtBQWZELGtDQWVDO0FBRUQsU0FBc0IsVUFBVTs7UUFDOUIsSUFBSTtZQUNGLE9BQU8sTUFBTSx1QkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUNsQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUE7U0FDWjtJQUNILENBQUM7Q0FBQTtBQU5ELGdDQU1DIn0=