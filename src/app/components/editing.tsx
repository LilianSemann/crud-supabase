"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { ReactNode, useState } from 'react'
import { Config, defaultConfig } from "./types"
import { Deleting, Updating } from './functions'

interface Props {
    children: ReactNode
    ptodos: Config
}

export default function Edit(props: Props) {

    const [edited, setEdited] = useState(defaultConfig)

    return (
        <div className="flex">
            {props.children}
            <Dialog>
                <DialogTrigger>Edit</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>I'm gonna commit suicide</DialogTitle>
                        <DialogDescription>
                            <Input type="text" defaultValue={props.ptodos.title} onChange={(e) => setEdited({...props.ptodos, title:e.target.value})} className="border text-black"/>
                            <Button type="submit" onClick={() => {Deleting(props.ptodos.id || 0); window.location.reload()}} >delete</Button>
                            <Button onClick={() => {Updating(edited); console.log(edited)}} >edit</Button>                         
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

