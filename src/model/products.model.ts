import prisma from "./prisma_client"

export async function getProductByID(id: number) {
  try {
    return await prisma.products.findUnique({
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
    })
  } catch (error) {
    throw error
  }
}

export async function getAllProducts(page: number){
  const entriesPerPage = 10
  try {
    return await prisma.products.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
      take: entriesPerPage,
      skip: entriesPerPage * (page - 1)
    })
  } catch (error) {
    throw error
  }
}

export async function getGenresByProductID(id: number) {
  try {
    return await prisma.productGenre.findMany({
      where: { product_id: id },
      select: {
        Genres: {
          select: {
            name: true
          }
        }
      }
    })
  } catch (error) {
    throw error
  }
}

export async function getGenresAndProducts() {
  try {
    return await prisma.productGenre.findMany({
      select: {
        product_id: true,
        genre_id: true,
        Genres: {
          select: {
            name: true
          },
        }
      }
    })
  } catch (error) {
    throw error
  }
}

export async function countProducts() {
  try {
    return await prisma.products.count()
  } catch (error) {
    throw error
  }
}

