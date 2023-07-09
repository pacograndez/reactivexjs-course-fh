import { GithubUser } from "./github-user.interfaces";

export interface GithubUsers {
  total_count: number;
  incomplete_results: boolean;
  items: GithubUser[];
}
