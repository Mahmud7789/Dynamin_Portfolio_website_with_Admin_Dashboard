import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema(
    {
        institution: String,
        degree: String,
        fieldofstudy: String,
        startyear: String,
        endyear: String,
        grade: String,
    },
    { timestamps: true }
);
const Education = mongoose.models.Education || mongoose.model("Education", EducationSchema);
export default Education;