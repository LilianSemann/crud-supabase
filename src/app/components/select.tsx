
import { Selecting } from "./functions"
import { Config } from "./types"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import Edit from "./editing"
import sql from "../db"

export default async function Select() {

    const todos:Config[] = await sql`SELECT * FROM todolist`

    return(
        <div className="w-auto flex justify-center h-screen pt-3">
            <div className="w-2/5">
                <div className="bg-white rounded-xl">
                    <div className="p-4">
                        <div className="flex w-[100%] text-gray-400">
                            <div className="w-[15%] text-center">CODE</div> 
                            <div className="w-[85%]">TASK</div> 
                        </div>
                        {todos.map((t:Config) => <Edit ptodos={t} key={t.id} >
                            <div className="flex w-[100%]">
                                <div className="w-[15%] text-center">{t.id}</div>
                                <div className="w-[85%]">{t.title}</div>
                            </div>
                        </Edit>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


{/* <Table className="bg-white rounded-xl">
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
    <TableRow>    
        <Edit todos={t} key={t.id}>
            <TableCell>{t.id}</TableCell>
            <TableCell>{t.title}</TableCell>
        </Edit>
    </TableRow>
    ))}
</TableBody>

</Table> */}