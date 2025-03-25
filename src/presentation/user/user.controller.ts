import { Body, Controller, Param, Post } from '@nestjs/common';
import { UserService } from 'src/application/user/user.service';
import { RequestUserForm } from './form/request.user.form';
import { ConfigService } from '@nestjs/config';
import { FcmService } from 'src/common/firebase/fcm.service';
import { FcmType } from 'src/common/firebase/fcm.type';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly configService: ConfigService,
        private readonly fcmService: FcmService
    ) {}

    @Post('/register')
    async register(@Body() form: RequestUserForm): Promise<void> {
        return await this.userService.register(form.deviceId, form.fcmToken, form.timeZone);
    }

    @Post('send/:id')
    async send(@Param('id') token: string, @Body('type') type: FcmType): Promise<void> {
        const payload = await this.fcmService.getFcmPayload(token, type);

        return await this.fcmService.sendMessage(payload);
    }

    @Post('send-all')
    async sendAll(@Body('type') type: FcmType): Promise<void> {}
}

/**
 * FCM 기능 목록
 *
 * 1. 특정 device로 알림 보내기
 * 2. 기기 전체 알림 보내기
 * 3. 기기 전체 알림 보내기 (스케줄링)
 * 4. 특정 기기 알림 보내기 (스케줄링)
 *
 * 기타 고민 사항
 * 1. FCM 토큰 만료 설정
 *
 * UserEntity 구성 방안
 */
