export interface PasswordResetRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
