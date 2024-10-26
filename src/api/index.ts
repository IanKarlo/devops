import express from 'express';
import path from 'path';
import { PostController } from './controllers/post.controller';

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get('/_health', (req: express.Request, res: express.Response) => {
    return res.status(200).json({ status: 'OK' });
})

app.get('/', (req: express.Request, res: express.Response) => {
    return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.use('/api/posts', PostController.getRouter())

export default app;