import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Categories } from '../entities';

@Controller('categories')
@ApiTags('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOkResponse({ type: Categories })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoriesService.create(createCategoryDto, 'test');
  }

  @Get()
  @ApiOkResponse({ type: Categories, isArray: true })
  async findAll() {
    return await this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Categories })
  async findOne(@Param('id') id: string) {
    return await this.categoriesService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse()
  async updateOne(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoriesService.update(+id, updateCategoryDto, 'test');
  }

  @Delete(':id')
  @ApiOkResponse()
  async delete(@Param('id') id: string) {
    return await this.categoriesService.delete(+id);
  }
}
