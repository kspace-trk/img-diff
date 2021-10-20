const looksSame = require('looks-same')

const main = async () => {
  await new Promise((resolve, reject) =>
    looksSame.createDiff(
      {
        reference: './img/01.png',
        current: './img/02.png',
        diff: './img/diff.png',
        highlightColor: '#ff00ff'
      },
      error => (error ? reject() : resolve())
    )
  )
}

main();
