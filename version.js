import { Octokit, App } from "https://cdn.skypack.dev/octokit";
const octokit = new Octokit({ });

try {
  const result = await octokit.request("GET /repos/{username}/{repo}/commits?sha={branch}&per_page=1&page=1", {
    username: "gamer4324",
    repo: "Lost",
    branch: "main"
  })

  // console.log(result.headers["link"].substring(result.headers["link"].length - 15,result.headers["link"].length - 15+2))
  export {result};

} catch (error) {
  console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
}