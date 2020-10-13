import User from "../userModel.js";

export const register = async (req, res) => {
  try {
    const createdUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({
      success: true,
      user: createdUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to create a user",
    });
  }
};

export const find = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users: users,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to find users",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findOneAndDelete({ _id: req.params.userId });
    res.status(200).json({
      success: "Deleted user successfully",
      user: deleteUser,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to delete user",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to update users",
    });
  }
};
