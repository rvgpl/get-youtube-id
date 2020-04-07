const URLPatterns = [
  /youtu\.be\/([^#\&\?]{11})/, // youtu.be/<id>
  /\?v=([^#\&\?]{11})/, // ?v=<id>
  /\&v=([^#\&\?]{11})/, // &v=<id>
  /embed\/([^#\&\?]{11})/, // embed/<id>
  /\/v\/([^#\&\?]{11})/ // /v/<id>
];

const getYouTubeId = (url: string): null | string => {
  let youTubeID = null;
  //Make sure the url is from youtube
  if (/youtu\.?be/.test(url)) {
    URLPatterns.forEach((pattern) => {
      if (pattern.test(url)) {
        const exec = pattern.exec(url);
        youTubeID = exec ? exec[1] : null;
      }
    });
  }
  return youTubeID;
};

export default getYouTubeId;
