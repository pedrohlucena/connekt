import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import { env } from '../env'

dotenv.config()

export const sequelize = new Sequelize(env.POSTGRES_DATABASE_URL, {
  dialect: 'postgres',
})
