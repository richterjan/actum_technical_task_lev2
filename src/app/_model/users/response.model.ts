import {User} from "./users.model";

export interface UserResponse {
  total_count: number;
  incomplete_results: boolean;
  items: User[]
}
