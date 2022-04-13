import { Note } from "types"

const onlyText = {
  id: "1",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. In ante metus dictum at tempor commodo. Sit amet aliquam id diam maecenas ultricies mi eget. Consectetur adipiscing elit pellentesque habitant morbi.",
  marks: {},
}

const textAndTitle = {
  id: "2",
  title: "Lorem ipsum dolor sit amet",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. In ante metus dictum at tempor commodo. Sit amet aliquam id diam maecenas ultricies mi eget. Consectetur adipiscing elit pellentesque habitant morbi.",
  marks: {},
}

const title = {
  id: "3",
  title: "Lorem ipsum dolor sit amet",
  marks: {},
}

const photoAndText = {
  id: "4",
  photoSrc: "https://the-chat-resources.vercel.app/photos/the-chat-logo.png",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. In ante metus dictum at tempor commodo. Sit amet aliquam id diam maecenas ultricies mi eget. Consectetur adipiscing elit pellentesque habitant morbi.",
  marks: {},
}

const photoTextTitle = {
  id: "5",
  photoSrc:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zTo7cffseGhNkheg80calAHaEK%26pid%3DApi&f=1",
  title: "Lorem ipsum dolor sit amet",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. In ante metus dictum at tempor commodo. Sit amet aliquam id diam maecenas ultricies mi eget. Consectetur adipiscing elit pellentesque habitant morbi.",
  marks: {
    location: "New York",
    tag: "Work",
  },
}

const vertPhotoTextTitle = {
  id: "6",
  photoSrc:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Lul3BkD1C0ysD3pY6ApmvQHaHa%26pid%3DApi&f=1",
  title: "Lorem ipsum dolor sit amet",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. In ante metus dictum at tempor commodo. Sit amet aliquam id diam maecenas ultricies mi eget. Consectetur adipiscing elit pellentesque habitant morbi.",
  marks: {},
}

const placeholder: Note[] = [
  onlyText,
  title,
  photoAndText,
  photoTextTitle,
  textAndTitle,
  vertPhotoTextTitle,
]

export default placeholder
