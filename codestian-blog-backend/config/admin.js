module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '130b0f917503b208bfd39f84e2e26b53'),
  },
});
