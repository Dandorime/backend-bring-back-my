import express, { ErrorRequestHandler, Express, Request, RequestHandler, Response } from "express";
import dotenv from "dotenv";
import { db_connect } from "@/db/db_connect";
import apiRouter from "@/router";
import Test from "@/db/models/test.model";
import { log } from "console";
import RunTelegramBot from "@/bot";
import { validate, parse } from '@telegram-apps/init-data-node';

dotenv.config();


// Your secret bot token.
const token = process.env.TELEGRAM_BOT_TOKEN;

/**
 * Sets init data in the specified Response object.
 * @param res - Response object.
 * @param initData - init data.
 */
function setInitData(res: Response, initData: any): void {
  res.locals.initData = initData;
}

/**
 * Extracts init data from the Response object.
 * @param res - Response object.
 * @returns Init data stored in the Response object. Can return undefined in case,
 * the client is not authorized.
 */
function getInitData(res: Response): any | undefined {
  return res.locals.initData;
}

/**
 * Middleware which authorizes the external client.
 * @param req - Request object.
 * @param res - Response object.
 * @param next - function to call the next middleware.
 */
const authMiddleware: RequestHandler = (req, res, next) => {
  // We expect passing init data in the Authorization header in the following format:
  // <auth-type> <auth-data>
  // <auth-type> must be "tma", and <auth-data> is Telegram Mini Apps init data.
  const [authType, authData = ''] = (req.header('authorization') || '').split(' ');
  console.log(authData);

  switch (authType) {
    case 'tma':
      try {
        // Validate init data.
        validate(authData, token as string, {
          // We consider init data sign valid for 1 hour from their creation moment.
          expiresIn: 3600,
        });

        // Parse init data. We will surely need it in the future.
        setInitData(res, parse(authData));
        return next();
      } catch (e) {
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
const showInitDataMiddleware: RequestHandler = (_req, res, next) => {
  const initData = getInitData(res);
  if (!initData) {
    return next(new Error('Cant display init data as long as it was not found'));
  }
  console.log(initData);
  
  res.json(initData);
};

/**
 * Middleware which displays the user init data.
 * @param err - handled error.
 * @param _req
 * @param res - Response object.
 */
const defaultErrorMiddleware: ErrorRequestHandler = (err, _req, res) => {
  res.status(500).json({
    error: err.message,
  });
};

const app: Express = express();
const port = process.env.PORT || 3000;

db_connect().then((e) => {log('success connect DB')} ).catch(err => {log(err)})

RunTelegramBot()

app.use(express.json());
app.use('/api', apiRouter);
app.use(authMiddleware);
app.get('/', showInitDataMiddleware);
app.post('/', (req, res) => {
  log('post ')
})
app.use(defaultErrorMiddleware);

// app.get("/", (req: Request, res: Response) => {
//   res.send('Hi pip')
// });

app.get('/testModel/:name', (req: Request, res: Response) => {
  const TestName = new Test({name: req.params.name});
  const funcTect = async () => await TestName.save()
  funcTect()
  const result = async () => await Test.find()
  result().then(e => { 
    res.send(e)
    log(e)
  })
  
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});