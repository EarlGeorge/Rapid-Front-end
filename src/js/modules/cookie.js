export default class Cookie {
    createCookie = () => {
      const expDate = new Date();
      expDate.setTime(expDate.getTime() + (3000000 * 24 * 60));
    }
}
