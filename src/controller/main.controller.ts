import { Request, Response } from "express"

export function greet(req: Request, res: Response) {
  res.json({
    text: "Hi!"
  })
}