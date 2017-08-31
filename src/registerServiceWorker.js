export default () => {
  if('serviceWorker' in navigator) {
    navigator
      .serviceWorker
      .register('/media-catalogue/sw.js').then(function(e) {
        console.log('service worker registered')
      }).catch(function(e) {
        console.log('service worker registration failed with error: ', e);
      })
  } else {
    console.log('service worker not supported');
  }
}

