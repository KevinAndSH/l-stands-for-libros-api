import prisma from "./prisma_client"

export async function getAllUsers(page: number) {
  const entriesPerPage = 10
  try {
    return await prisma.users.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
      },
      take: entriesPerPage,
      skip: entriesPerPage * (page - 1)
    })
  } catch (error) {
    throw error
  }
}

export async function getUserByID(id: number) {
  try {
    return await prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        img_path: true
      }
    })
  } catch (error) {
    throw error
  }
}

export async function countUsers() {
  try {
    return await prisma.users.count()
  } catch (error) {
    throw error
  }
}