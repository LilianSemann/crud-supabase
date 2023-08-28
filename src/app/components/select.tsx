
import { Selecting } from "./functions"
import { Config } from "./types"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import Edit from "./editing"
import sql from "../db"

export default async function Select() {

    const todos:Config[] = await sql`SELECT * FROM todolist`

    return(
        <div className="w-auto flex justify-center h-screen pt-10">
            <div className="w-4/6 flex justify-center">
                <Table className="bg-white rounded-xl">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-gray-400 w-[20%]">
                                <div className="flex gap-1 hover:text-gray-500 justify-center">
                                    CODE
                                </div>
                            </TableHead>
                            <TableHead className="text-gray-400 w-[70%]">
                                <div className="flex gap-1 hover:text-gray-500">
                                    TASK
                                </div>
                            </TableHead>
                            <TableHead className="text-gray-400 w-[10%]">
                                <div className="flex gap-1 hover:text-gray-500"></div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {todos.map((t:Config) => (
                            <Edit todos={t} key={t.id}>
                                <p>
                                    {t.id}
                                </p>
                                <p>
                                    {t.title}
                                </p>
                            </Edit>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

{/* <TableRow key={t.id}>
<TableCell className="text-center">{t.id}</TableCell>
<TableCell>
    <button>{t.title}</button>
</TableCell>
<TableCell></TableCell>
</TableRow> */}