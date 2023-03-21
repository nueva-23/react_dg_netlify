const posts = [
  {
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "the cookies for today are...",
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Peanut butter is great",
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "The most amazing deseart... peanut or coconut",
  },
  {
    id: 4,
    title: "My Fourth Post - peanut",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "What is beaking",
  },
];

const search = "3";
const id = "2";
const find_ArrayToValue = posts.find((post) => post.id.toString() === id); //find returns Array
console.log(find_ArrayToValue);

const filter_ArrayToArray = posts.filter((post) => post.id.toString() !== id); //filter returns Object {}
console.log(filter_ArrayToArray);

const filteredResults = posts.filter(
  (post) =>
    post.body.toLowerCase().includes(search.toLowerCase()) ||
    post.title.toLowerCase().includes(search.toLowerCase())
);

const f1 = posts.filter(
  (post) =>
    post.body.toLowerCase().includes(search.toLowerCase()) ||
    post.title.toLowerCase().includes(search.toLowerCase())
);

console.log(f1);
const q2 = filteredResults.reverse();
console.log(q2);
// const q3 = posts[3]
// console.log(q3)
// const q4 = posts.length
// console.log(q4)

const id2 = "2";

const post = posts.find((post) => post.id.toString() === id2);
// console.log(post);

const postTitle = "my 7th post";
const postBody = "the body of 7th post";
const sliceString = postBody.slice(0, 7);
console.log(sliceString);

const id3 = posts.length ? posts[posts.length - 1].id + 1 : 1;
const datetime = "July 01, 2021 11:17:36 AM";
const newPost = { id3, title: postTitle, datetime, body: postBody }; // const 값을 Object 에 넣으면 key, value 쌍으로 변환됨
console.log(newPost);
