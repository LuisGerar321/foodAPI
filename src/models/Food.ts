import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "food",
  timestamps: true,
})
export class Food extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  price!: number;
}