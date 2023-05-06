import axios from "axios";

export default async function suscribeToNewsletter(email){
    const API = process.env.NEWSLETTER_SERVICE
    const apiURL = new URL(API)
    
    apiURL.searchParams.set("email",email)
    
    const suscribeEndpoint = apiURL.href
    const response = await axios.get(suscribeEndpoint)
    const {success} = await response.data
    
    if(success) return success

    throw new Error("Some Problem Occured while sending the email")
}