import { Arg, Mutation, Resolver } from "type-graphql";
import { getCustomRepository } from "typeorm";
import { Category } from "../../models/Category";

import { Product } from "../../models/Product";
import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ProductRepository } from "../../repositories/ProductRepository";
import { CreateProductInput } from "./CreateProductInput";

@Resolver((_type) => Product)
export class CreateProduct {
  @Mutation((_type) => Product)
  public async createProduct(
    @Arg("data") inputData: CreateProductInput
  ): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);
    const categoryRepository = getCustomRepository(CategoryRepository);
    const category: Category = await categoryRepository.findOne({
      id: inputData.category,
    });
    const product = productRepository.create({
      name: inputData.name,
      code: inputData.code,
      category: category,
    });

    await productRepository.save(product);
    return product;
  }
}
