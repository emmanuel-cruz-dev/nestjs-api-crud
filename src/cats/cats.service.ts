import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  create(createCatDto: CreateCatDto) {
    const cat = this.catRepository.create(createCatDto);
    return this.catRepository.save(cat);
  }

  findAll() {
    return this.catRepository.find();
  }

  findOne(id: number) {
    return this.catRepository.findOneBy({ id });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.catRepository.update(id, updateCatDto);
  }

  remove(id: number) {
    return this.catRepository.softDelete({ id });
  }
}
