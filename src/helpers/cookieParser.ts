export const parseCookie = () => {
  const jwtCookie = document.cookie;

  if (jwtCookie) {
    const [header, payload, signature] = jwtCookie.split(".");
    const decodedPayload = JSON.parse(atob(payload));

    return decodedPayload;
  }
};
