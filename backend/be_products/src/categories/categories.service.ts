import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Categories } from '../entities';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  async create(
    createCategoriesDto: CreateCategoryDto,
    username: string,
  ): Promise<Categories> {
    const newCategories = this.categoriesRepository.create({
      ...createCategoriesDto,
      updatedAt: new Date(),
      updatedBy: username,
    });
    return await this.categoriesRepository.save(newCategories);
  }

  async findAll(): Promise<Categories[]> {
    return await this.categoriesRepository.find();
  }

  async findOne(id: number): Promise<Categories> {
    return await this.categoriesRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
    username: string,
  ): Promise<UpdateResult> {
    return await this.categoriesRepository.update(id, {
      ...updateCategoryDto,
      updatedAt: new Date(),
      updatedBy: username,
    });
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.categoriesRepository.delete(id);
  }
}
