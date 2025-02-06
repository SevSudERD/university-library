export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Historical Fiction",
    rating: 4.7,
    total_copies: 18,
    available_copies: 9,
    description:
      "A young girl in Nazi Germany discovers the power of books and words as she navigates life during World War II.",
    color: "#2b2d42",
    cover: "https://m.media-amazon.com/images/I/81YbdjKaFjL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A young girl in Nazi Germany discovers the power of books and words as she navigates life during World War II.",
  },
  {
    id: 2,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology / Self-Help",
    rating: 4.8,
    total_copies: 40,
    available_copies: 25,
    description:
      "A deep dive into human decision-making and the two systems that drive our thinking: fast and intuitive vs. slow and deliberate.",
    color: "#f4e3c5",
    cover: "https://m.media-amazon.com/images/I/81YKbi3WG6L.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A deep dive into human decision-making and the two systems that drive our thinking: fast and intuitive vs. slow and deliberate.",
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    genre: "Computer Science / JavaScript",
    rating: 4.6,
    total_copies: 15,
    available_copies: 8,
    description:
      "A modern introduction to JavaScript, covering its fundamentals and advanced concepts through practical examples.",
    color: "#f0db4f",
    cover: "https://m.media-amazon.com/images/I/91asIC1fRwL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A modern introduction to JavaScript, covering its fundamentals and advanced concepts through practical examples.",
  },
  {
    id: 4,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History / Science",
    rating: 4.7,
    total_copies: 30,
    available_copies: 15,
    description:
      "An exploration of human history, from the evolution of early humans to the modern technological world.",
    color: "#c9a47f",
    cover: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "An exploration of human history, from the evolution of early humans to the modern technological world.",
  },
  {
    id: 5,
    title: "Essentialism: The Disciplined Pursuit of Less",
    author: "Greg McKeown",
    genre: "Self-Help / Productivity",
    rating: 4.6,
    total_copies: 20,
    available_copies: 12,
    description:
      "A guide to focusing on what truly matters by eliminating distractions and simplifying life.",
    color: "#ffffff",
    cover: "https://m.media-amazon.com/images/I/71eGjV2Lb2L.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A guide to focusing on what truly matters by eliminating distractions and simplifying life.",
  },
  {
    id: 6,
    title: "The Clean Coder",
    author: "Robert C. Martin",
    genre: "Computer Science / Software Engineering",
    rating: 4.7,
    total_copies: 35,
    available_copies: 20,
    description:
      "A guide for professional developers on writing clean, maintainable code and improving coding discipline.",
    color: "#262626",
    cover: "https://m.media-amazon.com/images/I/71kBRID6GHL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A guide for professional developers on writing clean, maintainable code and improving coding discipline.",
  },
  {
    id: 7,
    title: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler",
    genre: "Computer Science / Programming",
    rating: 4.9,
    total_copies: 22,
    available_copies: 10,
    description:
      "A comprehensive guide on refactoring existing code to improve its structure, maintainability, and performance.",
    color: "#1b1b1b",
    cover: "https://m.media-amazon.com/images/I/91ff1FsuU6L.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A comprehensive guide on refactoring existing code to improve its structure, maintainability, and performance.",
  },
  {
    id: 8,
    title: "Your Money or Your Life",
    author: "Vicki Robin, Joe Dominguez",
    genre: "Finance / Self-Help",
    rating: 4.7,
    total_copies: 18,
    available_copies: 7,
    description:
      "A guide to financial independence and achieving a meaningful life by changing your relationship with money.",
    color: "#f3c623",
    cover: "https://m.media-amazon.com/images/I/81d7EmyDkWL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A guide to financial independence and achieving a meaningful life by changing your relationship with money.",
  },
];
