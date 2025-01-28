import sequelize from "./db.js";
import User, {
  findAllUser,
  addNewUser,
  updateField,
  womenGreaterThen26,
  nameStartsWithAlphabet,
  deleteRecord,
  findUserWithMaxAge,
  paginationData,
  womenMaxAge
} from "./modal/user.modal.js";
import dummyUsers from "./dummyData.js";
import practiseBasic from "./Practise/basic.js";

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

     
    //  await practiseBasic();
    // const list = await womenGreaterThen26();
    // console.log('List fetched' , list);
     
    // const list = await nameStartsWithAlphabet();
    // console.log('list fetched successfully' , list);

  //  const allRecords =  await findAllUser();
  //  console.log('Record fetched' , allRecords);

  // const user = await paginationData({current : 3 , pageSize : 8});
  // console.log('user ' , user);
  // console.log('total records', user.length);

  const max_age  = await womenMaxAge();
  console.log('Womens max age',max_age);

  } catch (error) {
    console.error("Error during initialization:", error);
    process.exit(1);
  }
};

main();
