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
const init_data_node_1 = require("@telegram-apps/init-data-node");
const user_controller_1 = __importDefault(require("./controllers/user.controller"));
const caledar_controller_1 = __importDefault(require("./controllers/caledar.controller"));
dotenv_1.default.config();
// Your secret bot token.
const token = process.env.TELEGRAM_BOT_TOKEN;
/**
 * Sets init data in the specified Response object.
 * @param res - Response object.
 * @param initData - init data.
 */
function setInitData(res, initData) {
    res.locals.initData = initData;
}
/**
 * Extracts init data from the Response object.
 * @param res - Response object.
 * @returns Init data stored in the Response object. Can return undefined in case,
 * the client is not authorized.
 */
function getInitData(res) {
    return res.locals.initData;
}
/**
 * Middleware which authorizes the external client.
 * @param req - Request object.
 * @param res - Response object.
 * @param next - function to call the next middleware.
 */
const authMiddleware = (req, res, next) => {
    // We expect passing init data in the Authorization header in the following format:
    // <auth-type> <auth-data>
    // <auth-type> must be "tma", and <auth-data> is Telegram Mini Apps init data.
    const [authType, authData = ''] = (req.header('authorization') || '').split(' ');
    console.log(authData);
    switch (authType) {
        case 'tma':
            try {
                // Validate init data.
                (0, init_data_node_1.validate)(authData, token, {
                    // We consider init data sign valid for 1 hour from their creation moment.
                    expiresIn: 3600,
                });
                // Parse init data. We will surely need it in the future.
                setInitData(res, (0, init_data_node_1.parse)(authData));
                return next();
            }
            catch (e) {
                return next(e);
            }
        // ... other authorization methods.
        default:
            return next(new Error('Unauthorized'));
    }
};
/**
 * Middleware which shows the user init data.
 * @param _req
 * @param res - Response object.
 * @param next - function to call the next middleware.
 */
const showInitDataMiddleware = (_req, res, next) => {
    console.log('showInitDataMiddleware');
    const initData = getInitData(res);
    if (!initData) {
        return next(new Error('Cant display init data as long as it was not found'));
    }
    new user_controller_1.default().create(initData.user, { date: initData.authDate }).then(e => { console.log('res', e); }).finally(() => {
        console.log('initData', initData);
        res.json(initData);
    });
};
/**
 * Middleware which displays the user init data.
 * @param err - handled error.
 * @param _req
 * @param res - Response object.
 */
const defaultErrorMiddleware = (err, _req, res) => {
    res.status(500).json({
        error: err.message,
    });
};
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, db_connect_1.db_connect)().then((e) => { (0, console_1.log)('success connect DB'); }).catch(err => { (0, console_1.log)(err); });
// Enable CORS
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', router_1.default);
app.use(authMiddleware);
app.post('/', showInitDataMiddleware);
// app.post('/', (req, res) => {
//   log('post ')
// })
app.use(defaultErrorMiddleware);
app.get('/calendar', (req, res) => {
    new caledar_controller_1.default().index().then(data => {
        res.json(data);
    }).catch(e => {
        res.status(500).json({
            error: e.message,
        });
    });
});
app.get('/', (req, res) => {
    new caledar_controller_1.default().index().then(data => {
        res.json(data);
    }).catch(e => {
        res.status(500).json({
            error: e.message,
        });
    });
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
