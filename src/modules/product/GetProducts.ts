import { Resolver, Query } from "type-graphql";
import { InjectRepository } from "typeorm-typedi-extensions";

import { Category } from "../../models/Category";
import { CategoryRepository } from "../../repositories/CategoryRepository";

@Resolver((_type) => Category)
export class GetProducts {
  constructor(
    @InjectRepository()
    private readonly categoryRepository: CategoryRepository
  ) {}

  @Query((_type) => [Category])
  public async getProducts(): Promise<Category[]> {
    const products = await this.categoryRepository.find({
      relations: ["category"],
    });

    return products;
  }
}
