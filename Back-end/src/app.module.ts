import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { FileModule } from './files/files.module';
@Module({
  imports: [
    DatabaseModule,
    FileModule,
    UsersModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 100,
        limit: 3,
      },
      {
        name: 'long',
        ttl: 6000,
        limit: 100,
      },
    ]),
    MyLoggerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
        provide: APP_GUARD,
        useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
        useClass: ThrottlerGuard,
      },
  ],
})
export class AppModule {}
