export interface ResetForgottenPasswordRequest {
  token: string;
  password: string;
  confirmPassword: string;
}
