class Github {
  constructor () {
    this.client_id = '6a60d829f4d9c65577f0';
    this.client_secret = 'b32699b418edd0123a8958bf644627dbb54a1764';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser (user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
