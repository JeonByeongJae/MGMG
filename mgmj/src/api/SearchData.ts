export interface CardData {
  name: string;
  imageUri: string;
}

export function searchData() {
  let xhr: XMLHttpRequest | null = null;
  let tempArr: CardData[] = [];

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

  return new Promise<CardData[]>((resolve, reject) => {
    console.log("Get card...");
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = dataCallback;
    xhr.open(
      "GET",
      "https://api.scryfall.com/cards/named?fuzzy=craterhoof",
      true
    );

    xhr.onload = () => {
      if (xhr?.status === 200) {
        const jsonData = JSON.parse(xhr?.response);

        let dummyItem: CardData = {
          name: jsonData.name,
          imageUri: jsonData.image_uris.small,
        };

        tempArr.push(dummyItem);
        resolve(tempArr);
      } else {
        console.log("ERROR with code:", xhr?.status);
      }
    };

    xhr.send(null);
  });
}
