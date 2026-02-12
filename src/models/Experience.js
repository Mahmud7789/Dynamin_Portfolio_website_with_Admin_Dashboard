import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
    {
        company: String,
        position: String,
        duration: String,
        details: String,
        location: String,
        jobprofile: String,
    },
    { timestamps: true }
);
const Experience = mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);
export default Experience;
