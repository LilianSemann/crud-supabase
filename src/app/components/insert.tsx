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
        <div className="flex justify-center gap-3">
            <form className="bg-gray-900 text-white py-1 px-3 rounded-xl">
                <input type="text" placeholder="Type a new task" onChange={(e) => setTodos({...todos, title:e.target.value})} className="outline-none bg-transparent"/>
                <button onClick={() => Inserting(todos)}>Add</button>
            </form>
        </div>
    )
}