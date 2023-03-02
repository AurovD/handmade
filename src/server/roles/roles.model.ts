import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserAuth } from "../users/userAuth.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreate {
  value: string;
  desc: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreate> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  desc: string;

  @BelongsToMany(() => UserAuth, () => UserRoles)
  users: UserAuth[];
}
