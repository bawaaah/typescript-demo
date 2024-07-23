import {v4 as uuidV4} from 'uuid'


type task = {
    id:string,
    title:string,
    completed:boolean,
    createdAt:Date
}

const taskList = document.querySelector<HTMLUListElement>('#list')
const form = document.getElementById("task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-list")
// const tasks = Task[] = loadTask()
// tasks.forEach(addListItem)
