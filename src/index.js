import sequelize from "./db.js";
import User, { findAllUser, addNewUser , updateField } from "./modal/user.modal.js";
import dummyUsers from "./dummyData.js";
import { where } from "sequelize";

const main = async () => {
  try {
    await sequelize.sync();
    console.log("Database is connected and tables are synced.");
    
    // await  dummyUsers.map(async (data) => {
    //     await addNewUser(data);
    //   })

    // console.log("Dummy data added successfully.");

    // const users = await findAllUser();
    // console.log("Fetched users:", users);


    //updating the field

    // await updateField({firstname : "Sneha"} , {
    //       age : 45
    // });

    // const userAge = await User.findOne({
    //     where : {
    //         firstname : "Sneha"
    //     },
    //     attributes:['firstname' , 'lastname','age'],
    //     raw: true           
    // } ,);

    // console.log('Sneha age is ', userAge);


  } catch (error) {
    console.error("Error during initialization:", error);
    process.exit(1);
  }
};

main();
