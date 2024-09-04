import mongoose from "mongoose";

const LandingPageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: String,
  template: { type: String, required: true },
  customizations: {
    theme: String,
    font: String,
    colors: {
      primary: String,
      secondary: String,
      background: String,
    },
  },
  content: {
    headline: String,
    subheadline: String,
    ctaText: String,
    // Add more content fields as needed
  },
  personalLink: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const LandingPage = mongoose.models.LandingPageSchema || mongoose.model("LandingPage", LandingPageSchema);

export default LandingPage;
