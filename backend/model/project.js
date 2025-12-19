const mongoose = require("mongoose");

/* Sub-schema for Features & Transport */
const labelValueSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true
    },
    value: {
      type: String,
      required: true,
      trim: true
    }
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    projectType: {
      type: String,
      required: true
    },
    commencementDate: {
      type: Date,
      required: true
    },
    priceRange: {
      type: String
    },
    specialFeatures: {
      type: String
    },

    amenities: {
      type: String
    },
    features: {
      type: [labelValueSchema],
      default: []
    },
    video: {
      type: String
    },
    mapLink: {
      type: String
    },
    location: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    keyTransport: {
      type: [labelValueSchema],
      default: []
    },
    images: {
      type: [String],
      validate: {
        validator: v => v.length >= 1 && v.length <= 4,
        message: "Images must be between 1 and 4"
      }
    },
    numberOfFloors: {
      type: Number
    },

    projectArea: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;