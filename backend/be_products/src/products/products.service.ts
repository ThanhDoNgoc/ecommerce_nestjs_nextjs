import { Injectable } from '@nestjs/common';
import { Categories, Products } from '../entities';
import {
  FindManyOptions,
  FindOptionsWhere,
  In,
  Like,
  Repository,
} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { FindProductDto } from './dto/find-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
    @InjectRepository(Categories)
    private categoryRepository: Repository<Categories>,
  ) {}

  async create(createProductDto: CreateProductDto, username: string) {
    const categories = await this.categoryRepository.findBy({
      id: In(createProductDto.categoryIds),
    });
    const newProduct = this.productsRepository.create({
      ...createProductDto,
      categories: categories,
      updatedBy: username,
      updatedAt: new Date(),
    });

    return await this, this.productsRepository.save(newProduct);
  }

  async findOne(id: number) {
    return await this.productsRepository.findOneBy({ id: id });
  }

  async find(findProductDto: FindProductDto) {
    const queryOptions: FindManyOptions<Products> = {
      order: { name: 'ASC' },
      skip: findProductDto.limit * findProductDto.page || 0,
      take: findProductDto.limit || 12,
      select: ['id', 'name', 'price', 'inStock', 'isPublic'],
      relations: {
        categories: true,
      },
    };

    let queryWhereOptions: FindOptionsWhere<Products> = { isPublic: true };

    if (findProductDto.searchKey) {
      queryWhereOptions = {
        ...queryWhereOptions,
        name: Like('%' + findProductDto.searchKey + '%'),
      };
    }

    if (findProductDto.categoryIds) {
      const categoryIds = findProductDto.categoryIds.split(',');
      queryWhereOptions = {
        ...queryWhereOptions,
        categories: { id: In(categoryIds) },
      };
    }

    queryOptions.where = queryWhereOptions;

    const [products, total] =
      await this.productsRepository.findAndCount(queryOptions);

    return {
      data: products,
      count: total,
    };
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
    username: string,
  ) {
    return await this.productsRepository.update(id, {
      ...updateProductDto,
      updatedAt: new Date(),
      updatedBy: username,
    });
  }
}
