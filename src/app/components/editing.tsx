"use client"

import { ReactNode, useState } from 'react'
import { Config } from "./types"
import { Updating } from './functions'

type Props = {
    children: ReactNode
    todos: Config
}

export default function Edit(props: Props) {

    const [edited, setEdited] = useState(props.todos)

    return (
        <section className='flex'>
            <input type="text" defaultValue={props.todos.title} onChange={(e) => setEdited({...edited, title:e.target.value})}/>
            <button onClick={() => {Updating(edited); window.location.reload()}} >Edit</button>
        </section>
    )
}