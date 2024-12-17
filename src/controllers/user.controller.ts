import Controller from "@/controllers";
import CalendarDates from "@/db/models/calendar_dates.model";
import CompletedTasks from "@/db/models/completed_tasks.model";
import Founds from "@/db/models/founds.model";
import Tickets from "@/db/models/tickets.model";
import UserPromos from "@/db/models/user_promos.model";
import Users from "@/db/models/users.model";
import Visits from "@/db/models/visits.model";
import { IResUserData, IUsersSchema } from "@/db/schema/users.schema";

export default class UserController extends Controller<IUsersSchema>{

    public async index(): Promise<any> {
        const result = await Users.find()
        
        return Promise.resolve(result)
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

    public async visitUser(id: Number) {
        try {
            const user = await Users.findOne({ id });

            const today = new Date();
            const todayString = today.toISOString().split('T')[0]; // Форматируем дату для сравнения

            const day = await CalendarDates.findOne({ date: todayString });

            // Проверяем записи о посещениях
            let visit = await Visits.findOne({ user_id: user?.id });

            if (visit && !visit.calendar_ids.includes(day?.id)) {
                visit.calendar_ids.push(day?.id); // Записываем идентификатор текущего дня
                visit.calendar_ids.sort()
                visit.is_open = true                
                await visit.save();

                const calendar_info = await CalendarDates.findOne({id: day?.id})
                const found_info = await Founds.findOne({id: calendar_info?.found_id})

                const on_visit = {
                    user: user?.id,
                    visit,
                    calendar_info,
                    found_info
                }
        
                return Promise.resolve(on_visit)
            }
        
        } catch (e) {
            return Promise.reject(e)
        }
    }
}