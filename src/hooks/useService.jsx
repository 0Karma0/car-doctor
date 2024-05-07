import { useEffect, useState } from "react";


const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-theta.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return services;
};

export default useService;