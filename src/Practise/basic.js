import User from "../modal/user.modal.js";
import { where } from "sequelize";


const practiseBasic = async () => {
// below we learn , how i fetch the values and change attributes name

    // const userAgeTemp = await User.findOne({
    //     where : {
    //         firstname : "Sneha"
    //     },
    //     attributes:['firstname' , 'lastname',['age' , 'user_age']],
    //     raw: true
    // } ,);

    // console.log('Sneha age is ', userAgeTemp);

    // const new_user = await User.create({
    //   firstname: "demo",
    //   lastname: "user",
    //   age: 18,
    //   gender: "male",
    // });

    // console.log('output' , new_user.toJSON());

    // output
    // output {
    //     id: 51,
    //     firstname: 'demo',
    //     lastname: 'user',
    //     age: 18,
    //     gender: 'male',
    //     updatedAt: 2025-01-27T17:34:41.723Z,
    //     createdAt: 2025-01-27T17:34:41.723Z
    //   }

    // console.log("output", new_user);
    //output
    /* 
         {
  dataValues: {
    id: 52,
    firstname: 'demo',
    lastname: 'user',
    age: 18,
    gender: 'male',
    updatedAt: 2025-01-27T17:36:01.998Z,
    createdAt: 2025-01-27T17:36:01.998Z
  },
  _previousDataValues: {
    firstname: 'demo',
    lastname: 'user',
    age: 18,
    gender: 'male',
    id: 52,
    createdAt: 2025-01-27T17:36:01.998Z,
    updatedAt: 2025-01-27T17:36:01.998Z
  },
  uniqno: 1,
  _changed: Set(0) {},
  _options: {
    isNewRecord: true,
    _schema: null,  
    _schemaDelimiter: '',
    attributes: undefined,
    include: undefined,
    raw: undefined,
    silent: undefined
  },
  isNewRecord: false
}*/

    // await user.increment('age' , {by : 2});
    // await user.increment({'age' : 2});

    const userAge = await User.findOne({
        where : {
            firstname : "Sneha"
        },
        attributes:['age'],
        raw: true
    } ,);

    console.log('age' , userAge.age);
}

export default practiseBasic;