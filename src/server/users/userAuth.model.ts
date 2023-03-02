import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttr {
  email: string;
  password: string;
}

@Table({ tableName: 'user_auth' })
export class UserAuth extends Model<UserAuth, UserCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;
  @Column({ type: DataType.STRING, allowNull: true })
  ban_reason: string;
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  admin: boolean;
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  developer: boolean;
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  client: boolean;
}
