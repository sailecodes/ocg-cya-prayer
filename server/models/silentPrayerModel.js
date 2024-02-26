import mongoose from "mongoose";

const silentPrayerModelSchema = mongoose.Schema({
  silentPrayer: {
    type: String,
    required: true,
  },
});

export default mongoose.model("SilentPrayerModel", silentPrayerModelSchema);
