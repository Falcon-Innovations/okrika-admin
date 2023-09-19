import { authUrls } from "api/api-urls";
import { auth } from "api/clients/auth";
import { backendConfig } from "api/config";
import { SignUpUserRequest, AuthServerUserResponse } from "api/types";

function signup(data: Omit<SignUpUserRequest, 'password'> & { password?: string }) {
    data.password = String(Date.now());
    data.resourceNames = [backendConfig.name];
    return auth.post<AuthServerUserResponse>(authUrls.SIGNUP, data);
}
function token(data: SignUpUserRequest) {
    data.resourceNames = [backendConfig.name];
    return auth.post<AuthServerUserResponse>(authUrls.TOKEN, data);
}
export const authApis = {
    signup,
    token,
};
