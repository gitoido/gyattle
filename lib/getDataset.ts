export function getDataset(length: number): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    switch (length) {
      case 2:
        return import('data/common/words-length-2')
          .then(({ wordsLength2 }) => {
            resolve(wordsLength2);
          })
          .catch((err) => {
            reject(err);
          });
      case 3:
        return import('data/common/words-length-3')
          .then(({ wordsLength3 }) => {
            resolve(wordsLength3);
          })
          .catch((err) => {
            reject(err);
          });
      case 4:
        return import('data/common/words-length-4')
          .then(({ wordsLength4 }) => {
            resolve(wordsLength4);
          })
          .catch((err) => {
            reject(err);
          });
      case 5:
        return import('data/common/words-length-5')
          .then(({ wordsLength5 }) => {
            resolve(wordsLength5);
          })
          .catch((err) => {
            reject(err);
          });
      case 6:
        return import('data/common/words-length-6')
          .then(({ wordsLength6 }) => {
            resolve(wordsLength6);
          })
          .catch((err) => {
            reject(err);
          });
      case 7:
        return import('data/common/words-length-7')
          .then(({ wordsLength7 }) => {
            resolve(wordsLength7);
          })
          .catch((err) => {
            reject(err);
          });
      case 8:
        return import('data/common/words-length-8')
          .then(({ wordsLength8 }) => {
            resolve(wordsLength8);
          })
          .catch((err) => {
            reject(err);
          });
      case 9:
        return import('data/common/words-length-9')
          .then(({ wordsLength9 }) => {
            resolve(wordsLength9);
          })
          .catch((err) => {
            reject(err);
          });
      case 10:
        return import('data/common/words-length-10')
          .then(({ wordsLength10 }) => {
            resolve(wordsLength10);
          })
          .catch((err) => {
            reject(err);
          });
      case 11:
        return import('data/common/words-length-11')
          .then(({ wordsLength11 }) => {
            resolve(wordsLength11);
          })
          .catch((err) => {
            reject(err);
          });
      case 12:
        return import('data/common/words-length-12')
          .then(({ wordsLength12 }) => {
            resolve(wordsLength12);
          })
          .catch((err) => {
            reject(err);
          });

      case 13:
        return import('data/common/words-length-13')
          .then(({ wordsLength13 }) => {
            resolve(wordsLength13);
          })
          .catch((err) => {
            reject(err);
          });
      case 14:
        return import('data/common/words-length-14')
          .then(({ wordsLength14 }) => {
            resolve(wordsLength14);
          })
          .catch((err) => {
            reject(err);
          });
      case 15:
        return import('data/common/words-length-15')
          .then(({ wordsLength15 }) => {
            resolve(wordsLength15);
          })
          .catch((err) => {
            reject(err);
          });
    }
  });
}
