"use server"

import sql from "../db"
import { Config } from "./types"

export async function Selecting() {
    return (await sql`SELECT * FROM todolist`).map(i => ({id:i.id, title:i.title}))
}

export async function Inserting(settings: Config) {
    await sql`INSERT INTO todolist (title) VALUES (${settings.title})`
}

export async function Deleting(settings: number){
    await sql`DELETE FROM todolist WHERE id=${settings}`
  }  

export async function Updating(settings: Config) {
    await sql`UPDATE todolist SET title = ${settings.title} WHERE ${settings.id}`
}
