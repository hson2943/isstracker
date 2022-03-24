import React from 'react';
import styles from './home.module.css';
import Map from '../../components/map/Map';
import Info from '../../components/info/Info';
import { fetchPastLocalHandle, fetchDataHandle } from '../../handleData/handleData'
class Home extends React.Component {
    state = {
        data: {},
        trace: []
    }
    async componentDidMount() {
        // const array = await fetchPastLocalHandle('3/22/2022/20/41');
        // this.setState({ trace: array });
        setInterval(() => {
            this.updateISS();
        }, 2000);
    }
    updateISS = async () => {
        const data = await fetchDataHandle();
        const { latitude, longitude } = await data;
        if (longitude === 180) {
            this.setState({ data, trace: null });
        } else
            this.setState({ data, trace: [...this.state.trace, [...[latitude, longitude]]] });

    }
    render() {
        const { data, trace } = this.state;
        return (
            <div className={styles.home} >
                <div className={styles.homeMap}>
                    <Map data={data} trace={trace} />
                </div>
                <div className={styles.homeInfo}>
                    <Info data={data} />
                </div>
            </div>
        )
    }
}
export default Home;

