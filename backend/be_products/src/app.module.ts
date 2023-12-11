import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
