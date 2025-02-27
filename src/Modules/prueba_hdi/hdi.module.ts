import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { HdiController } from './hdi.controller';
import { HdiService } from './hdi.service';
import { Estado } from './entity/estado-entity';
import { DatabaseSeederService } from './database-seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([Estado])],
  providers: [HdiService, DatabaseSeederService],
  controllers: [HdiController],
  exports: [HdiService],
})
export class HdiModule {}
