import { ICalendarDatesSchema, ResCalendarDates } from "@/db/schema/calendar_dates.schema";
import Controller from ".";
import CalendarDates from "@/db/models/calendar_dates.model";
import Founds from "@/db/models/founds.model";

export default class CalendarController extends Controller<ICalendarDatesSchema> {
    public async index() {
            // Получаем все записи календаря
        const calendarData = await CalendarDates.find();
        
        // Используем Promise.all для ожидания всех асинхронных операций
        const calendar = await Promise.all(calendarData.map(async data => {
            // Ищем соответствующую запись в Founds
            const found = await Founds.findOne({ id: data.found_id });
            // Возвращаем объект с данными календаря и найденной информацией
            return { ...data.toObject(), found_info: found }; // Используем toObject() для преобразования Mongoose документа в обычный объект
        }));

        return calendar; // Возвращаем массив объектов
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