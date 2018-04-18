declare module 'github-api' {
    export = GitHub;
    class GitHub {
        constructor(options: GitHubOptions);

        getUser(user: string): GitHubUser;
    }

    interface GitHubOptions {
        token: string;
    }

    class GitHubUser {
        listStarredRepos(): StarredRepos;
    }

    class StarredRepos {
        data: Repository[];
    }

    class Repository {
        full_name: string;
    }
}