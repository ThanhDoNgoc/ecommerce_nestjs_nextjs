import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Categories } from '../entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  async create(createCategoriesDto: CreateCategoryDto, username: string) {
    const newCategories = this.categoriesRepository.create({
      ...createCategoriesDto,
      updatedAt: new Date(),
      updatedBy: username,
    });
    return await this.categoriesRepository.save(newCategories);
  }

  async findAll() {
    return await this.categoriesRepository.find();
  }

  async findOne(id: number) {
    return await this.categoriesRepository.findOne({ where: { id } });
  }
}
