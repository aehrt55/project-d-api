import Sequelize from 'sequelize'
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

sequelize.sync()

export default sequelize
