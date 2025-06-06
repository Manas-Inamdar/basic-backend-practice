
require('dotenv').config()
const express = require('express')
const app = express()
const port =process.env.PORT || 3000

const githubData={
  "login": "Manas-Inamdar",
  "id": 143736752,
  "node_id": "U_kgDOCJE_sA",
  "avatar_url": "https://avatars.githubusercontent.com/u/143736752?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Manas-Inamdar",
  "html_url": "https://github.com/Manas-Inamdar",
  "followers_url": "https://api.github.com/users/Manas-Inamdar/followers",
  "following_url": "https://api.github.com/users/Manas-Inamdar/following{/other_user}",
  "gists_url": "https://api.github.com/users/Manas-Inamdar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Manas-Inamdar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Manas-Inamdar/subscriptions",
  "organizations_url": "https://api.github.com/users/Manas-Inamdar/orgs",
  "repos_url": "https://api.github.com/users/Manas-Inamdar/repos",
  "events_url": "https://api.github.com/users/Manas-Inamdar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Manas-Inamdar/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-08-31T16:06:11Z",
  "updated_at": "2025-06-06T18:27:07Z"
}

app.get('/', (req, res) => {
  res.send('Hello Worldsss')
})

app.get('/twitter', (req, res) => {
  res.send('I am on twitter')
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur Code</h2>")
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
