import { Repository } from "typeorm";
import { PostEntity } from "./entity";
import { getRepository } from "../../configs/database/data-source";

export class PostRepository {
    private static instance: PostRepository | null;
    private constructor(private readonly repository: Repository<PostEntity>) {}

    public async create(post: PostEntity): Promise<PostEntity> {
        return await this.repository.save(post);
    }

    public async getAll(): Promise<PostEntity[]> {
        return await this.repository.find();
    }

    public static getInstance(): PostRepository {
        if (!PostRepository.instance) {
            const repository = getRepository(PostEntity);

            PostRepository.instance = new PostRepository(repository);
        }
        return PostRepository.instance;
    }
}