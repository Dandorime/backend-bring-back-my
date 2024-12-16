import Controller from "@/controllers";
import Users from "@/db/models/users.model";

export default class UserController extends Controller{
    public async index() {
        const result = await Users.find()
        
        return Object(result)
    }

    public async create<Request>(request: Request) {
        
        const result = await new Users(request).save(); 
        
        return Object(result)
    }
}