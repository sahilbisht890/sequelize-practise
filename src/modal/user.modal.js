import sequelize from "../db.js";
import { DataTypes, Op, fn, col } from "sequelize";

const User = sequelize.define("User", {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM("male", "female"),
    allowNull: false,
  },
  // way we use setter in sequelize
  // password : {
  //   type : DataTypes.STRING,
  //   set(value){
  //        this.setDataValue('password' ,hash_password);
  //   }
  // }
});

export const findAllUser = async () => {
  try {
    // to get the user list age wise
    // by default is in ascending order
    const records = await User.findAll({
      order: sequelize.col("age"),
      raw: true,
    });
    // const records = await User.findAll({order : [['age' , 'DESC']] , raw: true}); // in descending order

    return records;
  } catch (error) {
    console.log("Error while fetching data", error);
  }
};

export const addNewUser = async (data) => {
  try {
    const { firstname, lastname, age, gender } = data;
    if (!(firstname && lastname && age && gender)) {
      console.log("Some fields are missing!");
    }
    const new_user = await User.create(data);
    console.log("User created successfully", new_user);

    // const new_user = await User.build(data);
    // await new_user.save
  } catch (error) {
    console.log("Error while creating the user", error);
  }
};

export const updateField = async (match, updateField) => {
  try {
    const user = await User.update(updateField, {
      where: match,
    });

    //if there is single field , like age u want to update

    // const user = await User.findOne({where : match});
    // await user.age = updateField.age;
    // user.save();
    console.log("updated successfully");
  } catch (error) {
    console.log("Error while updating field");
  }
};

export const womenGreaterThen26 = async () => {
  try {
    const userList = await User.findAll({
      where: {
        gender: "female",
        age: {
          [Op.gt]: 26,
          // [Op.and]: [{ authorId: 12 }, { status: 'active' }],
          // [Op.or]: [12, 13],
        },
      },
      raw: true,
    });
    console.log("List fetched successfully");
    return userList;
  } catch (error) {
    console.log("Error while fetching the list", error);
  }
};

export const nameStartsWithAlphabet = async () => {
  try {
    const list = await User.findAll({
      where: {
        firstname: {
          [Op.startsWith]: "S",
        },
      },
    });
    return list;
  } catch (error) {
    console.log("Error while finding the list", error);
  }
};

export const deleteRecord = async () => {
  try {
    const removeData = await User.destroy({
      where: {
        firstName: "Pooja",
      },
    });

    // if no value match the condition , removeData will be 0

    if (removeData) {
      console.log("Record deleted successfully", removeData);
    } else {
      console.log("Record not found");
    }
  } catch (error) {
    console.log("Error while deleting a record", error);
  }
};

export const deleteAllRecord = async () => {
  try {
    await User.destroy({
      truncate: true,
    });
  } catch (error) {
    console.log("Error while deleting the record");
  }
};

export const findUserWithMaxAge = async () => {
  try {
    const user = await User.findOne({
      attributes: [[fn("max", col("age")), "max_age"]],
      raw: true,
    });
    return user;
  } catch (error) {

    console.log("Error while finding user with max age", error);
  }
};

export const paginationData = async (pageData) => {
  try {
    const { pageSize = 5, current = 1 } = pageData;
    const offset = (current - 1) * pageSize;
    const limit = pageSize;

    const paginatedData = await User.findAll({ offset, limit ,raw: true});
    return paginatedData;
  } catch (error) {
    console.log('Error while fetching the paginated Data' , error);
  }
};

export const womenMaxAge = async () => {
  try {
    const maxAge = await User.max('age' , {where  : {
      gender : 'female'
    }})
    return maxAge ;
  } catch (error) {
     console.log('Error' , error);
  }
}

export default User;
