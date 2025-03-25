import { IsNotEmpty, IsString } from 'class-validator';

export class RequestUserForm {
    @IsString()
    @IsNotEmpty()
    deviceId: string;

    @IsString()
    @IsNotEmpty()
    fcmToken: string;

    @IsString()
    @IsNotEmpty()
    timeZone: string;

    constructor(deviceId: string, fcmToken: string, timeZone: string) {
        this.deviceId = deviceId;
        this.fcmToken = fcmToken;
        this.timeZone = timeZone;
    }
}
