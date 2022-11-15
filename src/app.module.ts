import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChurchModule } from './church/church.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'guilhermeramos',
      password: 'guilhermeramos',
      database: 'churchadm-local-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ChurchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
