import serverless from 'serverless-http';
import expressApp from '../server';

const functionName = 'api';

const app = expressApp(functionName);

exports.handler = serverless(app);