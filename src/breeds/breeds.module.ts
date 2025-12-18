import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { Breed } from './entities/breed.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Breed]), AuthModule],
  controllers: [BreedsController],
  providers: [BreedsService],
  exports: [TypeOrmModule],
})
export class BreedsModule {}
