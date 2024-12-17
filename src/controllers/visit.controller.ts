import Controller from "@/controllers";
import CalendarDates from "@/db/models/calendar_dates.model";
import CompletedTasks from "@/db/models/completed_tasks.model";
import Tickets from "@/db/models/tickets.model";
import UserPromos from "@/db/models/user_promos.model";
import Users from "@/db/models/users.model";
import Visits from "@/db/models/visits.model";
import { IVisitsSchema } from "@/db/schema/visits.schema";

export default class VisitController extends Controller<IVisitsSchema>{
    public index(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public find(arg: IVisitsSchema | any): Object {
        throw new Error("Method not implemented.");
    }
    public create(arg: IVisitsSchema | any, params?: any): Object {
        throw new Error("Method not implemented.");
    }
    public update(arg: IVisitsSchema | any): Object {
        throw new Error("Method not implemented.");
    }
    public delete(arg: IVisitsSchema | any): String {
        throw new Error("Method not implemented.");
    }

    public async checkVisit(user_id: Number) {
        try {
            const visit = await Visits.findOne({user_id})

            const today = new Date();
            const todayString = today.toISOString().split('T')[0]; // Форматируем дату для сравнения

            const day = await CalendarDates.findOne({ date: todayString });

            if (!!visit && !visit.calendar_ids.includes(day?.id)) {
                visit.is_open = false
                await visit.save()
            }

            return Promise.resolve(visit)
        } catch (e) {
            return Promise.reject(e)
        }
    }
    
}