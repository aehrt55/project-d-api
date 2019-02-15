import Sequelize from 'sequelize'
import delay from 'delay'
import { uri } from './config/mysql'

const sequelize = new Sequelize(uri, {
  define: {
    underscored: true,
    underscoredAll: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
    timestamps: true,
  },
})

export async function sync() {
  let connected = false
  while (!connected) {
    try {
      await sequelize.authenticate()
      connected = true
    } catch {
      await delay(1000)
    }
  }
  await sequelize.sync()
}

export default sequelize
