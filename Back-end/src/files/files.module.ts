import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { FilesController } from "./files.controller";
import { FilesService } from "./files.service";
import { DatabaseModule } from "src/database/database.module";

@Module({
    imports: [
        MulterModule.register({
            dest: './uploads',
        }), DatabaseModule
    ],
    controllers: [FilesController],
    providers: [FilesService]
})
export class FileModule {}