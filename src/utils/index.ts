import bcrypt from "bcrypt";
import otp from "otp-generator";
export function HashPassword(password: string = "") {
  return new Promise(function (resolve, reject) {
    try {
      bcrypt.hash(password, 10, (error, hash) => {
        error && reject(error);
        resolve(hash);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function VerifyPassword(password: string = "", hpassword: string = "") {
  return new Promise(function (resolve, reject) {
    try {
      bcrypt.compare(password, hpassword, (error, match) => {
        error && reject(error);
        resolve(match);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function GenerateTagId(carNumber: string = "") {
  let carNo = carNumber.replace(" ", "");
  const unicode = otp.generate(6, {
    upperCaseAlphabets: true,
    specialChars: false,
  });
  return `${carNo}-${unicode}`.toUpperCase();
}
