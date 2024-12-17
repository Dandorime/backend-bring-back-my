interface IController<N> {
    index: () => Promise<any>,
    find: (arg: N | any) => Object,
    create: (arg: N | any, params?: any) => Object,
    update: (arg: N | any) => Object,
    delete: (arg: N | any) => String
}

export default abstract class Controller<N> implements IController<N> {
    public abstract index(): Promise<any>
    public abstract find(arg: N | any): Object 
    public abstract create(arg: N | any, params?: any): Object
    public abstract update(arg: N | any): Object
    public abstract delete(arg: N | any): String
}