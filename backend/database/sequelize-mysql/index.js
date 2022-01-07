//DOCUMENTAION: https://sequelize.org/master/manual/getting-started.html

const { Sequelize, DataTypes, Op } = require('sequelize');
require('dotenv').config();

//check out the examples in the documents because there are other ways to sequalize things (postgres can be simpler than this)
const sequelize = new Sequelize('chat', process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
})

const User = sequelize.define('User', {
  //Model attributes are defined here
  // id: {
    // id is not necessary to do
  // },
  name: {
    type: DataTypes.STRING,
    allowNull: false  //allow null defaults to true
  }
}, {
  //Other model options go here
  timestamps: false
})


const test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    //checking the model
    console.log(User === sequelize.models.User);

    //THESE QUERIES WILL GO IN THE MODELS FOLDER
    //Queries - https://sequelize.org/master/manual/model-querying-basics.html

    //INSERT 
    const matt = await User.create({ name: 'matt' });
    console.log("Matt's ID:", matt.id)

    //SELECT
    const users = await User.findAll();
    console.log(users.every(user => user instanceof User));
    console.log("All users:", JSON.stringify(users, null, 2));
    //Select using attributes
    //SELECT 'name' FROM users WHERE user.id = 2;
    const usersWithAttributes = await User.findAll({
      attributes: ['name'],
      where: { id: 2 }
    });
    console.log(users.every(user => usersWithAttributes instanceof User));
    console.log("All users:", JSON.stringify(usersWithAttributes, null, 2));

    //UPDATE
    change the name of user.id 2 to Ben
    await User.update({ name: 'Ben' }, {
      where: {
        id: 2
      }
    });

    //DELETE
    await User.destroy({
      where: {
        id: {
            [Op.gt]: 2
        }
      }
    });

    //Show the users again for demo purposes --same as above--
    const usersFinal = await User.findAll();
    console.log(usersFinal.every(user => user instanceof User));
    console.log("All users:", JSON.stringify(usersFinal, null, 2));

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

test();