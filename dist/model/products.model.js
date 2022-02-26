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
exports.countProducts = exports.getGenresAndProducts = exports.getGenresByProductID = exports.getAllProducts = exports.getProductByID = void 0;
const prisma_client_1 = __importDefault(require("./prisma_client"));
function getProductByID(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield prisma_client_1.default.products.findUnique({
                where: { id },
                select: {
                    id: true,
                    name: true,
                    author: true,
                    isbn: true,
                    house: true,
                    price: true,
                    description: true,
                    img_path: true
                }
            });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getProductByID = getProductByID;
function getAllProducts(page) {
    return __awaiter(this, void 0, void 0, function* () {
        const entriesPerPage = 10;
        try {
            return yield prisma_client_1.default.products.findMany({
                select: {
                    id: true,
                    name: true,
                    description: true,
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
exports.getAllProducts = getAllProducts;
function getGenresByProductID(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield prisma_client_1.default.productGenre.findMany({
                where: { product_id: id },
                select: {
                    Genres: {
                        select: {
                            name: true
                        }
                    }
                }
            });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getGenresByProductID = getGenresByProductID;
function getGenresAndProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield prisma_client_1.default.productGenre.findMany({
                select: {
                    product_id: true,
                    genre_id: true,
                    Genres: {
                        select: {
                            name: true
                        },
                    }
                }
            });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getGenresAndProducts = getGenresAndProducts;
function countProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield prisma_client_1.default.products.count();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.countProducts = countProducts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWwvcHJvZHVjdHMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW9DO0FBRXBDLFNBQXNCLGNBQWMsQ0FBQyxFQUFVOztRQUM3QyxJQUFJO1lBQ0YsT0FBTyxNQUFNLHVCQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDdEMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUNiLE1BQU0sRUFBRTtvQkFDTixFQUFFLEVBQUUsSUFBSTtvQkFDUixJQUFJLEVBQUUsSUFBSTtvQkFDVixNQUFNLEVBQUUsSUFBSTtvQkFDWixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLLEVBQUUsSUFBSTtvQkFDWCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxXQUFXLEVBQUUsSUFBSTtvQkFDakIsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRixDQUFDLENBQUE7U0FDSDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUE7U0FDWjtJQUNILENBQUM7Q0FBQTtBQWxCRCx3Q0FrQkM7QUFFRCxTQUFzQixjQUFjLENBQUMsSUFBWTs7UUFDL0MsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFBO1FBQ3pCLElBQUk7WUFDRixPQUFPLE1BQU0sdUJBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUNwQyxNQUFNLEVBQUU7b0JBQ04sRUFBRSxFQUFFLElBQUk7b0JBQ1IsSUFBSSxFQUFFLElBQUk7b0JBQ1YsV0FBVyxFQUFFLElBQUk7aUJBQ2xCO2dCQUNELElBQUksRUFBRSxjQUFjO2dCQUNwQixJQUFJLEVBQUUsY0FBYyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUE7U0FDSDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUE7U0FDWjtJQUNILENBQUM7Q0FBQTtBQWZELHdDQWVDO0FBRUQsU0FBc0Isb0JBQW9CLENBQUMsRUFBVTs7UUFDbkQsSUFBSTtZQUNGLE9BQU8sTUFBTSx1QkFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3hDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUU7Z0JBQ3pCLE1BQU0sRUFBRTtvQkFDTixNQUFNLEVBQUU7d0JBQ04sTUFBTSxFQUFFOzRCQUNOLElBQUksRUFBRSxJQUFJO3lCQUNYO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sS0FBSyxDQUFBO1NBQ1o7SUFDSCxDQUFDO0NBQUE7QUFmRCxvREFlQztBQUVELFNBQXNCLG9CQUFvQjs7UUFDeEMsSUFBSTtZQUNGLE9BQU8sTUFBTSx1QkFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRTtvQkFDTixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLElBQUk7b0JBQ2QsTUFBTSxFQUFFO3dCQUNOLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsSUFBSTt5QkFDWDtxQkFDRjtpQkFDRjthQUNGLENBQUMsQ0FBQTtTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLEtBQUssQ0FBQTtTQUNaO0lBQ0gsQ0FBQztDQUFBO0FBaEJELG9EQWdCQztBQUVELFNBQXNCLGFBQWE7O1FBQ2pDLElBQUk7WUFDRixPQUFPLE1BQU0sdUJBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDckM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sS0FBSyxDQUFBO1NBQ1o7SUFDSCxDQUFDO0NBQUE7QUFORCxzQ0FNQyJ9