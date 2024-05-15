
# Mern Book Store

This project involves leveraging the MERN stack to build a dynamic website dedicated to facilitating the buying and selling of books. It boasts an intuitive admin feature that empowers users to effortlessly manage, edit, upload, and delete books through a streamlined admin dashboard. Furthermore, the site offers robust authentication and login capabilities, seamlessly integrating Google Sign-In via Firebase for an enhanced user experience.




## Website Preview
## Features of the Project

- **User Interface:**
  - Users can peruse available books within the store.
  - The interface features a sliding mechanism for effortless book browsing.
  - Additional books are accessible by clicking on the shop section.
  - Prior to accessing the website, users are required to log in.
  - New users have the option to sign up for an account.
  - The interface incorporates Firebase authentication, including Google Sign-In functionality.

  - **Admin Interface:**
  - Access to the admin dashboard requires users to first create an account by signing up or logging in with existing credentials.
  - Within the admin dashboard, users can efficiently manage books by editing their details.
  - Each book includes essential information such as the book title, author, description, URL of the book image, and URL of the book PDF.
  - Users have the capability to edit these details for existing books.
  - Additionally, users can upload new books or delete existing ones.
  - Logout functionality is conveniently available within the dashboard interface.
## Tech Stack

- **MongoDB:**
  - In this project, MongoDB serves as the database management system. It stores various data related to the books available on the platform, such as book titles, authors, descriptions, image URLs, and PDF URLs. MongoDB's flexibility allows for storing this data without a fixed schema, accommodating the diverse nature of book information.

- **React:**
  - React is utilized for building the frontend of the book marketplace website. It enables the creation of interactive user interfaces, allowing users to seamlessly browse through available books, view book details, and interact with the platform's features. React's component-based architecture facilitates the development of reusable UI components, ensuring consistency and efficiency across the website.

- **Node.js:**
  - Node.js powers the backend of the project, handling server-side logic and communication with the database. It enables the implementation of features such as user authentication, book management, and API endpoints for frontend-backend interaction. Node.js's event-driven, non-blocking I/O model ensures the efficient handling of concurrent operations, making the website responsive and scalable.

- **Express:**
  - Express complements Node.js by providing a minimalist web framework for building server-side applications and APIs. In this project, Express is used to define routes, middleware, and other backend functionalities. It simplifies the process of handling HTTP requests, processing data, and generating responses. Express's lightweight nature and extensive middleware ecosystem streamline backend development, accelerating the creation of a robust backend infrastructure for the book marketplace.
## Contribute to the Project

- Take a look at the existing [Issues]<!--(https://github.com/Simandhar14/mern-book-store)--> or [create a new issue]<!--(https://github.com/Simandhar14/mern-book-store/issues/new/choose)-->!
- [Fork the Repo]<!--(https://github.com/Simandhar14/mern-book-store/fork)-->, create a branch for any issue that you are working on and commit your work.
- Create a **[Pull Request]<!--(https://github.com/Simandhar14/mern-book-store/compare)-->** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes that are included in your commits.
## How to Contribute ?

**1.** Start by making a fork of the [**Mern-Book-Store**]<!--(https://github.com/Simandhar14/mern-book-store)--> repository. Click on the fork  symbol at the top right corner.

**2.** Clone your new fork of the repository:

```bash
git clone https://github.com/<your-github-username>/mern-book-store
```

**3.** Set upstream command:

```bash
git remote add upstream https://github.com/Simandhar14/mern-book-store.git
```

**4.** Navigate to the new project directory:

```bash
cd mern-book-store
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**6.** Sync your fork or local repository with the origin repository:

- In your forked repository click on "Fetch upstream"
- Click "Fetch and merge".

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**7.** Make your changes to the source code.

**8.** Stage your changes and commit:

```bash
git add .
```

```bash
git commit -m "<your_commit_message>"
```

**9.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**10.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**11.** **Congratulations!** You've made your first contribution! 🙌🏼