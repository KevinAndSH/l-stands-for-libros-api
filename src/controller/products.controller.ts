import { Request, Response } from "express"
import { countProducts, getAllProducts, getGenresAndProducts, getGenresByProductID, getProductByID } from "../model/products.model"
import { pageLinks, productGeneralInfo, productSpecificInfo } from "../controller/interfaces"

export async function getProducts(req: Request, res: Response) {
  try {
    const page = parseInt((req.query.page || "1").toString())
    const count = await countProducts()
    const countByGenre: {[index: string]: number} = {}
    
    const genresResult = await getGenresAndProducts()
    genresResult.forEach(item => {
      if (!countByGenre[item.Genres.name]) countByGenre[item.Genres.name] = 0
      countByGenre[item.Genres.name]++
    })
    
    const products: productGeneralInfo[] = await getAllProducts(page)
    for await (const product of products) {
      product.detail = `https://lstandsforlibros.herokuapp.com/products/${product.id}`
      product.genres = genresResult
        .filter(item => item.product_id === product.id)
        .map(item => item.Genres.name)
    }

    const pageLinks: pageLinks = {}
    const totalPages = Math.ceil(count/10)
    if (page < totalPages) pageLinks.next = `${req.protocol}://${req.hostname}/api/products?page=${page + 1}`
    if (page > 1) pageLinks.previous = `${req.protocol}://${req.hostname}/api/products?page=${page - 1}`

    res.json({
      count,
      countByGenre,
      products,
      ...pageLinks
    })
  } catch (error) {
    console.error(error)
  }
}

export async function getProduct(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id)
    const product: productSpecificInfo | null = await getProductByID(id)
    const genres = await getGenresByProductID(id)
    const img_path = `https://lstandsforlibros.herokuapp.com/img/products/${product?.img_path}`

    res.json({
      ...product,
      genres: genres.map(item => item.Genres.name),
      img_path
    })
  } catch (error) {
    console.error(error)
  }
}