import getYouTubeID from "./index";

const testCases = [
  { id: "LdGZFfzHtCM", url: "http://www.youtube.com/watch?v=LdGZFfzHtCM&feature=feedrec_grec_index" },
  { id: "LdGZFfzHtCM", url: "http://www.youtube.com/v/LdGZFfzHtCM?fs=1&amp;hl=en_US&amp;rel=0" },
  { id: "LdGZFfzHtCM", url: "http://www.youtube.com/watch?v=LdGZFfzHtCM#t=0m10s" },
  { id: "LdGZFfzHtCM", url: "http://www.youtube.com/embed/LdGZFfzHtCM?rel=0" },
  { id: "LdGZFfzHtCM", url: "http://www.youtube.com/watch?v=LdGZFfzHtCM" },
  { id: "LdGZFfzHtCM", url: "http://youtu.be/LdGZFfzHtCM" },
  { id: "LdGZFfzHtCM", url: "http://www.youtube.com/v/LdGZFfzHtCM?fs=1&amp;hl=en_US&amp;rel=0" },
  { id: "LdGZFfzHtCM", url: "http://www.youtube.com/embed/LdGZFfzHtCM?rel=0" },
  { id: "LdGZFfzHtCM", url: "http://www.youtube.com/watch?v=LdGZFfzHtCM&feature=feedrec_grec_index" },
  { id: "LdGZFfzHtCM", url: "http://www.youtube.com/watch?v=LdGZFfzHtCM" },
  { id: "LdGZFfzHtCM", url: "http://youtu.be/LdGZFfzHtCM" },
  { id: "LdGZFfzHtCM", url: "http://www.youtube.com/watch?v=LdGZFfzHtCM#t=0m10s" }
];

describe("getYouTubeId", () => {
  it("should return null if url is not from youtube", () => {
    const youtubeID = getYouTubeID("https://www.google.com");
    expect(youtubeID).toBe(null);
  });
  it("should return null if a malformed youtube url", () => {
    const youtubeID = getYouTubeID("https://www.youtube.com/ss");
    expect(youtubeID).toBe(null);
  });

  it("should return id for correct url", () => {
    testCases.forEach((test) => {
      const youtubeID = getYouTubeID(test.url);
      expect(youtubeID).toBe(test.id);
    });
  });
});
