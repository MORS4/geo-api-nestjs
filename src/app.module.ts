import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { RegionsModule } from './regions/regions.module';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [CountriesModule, RegionsModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
