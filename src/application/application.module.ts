import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { UserService } from './user/user.service';

@Module({
    imports: [DomainModule],
    providers: [UserService],
    exports: [UserService]
})
export class ApplicationModule {}
