import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your Name!"],
    minLength: [3, "Name must contain at least 3 Characters!"],
    maxLength: [30, "Name cannot exceed 30 Characters!"],
  },
  fathername: {
    type: String,
    required: [true, "Please enter your Father Name!"],
    minLength: [3, "Name must contain at least 3 Characters!"],
    maxLength: [30, "Name cannot exceed 30 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email!"],
    validate: [validator.isEmail, "Please provide a valid Email!"],
  },
  coverLetter: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter your Phone Number!"],
  },
  aphone: {
    type: Number,
  },
  wphone: {
    type: Number,
  },
  address: {
    type: String,
    required: [true, "Please enter your Address!"],
  },
  city: {
    type: String,
    required: [true, "Please enter your City!"],
  },
  state: {
    type: String,
    required: [true, "Please enter your State!"],
  },
  pincode: {
    type: String,
    required: [true, "Please enter your Pincode!"],
  },
  dateofbirth: {
    type: String,
    required: [true, "Please enter your Date of Birth!"],
  },
  gender: {
    type: String,
    required: [true, "Please enter your Gender!"],
  },
  category: {
    type: String,
    required: [true, "Please enter your Category!"],
  },
  maritalstatus: {
    type: String,
    required: [true, "Please enter your Marital Status!"],
  },
  higmarks: {
    type: String,
    required: [true, "Please enter your 10th Class Marks!"],
  },
  higyear: {
    type: Number,
    required: [true, "Please enter your 10th Class Year!"],
  },
  higboard: {
    type: String,
    required: [true, "Please enter your 10th Class Board!"],
  },
  higsubject: {
    type: String,
    required: [true, "Please enter your 10th Class Subject!"],
  },
  secmarks: {
    type: String,
  },
  secyear: {
    type: Number,
  },
  secboard: {
    type: String,
  },
  secsubject: {
    type: String,
  },
  qualificationname: {
    type: String,
    required: [true, "Please enter your Qualification Dgree/Diploma Name!"],
  },
  qualificationpercentage: {
    type: Number,
    required: [true, "Please enter your Qualification Percentage!"],
  },
  qualificationyear: {
    type: String,
    required: [true, "Please enter your Qualification Year!"],
  },
  qualificationuni: {
    type: String,
    required: [true, "Please enter your Qualification Universtiy/Institute Name!"],
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  applicantID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Job Seeker"],
      required: true,
    },
  },
  employerID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Employer"],
      required: true,
    },
  },
});

export const Application = mongoose.model("Application", applicationSchema);
