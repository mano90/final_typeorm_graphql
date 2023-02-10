import { Field, InputType } from "type-graphql";
// import { Category } from "../../models/Category";
// import { Product } from "../../models/Product";

@InputType()
export class CreateProductInput {
  @Field()
  public name!: string;

  @Field()
  public code!: string;

  @Field()
  public category: number;
}
