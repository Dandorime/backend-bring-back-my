interface IController {
    index: () => any,
    find: <N>(arg: N) => any,
    create: <T, N = undefined> (arg: N) => T,
    update: <T, N = undefined> (arg: N) => T,
    delete: <T, N = undefined> (arg: N) => T
}

export default class Controller implements IController {
    public index(): any {}
    public find<N>(arg: N): any {}
    public create<T, N>(arg: N): T  | any {}
    public update<T, N>(arg: N): T | any {}
    public delete<T, N>(arg: N): T | any {}
}