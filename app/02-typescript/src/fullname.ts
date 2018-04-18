import GitHub = require('github-api');

console.log('start');

const gh = new GitHub({
    token: 'bd45521a2809ff942faeb3b9efab9411225f75ea'
});

const jlguenego = gh.getUser('jlguenego');
console.log('jlguenego', jlguenego);

(async () => {
    const profile = await jlguenego.getProfile();
    console.log('profile', profile);

    console.log('Full name', profile.data.name);
})();