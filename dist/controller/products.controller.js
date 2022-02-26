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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const products_model_1 = require("../model/products.model");
function getProducts(req, res) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const page = parseInt((req.query.page || "1").toString());
            const count = yield (0, products_model_1.countProducts)();
            const countByGenre = {};
            const genresResult = yield (0, products_model_1.getGenresAndProducts)();
            genresResult.forEach(item => {
                if (!countByGenre[item.Genres.name])
                    countByGenre[item.Genres.name] = 0;
                countByGenre[item.Genres.name]++;
            });
            const products = yield (0, products_model_1.getAllProducts)(page);
            try {
                for (var products_1 = __asyncValues(products), products_1_1; products_1_1 = yield products_1.next(), !products_1_1.done;) {
                    const product = products_1_1.value;
                    product.detail = `https://lstandsforlibros.herokuapp.com/products/${product.id}`;
                    product.genres = genresResult
                        .filter(item => item.product_id === product.id)
                        .map(item => item.Genres.name);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (products_1_1 && !products_1_1.done && (_a = products_1.return)) yield _a.call(products_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            const pageLinks = {};
            const totalPages = Math.ceil(count / 10);
            if (page < totalPages)
                pageLinks.next = `${req.protocol}://${req.hostname}/api/products?page=${page + 1}`;
            if (page > 1)
                pageLinks.previous = `${req.protocol}://${req.hostname}/api/products?page=${page - 1}`;
            res.json(Object.assign({ count,
                countByGenre,
                products }, pageLinks));
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getProducts = getProducts;
function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const product = yield (0, products_model_1.getProductByID)(id);
            const genres = yield (0, products_model_1.getGenresByProductID)(id);
            const img_path = `https://lstandsforlibros.herokuapp.com/img/products/${product === null || product === void 0 ? void 0 : product.img_path}`;
            res.json(Object.assign(Object.assign({}, product), { genres: genres.map(item => item.Genres.name), img_path }));
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getProduct = getProduct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL3Byb2R1Y3RzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDREQUFtSTtBQUduSSxTQUFzQixXQUFXLENBQUMsR0FBWSxFQUFFLEdBQWE7OztRQUMzRCxJQUFJO1lBQ0YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUN6RCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsOEJBQWEsR0FBRSxDQUFBO1lBQ25DLE1BQU0sWUFBWSxHQUE4QixFQUFFLENBQUE7WUFFbEQsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFBLHFDQUFvQixHQUFFLENBQUE7WUFDakQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ3ZFLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7WUFDbEMsQ0FBQyxDQUFDLENBQUE7WUFFRixNQUFNLFFBQVEsR0FBeUIsTUFBTSxJQUFBLCtCQUFjLEVBQUMsSUFBSSxDQUFDLENBQUE7O2dCQUNqRSxLQUE0QixJQUFBLGFBQUEsY0FBQSxRQUFRLENBQUEsY0FBQTtvQkFBekIsTUFBTSxPQUFPLHFCQUFBLENBQUE7b0JBQ3RCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsbURBQW1ELE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQTtvQkFDaEYsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZO3lCQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUM7eUJBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ2pDOzs7Ozs7Ozs7WUFFRCxNQUFNLFNBQVMsR0FBYyxFQUFFLENBQUE7WUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDLENBQUE7WUFDdEMsSUFBSSxJQUFJLEdBQUcsVUFBVTtnQkFBRSxTQUFTLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsTUFBTSxHQUFHLENBQUMsUUFBUSxzQkFBc0IsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFBO1lBQ3pHLElBQUksSUFBSSxHQUFHLENBQUM7Z0JBQUUsU0FBUyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLE1BQU0sR0FBRyxDQUFDLFFBQVEsc0JBQXNCLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQTtZQUVwRyxHQUFHLENBQUMsSUFBSSxpQkFDTixLQUFLO2dCQUNMLFlBQVk7Z0JBQ1osUUFBUSxJQUNMLFNBQVMsRUFDWixDQUFBO1NBQ0g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDckI7O0NBQ0Y7QUFsQ0Qsa0NBa0NDO0FBRUQsU0FBc0IsVUFBVSxDQUFDLEdBQVksRUFBRSxHQUFhOztRQUMxRCxJQUFJO1lBQ0YsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDbEMsTUFBTSxPQUFPLEdBQStCLE1BQU0sSUFBQSwrQkFBYyxFQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3BFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxxQ0FBb0IsRUFBQyxFQUFFLENBQUMsQ0FBQTtZQUM3QyxNQUFNLFFBQVEsR0FBRyx1REFBdUQsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFFBQVEsRUFBRSxDQUFBO1lBRTNGLEdBQUcsQ0FBQyxJQUFJLGlDQUNILE9BQU8sS0FDVixNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQzVDLFFBQVEsSUFDUixDQUFBO1NBQ0g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDckI7SUFDSCxDQUFDO0NBQUE7QUFmRCxnQ0FlQyJ9