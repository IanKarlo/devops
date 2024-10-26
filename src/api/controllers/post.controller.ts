import { Request, Response, Router } from "express";
import { PostEntity } from "../../core/posts/entity";
import { PostRepository } from "../../core/posts/repository";

export class PostController {
    private constructor() {}

    async getPosts(req: Request, res: Response) {
        return res.status(200).json(await PostRepository.getInstance().getAll());
    }

    async createPost(req: Request, res: Response) {
        const { title, content } = req.body;

        const post = new PostEntity(title, content);
        return res.status(200).json(await PostRepository.getInstance().create(post));
    }

    static getRouter(): Router {
        const router = Router();
        const postController = new PostController();

        router.get('/', postController.getPosts);

        router.post('/', postController.createPost);

        return router;
    }
}