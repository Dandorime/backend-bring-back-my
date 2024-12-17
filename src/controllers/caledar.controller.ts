import { ICalendarDatesSchema, ResCalendarDates } from "@/db/schema/calendar_dates.schema";
import Controller from ".";
import CalendarDates from "@/db/models/calendar_dates.model";
import Founds from "@/db/models/founds.model";

export default class CalendarController extends Controller<ICalendarDatesSchema> {
    public async index() {
        const calendar = (await CalendarDates.find()).map(async data => {
           const found = await Founds.findOne({id: data.found_id})
           return {...data, found_info: found}
        })
        return Promise.resolve(calendar)
    }
    public find(arg: ICalendarDatesSchema | any): Object {
        throw new Error("Method not implemented.");
    }
    public create(arg: ICalendarDatesSchema | any, params?: any): Object {
        throw new Error("Method not implemented.");
    }
    public update(arg: ICalendarDatesSchema | any): Object {
        throw new Error("Method not implemented.");
    }
    public delete(arg: ICalendarDatesSchema | any): String {
        throw new Error("Method not implemented.");
    }

}