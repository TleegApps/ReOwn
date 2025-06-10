// Generate a unique referral code for users
export const generateReferralCode = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'RWN';
  
  // Add 5 random characters
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return result;
};

// Validate referral code format
export const validateReferralCode = (code: string): boolean => {
  // Should start with RWN and be 8 characters total
  const regex = /^RWN[A-Z0-9]{5}$/;
  return regex.test(code);
};