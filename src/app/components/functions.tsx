"use server"

import sql from "../db"
import { Config } from "./types"

export async function selecting() {
    return (await sql`SELECT * FROM todolist`).map(i => ({id:i.id, title:i.title}))
}

export async function inserting(settings: Config) {
    await sql`INSERT INTO todolist (title) VALUES (${settings.title})`
}

export async function deleting(settings: number){
    await sql`DELETE FROM todolist WHERE id = ${settings}`
  }  

export async function updating(settings: Config) {
    await sql`UPDATE todolist SET title = ${settings.title} WHERE id = ${settings.id}`
}