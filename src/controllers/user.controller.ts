import Controller from "@/controllers";
import CompletedTasks from "@/db/models/completed_tasks.model";
import Tickets from "@/db/models/tickets.model";
import UserPromos from "@/db/models/user_promos.model";
import Users from "@/db/models/users.model";
import Visits from "@/db/models/visits.model";
import { IResUserData, IUsersSchema } from "@/db/schema/users.schema";

export default class UserController extends Controller<IUsersSchema>{

    public async index() {
        const result = await Users.find()
        
        return Object(result)
    }

    public async create(request: IResUserData, params: {date: Date}) {
        try {
            const user = await Users.findOneAndUpdate({ id: request.id }, {id: request.id, firstName: request.firstName, username: request.username, authDate: params.date }, { new: true, upsert: true }); 
            const tikets = await Tickets.findOneAndUpdate({user_id: user.id}, {user_id: user.id}, { new: true, upsert: true })
            const userPromos = await UserPromos.findOneAndUpdate({user_id: user.id}, {user_id: user.id}, { new: true, upsert: true })
            const completedTasks = await CompletedTasks.findOneAndReplace({user_id: user.id}, {user_id: user.id}, { new: true, upsert: true })
            const visits = await Visits.findOneAndUpdate({user_id: user.id}, {user_id: user.id}, { new: true, upsert: true })
            const result = {
                user,
                tikets,
                userPromos,
                completedTasks,
                visits
            }
            return Promise.resolve(result)
        } catch (e) {
            return Promise.reject(e)
        }
        
    }

    public find(arg: IUsersSchema | any): Object {
        throw new Error("Method not implemented.");
    }
    public update(arg: IUsersSchema | any): Object {
        throw new Error("Method not implemented.");
    }
    public delete(arg: IUsersSchema | any): String {
        throw new Error("Method not implemented.");
    }
}