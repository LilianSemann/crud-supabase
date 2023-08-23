
import { Selecting, Updating } from "./functions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default async function Select() {

    const todos = await Selecting()

    return(
        <div className="w-auto flex justify-center h-screen pt-10">
            <div className="w-4/6 flex justify-center">
                <Table className="bg-white rounded-xl">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-gray-400 w-[20%]">
                                <div className="flex gap-1 cursor-pointer hover:text-gray-500 justify-center">
                                    CODE
                                </div>
                            </TableHead>
                            <TableHead className="text-gray-400 w-[70%]">
                                <div className="flex gap-1 cursor-pointer hover:text-gray-500">
                                    TASK
                                </div>
                            </TableHead>
                            <TableHead className="text-gray-400 w-[10%]">
                                <div className="flex gap-1 cursor-pointer hover:text-gray-500"></div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {todos.map((t) => (
                            <TableRow key={t.id}>
                                <TableCell className="text-center">{t.id}</TableCell>
                                <TableCell>
                                    <button>{t.title}</button>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}