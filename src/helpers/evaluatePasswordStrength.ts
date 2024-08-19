export function evaluatePasswordStrength(password: string): string {
  let score = 0;

  if (!password) return '';
  if (password.length > 8) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  switch (score) {
    case 0:
    case 1:
    case 2:
      return 'weak';
    case 3:
      return 'medium';
    case 4:
    case 5:
      return 'strong';
    default:
      return 'Weak';
  }
}
