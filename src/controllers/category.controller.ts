import { Request, Response } from "express";

import { CategoriesService } from "../services/categories.service";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CreateCategoryDTO } from "../dtos/categories.dto";


export class CategoriesController {
    async create(req: Request<unknown, unknown, CreateCategoryDTO>, res: Response) {

        const { title, color } = req.body

        const respository = new CategoriesRepository(CategoryModel)

        const service = new CategoriesService(respository)

        const result = await service.create({ title, color })

        return res.status(201).json(result)
    }
}