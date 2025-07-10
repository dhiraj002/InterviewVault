import mongoose, { Schema, Document } from "mongoose";
export interface ShareExperienceForm extends Document {
    title: string;
    examType: string;
    year: string;
    location: string;
    outcome: string;
    summary: string;
    detailedExperience: string;
    preparationTips: string;
    questionsAsked: string;
    advice: string;
    tags?: string[];
}

const shareExperienceSchema: Schema<ShareExperienceForm> = new Schema({
    title: { type: String, required: true },
    examType: { type: String, required: true },
    year: { type: String, required: true },
    location: { type: String, required: true },
    outcome: { type: String, required: true },
    summary: { type: String, required: true },
    detailedExperience: { type: String, required: true },
    preparationTips: { type: String, required: true },
    questionsAsked: { type: String, required: true },
    advice: { type: String, required: true },
    tags: { type: [String], required: true },
});
const ShareExperience = mongoose.models.ShareExperience || mongoose.model<ShareExperienceForm>("ShareExperience", shareExperienceSchema);
export default ShareExperience;
