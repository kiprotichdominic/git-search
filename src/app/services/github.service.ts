import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  private username = "kiprotichdominic";
  private client_id = "8e26eb4d93a1556cd333";
  private client_secret = "8321e9fd874a47ca4f74cb135d92cd6feba27a9c";

  constructor(private http: HttpClient) {
    console.log("Github service started");
  }
  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username+"?client_id=" );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" + this.username + "/repos"
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
}
