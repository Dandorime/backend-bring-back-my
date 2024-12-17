import Controller from ".";
import { IPromosSchema } from "@/db/schema/promos.schema";
import Promos from "@/db/models/promos.model";

export default class PromoController extends Controller<IPromosSchema> {
    public async index() {
        const promo = await Promos.find()
        
        return Promise.all(promo)
    }
    public find(arg: IPromosSchema | any): Object {
        throw new Error("Method not implemented.");
    }
    public create(arg: IPromosSchema | any, params?: any): Object {
        throw new Error("Method not implemented.");
    }
    public update(arg: IPromosSchema | any): Object {
        throw new Error("Method not implemented.");
    }
    public delete(arg: IPromosSchema | any): String {
        throw new Error("Method not implemented.");
    }

}