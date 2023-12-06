import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Products } from '../entities';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOkResponse({ type: Products })
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto, 'test');
  }

  @Get()
  @ApiOkResponse({ type: Products, isArray: true })
  async find(@Query() findProductDto: FindProductDto) {
    return await this.productsService.find(findProductDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: Products })
  async findOne(@Param('id') id: string) {
    console.log('find by Id');
    return await this.productsService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse()
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.productsService.update(+id, updateProductDto, 'test');
  }
}
