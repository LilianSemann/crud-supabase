"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
        <div className="flex">
            {props.children}

            <Dialog>
                <DialogTrigger>Edit</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Yo</DialogTitle>
                        <DialogDescription>
                            <Input type="text" defaultValue={props.todos.title} className="border text-black" onChange={(e) => setEdited({...edited, title:e.target.value})}/>
                            <Button onClick={() => {Updating(edited); window.location.reload()}} >editar</Button>                         
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

