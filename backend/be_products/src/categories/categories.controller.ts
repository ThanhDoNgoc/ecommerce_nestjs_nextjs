import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  InternalServerErrorException,
  HttpCode,
  Req,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Categories } from '../entities';
import { AuthorizationGuard } from '../authorization/authorization.guard';
import { PermissionsGuard } from '../authorization/permissions.guard';
import { AuthPermissions } from '../authorization/permissions';

@Controller('categories')
@ApiTags('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(AuthorizationGuard)
  @UseGuards(PermissionsGuard([AuthPermissions.CATEGORIES_CREATE]))
  @Post()
  @ApiOkResponse({ status: 201 })
  @HttpCode(201)
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      await this.categoriesService.create(createCategoryDto, 'test');
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get()
  @ApiOkResponse({ type: Categories, isArray: true })
  async findAll() {
    try {
      return await this.categoriesService.findAll();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: Categories })
  async findOne(@Param('id') id: string) {
    try {
      return await this.categoriesService.findOne(+id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @UseGuards(AuthorizationGuard)
  @UseGuards(PermissionsGuard([AuthPermissions.CATEGORIES_UPDATE]))
  @Put(':id')
  @ApiOkResponse({ status: 200 })
  @HttpCode(200)
  async updateOne(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    try {
      return await this.categoriesService.update(
        +id,
        updateCategoryDto,
        'test',
      );
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @UseGuards(AuthorizationGuard)
  @UseGuards(PermissionsGuard([AuthPermissions.CATEGORIES_DELETE]))
  @Delete(':id')
  @ApiOkResponse({ status: 200 })
  @HttpCode(200)
  async delete(@Param('id') id: string) {
    try {
      return await this.categoriesService.delete(+id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
