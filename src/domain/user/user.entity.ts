import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_USER')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {
        name: 'DEVICE_ID',
        length: 200,
        unique: true,
        nullable: false
    })
    deviceId: string;

    @Column('varchar', {
        name: 'FCM_TOKEN',
        nullable: false
    })
    fcmToken: string;

    @Column('varchar', {
        name: 'TIMEZONE',
        length: 50,
        nullable: false,
        default: 'UTC'
    })
    timezone: string;
}
