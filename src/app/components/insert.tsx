"use client"

import { useState } from "react"
import { Inserting } from "./functions"
import { Config } from "./types"

export default function Insert() {

    const [todos, setTodos] = useState<Config>({
        id: 0,
        title: "",
        is_complete: false
    })

    return (
        <div className="flex justify-center gap-3 pt-7">
            <form className="bg-white p-3 rounded-xl w-2/5">
                <input type="text" placeholder="Type a new task" onChange={(e) => setTodos({...todos, title:e.target.value})} className="outline-none bg-transparent w-5/6"/>
                <button onClick={() => Inserting(todos)} className="w-2/12 text-center">Add</button>
            </form>
        </div>
    )
}