import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkScheduleModule } from './modules/work-schedule/work-schedule.module';
import { WorkScheduleDayModule } from './modules/work-schedule-day/work-schedule-day.module';
import { ForecastModule } from './modules/forecast/forecast.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [WorkScheduleModule, WorkScheduleDayModule, ForecastModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
