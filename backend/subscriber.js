import mongoose from "mongoose";

// Subscriber Schema
const SubscriberSchema = new mongoose.Schema({
  landingPageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LandingPage",
    required: true,
  },
  email: { type: String, required: true },
  name: String,
  subscribedAt: { type: Date, default: Date.now },
});

const Subscriber =
  mongoose.models.SubscriberSchema ||
  mongoose.model("Subscriber", SubscriberSchema);

export default Subscriber;
