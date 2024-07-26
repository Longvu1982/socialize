export interface Verification {
  status: string;
  strategy: string;
}

export interface EmailAddress {
  email_address: string;
  id: string;
  linked_to: A[];
  object: string;
  verification: Verification;
}

export enum ClerkUserActionType {
  Create = "user.created",
  Update = "user.updated",
  Delete = "user.deleted",
}

export interface UserData {
  birthday: string;
  created_at: number;
  email_addresses: EmailAddress[];
  external_accounts: A[];
  external_id: string;
  first_name: string;
  gender: string;
  id: string;
  image_url: string;
  last_name: string;
  last_sign_in_at: number;
  object: string;
  password_enabled: boolean;
  phone_numbers: A[];
  primary_email_address_id: string;
  primary_phone_number_id: string | null;
  primary_web3_wallet_id: string | null;
  private_metadata: Record<string, A>;
  profile_image_url: string;
  public_metadata: Record<string, A>;
  two_factor_enabled: boolean;
  unsafe_metadata: Record<string, A>;
  updated_at: number;
  username: string | null;
  web3_wallets: A[];
}

export interface Event {
  data: UserData;
  object: string;
  type: ClerkUserActionType;
}
