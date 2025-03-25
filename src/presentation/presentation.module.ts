import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import { UserController } from './user/user.controller';
import { FcmService } from 'src/common/firebase/fcm.service';
import { FcmModule } from 'src/common/firebase/fcm.module';

@Module({
    imports: [ApplicationModule, FcmModule],
    controllers: [UserController],
    providers: []
})
export class PresentationModule {}
