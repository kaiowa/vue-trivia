export default {
  title: 'Title test',
  fixedHeader: false,
  sidebarLogo: false,
  APIURL:(process.env.NODE_ENV === 'development')? "http://localhost:8081/" :  "http://www.mydomain.com/api/"
};