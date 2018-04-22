import GitHub = require('github-api');

console.log('start');

const gh = new GitHub();

const jlguenego = gh.getUser('jlguenego');
console.log('jlguenego', jlguenego);

(async () => {
    const profile = await jlguenego.getProfile();
    console.log('profile', profile);

    console.log('Full name', profile.data.name);
})();