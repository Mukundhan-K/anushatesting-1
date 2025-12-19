const { parsePhoneNumberFromString } = require("libphonenumber-js");

function validatePhone(phone) {
  if (!phone) return null;

  // Clean input
  const cleaned = phone.replace(/\D/g, "");

  // Normalize to E.164
  const normalized =
    cleaned.length === 10 ? `+91${cleaned}` :
    cleaned.startsWith("91") ? `+${cleaned}` :
    phone;

  const phoneNumber = parsePhoneNumberFromString(normalized, "IN");

  if (!phoneNumber) return null;

  const national = phoneNumber.nationalNumber;

  // 🇮🇳 India-specific validation (IMPORTANT)
  const isIndianMobile =
    phoneNumber.country === "IN" &&
    national.length === 10 &&
    /^[6-9]\d{9}$/.test(national);

  return {
    isValid: isIndianMobile, // ✅ USE THIS
    formatted: phoneNumber.formatInternational(),
    country: phoneNumber.country,
    e164: phoneNumber.number,
  };
}

module.exports = validatePhone;
