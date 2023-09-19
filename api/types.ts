export type SignUpUserRequest = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone?: string,
    picture?: string,
    resourceNames?: string[],
};
export type AuthServerUser = {
    email:	string,
    firstName:	string,
    lastName: string,
    phone?: string,
    picture: string,
    createdAt: number,
    updatedAt: number,
    emailVerifiedAt?: number,
    emailVerificationId?: string,
    passwordResetId?: string,
    passwordResetAt?: number,
};
export type JwtResponse = {
    accessToken: string;
    expiresIn: number;
    refreshToken?: string;
};

export type AuthServerUserResponse = {
    user?: AuthServerUser,
    authResponse: Record<string, JwtResponse>,
    subscriptions?: Record<string, boolean>,
}

