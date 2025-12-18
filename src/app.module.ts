import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_POSTGRES_TYPE as 'postgres',
      host: process.env.DB_POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.DB_POSTGRES_PORT!) || 5432,
      username: process.env.DB_POSTGRES_USERNAME || 'postgres',
      password: process.env.DB_POSTGRES_PASSWORD || 'root',
      database: process.env.DB_POSTGRES_DATABASE || 'db_crud',
      autoLoadEntities: true,
      synchronize: process.env.DB_POSTGRES_SYNCHRONIZE === 'true',
      ssl: process.env.DB_POSTGRES_SSL === 'true',
      extra: {
        ssl:
          process.env.DB_POSTGRES_SSL === 'true'
            ? {
                rejectUnauthorized: false,
              }
            : null,
      },
    }),
    CatsModule,
    BreedsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
