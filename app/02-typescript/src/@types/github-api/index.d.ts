declare module 'github-api' {
    export = GitHub;
    class GitHub {
        constructor(options: GitHubOptions);

        getUser(user: string): Requestable;
    }

    interface GitHubOptions {
        token: string;
    }

    class StarredRepos {
        data: Repository[];
    }

    class Repository {
        full_name: string;
    }

    class User extends Requestable { }

    class Requestable {
        constructor(username: string, auth: string, apiBase: string);
        createRepo(options: Object, cb?: Function): void;
        follow(username: string, cb?: Function): void;
        getEmails(cb?: Function): any[];
        getProfile(cb?: Function): any;
        listGists(cb?: Function): any;
        listNotifications(options: Object, cb?: Function): any;
        listOrgs(cb?: Function): any;
        listRepos(options: Object, cb?: Function): any;
        listStarredRepos(cb?: Function): any;
        unfollow(username: string, cb?: Function): any;
    }

    interface UserProfileResponse {
        data: UserProfile;

    }

    interface UserProfile {
        avatar_url: string;
        bio: string;
        blog: string;
        collaborators: number;
        company: string;
        created_at: string;
        disk_usage: number;
        email: string;
        events_url: string;
        followers: number;
        followers_url: string;
        following: number;
        following_url: string;
        gists_url: string;
        gravatar_id: string;
        hireable: Object;
        html_url: string;
        id: number;
        location: string;
        login: string;
        name: string;
        organizations_url: string;
        owned_private_repos: number;
        plan: Object;
        private_gists: number;
        public_gists: number;
        public_repos: number;
        received_events_url: string;
        repos_url: string;
        site_admin: boolean;
        starred_url: string;
        subscriptions_url: string;
        total_private_repos: number;
        two_factor_authentication: boolean;
        type: string;
        updated_at: string;
        url: string;
    }
}