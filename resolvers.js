import { getJobs } from "./db/jobs.js"
import { getCompany } from "./db/companies.js"

export const resolvers = {
    Query: {
        jobs: () => getJobs(),
    },

    Job: {
        company: (job) => {
            return getCompany(job.companyId);
        },
        date: (job) => toIsoDate(job.createdAt),
    }
};

const toIsoDate = (value) => {
    return value.slice(0, 'yyy-mm-dd'.length);
}