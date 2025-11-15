import axios from "axios";

export async function getRemotiveJobs(query = "") {
  try {
    const url = `https://remotive.com/api/remote-jobs?search=${query}`;
    const res = await axios.get(url);

    const jobs = res.data.jobs || [];

    return jobs.map(job => ({
      title: job.title,
      company: job.company_name,
      location: job.candidate_required_location,
      url: job.url
    }));
  } catch (error) {
    console.error("Remotive API error:", error.message);
    return [];
  }
}
