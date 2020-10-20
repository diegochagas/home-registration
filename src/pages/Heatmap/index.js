import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import { fetchHome } from '../../store/modules/home/actions';
import HeatMap from '../../components/HeatMap';

function Heatmap() {
    const dispatch = useDispatch();
    const homes = useSelector(state => state.homes);
    const [heatmapPoints, setHeatmapPoints] = useState([]);

    useEffect(() => {
        async function getHomes() {
            await dispatch(fetchHome());
        }

        getHomes();
    }, [dispatch]);

    useEffect(() => {
        if (homes && homes.length > 0) {
            const points = [];
            
            for (let i = 0; i < homes.length; i++) {
                points.push({ lat: homes[i].latitude, lng: homes[i].longitude, value: homes[i].residents });
            }

            setHeatmapPoints(points);
        }
    }, [homes]);

    return (
        <Container>
            <h1>Heatmap</h1>

            <div className="heatmap-container">
                <HeatMap heatmapPoints={heatmapPoints} />
            </div>
        </Container>
    );
}

export default Heatmap;