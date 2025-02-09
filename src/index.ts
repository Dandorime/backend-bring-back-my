import express, { ErrorRequestHandler, Express, Request, RequestHandler, Response } from "express";
import dotenv from "dotenv";
import { db_connect } from "@/db/db_connect";
import apiRouter from "@/router";
import Test from "@/db/models/test.model";
import { log } from "console";
import cors from 'cors';
import { validate, parse } from '@telegram-apps/init-data-node';
import UserController from "./controllers/user.controller";
import CalendarController from "./controllers/caledar.controller";
import TaskController from "./controllers/task.controller";
import PromoController from "./controllers/propo.controller";
import VisitController from "./controllers/visit.controller";

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
  console.log('showInitDataMiddleware');
  
  const initData = getInitData(res);
  console.log(initData)
  if (!initData) {
    return next(new Error('Cant display init data as long as it was not found'));
  }

  new UserController().create(initData.user, {date: initData.authDate}).then(e => {
    res.json(e);
  })
};

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

const app: Express = express();
const port = process.env.PORT || 3000;

db_connect().then((e) => {log('success connect DB')} ).catch(err => {log(err)})

// Enable CORS
app.use(cors());

app.use(express.json());
app.use('/api', apiRouter);
app.use(authMiddleware);
app.post('/', showInitDataMiddleware);

// app.post('/', (req, res) => {
//   log('post ')
// })
// app.use(defaultErrorMiddleware);
// 

app.get('/calendar', (req, res) => {
  new CalendarController().index().then(data => {
    res.json(data)
  })
})

app.get('/tasks', (req, res) => {
  new TaskController().index().then(data => {
    res.json(data)
  })
})

app.get('/promos', (req, res) => {
  new PromoController().index().then(data => {
    res.json(data)
  })
})

app.post('/open-box', (req, res) => {
  log(req.body.user_id)
  new UserController().visitUser(req.body.user_id).then(data => {
    log('open-box', data)
    res.json(data)
  })
}) 


app.get('/', (req, res) => {
  res.send('Express Typescript on Vercel')
})

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong 🏓')
})

// app.get("/", (req: Request, res: Response) => {
//   res.send('Hi pip')
// });

// app.get('/testModel/:name', (req: Request, res: Response) => {
//   const TestName = new Test({name: req.params.name});
//   const funcTect = async () => await TestName.save()
//   funcTect()
//   const result = async () => await Test.find()
//   result().then(e => { 
//     res.send(e)
//     log(e)
//   })
  
// })

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
