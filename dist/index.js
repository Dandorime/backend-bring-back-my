"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_connect_1 = require("./db/db_connect");
const router_1 = __importDefault(require("./router"));
const test_model_1 = __importDefault(require("./db/models/test.model"));
const console_1 = require("console");
const cors_1 = __importDefault(require("cors"));
// import { validate, parse } from '@telegram-apps/init-data-node';
dotenv_1.default.config();
// Your secret bot token.
const token = process.env.TELEGRAM_BOT_TOKEN;
// /**
//  * Sets init data in the specified Response object.
//  * @param res - Response object.
//  * @param initData - init data.
//  */
// function setInitData(res: Response, initData: any): void {
//   res.locals.initData = initData;
// }
// /**
//  * Extracts init data from the Response object.
//  * @param res - Response object.
//  * @returns Init data stored in the Response object. Can return undefined in case,
//  * the client is not authorized.
//  */
// function getInitData(res: Response): any | undefined {
//   return res.locals.initData;
// }
// /**
//  * Middleware which authorizes the external client.
//  * @param req - Request object.
//  * @param res - Response object.
//  * @param next - function to call the next middleware.
//  */
// const authMiddleware: RequestHandler = (req, res, next) => {
//   // We expect passing init data in the Authorization header in the following format:
//   // <auth-type> <auth-data>
//   // <auth-type> must be "tma", and <auth-data> is Telegram Mini Apps init data.
//   const [authType, authData = ''] = (req.header('authorization') || '').split(' ');
//   console.log(authData);
//   // switch (authType) {
//   //   case 'tma':
//   //     try {
//   //       // Validate init data.
//   //       validate(authData, token as string, {
//   //         // We consider init data sign valid for 1 hour from their creation moment.
//   //         expiresIn: 3600,
//   //       });
//   //       // Parse init data. We will surely need it in the future.
//   //       setInitData(res, parse(authData));
//   //       return next();
//   //     } catch (e) {
//   //       return next(e);
//   //     }
//   //   // ... other authorization methods.
//   //   default:
//   //     return next(new Error('Unauthorized'));
//   // }
//   return next();
// };
// /**
//  * Middleware which shows the user init data.
//  * @param _req
//  * @param res - Response object.
//  * @param next - function to call the next middleware.
//  */
// const showInitDataMiddleware: RequestHandler = (_req, res, next) => {
//   const initData = getInitData(res);
//   if (!initData) {
//     return next(new Error('Cant display init data as long as it was not found'));
//   }
//   console.log(initData);
//   res.json(initData);
// };
// /**
//  * Middleware which displays the user init data.
//  * @param err - handled error.
//  * @param _req
//  * @param res - Response object.
//  */
// const defaultErrorMiddleware: ErrorRequestHandler = (err, _req, res) => {
//   res.status(500).json({
//     error: err.message,
//   });
// };
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, db_connect_1.db_connect)().then((e) => { (0, console_1.log)('success connect DB'); }).catch(err => { (0, console_1.log)(err); });
// Enable CORS
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', router_1.default);
// app.use(authMiddleware);
// app.get('/', showInitDataMiddleware);
app.post('/', (req, res) => {
    (0, console_1.log)('post ');
});
// app.use(defaultErrorMiddleware);
app.get('/', (req, res) => {
    res.send('Express Typescript on Vercel');
});
app.get('/ping', (req, res) => {
    res.send('pong 🏓');
});
// app.get("/", (req: Request, res: Response) => {
//   res.send('Hi pip')
// });
app.get('/testModel/:name', (req, res) => {
    const TestName = new test_model_1.default({ name: req.params.name });
    const funcTect = () => __awaiter(void 0, void 0, void 0, function* () { return yield TestName.save(); });
    funcTect();
    const result = () => __awaiter(void 0, void 0, void 0, function* () { return yield test_model_1.default.find(); });
    result().then(e => {
        res.send(e);
        (0, console_1.log)(e);
    });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
