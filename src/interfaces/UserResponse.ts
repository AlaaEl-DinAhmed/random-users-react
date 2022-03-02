import User from "./User";

interface UserResponse {
    results: User[],
    info: {
        page: number
    }
}

export default UserResponse;