import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { FilesController } from "./files.controller";
import { FilesService } from "./files.service";

@Module({
    imports: [
        MulterModule.register({
            dest: './uploads',
        }),
    ],
    controllers: [FilesController],
    providers: [FilesService]
})
export class FileModule {}