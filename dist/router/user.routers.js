"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
const UserAction = new user_controller_1.default();
userRoutes.get('/', (req, res) => {
    const result = UserAction.index();
    res.send(result);
});
userRoutes.get('/:id', (req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
});
// userRoutes.post('/test', (req, res) => {
//   const { data, telegramBotToken } = req.body;
//   console.log('data' ,JSON.stringify(data, undefined, 4))
//   console.log('telegramBotToken' ,JSON.stringify(telegramBotToken, undefined, 4))
//   res.json({status: 200, message: 'OK'})
//   //   // Check for missing data
//   //   if (!data || !telegramBotToken) {
//   //       return res.status(400).json({ error: 'Missing data or telegramBotToken' });
//   //   }
//   //   // Step 1: Create the array of key-value pairs excluding 'hash'
//   //   const pairsArray = Object.entries(data)
//   //       .filter(([key]) => key !== 'hash') // Exclude the hash key
//   //       .map(([key, value]) => `${key}=${value}`)
//   //       .sort(); // Sort alphabetically
//   //   // Memoize the hash
//   //   const receivedHash = data.hash; // Assuming the hash is passed in the data object
//   //   // Step 2: Create HMAC-SHA256 using key WebAppData
//   //   const webAppDataKey = 'WebAppData';
//   //   const hmac1 = crypto.createHmac('sha256', webAppDataKey)
//   //       .update(telegramBotToken)
//   //       .digest('hex');
//   //   // Step 3: Create HMAC-SHA256 using the result of the previous step as a key
//   //   const hmac2 = crypto.createHmac('sha256', hmac1)
//   //       .update(pairsArray.join('\n'))
//   //       .digest('hex');
//   //   // Step 4: Compare the hashes
//   //   if (receivedHash === hmac2) {
//   //       // If valid, return user data (for demonstration, we'll return all users)
//   //       return res.json({
//   //           valid: true,
//   //           message: 'Init data can be trusted.',
//   //           users: Object.values(users), // Returning all users
//   //       });
//   //   } else {
//   //       return res.json({
//   //           valid: false,
//   //           message: 'Init data cannot be trusted.',
//   //       });
//   //   }
// })
exports.default = userRoutes;
