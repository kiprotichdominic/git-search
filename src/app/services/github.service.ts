import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  private username = "kiprotichdominic";

  constructor(private http: HttpClient) {
    console.log("Github service started");
  }
  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username);
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" + this.username + "/repos"
    );
  }
}
