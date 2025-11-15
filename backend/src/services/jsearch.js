import axios from "axios";

export async function getJSearchJobs(query = "") {
  try {
    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: { query: query, page: '1', num_pages: '1' },
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };

    const res = await axios.request(options);
    const jobs = res.data.data || [];

    return jobs.map(job => ({
      title: job.job_title,
      company: job.employer_name,
      location: job.job_city || job.job_country,
      url: job.job_apply_link
    }));
  } catch (error) {
    console.error("JSearch API error:", error.message);
    return [];
  }
}
