import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';
import { UserRepository } from './user/user.repository';

const ENTITY = TypeOrmModule.forFeature([UserEntity]);

@Module({
    imports: [ENTITY],
    providers: [UserRepository],
    exports: [UserRepository]
})
export class DomainModule {}
