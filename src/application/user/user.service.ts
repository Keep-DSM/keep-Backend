import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/user/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async register(deviceId: string, fcmToken: string, timeZone: string): Promise<void> {
        return await this.userRepository.save(deviceId, fcmToken, timeZone);
    }
}
