import validator from "validator";

//! API for adding doctors
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    //? Checking for all fields to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "All fields are required" });
    }

    //? Validating email
    if(validator.isEmail(email)) {
        return res.json({success: false, message: "Invalid email format"});
    } 

  } catch (error) {}
};

export { addDoctor };
