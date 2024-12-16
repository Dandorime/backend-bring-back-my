import Controller from "@/controllers";
import Users from "@/db/models/users.model";
import { IUsersSchema } from "@/db/schema/users.schema";

export default class UserController extends Controller<IUsersSchema>{

    public async index() {
        const result = await Users.find()
        
        return Object(result)
    }

    public async create(request: IUsersSchema) {
        const result = await new Users({id: request.id, first_name: request.first_name, username: request.username }).save(); 
        
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