import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CatsModule,
    TypeOrmModule.forRoot({
      type: process.env.DB_MYSQL_TYPE as 'mysql',
      host: process.env.DB_MYSQL_HOST || 'localhost',
      port: parseInt(process.env.DB_MYSQL_PORT!) || 3306,
      username: process.env.DB_MYSQL_USERNAME || 'root',
      password: process.env.DB_MYSQL_PASSWORD || 'root',
      database: process.env.DB_MYSQL_DATABASE || 'test',
      autoLoadEntities: true,
      synchronize: process.env.DB_MYSQL_SYNCHRONIZE === 'true',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
