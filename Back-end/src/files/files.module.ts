import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { FilesController } from "./files.controller";

@Module({
    imports: [
        MulterModule.register({
            dest: './uploads',
        }),
    ],
    controllers: [FilesController]
})
export class FileModule {}