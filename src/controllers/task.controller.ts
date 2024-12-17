import { ITasksSchema } from "@/db/schema/tasks.schema";
import Controller from ".";
import Tasks from "@/db/models/tasks.model";

export default class TaskController extends Controller<ITasksSchema> {
    public async index() {
        const tasks = await Tasks.find()
        
        return Promise.all(tasks)
    }
    public find(arg: ITasksSchema | any): Object {
        throw new Error("Method not implemented.");
    }
    public create(arg: ITasksSchema | any, params?: any): Object {
        throw new Error("Method not implemented.");
    }
    public update(arg: ITasksSchema | any): Object {
        throw new Error("Method not implemented.");
    }
    public delete(arg: ITasksSchema | any): String {
        throw new Error("Method not implemented.");
    }

}