import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Query,
  UseGuards,
  HttpCode,
  InternalServerErrorException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Products } from '../entities';
import { AuthorizationGuard } from '../authorization/authorization.guard';
import { PermissionsGuard } from '../authorization/permissions.guard';
import { AuthPermissions } from '../authorization/permissions';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthorizationGuard)
  @UseGuards(PermissionsGuard([AuthPermissions.PRODUCTS_CREATE]))
  @Post()
  @ApiOkResponse({ status: 201 })
  @HttpCode(201)
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productsService.create(createProductDto, 'test');
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get()
  @ApiOkResponse({ type: Products, isArray: true })
  async find(@Query() findProductDto: FindProductDto) {
    try {
      return await this.productsService.find(findProductDto);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: Products })
  async findOne(@Param('id') id: string) {
    try {
      return await this.productsService.findOne(+id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @UseGuards(AuthorizationGuard)
  @UseGuards(PermissionsGuard([AuthPermissions.PRODUCTS_DELETE]))
  @Put(':id')
  @ApiOkResponse({ status: 200 })
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      return await this.productsService.update(+id, updateProductDto, 'test');
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
