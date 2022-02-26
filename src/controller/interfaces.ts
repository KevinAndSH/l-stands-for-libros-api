export interface userGeneralInfo {
  id: number
  first_name: string
  last_name: string
  email: string
  detail?: string
}

export interface userSpecificInfo {
  id: number
  first_name: string
  last_name: string
  email: string
  img_path: string | null
}

export interface productGeneralInfo {
  id: number
  name: string
  description: string | null
  genres?: string[]
  detail?: string
}

export interface productSpecificInfo {
  id: number
  name: string
  author: string
  isbn: string
  house: string
  price: number
  description: string | null
  genres?: string[]
  detail?: string
  img_path: string | null
}

export interface pageLinks {
  previous?: string
  next?: string
}