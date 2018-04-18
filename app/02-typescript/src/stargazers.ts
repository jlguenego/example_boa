import GitHub = require('github-api');

console.log('start');

const gh = new GitHub({
    token: 'bd45521a2809ff942faeb3b9efab9411225f75ea'
});

console.log('ghx', gh);

const jlguenego = gh.getUser('jlguenego');
(async () => {
    const repos = await jlguenego.listStarredRepos();
    console.log('Here is the list of all the repos I have starred:');
    repos.data.forEach(r => console.log('name:', r.full_name));
})();