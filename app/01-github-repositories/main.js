const GitHub = require('github-api');

const gh = new GitHub();

const jlguenego = gh.getUser('jlguenego');
(async () => {
    const repos = await jlguenego.listStarredRepos();
    console.log('Here is the list of all the repos I have starred:');
    repos.data.forEach(r => console.log('name:', r.full_name));
})();
