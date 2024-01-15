import axios from "axios";
import userData from "@/constants/data";

const getLatestRepos = async (data, token) => {
  try {
    const username = userData.githubUsername
    const token = process.env.GITHUB_TOKEN




    const headers = token ? { Authorization: `token ${token}` } : {};
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}&sort=pushed&order=desc`,
    { headers }
    );

 

    let repos = res.data.items;
    return repos.slice(0, 6);
  } catch (err) {
    console.error('Error fetching them repos', err);
    return []; // Returns an empty array just incase of error
  }
}

export default getLatestRepos