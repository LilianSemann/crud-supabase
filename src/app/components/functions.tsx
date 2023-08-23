"use server"

import sql from "../db"

export type Config = {
    id: number,
    title: string,
    is_complete: boolean
}

export async function Selecting() {
    return (await sql`SELECT * FROM todolist`).map(i => ({id:i.id, title:i.title}))
}

export async function Inserting(settings: Config) {
    await sql`INSERT INTO todolist (title) VALUES (${settings.title})`
}

export async function Updating(settings: Config) {
    await sql`UPDATE todolist SET title = ${settings.title} and is_complete = ${settings.is_complete} WHERE ${settings.id}`
}
