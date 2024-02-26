import mongoose from "mongoose";

const silentPrayerSchema = mongoose.Schema({
  silentPrayer: {
    type: String,
    required: true,
  },
});

export default mongoose.model("SilentPrayer", silentPrayerSchema);
