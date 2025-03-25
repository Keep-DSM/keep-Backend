import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly typeormRepository: Repository<UserEntity>
    ) {}

    async save(deviceId: string, fcmToken: string, timeZone: string): Promise<void> {
        let user = await this.typeormRepository.findOne({ where: { deviceId } });

        if (!user) {
            user = this.typeormRepository.create({
                deviceId: deviceId,
                fcmToken: fcmToken,
                timezone: timeZone
            });
        } else {
            user.fcmToken = fcmToken;
            user.timezone = timeZone;
        }

        await this.typeormRepository.save(user);
    }
}
