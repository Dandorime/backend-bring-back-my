import Controller from "@/controllers";
import Users from "@/db/models/users.model";
import { IUsersSchema } from "@/db/schema/users.schema";

export default class UserController extends Controller<IUsersSchema>{

    public async index() {
        const result = await Users.find()
        
        return Object(result)
    }

    public async create(request: IUsersSchema, params: {date: Date}) {
        const result = await Users.findOneAndUpdate({ id: request.id }, {id: request.id, firstName: request.firstName, username: request.username, authDate: params.date }, { new: true, upsert: true }); 
        
        return Promise.resolve(result)
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