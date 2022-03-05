module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dfd8b2295d687ae8e4c3dcaf2019e896'),
  },
});
