export default {
  auth: (clientId, redirectUri, scopes) =>
    `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      '%20'
    )}&response_type=token&show_dialog=true`,
};
