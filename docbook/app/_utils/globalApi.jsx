import axios from 'axios';

// Fetch the API key from environment variables
const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

// Create an Axios instance with the base URL and authorization header
const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
});

// Define a function to fetch categories from the API



const getCategory = () => axiosClient.get('categories?populate=*');

const getDoctor = () => axiosClient.get('doctors?populate=*');

const getDoctorByName = (category) => axiosClient.get('doctors?filters[categories][Name][$in]='+category+'&populate=*');
// Export the getCategory function

const getDoctorsByID = (id) => axiosClient.get('/doctors/'+id+'?populate=*');

const BookingAppointment = (data) => axiosClient.post('/appointments/', data);

const BookHistories = (userEmail) => axiosClient.get('/appointments?filters[Email][$eq]=' +userEmail+'&populate[doctor][populate][Image][populate][0]=url&populate=*' )

const deleteBooking = (id) => axiosClient.delete('/appointments/' + id)

const sendEmail = (data) => axios.post('/api/SendEmail/', data);

export default {
    getCategory,
    getDoctor,
    getDoctorByName,
    getDoctorsByID,
    BookingAppointment,
    sendEmail,
    BookHistories,
    deleteBooking
};
