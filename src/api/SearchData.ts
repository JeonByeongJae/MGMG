import { CardListType } from "../components/decklist/CardList";

export function getCardDataWithName(name: string) {
  let xhr: XMLHttpRequest | null = null;

  const getXmlHttpRequestObject = () => {
    if (!xhr) {
      xhr = new XMLHttpRequest();
    }
    return xhr;
  };

  function dataCallback() {
    if (xhr?.readyState === 4 && xhr?.status === 200) {
      console.log("Card data received!");
    }
  }

  return new Promise<CardListType>((resolve, reject) => {
    console.log("Get card...");
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = dataCallback;
    xhr.open("GET", `https://api.scryfall.com/cards/named?exact=${name}`, true);

    xhr.onload = () => {
      if (xhr?.status === 200) {
        const jsonData = JSON.parse(xhr?.response);
        let dummyItem: CardListType = {
          name: jsonData.name,
          imageUri: jsonData.image_uris.small,
          scryfallUri: jsonData.scryfall_uri,
        };
        resolve(dummyItem);
      } else {
        console.log("ERROR with code:", xhr?.status);
      }
    };

    xhr.send(null);
  });
}
