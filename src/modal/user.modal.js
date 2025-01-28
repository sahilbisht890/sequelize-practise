import sequelize from "../db.js";
import { DataTypes, Op } from "sequelize";

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
});

export const findAllUser = async () => {
  try {
    const records = await User.findAll();
    console.log("All records", records);
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
        },
      },
      raw: true,
    });
    console.log('List fetched successfully');
    return userList;
  } catch (error) {
    console.log("Error while fetching the list", error);
  }
};

export default User;
