import http from "./httpService";
const apiEndpoint = "http://localhost:3000/api/crimePost";

// http.setJwt(getJwt());

export async function reportCrime(crime) {
    const ret = http.post(apiEndpoint, {
        type: crime.type,
        description: crime.description,
        area: crime.area,
        mobile_number: crime.mobile_number,
        victimOrWitness: crime.victimOrWitness,
        reportedPolice: crime.reportedPolice



    });

    return ret;
}