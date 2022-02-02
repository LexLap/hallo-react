
export const getJobsPopularity = async () => {

    try {
        const url = 'http://127.0.0.1:4000/db-query/jobs-popularity'
        const response = await fetch(url)
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error)
        return null
    }
}

export const getAvgSalaries = async () => {

    try {
        const url = 'http://127.0.0.1:4000/db-query/avg-salaries'
        const response = await fetch(url)
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error)
        return null
    }
}

export const getHighestSalary = async (job) => {

    try {
        const url = `http://127.0.0.1:4000/db-query/highest-salary?job=${job}`
        const response = await fetch(url)
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error)
        return null
    }
}
