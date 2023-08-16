const contentId = "98430";
const token =
  "ATATT3xFfGF0DzCdSFKp-Cp38g-N-21fAmrGqRukykO3c7x52ireATOR3QKuQobtfreTN51y45Mwe1DdShGkJpZ1VwvnrNE_tPQR0c5wcasQHm7iBXh4fHae9Vgrqyjaeu_gR6TKxkFC9spXSIJnP5eZZXszL-DFrZZMONlaqOQrWTCWeTCabrk=A1A5E86F";
const baseUrl = "https://dstnyengage.atlassian.net/wiki/rest/api";

const endpoint = `/content/${contentId}`;
const expandParam = "expand=space,metadata.labels";
const url = `${baseUrl}${endpoint}?${expandParam}`;

const headers = {
  Authorization: `Bearer ${token}`,
};

fetch(url, { headers })
  .then((response) => response.json())
  .then((data) => {
    console.log("Fetched data:", data);
    // Process the fetched data as needed
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
