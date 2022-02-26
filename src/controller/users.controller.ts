import { Request, Response } from "express";
import { countUsers, getAllUsers, getUserByID } from "../model/users.model"
import { pageLinks, userGeneralInfo, userSpecificInfo } from "./interfaces"

export async function getUsers(req: Request, res: Response) {
  try {
    const page = parseInt((req.query.page || "1").toString())
    const count = await countUsers()
    const users: userGeneralInfo[] = await getAllUsers(page)

    const pageLinks: pageLinks = {}
    const totalPages = Math.ceil(count/10)
    if (page < totalPages) pageLinks.next = `${req.protocol}://${req.hostname}/api/products?page=${page + 1}`
    if (page > 1) pageLinks.previous = `${req.protocol}://${req.hostname}/api/products?page=${page - 1}`

    res.json({
      count,
      users: users.map(user => {
        return {...user, detail: `https://lstandsforlibros.herokuapp.com/users/detail/${user.id}`}
      }),
      ...pageLinks
    })
  } catch (error) {
    console.error(error)
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id)
    const user: userSpecificInfo | null = await getUserByID(id)
    res.json({...user, img_path: `https://lstandsforlibros.herokuapp.com/img/users/${user?.img_path}`}) 
  } catch (error) {
    console.error(error)
  }
}