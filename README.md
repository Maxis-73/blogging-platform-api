
# Blogging Platform API

Project from [roadmap.sh](https://roadmap.sh/projects/blogging-platform-api)

### Notes 
    1. You need to have TypeScript and Nodemon installed, in my case I've them installed globally.
    2. MySQL Code included.

### Instructions
    1. Clone the repository: git clone https://github.com/Maxis-73/blogging-platform-api.git
    2. Open the project folder and install dependencies with npm install
    3. Modify the database credentials in the database.ts file or add a .env file
    4. Run the project with npm start


### Examples
    1. Get all posts: http://localhost:3000/posts
    2. Get a post by id: http://localhost:3000/posts/1
    3. Delete a post: http://localhost:3000/posts/1
    4. Create a post: http://localhost:3000/posts
        Body:
        {
            "title": "Test",
            "content": "Lorem Ipsum",
            "category": "Technology",
            "tags": "Tech, Development"
        }
    5. Update a post: http://localhost:3000/posts/1
        Body:
        {
            "title": "Test",
            "content": "Lorem Ipsum",
            "category": "Technology",
            "tags": "Tech, Development"
        }
