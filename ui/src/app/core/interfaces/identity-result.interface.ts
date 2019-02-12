import { IdentityError } from './identity-error.interface';

export interface IdentityResult {
  errors: IdentityError[];
  succeeded: boolean;
}
